import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react'
import { formatCLP, plans } from '../data/siteData'

export default function PlanFinder({ onSelectPlan }) {
  const [answers, setAnswers] = useState({ content: '', pages: '', contact: '' })
  const [showResult, setShowResult] = useState(false)
  const id = answers.content === 'catalog' || answers.pages === 'many' ? 'premium'
    : answers.content === 'projects' || answers.pages === 'extra' || answers.contact === 'form' ? 'profesional' : 'esencial'
  const recommendation = plans.find(plan => plan.id === id)
  const handleChange = (event) => {
    setAnswers(previous => ({ ...previous, [event.target.name]: event.target.value }))
    setShowResult(false)
  }

  return (
    <details id="plan-finder" className="plan-finder">
      <summary><span><Sparkles size={18} aria-hidden="true" />¿No sabes qué plan elegir?</span><ChevronDown size={18} aria-hidden="true" /></summary>
      <form onSubmit={event => { event.preventDefault(); setShowResult(true) }}>
        <p>Tres preguntas para orientarte. La propuesta final la definimos contigo.</p>
        <div className="plan-finder-questions">
          <label><span>1. ¿Qué quieres mostrar?</span><select name="content" value={answers.content} onChange={handleChange} required><option value="">Selecciona una opción</option><option value="service">Un servicio o una campaña</option><option value="projects">Mi empresa, servicios y proyectos</option><option value="catalog">Un catálogo informativo de productos o servicios</option></select></label>
          <label><span>2. ¿Cuántas páginas necesitas?</span><select name="pages" value={answers.pages} onChange={handleChange} required><option value="">Selecciona una opción</option><option value="one">Una sola página</option><option value="extra">Portada y una página adicional</option><option value="many">Portada y varias páginas</option></select></label>
          <label><span>3. ¿Cómo quieres recibir consultas?</span><select name="contact" value={answers.contact} onChange={handleChange} required><option value="">Selecciona una opción</option><option value="links">Con botones de WhatsApp y correo</option><option value="form">Con un formulario dentro de la web</option></select></label>
        </div>
        <button type="submit" className="plan-finder-button">Ver recomendación <ArrowUpRight size={16} aria-hidden="true" /></button>
        {showResult && <div className="plan-finder-result" role="status"><div><span>Tu punto de partida</span><h3>{recommendation.title} <small>Desde {formatCLP(recommendation.amount)} CLP</small></h3><p>{recommendation.distinction}</p>{answers.content === 'catalog' && <p className="plan-finder-catalog-note">Esta recomendación contempla un catálogo informativo. Ventas, pagos y gestión de stock se cotizan por separado.</p>}</div><a href="#cotizacion" onClick={() => onSelectPlan(recommendation)}>Consultar por este plan <ArrowUpRight size={16} aria-hidden="true" /></a></div>}
      </form>
    </details>
  )
}
