import { useRef } from 'react'
import { ArrowUpRight, CalendarDays, Check, Leaf, Maximize2, Scissors, X } from 'lucide-react'
import './ProjectArtwork.css'

const styles = {
  PortalVehicular: 'motors',
  MamáSoyYo: 'wellness',
  'FitZone Gym': 'fitness',
  BarberStyle: 'barber',
  'Sistema de Reservas Online': 'booking',
  NutriBalance: 'nutrition',
  'Data Science Portfolio': 'data',
}

function ConceptPreview({ project }) {
  const nutrition = project.title === 'NutriBalance'
  const barber = project.title === 'BarberStyle'
  const Icon = nutrition ? Leaf : barber ? Scissors : CalendarDays
  return (
    <div className="project-concept" aria-hidden="true">
      <div className="concept-nav"><span><Icon size={14} /> {project.title}</span><span>•••</span></div>
      <div className="concept-layout">
        <div className="concept-copy">
          <small>{nutrition ? 'BIENESTAR, DÍA A DÍA' : barber ? 'TU ESTILO. TU MOMENTO.' : 'MÁS SIMPLE, MÁS CERCA.'}</small>
          <strong>{nutrition ? <>Pequeños hábitos.<br />Grandes cambios.</> : barber ? <>Un nuevo look<br />empieza aquí.</> : <>Tu próxima cita,<br />en un solo lugar.</>}</strong>
          <span className="concept-cta">{nutrition ? 'Mi progreso' : 'Elegir horario'} <ArrowUpRight size={12} /></span>
        </div>
        <div className="concept-widget">
          {nutrition ? <>
            <span className="concept-widget-label">Tu día, en equilibrio</span>
            <div className="concept-ring"><Leaf size={26} /><small>Mi bienestar</small></div>
            <div className="concept-habits"><span><Check size={10} /> Agua</span><span><Check size={10} /> Comidas</span></div>
          </> : <>
            <span className="concept-widget-label">{barber ? 'Reserva tu estilo' : 'Elige tu día'}</span>
            <div className="concept-week">{'LMXJVSD'.split('').map((day, i) => <span key={i}>{day}</span>)}</div>
            <div className="concept-calendar">{Array.from({ length: 21 }, (_, i) => <span key={i} className={i === 11 ? 'selected' : ''}>{i + 1}</span>)}</div>
            <span className="concept-time"><CalendarDays size={11} /> Tu próximo momento</span>
          </>}
        </div>
      </div>
    </div>
  )
}

export default function ProjectArtwork({ project, imageOnly = false }) {
  const previewRef = useRef(null)
  return (
    <>
      <div
        className={`project-artwork project-visual-${styles[project.title] || 'data'}`}
        role={imageOnly && !project.image ? 'img' : undefined}
        aria-label={imageOnly && !project.image ? `Ilustración de interfaz de ${project.title}` : undefined}
      >
        {!imageOnly && <div className="project-visual-heading"><span>{project.category}</span><span>{project.image ? 'VISTA DEL PROYECTO' : 'CONCEPTO VISUAL'}</span></div>}
        <div className="project-browser">
          <div className="project-browser-toolbar" aria-hidden="true">
            <span className="project-browser-dots"><i /><i /><i /></span>
            <span className="project-browser-title">{project.title}</span>
            <span className="project-browser-menu">•••</span>
          </div>
          {project.image && imageOnly ? (
            <img className="project-screenshot-static" src={project.image} alt={`Captura de ${project.title}`} loading="lazy" />
          ) : project.image ? (
            <button className="project-screenshot-button" type="button" onClick={() => previewRef.current.showModal()} aria-label={`Ampliar captura de ${project.title}`}>
              <img src={project.image} alt={`Captura de ${project.title}`} loading="lazy" />
              <span className="project-expand"><Maximize2 size={13} /> Ampliar</span>
            </button>
          ) : <ConceptPreview project={project} />}
        </div>
        {!imageOnly && <span className="project-visual-caption">{project.image ? 'Explora cada detalle' : 'Ilustración de interfaz · no es una captura'}</span>}
      </div>
      {project.image && !imageOnly && <dialog ref={previewRef} className="project-image-dialog" aria-label={`Captura ampliada de ${project.title}`}>
        <header><strong>{project.title}</strong><button type="button" onClick={() => previewRef.current.close()} aria-label="Cerrar captura"><X size={20} /></button></header>
        <img src={project.image} alt={`Captura ampliada de ${project.title}`} />
      </dialog>}
    </>
  )
}
