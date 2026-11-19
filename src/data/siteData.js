import { brand } from './brand'
import analiaRojasPhoto from '../assets/analia-rojas.jpeg'
import damarisTapiaPhoto from '../assets/damaris-tapia.jpeg'
import portalVehicularImage from '../assets/portal-vehicular.webp'
import mamaSoyYoImage from '../assets/mama-soy-yo.webp'
import fitzoneImage from '../assets/fitzone.webp'

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

export { brand }

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
    category: 'web',
    planId: 'profesional',
    idealFor: 'Empresas que necesitan mostrar sus servicios, proyectos y equipo.',
    slug: 'desarrollo-web',
    description: 'Presenta tu empresa en una web clara, con espacio para explicar lo que haces y recibir nuevas consultas.',
    includes: ['Estructura y diseño a medida', 'Galería y secciones según tu plan', 'Formulario y canales de contacto'],
  },
  {
    icon: LayoutTemplate,
    title: 'Landing pages',
    category: 'web',
    planId: 'esencial',
    idealFor: 'Un servicio, una campaña o el lanzamiento de tu emprendimiento.',
    slug: 'landing-pages',
    description: 'Concentra tu oferta en una sola página, con un mensaje directo y un camino sencillo para contactarte.',
    includes: ['Una página con un objetivo claro', 'Adaptación a celular y escritorio', 'Botones y llamados a la acción'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Portafolios profesionales',
    category: 'web',
    idealFor: 'Profesionales independientes, creativos y personas que quieren mostrar su trabajo.',
    description: 'Reúne tu experiencia y tus mejores trabajos en un espacio propio que puedas compartir con clientes o empleadores.',
    includes: ['Presentación y perfil profesional', 'Selección de trabajos y proyectos', 'Enlaces de contacto y redes'],
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas online',
    category: 'business',
    idealFor: 'Negocios que necesitan ofrecer productos y definir su proceso de venta online.',
    description: 'Organiza tus productos y construye un recorrido de compra acorde a cómo funciona tu negocio.',
    includes: ['Catálogo y categorías de productos', 'Flujo de pedidos según alcance', 'Pagos e integraciones a evaluar'],
  },
  {
    icon: Code2,
    title: 'Software a medida',
    category: 'business',
    idealFor: 'Procesos específicos que necesitan una herramienta diseñada para tu operación.',
    slug: 'software-a-medida',
    description: 'Transforma una necesidad concreta en una aplicación con las pantallas y funciones que tu equipo realmente utiliza.',
    includes: ['Definición de procesos y requisitos', 'Pantallas y funcionalidades a medida', 'Pruebas y entrega por alcance'],
  },
  {
    icon: MonitorCog,
    title: 'Sistemas de gestión',
    category: 'business',
    idealFor: 'Equipos que necesitan organizar información y dar seguimiento a sus tareas.',
    description: 'Centraliza la información de tu operación con flujos de trabajo definidos para tu negocio.',
    includes: ['Registro y consulta de información', 'Roles y permisos según necesidad', 'Reportes y flujos a definir'],
  },
  {
    icon: BarChart3,
    title: 'Menús digitales',
    category: 'business',
    idealFor: 'Restaurantes, cafeterías y negocios que quieren compartir su carta fácilmente.',
    description: 'Tu carta, organizada y accesible desde el celular mediante un enlace o código QR.',
    includes: ['Productos organizados por categoría', 'Diseño pensado para celular', 'Enlace compartible y código QR'],
  },
  {
    icon: LifeBuoy,
    title: 'Mantenimiento web',
    category: 'support',
    idealFor: 'Negocios que ya tienen una web y necesitan mantenerla al día.',
    description: 'Actualiza el contenido y revisa el funcionamiento de tu sitio con un plan de trabajo definido.',
    includes: ['Revisión inicial de tu sitio', 'Actualizaciones y ajustes acordados', 'Soporte con alcance definido'],
  },
]

export const serviceCategories = [
  { id: 'all', label: 'Todos los servicios' },
  { id: 'web', label: 'Web y presencia digital' },
  { id: 'business', label: 'Ventas y gestión' },
  { id: 'support', label: 'Soporte y mantenimiento' },
]

export { plans, formatCLP, planComparisonRows, complementaryPlans } from './pricingData'

export const portfolioCategories = [
  { id: 'agency', label: 'Proyectos de la agencia' },
  { id: 'founders', label: 'Experiencia de las fundadoras' },
  { id: 'demos', label: 'Demos y prototipos' },
]

export const portfolio = [
  {
    title: 'FitZone Gym',
    caseStudy: {
      challenge: 'Reunir la información del gimnasio y facilitar que una persona encuentre cómo comenzar a entrenar.',
      solution: 'Una web con planes, clases y horarios, acompañada de un portal de demostración con rutinas y seguimiento del progreso.',
      explore: 'Recorre los planes, consulta las clases y conoce la propuesta del portal de usuario.',
    },
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
    caseStudy: {
      challenge: 'Organizar la presentación de vehículos en un sitio orientado a su búsqueda y consulta.',
      solution: 'Un marketplace desarrollado con Next.js, con una portada y un catálogo para explorar la oferta de vehículos.',
      explore: 'Conoce la estructura del portal y la presentación del catálogo de vehículos.',
    },
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
    caseStudy: {
      challenge: 'Presentar un espacio de bienestar para madres de forma cercana, clara y fácil de recorrer.',
      solution: 'Una plataforma que organiza la propuesta de bienestar, sus servicios y talleres, con una identidad visual cálida.',
      explore: 'Explora la presentación del espacio, los servicios y los talleres disponibles en la web.',
    },
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
    answer: 'Elige un plan o completa el formulario con tu idea. Puedes revisar la solicitud y enviarla por WhatsApp o por correo desde la página. El plan elegido se incluye en el mensaje.',
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

