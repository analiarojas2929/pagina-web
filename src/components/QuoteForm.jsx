import { useState } from 'react'
import { ArrowUpRight, Mail, Send, Sparkles } from 'lucide-react'
import { brand, budgetOptions, createGmailComposeUrl, createWhatsAppUrl, quoteServices } from '../data/siteData'

const initialState = (service) => ({
  name: '',
  company: '',
  email: '',
  whatsapp: '',
  service: service || '',
  budget: '',
  description: '',
})

function QuoteForm({ initialService }) {
  const [formData, setFormData] = useState(() => initialState(initialService))
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setStatusMessage('')
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const buildQuoteMessage = () => [
    `Hola ${brand.name}:`,
    '',
    'Quisiera solicitar una cotización. Comparto los detalles de mi proyecto:',
    '',
    'DATOS DE CONTACTO',
    `Nombre: ${formData.name.trim()}`,
    `Empresa: ${formData.company.trim() || 'No indicada'}`,
    `Correo: ${formData.email.trim()}`,
    `WhatsApp: ${formData.whatsapp.trim()}`,
    '',
    'DETALLES DEL PROYECTO',
    `Servicio requerido: ${formData.service}`,
    `Presupuesto estimado: ${formData.budget}`,
    '',
    'Descripción:',
    formData.description.trim(),
    '',
    'Quedo atenta a sus comentarios.',
    '',
    formData.name.trim(),
  ].join('\r\n')

  const buildEmailMessage = () => [
    `Hola equipo ${brand.name}:`,
    '',
    'Quisiera solicitar una cotización para mi proyecto.',
    '',
    'DATOS DE CONTACTO',
    `Nombre: ${formData.name.trim()}`,
    `Empresa: ${formData.company.trim() || 'No indicada'}`,
    `Correo de contacto: ${formData.email.trim()}`,
    `WhatsApp: ${formData.whatsapp.trim()}`,
    '',
    'ALCANCE SOLICITADO',
    `Servicio: ${formData.service}`,
    `Presupuesto estimado: ${formData.budget}`,
    '',
    'DESCRIPCIÓN DEL PROYECTO',
    formData.description.trim(),
    '',
    'Gracias. Quedo atenta a sus comentarios.',
    '',
    formData.name.trim(),
  ].join('\r\n')

  const handleSubmit = (event) => {
    event.preventDefault()

    const whatsappUrl = createWhatsAppUrl(buildQuoteMessage())
    const whatsappWindow = window.open(whatsappUrl, '_blank')

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl)
    } else {
      whatsappWindow.opener = null
    }

    setStatusMessage('WhatsApp se abrió con tu mensaje preparado. Revísalo y pulsa “Enviar” en WhatsApp para completar la solicitud.')
  }

  const handleEmailClick = (event) => {
    if (!event.currentTarget.form.reportValidity()) return

    const subject = `Solicitud de cotización | ${formData.name.trim()} | ${brand.name}`
    const gmailUrl = createGmailComposeUrl(subject, buildEmailMessage())
    const gmailWindow = window.open(gmailUrl, '_blank')

    if (!gmailWindow) {
      window.location.assign(gmailUrl)
    } else {
      gmailWindow.opener = null
    }

    setStatusMessage(`Destinatario: ${brand.email}. Gmail enviará desde la cuenta que tengas activa; revisa el campo “De” y pulsa “Enviar”.`)
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

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>Nombre <b aria-hidden="true">*</b></span>
            <input autoComplete="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
          </label>
          <label className="form-field">
            <span>Empresa</span>
            <input autoComplete="organization" name="company" value={formData.company} onChange={handleChange} placeholder="Nombre de tu empresa (opcional)" />
          </label>
          <label className="form-field">
            <span>Correo electrónico <b aria-hidden="true">*</b></span>
            <input autoComplete="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.cl" required />
          </label>
          <label className="form-field">
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
          </label>
          <label className="form-field">
            <span>Servicio requerido <b aria-hidden="true">*</b></span>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Selecciona un servicio</option>
              {quoteServices.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
          </label>
          <label className="form-field">
            <span>Presupuesto estimado <b aria-hidden="true">*</b></span>
            <select name="budget" value={formData.budget} onChange={handleChange} required>
              <option value="">Selecciona un rango</option>
              {budgetOptions.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
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

        <button className="submit-button" type="submit">
          Preparar mensaje en WhatsApp <Send size={17} aria-hidden="true" />
        </button>
        <button className="submit-button submit-button-email" type="button" onClick={handleEmailClick}>
          Preparar correo <Mail size={17} aria-hidden="true" />
        </button>
        <p className="form-privacy">
          Elige WhatsApp o correo. Gmail abrirá la cotización dirigida a {brand.email}; el remitente será tu cuenta activa de Google. Revisa y pulsa “Enviar”.
        </p>
        {statusMessage && (
          <p className="form-status" role="status">
            {statusMessage} <ArrowUpRight size={15} aria-hidden="true" />
          </p>
        )}
      </form>
    </div>
  )
}

export default QuoteForm
