import { test } from 'node:test'
import assert from 'node:assert/strict'
import { servicePages } from './servicePages.js'
import { plans } from './pricingData.js'
import { renderServicePage, serviceSchema } from './servicePageMarkup.js'

test('el contenido de las páginas se escapa antes de incluirlo en HTML', () => {
  const html = renderServicePage({
    ...servicePages[0],
    title: '<img src=x onerror=alert(1)>',
    description: 'Un servicio <script>alert(1)</script>',
    faq: [{ question: '<button>Haz clic</button>', answer: '<iframe src="https://example.com"></iframe>' }],
  })
  assert.ok(!html.includes('<img src=x'))
  assert.ok(!html.includes('<script>alert(1)'))
  assert.ok(!html.includes('<iframe'))
  assert.ok(html.includes('&lt;img'))
  assert.ok(html.includes('&lt;button&gt;'))
})

test('las páginas de servicio apuntan a planes existentes sin valores contradictorios', () => {
  const ids = new Set(plans.map(plan => plan.id))
  assert.equal(new Set(servicePages.map(service => service.slug)).size, servicePages.length)
  for (const service of servicePages) {
    assert.match(service.slug, /^[a-z0-9-]+$/)
    for (const planId of service.planIds) assert.ok(ids.has(planId))
  }
  for (const plan of plans) assert.equal(plan.amount, plan.breakdown.reduce((sum, item) => sum + item.amount, 0))
})

test('el esquema del servicio es JSON válido y coincide con su URL canónica', () => {
  for (const service of servicePages) {
    const schema = JSON.parse(JSON.stringify(serviceSchema(service)))
    assert.equal(schema.name, service.service)
    assert.equal(schema.url, `https://ayd-digital.cl/servicios/${service.slug}/`)
    assert.equal(schema.provider['@id'], 'https://ayd-digital.cl/#organization')
  }
})
