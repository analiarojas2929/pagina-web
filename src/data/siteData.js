import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Globe2,
  LayoutTemplate,
  LifeBuoy,
  MonitorCog,
  ShoppingBag,
} from 'lucide-react'

export const brand = {
  name: 'A&D DIGTAL',
  slogan: 'Soluciones digitales que impulsan tus ideas',
  whatsappNumber: '56949275045',
  location: 'Valparaíso, Chile',
}

export const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#planes' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Metodología', href: '#proceso' },
  { label: 'Equipo', href: '#equipo' },
]

export const services = [
  {
    icon: Globe2,
    title: 'Desarrollo de páginas web',
    description: 'Sitios profesionales para comunicar tu propuesta y generar confianza online.',
    includes: ['Diseño adaptable', 'Secciones a la medida', 'Integración de contacto'],
  },
  {
    icon: LayoutTemplate,
    title: 'Landing pages',
    description: 'Páginas enfocadas en presentar una oferta y facilitar el contacto con tus clientes.',
    includes: ['Estructura enfocada en conversión', 'Diseño responsive', 'Llamados a la acción'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Portafolios profesionales',
    description: 'Una presencia online para mostrar tu trabajo, experiencia y formas de contacto.',
    includes: ['Perfil y presentación', 'Galería o proyectos', 'Enlaces de contacto'],
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas online',
    description: 'Experiencias de compra digitales ajustadas a tus productos y operación.',
    includes: ['Catálogo y estructura a definir', 'Flujo de compra según alcance', 'Integraciones a evaluar'],
  },
  {
    icon: Code2,
    title: 'Software a medida',
    description: 'Desarrollo de soluciones digitales según los requerimientos de tu negocio.',
    includes: ['Levantamiento de requerimientos', 'Funcionalidades personalizadas', 'Alcance definido en cotización'],
  },
  {
    icon: MonitorCog,
    title: 'Sistemas de gestión',
    description: 'Herramientas digitales que responden a procesos y necesidades concretas.',
    includes: ['Flujos de trabajo a medida', 'Gestión según requerimientos', 'Propuesta por alcance'],
  },
  {
    icon: BarChart3,
    title: 'Menús digitales',
    description: 'Presenta tus productos y servicios en un formato fácil de consultar desde el celular.',
    includes: ['Diseño móvil', 'Secciones de productos o servicios', 'Acceso mediante enlace o QR'],
  },
  {
    icon: LifeBuoy,
    title: 'Mantenimiento web',
    description: 'Acompañamiento para mantener tu sitio actualizado y funcionando.',
    includes: ['Revisión según necesidades', 'Ajustes acordados', 'Soporte por cotización'],
  },
]

export const plans = [
  {
    title: 'Menú digital',
    service: 'Menús digitales',
    price: 'Desde $35.000 CLP',
    description: 'Para mostrar tu oferta de forma clara y accesible.',
    featured: false,
  },
  {
    title: 'Portafolio profesional',
    service: 'Portafolios profesionales',
    price: 'Desde $60.000 CLP',
    description: 'Presenta tu trabajo y facilita que te contacten.',
    featured: false,
  },
  {
    title: 'Landing page',
    service: 'Landing pages',
    price: 'Desde $80.000 CLP',
    description: 'Una página enfocada en una oferta o servicio.',
    featured: true,
  },
  {
    title: 'Página web empresarial',
    service: 'Desarrollo de páginas web',
    price: 'Desde $120.000 CLP',
    description: 'Una presencia digital profesional para tu empresa.',
    featured: false,
  },
  {
    title: 'Software personalizado',
    service: 'Software a medida',
    price: 'Según cotización',
    description: 'Una propuesta a medida del alcance y las funcionalidades.',
    featured: false,
  },
]

export const portfolioCategories = [
  { id: 'agency', label: 'Proyectos de la agencia' },
  { id: 'founders', label: 'Experiencia de las fundadoras' },
  { id: 'demos', label: 'Demos comerciales' },
]

export const portfolio = [
  {
    title: 'PortalVehicular',
    category: 'Marketplace',
    description: 'Marketplace desarrollado con Next.js.',
    technologies: ['Next.js'],
    features: ['Plataforma marketplace', 'Desarrollo con Next.js'],
    group: 'founders',
    demoUrl: '',
    demoLabel: '',
    image: '',
  },
  {
    title: 'Tu Fiesta Soñada',
    category: 'Planificación de eventos',
    description: 'Plataforma de planificación de eventos desarrollada con React y APIs.',
    technologies: ['React', 'APIs'],
    features: ['Planificación de eventos', 'Integración con APIs'],
    group: 'founders',
    demoUrl: 'https://tufiestasonada-test.devextreme.cl/VistasClientes/Bienvenida',
    demoLabel: 'Entorno de prueba; puede solicitar acceso o iniciar sesión.',
    image: '',
  },
  {
    title: 'MamáSoyYo',
    category: 'Bienestar',
    description: 'Plataforma de bienestar y talleres.',
    technologies: [],
    features: ['Bienestar', 'Talleres'],
    group: 'founders',
    demoUrl: '',
    demoLabel: '',
    image: '',
  },
  {
    title: 'Data Science Portfolio',
    category: 'Ciencia de datos',
    description: 'Portafolio de ciencia de datos con React, Flask, Python y visualización de datos.',
    technologies: ['React', 'Flask', 'Python'],
    features: ['Ciencia de datos', 'Visualización de datos'],
    group: 'founders',
    demoUrl: 'https://datascience-portafolio.web.app/data-analytics',
    demoLabel: '',
    image: '',
  },
  {
    title: 'FCnoLimit',
    category: 'Aplicación',
    description: 'Aplicación desarrollada con Ionic y Firebase.',
    technologies: ['Ionic', 'Firebase'],
    features: ['Aplicación', 'Integración con Firebase'],
    group: 'founders',
    demoUrl: '',
    demoLabel: '',
    image: '',
  },
]

export const founders = [
  {
    name: 'Analia Rojas',
    initials: 'AR',
    role: 'Ingeniera en Informática',
    position: 'Co-fundadora de A&D DIGTAL',
    specialties: [],
    bio: 'Ingeniera en Informática y co-fundadora de A&D DIGTAL.',
    photo: '',
    linkedin: '',
    github: '',
  },
  {
    name: 'Damaris',
    initials: 'D',
    role: 'Analista Programador Computacional',
    position: 'Co-fundadora de A&D DIGTAL',
    specialties: [],
    bio: 'Analista Programador Computacional y co-fundadora de A&D DIGTAL.',
    photo: '',
    linkedin: '',
    github: '',
  },
]

export const workflow = [
  { number: '01', title: 'Conversamos', description: 'Entendemos tu negocio, tu idea y qué necesitas resolver.' },
  { number: '02', title: 'Definimos el alcance', description: 'Acordamos funcionalidades, prioridades, tiempos y presupuesto.' },
  { number: '03', title: 'Diseñamos y desarrollamos', description: 'Construimos una solución personalizada y te mantenemos al tanto del avance.' },
  { number: '04', title: 'Revisamos', description: 'Probamos la solución y revisamos los ajustes incluidos en el alcance.' },
  { number: '05', title: 'Publicamos', description: 'Preparamos la entrega y puesta en marcha según lo acordado.' },
]

export const faqs = [
  {
    question: '¿Cómo se define el precio final?',
    answer: 'Los valores publicados son iniciales. La cotización final depende del alcance, las funcionalidades, el contenido y las integraciones requeridas.',
  },
  {
    question: '¿El dominio y el hosting están incluidos?',
    answer: 'No. El dominio, el hosting y los servicios externos se cotizan por separado según el proveedor y las necesidades del proyecto.',
  },
  {
    question: '¿Trabajan solo con clientes de Valparaíso?',
    answer: 'Estamos en Valparaíso, Chile, y podemos trabajar de forma remota con clientes de otras regiones.',
  },
  {
    question: '¿Puedo solicitar cambios durante el desarrollo?',
    answer: 'Sí. Revisamos avances y comentarios según las etapas y el alcance acordados para el proyecto.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: 'Completa el formulario con tu idea. Se preparará un mensaje para WhatsApp y podrás revisarlo antes de enviarlo.',
  },
]

export const quoteServices = [
  ...services.map(({ title }) => title),
  'Otro / necesito orientación',
]

export const budgetOptions = [
  'Menos de $60.000 CLP',
  '$60.000 – $120.000 CLP',
  '$120.000 – $300.000 CLP',
  '$300.000 – $600.000 CLP',
  'Más de $600.000 CLP',
  'Aún no lo sé',
]

export const createWhatsAppUrl = (message) => {
  const recipient = brand.whatsappNumber.replace(/\D/g, '')
  const baseUrl = recipient ? `https://wa.me/${recipient}` : 'https://wa.me/'
  return `${baseUrl}?text=${encodeURIComponent(message)}`
}
