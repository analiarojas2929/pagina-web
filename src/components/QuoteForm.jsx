import { useState } from 'react'
import { ArrowUpRight, Send, Sparkles } from 'lucide-react'
import { brand, budgetOptions, createWhatsAppUrl, quoteServices } from '../data/siteData'

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

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      `Hola ${brand.name}, quisiera solicitar una cotización.`,
      '',
      `Nombre: ${formData.name.trim()}`,
      `Empresa: ${formData.company.trim() || 'No indicada'}`,
      `Correo: ${formData.email.trim()}`,
      `WhatsApp: ${formData.whatsapp.trim()}`,
      `Servicio: ${formData.service}`,
      `Presupuesto estimado: ${formData.budget}`,
      `Descripción del proyecto: ${formData.description.trim()}`,
    ].join('\n')
    const whatsappUrl = createWhatsAppUrl(message)
    const whatsappWindow = window.open(whatsappUrl, '_blank')

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl)
    } else {
      whatsappWindow.opener = null
    }

    setStatusMessage('WhatsApp se abrió con tu mensaje preparado. Revísalo y pulsa “Enviar” en WhatsApp para completar la solicitud.')
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
        <p className="form-privacy">
          El formulario no envía datos automáticamente. WhatsApp se abrirá para que revises y envíes el mensaje.
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
