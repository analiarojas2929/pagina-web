import { Fragment, useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import BrandLogo from './components/BrandLogo'
import QuoteForm from './components/QuoteForm'
import ProjectArtwork from './components/ProjectArtwork'
import HeroVisual from './components/HeroVisual'
import PricingSection from './components/PricingSection'
import DeliverySection from './components/DeliverySection'
import ServicePage from './components/ServicePage'
import ServicesSection from './components/ServicesSection'
import SectionTitle from './components/SectionTitle'
import {
  brand,
  createWhatsAppUrl,
  faqs,
  founders,
  formatCLP,
  navItems,
  portfolio,
  portfolioCategories,
  workflow,
} from './data/siteData'
import './App.css'
import './components/Improvements.css'
import { servicePages } from './data/servicePages'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

const currentYear = new Date().getFullYear()
const heroWords = ['Transformamos', 'tus', 'ideas', 'en', 'soluciones', 'digitales']
const wordReveal = {
  hidden: { opacity: 0, y: 30, rotateX: -30 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
}

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

function HomePage() {
  const reduceMotion = useReducedMotion()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { amount: 0.08 })
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 })
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(() => {
    const slug = new URLSearchParams(window.location.search).get('servicio')
    return servicePages.find(service => service.slug === slug)?.service || ''
  })
  const [selectedPlan, setSelectedPlan] = useState('')
  const [activeProjectCategory, setActiveProjectCategory] = useState('founders')
  const availableProjectCategories = portfolioCategories.filter((category) => portfolio.some((project) =>
    project.group === category.id || (category.id === 'demos' && project.isDemo),
  ))
  const visiblePortfolio = portfolio.filter((project) =>
    project.group === activeProjectCategory || (activeProjectCategory === 'demos' && project.isDemo),
  )
  const projectEmptyMessage = activeProjectCategory === 'agency'
    ? 'Aún no hemos añadido proyectos comerciales de A&D DIGITAL. Las referencias disponibles se muestran como experiencia de las fundadoras.'
    : 'Las demos comerciales se publicarán aquí cuando estén disponibles.'

  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1))
    if (!target) return
    const frame = requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' }))
    return () => cancelAnimationFrame(frame)
  }, [])

  const selectService = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setSelectedPlan('')
  }

  const selectPlan = (plan) => {
    setSelectedService(plan.service)
    setSelectedPlan(`${plan.title} · desde ${formatCLP(plan.amount)} CLP`)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <motion.div className="reading-progress" style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }} aria-hidden="true" />
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label={`${brand.name}, inicio`}>
            <BrandLogo className="header-brand-logo" variant="dark" width={232} height={72} loading="eager" />
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
        <section id="inicio" className="hero-section" ref={heroRef} data-motion-active={heroInView && !reduceMotion}>
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="hero-ambient" aria-hidden="true"><span /><span /></div>
          <div className="hero-particles" aria-hidden="true">
            {Array.from({ length: 8 }, (_, index) => <i key={index} style={{ '--particle-x': `${8 + index * 12}%`, '--particle-delay': `${index * -1.4}s`, '--particle-duration': `${10 + index % 3 * 3}s` }} />)}
          </div>
          <div className="container hero-layout">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
            >
              <motion.p variants={reveal} className="eyebrow"><span className="eyebrow-dot" /> {brand.slogan.toUpperCase()}</motion.p>
              <motion.h1
                aria-label="Transformamos tus ideas en soluciones digitales"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {heroWords.map((word, index) => (
                  <Fragment key={word}>
                    <motion.span variants={wordReveal} className={`hero-title-word${index > 3 ? ' hero-title-accent' : ''}`} aria-hidden="true">{word}</motion.span>
                    {index < heroWords.length - 1 ? ' ' : ''}
                  </Fragment>
                ))}
              </motion.h1>
              <motion.p variants={reveal} className="hero-description">
                En A&amp;D DIGITAL desarrollamos páginas web, software y experiencias digitales que ayudan a emprendedores y empresas a crecer.
              </motion.p>
              <motion.div variants={reveal} className="hero-actions">
                <ActionLink>
                  Solicitar cotización <ArrowUpRight size={17} aria-hidden="true" />
                </ActionLink>
                <ActionLink href="#servicios" secondary>
                  Explorar servicios <ArrowDown size={16} aria-hidden="true" />
                </ActionLink>
                <ActionLink href="#proyectos" secondary>
                  Ver proyectos <ArrowDown size={16} aria-hidden="true" />
                </ActionLink>
              </motion.div>
              <motion.div variants={reveal} className="trust-row" aria-label="Valores de A&D DIGITAL">
                <span><BadgeCheck size={17} /> Equipo de dos fundadoras</span>
                <span><BadgeCheck size={17} /> Desarrollo personalizado</span>
                <span><BadgeCheck size={17} /> Atención cercana</span>
              </motion.div>
            </motion.div>

            <HeroVisual />
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

        <ServicesSection onSelectService={selectService} />

        <PricingSection onSelectPlan={selectPlan} onSelectService={selectService} />

        <section id="proyectos" className="content-section projects-section">
          <div className="container">
            <SectionTitle
              eyebrow="Proyectos"
              title="Experiencia y demos de las fundadoras"
              description="Una selección de proyectos, demos y prototipos de las fundadoras. Explora las vistas previas y visita los proyectos que ya están publicados."
            />
            <div className="project-filters" role="group" aria-label="Filtrar proyectos">
              {availableProjectCategories.map((category) => (
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
                  aria-label={project.title}
                  layout="position"
                  key={project.title}
                  initial={reduceMotion ? false : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={reveal}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                >
                  <ProjectArtwork project={project} />
                  <div className="project-content">
                    <div className="project-heading">
                      <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
                      {project.demoUrl && <span className="access-badge">Demo disponible</span>}
                    </div>
                    <p className="project-description">{project.description}</p>
                    {project.caseStudy && <details className="project-case-study">
                      <summary>Conoce el proyecto <ChevronDown size={16} aria-hidden="true" /></summary>
                      <div><span>EL DESAFÍO</span><p>{project.caseStudy.challenge}</p></div>
                      <div><span>LA SOLUCIÓN</span><p>{project.caseStudy.solution}</p></div>
                      <p className="project-case-explore"><strong>Qué puedes explorar</strong>{project.caseStudy.explore}</p>
                    </details>}
                    <div className="project-details">
                      {project.technologies.length > 0 && <div><small>TECNOLOGÍAS</small><div className="tag-list">
                        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                      </div></div>}
                      <div><small>ENFOQUE</small><div className="tag-list">
                        {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                      </div></div>
                    </div>
                    {project.demoUrl && <div className="project-actions">
                      <a className="project-demo" href={project.demoUrl} target="_blank" rel="noreferrer">
                        Ver proyecto <ExternalLink size={15} aria-hidden="true" />
                      </a>
                      <a
                        className="similar-link"
                        href={createWhatsAppUrl(`Hola, nos interesa conversar con A&D DIGITAL sobre un proyecto similar a ${project.title}.`)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Solicitar uno similar <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>}
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
                  initial={reduceMotion ? false : 'hidden'}
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

        <DeliverySection />

        <section id="equipo" className="content-section team-section">
          <div className="container">
            <SectionTitle
              eyebrow="Sobre nosotras"
              title="Las profesionales detrás de A&amp;D DIGITAL"
              description="Somos dos socias fundadoras y profesionales del área tecnológica."
            />
            <div className="founders-grid">
              {founders.map((founder, index) => (
                <motion.article
                  className="founder-card"
                  key={`${founder.name}-${index}`}
                  initial={reduceMotion ? false : 'hidden'}
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
              <p><strong>{brand.slogan}</strong><br />En A&amp;D DIGITAL somos dos profesionales del área tecnológica que unimos nuestros conocimientos y nuestra pasión por la innovación para transformar ideas en soluciones digitales. Nuestro propósito es ayudar a emprendedores, profesionales y empresas a fortalecer su presencia digital mediante el desarrollo de páginas web, software y herramientas tecnológicas adaptadas a sus necesidades.</p>
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
                Comparte los detalles de tu idea. Prepararemos un mensaje para que lo revises y lo envíes por WhatsApp o correo.
              </p>
              <div className="quote-assurance">
                <span><ShieldCheck size={19} /></span>
                <p><strong>Sin compromiso</strong><br />Revisaremos el alcance antes de definir la propuesta.</p>
              </div>
            </div>
            <QuoteForm key={`${selectedService}-${selectedPlan}`} initialService={selectedService} initialPlan={selectedPlan} />
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
                href={createWhatsAppUrl('Hola A&D DIGITAL, quisiera conversar sobre un proyecto.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> Contactar por WhatsApp <ArrowUpRight size={16} />
              </a>
              <a
                className="contact-button contact-button-email"
                href="#cotizacion"
              >
                <Mail size={18} /> Preparar correo de contacto
              </a>
              <div className="contact-socials" aria-label="LinkedIn de las fundadoras">
                {founders.filter((founder) => founder.linkedin).map((founder) => (
                  <a key={founder.name} href={founder.linkedin} target="_blank" rel="noreferrer">
                    <ExternalLink size={15} aria-hidden="true" /> LinkedIn · {founder.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#inicio" className="brand footer-brand" aria-label={`${brand.name}, volver al inicio`}>
            <BrandLogo variant="horizontal" width={220} height={68} />
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
        href={createWhatsAppUrl('Hola A&D DIGITAL, quisiera conversar sobre un proyecto.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a A&D DIGITAL por WhatsApp"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>Hablemos</span>
      </a>
    </div>
  )
}

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/servicios/:slug" element={<ServicePage />} />
    <Route path="*" element={<ServicePage />} />
  </Routes>
}
