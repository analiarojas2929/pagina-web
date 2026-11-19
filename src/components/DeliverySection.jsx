import { Code2, FolderCheck, KeyRound, MonitorCheck } from 'lucide-react'

const items = [
  { icon: Code2, title: 'Tu proyecto y su código', text: 'Los archivos del desarrollo acordado y la información necesaria para continuar trabajando sobre él.' },
  { icon: MonitorCheck, title: 'La web lista para usar', text: 'Revisión en celular y escritorio, comprobación de enlaces y formularios, y publicación inicial según el plan.' },
  { icon: KeyRound, title: 'Accesos organizados', text: 'Identificación de las cuentas y servicios utilizados. El dominio y los servicios contratados quedan a tu nombre.' },
  { icon: FolderCheck, title: 'Una entrega explicada', text: 'Indicaciones para usar la web y entender cómo solicitar actualizaciones. El mantenimiento posterior se acuerda por separado.' },
]

export default function DeliverySection() {
  return (
    <section className="delivery-section" aria-labelledby="delivery-title">
      <div className="container">
        <div className="delivery-heading"><p className="eyebrow">UNA ENTREGA CLARA</p><h2 id="delivery-title">Tu web, con todo lo necesario<br />para dar el siguiente paso.</h2><p>Antes de comenzar definimos el alcance; al terminar, sabes qué recibes y cómo seguir.</p></div>
        <div className="delivery-grid">{items.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  )
}
