import { useRef, useState } from 'react'
import { ArrowUpRight, Check, Mail, Send, Sparkles, X } from 'lucide-react'
import { brand, budgetOptions, createWhatsAppUrl, quoteServices } from '../data/siteData'
import { isQuoteEmailConfigured, sendQuoteEmail } from '../services/quoteEmail'

const initialState = (service, plan) => ({
  name: '',
  company: '',
  email: '',
  whatsapp: '',
  service: service || '',
  budget: '',
  description: '',
  plan: plan || '',
  preferredContact: 'email',
})

function QuoteForm({ initialService, initialPlan }) {
  const [formData, setFormData] = useState(() => initialState(initialService, initialPlan))
  const [statusMessage, setStatusMessage] = useState('')
  const composerRef = useRef(null)
  const [draft, setDraft] = useState({ from: '', subject: '', message: '' })
  const [emailStatus, setEmailStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const sendingRef = useRef(false)
  const emailConfigured = isQuoteEmailConfigured()

  const handleChange = (event) => {
    const { name, value } = event.target
    setStatusMessage('')
    setFormData((previous) => ({ ...previous, [name]: value, ...(name === 'service' ? { plan: '' } : {}) }))
  }

  const buildQuoteMessage = () => [
    `Hola ${brand.name}:`,
    '',
    'Quisiera solicitar una cotización. Comparto los detalles de mi proyecto:',
    '',
    'DATOS DE CONTACTO',
    `Nombre: ${formData.name.trim()}`,
    ...(formData.company.trim() ? [`Empresa: ${formData.company.trim()}`] : []),
    ...(formData.email.trim() ? [`Correo: ${formData.email.trim()}`] : []),
    ...(formData.whatsapp.trim() ? [`WhatsApp: ${formData.whatsapp.trim()}`] : []),
    `Canal de contacto preferido: ${formData.preferredContact === 'email' ? 'Correo' : 'WhatsApp'}`,
    '',
    'DETALLES DEL PROYECTO',
    `Servicio requerido: ${formData.service}`,
    ...(formData.plan ? [`Plan de interés: ${formData.plan}`] : []),
    `Presupuesto estimado: ${formData.budget || 'Por definir'}`,
    '',
    'Descripción:',
    formData.description.trim(),
    '',
    'Quedo atenta a sus comentarios.',
    '',
    formData.name.trim(),
  ].join('\r\n')

  const emailSubject = `Cotización: ${formData.service || 'nuevo proyecto'}`

  const buildEmailMessage = () => [
    `Hola, equipo de ${brand.name}:`,
    '',
    `Mi nombre es ${formData.name.trim()}${formData.company.trim() ? `, de ${formData.company.trim()}` : ''}. Me gustaría cotizar el siguiente proyecto:`,
    '',
    `Servicio: ${formData.service}`,
    ...(formData.plan ? [`Plan de interés: ${formData.plan}`] : []),
    `Presupuesto estimado: ${formData.budget || 'Por definir'}`,
    '',
    formData.description.trim(),
    '',
    'Pueden contactarme a través de:',
    `Correo: ${formData.email.trim()}`,
    ...(formData.whatsapp.trim() ? [`WhatsApp: ${formData.whatsapp.trim()}`] : []),
    '',
    'Gracias por su tiempo. Quedo pendiente de su respuesta.',
    formData.name.trim(),
  ].join('\n')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.preferredContact === 'email') {
      openComposer(event)
      return
    }

    const whatsappUrl = createWhatsAppUrl(buildQuoteMessage())
    const whatsappWindow = window.open(whatsappUrl, '_blank')

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl)
    } else {
      whatsappWindow.opener = null
    }

    setStatusMessage('WhatsApp se abrió con tu mensaje preparado. Revísalo y pulsa “Enviar” en WhatsApp para completar la solicitud.')
  }

  const openComposer = (event) => {
    if (!(event.currentTarget.form || event.currentTarget).reportValidity()) return
    setDraft({ from: formData.email.trim(), subject: emailSubject, message: buildEmailMessage() })
    setEmailStatus({ type: '', message: '' })
    composerRef.current.showModal()
  }

  const handleDraftChange = (event) => {
    const { name, value } = event.target
    setEmailStatus({ type: '', message: '' })
    setDraft((previous) => ({ ...previous, [name]: value }))
  }

  const handleEmailSend = async (event) => {
    event.preventDefault()
    if (sendingRef.current || emailStatus.type === 'success') return
    sendingRef.current = true
    setIsSending(true)
    setEmailStatus({ type: '', message: '' })
    try {
      await sendQuoteEmail({
        name: formData.name.trim(),
        replyTo: draft.from.trim(),
        subject: draft.subject.trim(),
        message: draft.message.trim(),
      })
      const confirmation = `Tu solicitud fue enviada a ${brand.email}. Responderemos a ${draft.from.trim()}.`
      setEmailStatus({ type: 'success', message: confirmation })
      setStatusMessage(confirmation)
    } catch (error) {
      const message = error.name === 'TimeoutError'
        ? 'El servicio tardó en responder. No pudimos confirmar el envío; espera antes de volver a intentar.'
        : error instanceof TypeError
          ? 'No pudimos confirmar el envío. Revisa tu conexión y espera antes de volver a intentar.'
          : error.message
      setEmailStatus({ type: 'error', message })
    } finally {
      sendingRef.current = false
      setIsSending(false)
    }
  }

  return (
    <div className="quote-form-card">
      <div className="form-heading">
        <span className="form-icon"><Sparkles size={18} aria-hidden="true" /></span>
        <div>
          <p>Cuéntanos tu idea</p>
          <h3>Solicita una cotización</h3>
        </div>
      </div>

      {formData.plan && <p className="quote-plan-selection"><Check size={15} aria-hidden="true" />Plan de interés: {formData.plan}</p>}

      <form className="quote-form" onSubmit={handleSubmit}>
        <fieldset className="quote-contact-choice">
          <legend>¿Cómo prefieres contactarnos?</legend>
          <label><input type="radio" name="preferredContact" value="email" checked={formData.preferredContact === 'email'} onChange={handleChange} /><Mail size={16} aria-hidden="true" /><span>Por correo</span></label>
          <label><input type="radio" name="preferredContact" value="whatsapp" checked={formData.preferredContact === 'whatsapp'} onChange={handleChange} /><Send size={16} aria-hidden="true" /><span>Por WhatsApp</span></label>
        </fieldset>
        <div className="form-grid">
          <label className="form-field">
            <span>Nombre <b aria-hidden="true">*</b></span>
            <input autoComplete="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
          </label>
          {formData.preferredContact === 'email' ? <label className="form-field">
            <span>Correo electrónico <b aria-hidden="true">*</b></span>
            <input autoComplete="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.cl" required />
          </label> : <label className="form-field">
            <span>WhatsApp <b aria-hidden="true">*</b></span>
            <input
              autoComplete="tel"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              pattern="[0-9+\s\(\)\-]{8,20}"
              title="Ingresa un número de teléfono válido."
              required
            />
          </label>}
          <label className="form-field">
            <span>Servicio requerido <b aria-hidden="true">*</b></span>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Selecciona un servicio</option>
              {quoteServices.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
          </label>
        </div>

        <label className="form-field">
          <span>Descripción del proyecto <b aria-hidden="true">*</b></span>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Cuéntanos qué necesitas, a quién va dirigido y qué te gustaría lograr."
            required
          />
        </label>

        <details className="quote-optional-details">
          <summary>Agregar empresa o presupuesto <span>Opcional</span></summary>
          <div className="form-grid">
            <label className="form-field"><span>Empresa</span><input autoComplete="organization" name="company" value={formData.company} onChange={handleChange} placeholder="Nombre de tu empresa" /></label>
            <label className="form-field"><span>Presupuesto estimado</span><select name="budget" value={formData.budget} onChange={handleChange}><option value="">Lo definimos en conjunto</option>{budgetOptions.map(budget => <option key={budget} value={budget}>{budget}</option>)}</select></label>
          </div>
        </details>

        <button className="submit-button" type="submit">
          {formData.preferredContact === 'email' ? 'Revisar y enviar correo' : 'Preparar mensaje en WhatsApp'} <Send size={17} aria-hidden="true" />
        </button>
        <p className="form-privacy">
          {formData.preferredContact === 'email' ? `Revisa tu mensaje antes de enviarlo a ${brand.email}.` : 'WhatsApp abrirá tu solicitud para que la revises y la envíes.'} No necesitas tener un presupuesto definido para conversar.
        </p>
        {statusMessage && (
          <p className="form-status" role="status">
            {statusMessage} <ArrowUpRight size={15} aria-hidden="true" />
          </p>
        )}
      </form>
      <dialog ref={composerRef} className="email-composer" aria-labelledby="email-composer-title" onCancel={(event) => { if (sendingRef.current) event.preventDefault() }}>
        <header className="email-composer-header">
          <h3 id="email-composer-title"><Mail size={18} aria-hidden="true" /> Nuevo correo</h3>
          <button type="button" className="email-composer-close" aria-label="Cerrar redacción" disabled={isSending} onClick={() => composerRef.current.close()}>
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        <form className="email-composer-form" onSubmit={handleEmailSend} aria-busy={isSending}>
          <div className="email-composer-body">
          <fieldset className="email-composer-fields" disabled={isSending || emailStatus.type === 'success'}>
          <label className="email-composer-row">
            <span>De</span>
            <input autoFocus type="email" name="from" value={draft.from} onChange={handleDraftChange} autoComplete="email" placeholder="tu@empresa.cl" aria-describedby="email-sender-note" maxLength={254} required />
          </label>
          <label className="email-composer-row">
            <span>Para</span>
            <input type="email" value={brand.email} readOnly />
          </label>
          <label className="email-composer-row">
            <span>Asunto</span>
            <input name="subject" value={draft.subject} onChange={handleDraftChange} maxLength={200} required />
          </label>
          <label className="email-composer-message">
            <textarea aria-label="Mensaje" name="message" value={draft.message} onChange={handleDraftChange} rows={10} maxLength={10000} required />
          </label>
          </fieldset>
          <p id="email-sender-note" className="form-privacy">“De” es tu correo de contacto: ahí responderemos. La solicitud se envía mediante el servicio de correo del sitio, sin iniciar sesión en tu cuenta.</p>
          {!emailConfigured && <p className="email-composer-feedback" role="status">El envío directo aún no está habilitado. Mientras tanto, puedes solicitar tu cotización por WhatsApp.</p>}
          </div>
          <footer className="email-composer-footer">
          <button className="submit-button submit-button-email" type="submit" disabled={!emailConfigured || isSending || emailStatus.type === 'success'}>
            {isSending ? 'Enviando…' : emailStatus.type === 'success' ? 'Correo enviado' : 'Enviar correo'} <Send size={17} aria-hidden="true" />
          </button>
          {emailStatus.message && <p className="email-composer-feedback" role={emailStatus.type === 'error' ? 'alert' : 'status'}>{emailStatus.message}</p>}
          </footer>
        </form>
      </dialog>
    </div>
  )
}

export default QuoteForm
