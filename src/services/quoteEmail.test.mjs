import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sendQuoteEmail } from './quoteEmail.js'

const settings = { serviceId: 'service_test', templateId: 'template_test', publicKey: 'public_test' }
const draft = { name: 'Ana', replyTo: 'ana@empresa.cl', subject: 'Cotización', message: 'Hola, necesito un sitio.' }

test('sin configuración no intenta enviar', async (context) => {
  const request = context.mock.method(globalThis, 'fetch', async () => ({ ok: true }))
  await assert.rejects(sendQuoteEmail(draft, {}), /no está habilitado/)
  assert.equal(request.mock.callCount(), 0)
})

test('envía el correo de contacto como Reply-To sin suplantar From ni definir un destinatario arbitrario', async (context) => {
  context.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.emailjs.com/api/v1.0/email/send')
    assert.equal(options.method, 'POST')
    const payload = JSON.parse(options.body)
    assert.equal(payload.service_id, settings.serviceId)
    assert.equal(payload.template_id, settings.templateId)
    assert.equal(payload.user_id, settings.publicKey)
    assert.deepEqual(payload.template_params, {
      from_name: draft.name, reply_to: draft.replyTo, subject: draft.subject, message: draft.message,
    })
    return { ok: true }
  })
  await sendQuoteEmail(draft, settings)
})

test('un error del proveedor no se informa como envío exitoso', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => ({ ok: false, status: 422 }))
  await assert.rejects(sendQuoteEmail(draft, settings), /no pudo enviar/)
})

test('el límite de envíos se explica para evitar reintentos inmediatos', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => ({ ok: false, status: 429 }))
  await assert.rejects(sendQuoteEmail(draft, settings), /límite de envíos/)
})
