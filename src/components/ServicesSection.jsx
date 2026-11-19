import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { complementaryPlans, formatCLP, plans, serviceCategories, services } from '../data/siteData'
import './ServicesSection.css'

export default function ServicesSection({ onSelectService }) {
  const [category, setCategory] = useState('all')
  const reduceMotion = useReducedMotion()
  const visibleServices = services.filter(service => category === 'all' || service.category === category)
  const openPlanFinder = () => {
    const finder = document.getElementById('plan-finder')
    if (finder) finder.open = true
  }

  return (
    <section id="servicios" className="content-section services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="services-intro">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> LO QUE PODEMOS CONSTRUIR CONTIGO</p><h2 id="services-title">Servicios pensados para <span>impulsar tu negocio.</span></h2></div>
          <div className="services-intro-copy"><span>DISEÑO · DESARROLLO · SOPORTE</span><p>Una web para darte a conocer, una tienda para vender o un sistema para organizarte. Empecemos por lo que tu negocio necesita.</p></div>
        </div>

        <div className="services-filter-row">
          <div className="services-filters" role="group" aria-label="Filtrar servicios por necesidad">
            {serviceCategories.map(item => <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}
          </div>
          <p className="services-count" role="status">{visibleServices.length} {visibleServices.length === 1 ? 'servicio' : 'servicios'}</p>
        </div>

        <div className="services-offers" data-category={category}>
          {visibleServices.map((service, index) => {
            const Icon = service.icon
            const reference = plans.find(plan => plan.id === service.planId) || complementaryPlans.find(plan => plan.service === service.title)
            const emphasized = service.slug === 'desarrollo-web' || service.slug === 'landing-pages'
            const groupLabel = serviceCategories.find(item => item.id === service.category)?.label
            return <motion.article
              key={service.title}
              className={`service-offer service-offer-${service.category}${emphasized ? ' service-offer-lead' : ''}`}
              aria-label={service.title}
              layout="position"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
            >
              <div className="service-offer-top"><span className="service-offer-icon"><Icon size={23} aria-hidden="true" /></span><span>{groupLabel}</span><span className="service-offer-number" aria-hidden="true">{String(services.indexOf(service) + 1).padStart(2, '0')}</span></div>
              <h3>{service.title}</h3>
              <p className="service-offer-description">{service.description}</p>
              <div className="service-offer-audience"><span>PARA TI SI…</span><p>{service.idealFor}</p></div>
              <ul>{service.includes.map(feature => <li key={feature}><Check size={14} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
              <div className="service-offer-value">{reference ? <><span>Valor inicial</span><strong>Desde {formatCLP(reference.amount)} <small>CLP</small></strong></> : <><span>Definimos el alcance contigo</span><strong>Cotización a medida</strong></>}</div>
              <div className="service-offer-actions"><a href="#cotizacion" onClick={() => onSelectService(service.title)} aria-label={`Cotizar ${service.title}`}>Cotizar este servicio <ArrowUpRight size={17} aria-hidden="true" /></a>{service.slug && <a className="service-offer-detail" href={`/servicios/${service.slug}/`}>Ver qué incluye <ArrowRight size={15} aria-hidden="true" /></a>}</div>
            </motion.article>
          })}
        </div>

        <div className="services-guidance"><span className="services-guidance-icon"><Sparkles size={22} aria-hidden="true" /></span><div><h3>¿Tienes una idea, pero no sabes por dónde empezar?</h3><p>Cuéntanos qué necesitas resolver o responde tres preguntas para encontrar un plan web.</p></div><a href="#plan-finder" onClick={openPlanFinder}>Ayúdame a elegir <ArrowRight size={17} aria-hidden="true" /></a></div>
        <p className="services-scope-note">Valores iniciales según el alcance publicado en los planes. Dominio, hosting, mantenimiento y servicios de terceros se acuerdan por separado. Las tiendas y los sistemas con pagos, usuarios o bases de datos requieren una propuesta específica.</p>
      </div>
    </section>
  )
}
