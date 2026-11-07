import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { quoteServices, whatsappNumber } from '../data/siteData'

const initialState = {
  name: '',
  email: '',
  whatsapp: '',
  service: '',
  budget: '',
  description: '',
}

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, email, whatsapp, service, budget, description } = formData
    const missing = !name || !email || !whatsapp || !service || !budget || !description

    if (missing) {
      alert('Completa todos los campos para generar tu cotización.')
      return
    }

    const message = `Hola Analia, quiero solicitar una cotización.%0A%0A` +
      `Nombre: ${name}%0A` +
      `Correo: ${email}%0A` +
      `WhatsApp: ${whatsapp}%0A` +
      `Servicio: ${service}%0A` +
      `Presupuesto estimado: ${budget}%0A` +
      `Descripción: ${description}`

    const url = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-glow backdrop-blur-xl md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-slate-950">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Cotización</p>
          <h3 className="text-2xl font-semibold text-white">Solicita tu proyecto</h3>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm text-slate-200">
            Nombre
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </label>

          <label className="block text-sm text-slate-200">
            Correo
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm text-slate-200">
            WhatsApp
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+54 9 11 1234 5678"
            />
          </label>

          <label className="block text-sm text-slate-200">
            Servicio
            <select
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Selecciona</option>
              {quoteServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block text-sm text-slate-200">
          Presupuesto estimado
          <input
            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="$500 - $1500"
          />
        </label>

        <label className="block text-sm text-slate-200">
          Descripción del proyecto
          <textarea
            rows="5"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Contanos brevemente qué necesitas, objetivos, estilo y plazo estimado."
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:brightness-110"
        >
          Enviar por WhatsApp
          <Send size={18} />
        </button>
      </form>
    </div>
  )
}

export default QuoteForm
