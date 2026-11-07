import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Code,
  Compass,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import QuoteForm from './components/QuoteForm'
import SectionTitle from './components/SectionTitle'
import {
  contactLinks,
  highlights,
  navItems,
  plans,
  portfolio,
  services,
  stats,
  whatsappNumber,
} from './data/siteData'
import './App.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  return (
    <div className="min-h-screen bg-[#050d18] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 font-black text-slate-950">
              AR
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Analia Rojas</p>
              <p className="text-sm font-medium text-white">Soluciones Digitales</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#cotizacion"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Cotizar proyecto
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-mesh">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.2),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <Sparkles size={14} />
                Tecnología con propósito
              </span>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Desarrollo digital que transforma ideas en resultados reales.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Soy Analia Rojas, Ingeniera en Informática, y diseño soluciones web, sistemas y experiencias digitales que impulsan marcas y negocios.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#cotizacion"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Solicitar cotización
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#portafolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  Ver portafolio
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-300">
                {highlights.map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <BadgeCheck className="text-cyan-300" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-5 shadow-glow backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Dashboard</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">Proyecto en crecimiento</h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      Online
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="mt-2 text-xs text-slate-300">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-300">Estrategia actual</p>
                        <p className="mt-2 text-xl font-semibold text-white">Creación de presencia digital</p>
                      </div>
                      <Rocket className="text-cyan-300" size={28} />
                    </div>

                    <div className="mt-6 space-y-4">
                      {[
                        'Diseño UX/UI premium',
                        'Integración de ventas y lead gen',
                        'Automatización y sistemas eficientes',
                      ].map((item, index) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950">
                            {index + 1}
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Servicios"
            title="Soluciones digitales pensadas para crecer"
            description="Desde sitios web profesionales hasta sistemas a medida, cada proyecto se diseña con estrategia, creatividad y tecnología sólida."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-3 text-cyan-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="planes" className="bg-slate-950/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Planes"
              title="Opciones para cada etapa de tu negocio"
              description="Elige la estructura que mejor se adapte a tus objetivos, presupuesto y nivel de crecimiento actual."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] border p-6 ${
                    plan.highlighted
                      ? 'border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-violet-500/10 shadow-glow'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{plan.name}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                  </div>
                  <p className="mt-4 text-slate-300">{plan.description}</p>

                  <ul className="mt-6 space-y-3 text-slate-200">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                          <BadgeCheck size={14} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cotizacion"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-slate-950'
                        : 'border border-white/15 bg-white/5 text-white hover:border-cyan-400/40'
                    }`}
                  >
                    Elegir plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Portafolio"
            title="Proyectos con impacto visual y funcional"
            description="Casos que representan la combinación perfecta entre estrategia digital, diseño moderno y experiencias orientadas a resultados."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 p-6">
                  <div className="flex h-full items-end justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{project.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <Star className="text-cyan-300" size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-300">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="bg-slate-950/60 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-glow">
              <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 p-5">
                <div className="inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Sobre mí
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-2xl font-black text-slate-950">
                    AR
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Ingeniera en Informática</p>
                    <h3 className="mt-1 text-2xl font-bold text-white">Analia Rojas</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-3"><MapPin size={16} className="text-cyan-300" /> Argentina</div>
                  <div className="flex items-center gap-3"><Mail size={16} className="text-cyan-300" /> analia@solucionesdigitales.com</div>
                  <div className="flex items-center gap-3"><Phone size={16} className="text-cyan-300" /> +54 9 11 2345 6789</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <SectionTitle
                eyebrow="Perfil"
                title="Diseño soluciones con estrategia, claridad y tecnología de alto nivel."
              />

              <div className="space-y-5 text-lg text-slate-300">
                <p>
                  Me apasiona crear experiencias digitales que conecten con la audiencia, generen confianza y apoyen el crecimiento real de cada negocio.
                </p>
                <p>
                  Mi enfoque combina diseño, desarrollo, análisis de negocio y atención a la experiencia de usuario para entregar productos funcionales, elegantes y listos para escalar.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Code className="text-cyan-300" size={22} />
                  <h4 className="mt-4 text-lg font-semibold text-white">Tecnología</h4>
                  <p className="mt-2 text-slate-300">React, Vite, Tailwind, JavaScript, lógica empresarial y front-end moderno.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Compass className="text-cyan-300" size={22} />
                  <h4 className="mt-4 text-lg font-semibold text-white">Estrategia</h4>
                  <p className="mt-2 text-slate-300">Diseño centrado en objetivos, conversiones, usabilidad y mejor experiencia digital.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Cotización"
                title="Hablemos sobre tu próximo proyecto"
                description="Si tu idea necesita una presencia web sólida, una mejor experiencia o un sistema a medida, te ayudo a definir la mejor solución."
              />

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="mt-1 text-cyan-300" size={22} />
                  <div>
                    <h3 className="font-semibold text-white">Proceso claro y transparente</h3>
                    <p className="mt-2 text-slate-300">Te acompaño desde la estrategia inicial hasta la entrega final y el soporte posterior.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Briefcase className="mt-1 text-cyan-300" size={22} />
                  <div>
                    <h3 className="font-semibold text-white">Solución a medida</h3>
                    <p className="mt-2 text-slate-300">Cada proyecto se adapta a tu negocio, objetivos, plazo y presupuesto.</p>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </section>

        <section id="contacto" className="bg-slate-950/70 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Contacto"
              title="Conectemos para llevar tu proyecto al siguiente nivel"
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/25 to-violet-500/25 font-bold text-cyan-300">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-white">Analia Rojas | Soluciones Digitales</p>
            <p className="mt-2">Diseño, tecnología y estrategia para hacer crecer tu presencia digital.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#inicio" className="transition hover:text-cyan-300">Inicio</a>
            <a href="#servicios" className="transition hover:text-cyan-300">Servicios</a>
            <a href="#portafolio" className="transition hover:text-cyan-300">Portafolio</a>
            <a href="#cotizacion" className="transition hover:text-cyan-300">Cotización</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
