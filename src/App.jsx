import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import QuoteForm from './components/QuoteForm'
import SectionTitle from './components/SectionTitle'
import {
  brand,
  createWhatsAppUrl,
  faqs,
  founders,
  navItems,
  portfolio,
  portfolioCategories,
  plans,
  services,
  workflow,
} from './data/siteData'
import './App.css'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

const currentYear = new Date().getFullYear()

function ActionLink({ children, href = '#cotizacion', secondary = false, ...props }) {
  return (
    <a
      href={href}
      className={`action-link ${secondary ? 'action-link-secondary' : 'action-link-primary'}`}
      {...props}
    >
      {children}
    </a>
  )
}

function SectionCta({ text = '¿Tienes un proyecto en mente?' }) {
  return (
    <div className="section-cta">
      <span>{text}</span>
      <ActionLink>
        Hablemos de tu proyecto <ArrowRight size={16} aria-hidden="true" />
      </ActionLink>
    </div>
  )
}

function ProjectArtwork({ project, index }) {
  if (project.image) {
    return (
      <div className={`project-artwork project-artwork-${index + 1}`}>
        <img src={project.image} alt={`Vista previa de ${project.title}`} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-artwork project-artwork-${index + 1}`} aria-hidden="true">
      <div className="artwork-window">
        <div className="artwork-toolbar">
          <span />
          <span />
          <span />
          <small>{project.category}</small>
        </div>
        <div className="artwork-content">
          <div className="artwork-sidebar">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="artwork-main">
            <span className="artwork-overline">A&amp;D DIGTAL · EXPERIENCIA</span>
            <strong>{project.title}</strong>
            <div className="artwork-lines"><i /><i /><i /></div>
            <div className="artwork-blocks"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="artwork-label">Previsualización gráfica · no es una captura</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [activeProjectCategory, setActiveProjectCategory] = useState('founders')
  const visiblePortfolio = portfolio.filter((project) => project.group === activeProjectCategory)
  const projectEmptyMessage = activeProjectCategory === 'agency'
    ? 'Aún no hemos añadido proyectos comerciales de A&D DIGTAL. Las referencias disponibles se muestran como experiencia de las fundadoras.'
    : 'Las demos comerciales se publicarán aquí cuando estén disponibles.'

  const selectService = (serviceTitle) => {
    setSelectedService(serviceTitle)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label={`${brand.name}, inicio`}>
            <span className="brand-wordmark">A&amp;D <span>DIGTAL</span></span>
            <span className="brand-copy">
              <strong>{brand.slogan}</strong>
              <small>Agencia digital · Chile</small>
            </span>
          </a>

          <nav id="mobile-menu" className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <ActionLink onClick={() => setMenuOpen(false)}>
              Cotizar proyecto <ArrowUpRight size={16} aria-hidden="true" />
            </ActionLink>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container hero-layout">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <p className="eyebrow"><span className="eyebrow-dot" /> {brand.slogan.toUpperCase()}</p>
              <h1>Transformamos tus ideas en <span>soluciones digitales</span></h1>
              <p className="hero-description">
                En A&amp;D DIGTAL desarrollamos páginas web, software y experiencias digitales que ayudan a emprendedores y empresas a crecer.
              </p>
              <div className="hero-actions">
                <ActionLink>
                  Solicitar cotización <ArrowUpRight size={17} aria-hidden="true" />
                </ActionLink>
                <ActionLink href="#servicios" secondary>
                  Explorar servicios <ArrowDown size={16} aria-hidden="true" />
                </ActionLink>
                <ActionLink href="#proyectos" secondary>
                  Ver proyectos <ArrowDown size={16} aria-hidden="true" />
                </ActionLink>
              </div>
              <div className="trust-row" aria-label="Valores de A&D DIGTAL">
                <span><BadgeCheck size={17} /> Equipo de dos fundadoras</span>
                <span><BadgeCheck size={17} /> Desarrollo personalizado</span>
                <span><BadgeCheck size={17} /> Atención cercana</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              aria-hidden="true"
            >
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-brand"><span>A&amp;D</span> DIGITAL STUDIO</div>
                  <div className="hero-card-menu"><i /><i /><i /></div>
                </div>
                <div className="hero-card-body">
                  <span className="hero-card-kicker">IDEA · ESTRATEGIA · DESARROLLO</span>
                  <div className="hero-card-heading">Tu próximo<br /><b>proyecto digital.</b></div>
                  <div className="hero-card-subline" />
                  <div className="hero-card-button">Hablemos <ArrowUpRight size={13} /></div>
                </div>
                <div className="hero-card-footer">
                  <span>A&amp;D DIGTAL</span><span>TECNOLOGÍA A MEDIDA</span>
                </div>
              </div>
              <div className="hero-float-card"><span><Code2 size={16} /></span> Tecnología para impulsar tus ideas</div>
            </motion.div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="benefits-section">
          <div className="container benefits-grid">
            <div><span className="benefit-icon"><Sparkles size={18} /></span><div><strong>Soluciones a medida</strong><small>Desarrollo alineado a tu proyecto</small></div></div>
            <div><span className="benefit-icon"><ShieldCheck size={18} /></span><div><strong>Trabajo colaborativo</strong><small>Comunicación cercana con las socias</small></div></div>
            <div><span className="benefit-icon"><Check size={18} /></span><div><strong>Alcance transparente</strong><small>Propuesta clara antes de empezar</small></div></div>
          </div>
        </section>

        <section id="servicios" className="content-section">
          <div className="container">
            <SectionTitle
              eyebrow="Servicios y precios"
              title="Servicios pensados para impulsar tu negocio"
              description="Diseñamos y desarrollamos soluciones digitales para emprendedores y empresas, desde una página web hasta software a medida."
            />
            <div className="services-grid">
              {services.map(({ icon: Icon, title, price, description, includes }, index) => (
                <motion.article
                  className={`service-card ${index === 2 ? 'service-card-featured' : ''}`}
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={reveal}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
                >
                  <div className="service-icon"><Icon size={20} aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p className="service-description">{description}</p>
                  <p className="service-price">{price}</p>
                  <ul className="service-includes">
                    {includes.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}
                  </ul>
                  <a
                    className="service-link"
                    href="#cotizacion"
                    onClick={() => selectService(title)}
                  >
                    Solicitar cotización <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </motion.article>
              ))}
            </div>
            <p className="pricing-note">
              Solicita una cotización para definir el alcance de tu servicio. Dominio, hosting y servicios externos se cotizan por separado.
            </p>
            <SectionCta text="¿No sabes qué servicio se ajusta a tu idea?" />
          </div>
        </section>

        <section id="planes" className="content-section pricing-section">
          <div className="container">
            <SectionTitle
              eyebrow="Planes y precios"
              title="Precios iniciales claros"
              description="Valores de referencia editables. Cada proyecto se cotiza de acuerdo con su alcance y necesidades."
            />
            <div className="plans-grid">
              {plans.map((plan) => (
                <article className={`plan-card ${plan.featured ? 'plan-card-featured' : ''}`} key={plan.title}>
                  <p className="plan-kicker">A&amp;D DIGTAL</p>
                  <h3>{plan.title}</h3>
                  <p className="plan-price">{plan.price}</p>
                  <p className="plan-description">{plan.description}</p>
                  <a
                    className="plan-link"
                    href="#cotizacion"
                    onClick={() => selectService(plan.service)}
                  >
                    Solicitar cotización <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              Los precios publicados son iniciales y dependen del alcance del proyecto. Dominio, hosting y servicios externos se cotizan por separado.
            </p>
            <SectionCta text="Cuéntanos qué necesitas y te preparamos una propuesta." />
          </div>
        </section>

        <section id="proyectos" className="content-section projects-section">
          <div className="container">
            <SectionTitle
              eyebrow="Proyectos"
              title="Experiencia y demos de las fundadoras"
              description="Referencias de experiencia técnica de las fundadoras, no proyectos comerciales realizados por A&amp;D DIGTAL. Las demos solo se enlazan cuando hay una dirección disponible."
            />
            <div className="project-filters" role="group" aria-label="Filtrar proyectos">
              {portfolioCategories.map((category) => (
                <button
                  type="button"
                  className={activeProjectCategory === category.id ? 'project-filter project-filter-active' : 'project-filter'}
                  key={category.id}
                  aria-pressed={activeProjectCategory === category.id}
                  onClick={() => setActiveProjectCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            {visiblePortfolio.length === 0 && (
              <p className="project-empty-state">
                {projectEmptyMessage}
              </p>
            )}
            <div className="projects-grid">
              {visiblePortfolio.map((project, index) => (
                <motion.article
                  className="project-card"
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={reveal}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                >
                  <ProjectArtwork project={project} index={index} />
                  <div className="project-content">
                    <div className="project-heading">
                      <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
                      {project.demoUrl && <span className="access-badge">Demo disponible</span>}
                      {!project.demoUrl && <span className="access-badge access-unavailable">Sin demo disponible</span>}
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-details">
                      <div><small>TECNOLOGÍAS</small><div className="tag-list">
                        {project.technologies.length
                          ? project.technologies.map((technology) => <span key={technology}>{technology}</span>)
                          : <span>Detalles no especificados</span>}
                      </div></div>
                      <div><small>ENFOQUE</small><div className="tag-list">
                        {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                      </div></div>
                    </div>
                    <div className="project-actions">
                      {project.demoUrl && (
                        <a className="project-demo" href={project.demoUrl} target="_blank" rel="noreferrer">
                          Ver proyecto <ExternalLink size={15} aria-hidden="true" />
                        </a>
                      )}
                      {!project.demoUrl && <span className="project-unavailable">Demo no disponible</span>}
                      <a
                        className="similar-link"
                        href={createWhatsAppUrl(`Hola, nos interesa conversar con A&D DIGTAL sobre un proyecto similar a ${project.title}.`)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Solicitar uno similar <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                    {project.demoLabel && <p className="demo-note">{project.demoLabel}</p>}
                  </div>
                </motion.article>
              ))}
            </div>
            <SectionCta text="Hagamos realidad una idea como estas, adaptada a tu negocio." />
          </div>
        </section>

        <section id="proceso" className="content-section process-section">
          <div className="container">
            <SectionTitle
              eyebrow="Nuestra metodología"
              title="Un proceso claro, de principio a fin"
              description="En cada etapa colaboramos contigo para que sepas qué esperar y qué estamos construyendo."
            />
            <div className="workflow-grid">
              {workflow.map((step, index) => (
                <motion.article
                  className="workflow-step"
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              ))}
            </div>
            <SectionCta text="El primer paso es una conversación." />
          </div>
        </section>

        <section id="equipo" className="content-section team-section">
          <div className="container">
            <SectionTitle
              eyebrow="Sobre nosotras"
              title="Las profesionales detrás de A&amp;D DIGTAL"
              description="Somos dos socias fundadoras y profesionales del área tecnológica."
            />
            <div className="founders-grid">
              {founders.map((founder, index) => (
                <motion.article
                  className="founder-card"
                  key={`${founder.name}-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className={`founder-avatar founder-avatar-${index + 1}`}>
                    {founder.photo
                      ? <img src={founder.photo} alt={`Fotografía de ${founder.name}`} loading="lazy" />
                      : <span aria-hidden="true">{founder.initials}</span>}
                  </div>
                  <div className="founder-info">
                    <span className="founder-label">SOCIA FUNDADORA</span>
                    <h3>{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                    <p className="founder-position">{founder.position}</p>
                    <p className="founder-bio">{founder.bio}</p>
                    <div className="founder-details">
                      <strong>Especialidades</strong>
                      <p>{founder.specialties.length ? founder.specialties.join(' · ') : 'Información pendiente de completar'}</p>
                    </div>
                    <div className="founder-socials">
                      {founder.linkedin
                        ? <a className="founder-link" href={founder.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
                        : <span className="founder-link founder-link-pending">LinkedIn por agregar</span>}
                      {founder.github
                        ? <a className="founder-link" href={founder.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a>
                        : <span className="founder-link founder-link-pending">GitHub por agregar</span>}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="team-message">
              <span className="benefit-icon"><Sparkles size={18} /></span>
              <p><strong>{brand.slogan}</strong><br />En A&amp;D DIGTAL somos dos profesionales del área tecnológica que unimos nuestros conocimientos y nuestra pasión por la innovación para transformar ideas en soluciones digitales. Nuestro propósito es ayudar a emprendedores, profesionales y empresas a fortalecer su presencia digital mediante el desarrollo de páginas web, software y herramientas tecnológicas adaptadas a sus necesidades.</p>
            </div>
            <SectionCta text="Conversemos sobre lo que podemos crear en equipo." />
          </div>
        </section>

        <section className="content-section faq-section">
          <div className="container faq-layout">
            <div>
              <SectionTitle
                eyebrow="Preguntas frecuentes"
                title="Resolvamos tus dudas"
                description="Si necesitas aclarar algo más, conversemos directamente sobre tu proyecto."
                align="left"
              />
              <ActionLink>Solicitar cotización <ArrowRight size={16} /></ActionLink>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cotizacion" className="quote-section">
          <div className="container quote-layout">
            <div className="quote-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> COTIZACIÓN PERSONALIZADA</p>
              <h2>Cuéntanos qué quieren construir.</h2>
              <p>
                Comparte los detalles de tu idea. Prepararemos un mensaje con la información para
                que lo revises y lo envíes por WhatsApp.
              </p>
              <div className="quote-assurance">
                <span><ShieldCheck size={19} /></span>
                <p><strong>Sin compromiso</strong><br />Revisaremos el alcance antes de definir la propuesta.</p>
              </div>
            </div>
            <QuoteForm key={selectedService || 'default'} initialService={selectedService} />
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">CONTACTO</p>
              <h2>¿Listas para empezar?</h2>
              <p>Conversemos sobre tu proyecto y encontremos el siguiente paso.</p>
            </div>
            <div className="contact-actions">
              <a
                className="contact-button"
                href={createWhatsAppUrl('Hola A&D DIGTAL, quisiera conversar sobre un proyecto.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> Contactar por WhatsApp <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#inicio" className="brand footer-brand">
            <span className="brand-wordmark">A&amp;D <span>DIGTAL</span></span>
            <span className="brand-copy"><strong>{brand.slogan}</strong><small>Agencia digital · Chile</small></span>
          </a>
          <p>{brand.slogan} · {brand.location}</p>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#equipo">Equipo</a>
            <a href="#cotizacion">Cotizar</a>
          </div>
          <small className="copyright">© {currentYear} {brand.name}</small>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={createWhatsAppUrl('Hola A&D DIGTAL, quisiera conversar sobre un proyecto.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a A&D DIGTAL por WhatsApp"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>Hablemos</span>
      </a>
    </div>
  )
}

export default App
