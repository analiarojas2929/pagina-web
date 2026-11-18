import analiaRojasPhoto from '../assets/analia-rojas.jpeg'
import damarisTapiaPhoto from '../assets/damaris-tapia.jpeg'
import portalVehicularImage from '../assets/portal-vehicular.png'
import mamaSoyYoImage from '../assets/mama-soy-yo.png'
import fitzoneImage from '../assets/fitzone.png'

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
  name: 'A&D DIGITAL',
  slogan: 'Soluciones digitales que impulsan tus ideas',
  email: 'ayd.digital.vregion@gmail.com',
  whatsappNumber: '56984930469',
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
  { id: 'demos', label: 'Demos y prototipos' },
]

export const portfolio = [
  {
    title: 'FitZone Gym',
    category: 'Web para gimnasio',
    description: 'Sitio de gimnasio con planes, clases y horarios, más un portal de demostración con rutinas, calendario y seguimiento del progreso.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    features: ['Planes y clases', 'Horarios de entrenamiento', 'Portal de usuario'],
    group: 'founders',
    isDemo: true,
    repositoryUrl: 'https://github.com/analiarojas2929/gimnasio',
    demoUrl: 'https://gimnasiofitzone.netlify.app/',
    demoLabel: 'El acceso y registro del portal son de demostración.',
    image: fitzoneImage,
  },
  {
    title: 'PortalVehicular',
    category: 'Marketplace',
    description: 'Marketplace desarrollado con Next.js.',
    technologies: ['Next.js'],
    features: ['Plataforma marketplace', 'Desarrollo con Next.js'],
    group: 'founders',
    demoUrl: 'https://portal-vehicular.azurewebsites.net/',
    demoLabel: '',
    image: portalVehicularImage,
  },
  {
    title: 'MamáSoyYo',
    category: 'Bienestar',
    description: 'Plataforma de bienestar y talleres.',
    technologies: [],
    features: ['Bienestar', 'Talleres'],
    group: 'founders',
    demoUrl: 'https://mamasoyyo.web.app/',
    demoLabel: '',
    image: mamaSoyYoImage,
  },
  {
    title: 'BarberStyle',
    category: 'Web para barbería',
    description: 'Prototipo de sitio para barbería con catálogo de servicios, galería y un flujo de reserva en cuatro pasos.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: ['Selección de servicio y barbero', 'Fecha y hora', 'Diseño adaptable'],
    group: 'founders',
    isDemo: true,
    repositoryUrl: 'https://github.com/analiarojas2929/barberia-app',
    demoUrl: '',
    demoLabel: 'Prototipo de interfaz; las reservas no están conectadas a un servidor.',
    image: '',
  },
  {
    title: 'Sistema de Reservas Online',
    category: 'Reservas y atención al cliente',
    description: 'Demo de reserva con calendario interactivo, selección de horario y un resumen de confirmación.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: ['Calendario interactivo', 'Validación del formulario', 'Resumen de reserva'],
    group: 'founders',
    isDemo: true,
    repositoryUrl: 'https://github.com/analiarojas2929/sistema-reservas-online',
    demoUrl: '',
    demoLabel: 'Demo de interfaz; las reservas no se guardan en una base de datos.',
    image: '',
  },
  {
    title: 'NutriBalance',
    category: 'Aplicación móvil',
    description: 'MVP de seguimiento nutricional con diario de comidas, registro de agua y gráficas de peso. Guarda la información localmente.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    features: ['Diario de comidas', 'Seguimiento de hábitos', 'Almacenamiento local'],
    group: 'founders',
    isDemo: true,
    repositoryUrl: 'https://github.com/analiarojas2929/NutriBalance',
    demoUrl: '',
    demoLabel: 'MVP en desarrollo; la sincronización automática en la nube aún no está activada.',
    image: '',
  },
]

export const founders = [
  {
    name: 'Analia Rojas',
    initials: 'AR',
    role: 'Ingeniera en Informática',
    position: 'Cofundadora de A&D DIGITAL',
    specialties: [
      'Desarrollo Front-End',
      'Aplicaciones web',
      'Gestión de proyectos TI',
      'UX/UI',
      'Integración de APIs',
      'Cloud Computing',
      'Data Science',
    ],
    bio: 'Profesional enfocada en el desarrollo de soluciones digitales, combinando conocimientos de programación, diseño de interfaces y gestión de proyectos tecnológicos para transformar necesidades de negocio en productos funcionales.',
    photo: analiaRojasPhoto,
    linkedin: 'https://www.linkedin.com/in/analia-rojas-araya-056349205/',
    github: 'https://github.com/analiarojas2929',
  },
  {
    name: 'Damaris Tapia',
    initials: 'D',
    role: 'Analista Programador Computacional',
    position: 'Cofundadora de A&D DIGITAL',
    specialties: [
      'Desarrollo Back-End',
      'Bases de datos',
      'Diseño y modelado de datos',
      'Lógica de negocio',
      'Integración de sistemas',
      'Desarrollo de software',
    ],
    bio: 'Profesional enfocada en el desarrollo Back-End y la gestión de bases de datos, con experiencia en la implementación de lógica de negocio, estructuración de información y desarrollo de sistemas tecnológicos. Su enfoque está orientado a construir soluciones funcionales, eficientes y adaptadas a las necesidades de cada proyecto.',
    photo: damarisTapiaPhoto,
    linkedin: 'https://www.linkedin.com/in/damaris-tapia-nu%C3%B1ez-07b427223/',
    github: 'https://github.com/damaristapia777-crypto',
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

