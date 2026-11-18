import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronDown, Code2, MonitorSmartphone, Rocket } from 'lucide-react'
import { complementaryPlans, formatCLP, planComparisonRows, plans } from '../data/siteData'
import './PricingSection.css'

export default function PricingSection({ onSelectPlan, onSelectService }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="planes" className="content-section pricing-section">
      <div className="container">
        <div className="pricing-intro">
          <div><p className="pricing-eyebrow">DISEÑO + DESARROLLO WEB</p><h2>Un plan para<br />cada etapa.</h2></div>
          <div className="pricing-intro-copy"><p>Elige el alcance que necesita tu negocio.</p><span>Diseño propio, desarrollo a medida y el mismo cuidado en cada proyecto. La diferencia está en cuántas páginas, funciones e interacciones construimos.</span></div>
        </div>

        <div className="pricing-plan-grid">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.id}
              className={`pricing-plan${plan.featured ? ' pricing-plan-featured' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              aria-labelledby={`plan-${plan.id}`}
            >
              {plan.badge && <div className="pricing-plan-ribbon"><span>{plan.badge}</span><ArrowUpRight size={15} aria-hidden="true" /></div>}
              <div className="pricing-plan-content">
                <p className="pricing-plan-eyebrow">{plan.eyebrow}</p>
                <h3 id={`plan-${plan.id}`}>{plan.title}</h3>
                <p className="pricing-plan-description">{plan.description}</p>
                <div className="pricing-plan-value"><span>Desde</span><strong>{formatCLP(plan.amount)}</strong><small>CLP · desarrollo por proyecto</small></div>
                <a className="pricing-plan-cta" href="#cotizacion" onClick={() => onSelectPlan(plan)} aria-label={`Cotizar plan ${plan.title} desde ${formatCLP(plan.amount)} CLP`}>
                  {plan.cta}<ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <ul className="pricing-plan-features">
                  {plan.features.map(feature => <li key={feature}><Check size={15} aria-hidden="true" /><span>{feature}</span></li>)}
                </ul>
                <div className="pricing-plan-difference"><span>QUÉ CAMBIA EN ESTE PLAN</span><p>{plan.distinction}</p></div>
                <details className="pricing-breakdown">
                  <summary>¿Qué estás pagando?<ChevronDown size={16} aria-hidden="true" /></summary>
                  <dl>{plan.breakdown.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{formatCLP(item.amount)}</dd></div>)}</dl>
                  <p className="pricing-breakdown-total"><span>Valor inicial del desarrollo</span><strong>{formatCLP(plan.amount)}</strong></p>
                </details>
                <p className="pricing-plan-for"><strong>Ideal para</strong>{plan.idealFor}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="pricing-common" aria-label="Incluido en todos los planes">
          <span>En los tres planes</span>
          <p><MonitorSmartphone size={18} aria-hidden="true" /> Adaptación a todos los dispositivos</p>
          <p><Code2 size={18} aria-hidden="true" /> Diseño y código propios</p>
          <p><Rocket size={18} aria-hidden="true" /> Pruebas y publicación inicial</p>
        </div>

        <details className="pricing-comparison">
          <summary><span>Comparar los planes en detalle</span><span className="pricing-comparison-toggle" aria-hidden="true">+</span></summary>
          <p className="pricing-table-hint">En pantallas pequeñas, desliza la tabla para ver todos los planes.</p>
          <div className="pricing-table-scroll" role="region" aria-label="Comparación de los planes web" tabIndex={0}>
            <table>
              <caption>Diferencias de alcance entre Esencial, Profesional y Premium</caption>
              <thead><tr><th scope="col">Lo que construimos</th>{plans.map(plan => <th scope="col" key={plan.id}>{plan.title}<span>Desde {formatCLP(plan.amount)}</span></th>)}</tr></thead>
              <tbody>{planComparisonRows.map(row => <tr key={row.key}><th scope="row">{row.label}</th>{plans.map(plan => <td key={plan.id}>{plan.comparison[row.key]}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </details>

        <div className="pricing-explained">
          <div><p className="pricing-eyebrow">EL VALOR ESTÁ EN EL TRABAJO</p><h3>Más que una página<br />que se vea bien.</h3></div>
          <p>El valor cubre organizar tu contenido, diseñar la experiencia, programar las secciones y probar que todo funcione en distintos dispositivos. Al subir de plan, dedicamos más trabajo a la estructura, las funciones y los recorridos de navegación.</p>
        </div>

        <div className="pricing-extras-heading"><h3>¿Necesitas algo más acotado?</h3><span>Formatos con un alcance específico.</span></div>
        <div className="pricing-extras">
          {complementaryPlans.map(plan => <a href="#cotizacion" className="pricing-extra" key={plan.title} onClick={() => onSelectPlan(plan)}>
            <div><h4>{plan.title}</h4><p>{plan.description}</p></div><div className="pricing-extra-price"><span>Desde {formatCLP(plan.amount)} CLP</span><ArrowUpRight size={20} aria-hidden="true" /></div>
          </a>)}
        </div>

        <div className="pricing-scope-note">
          <p><strong>Antes de comenzar, dejamos todo por escrito.</strong> Valores iniciales en CLP para el alcance descrito. El total, los impuestos aplicables, los plazos, la forma de pago y las condiciones de entrega se detallan en la cotización.</p>
          <p>Textos, logo y fotografías entregados por el cliente. Una ronda de ajustes reúne tus comentarios sobre el alcance acordado. Nuevas funciones, mantenimiento, dominio, hosting y servicios de terceros se cotizan por separado; los servicios con planes gratuitos están sujetos a sus límites.</p>
          <p>Tiendas con pagos, cuentas de usuario, bases de datos y paneles de administración requieren una cotización específica.</p>
          <a href="#cotizacion" onClick={() => onSelectService('Software a medida')}>Cotizar software o una integración especial <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
