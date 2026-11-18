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
    id: 'esencial',
    title: 'Esencial',
    service: 'Landing pages',
    amount: 180000,
    eyebrow: '01 / Tu primera presencia digital',
    description: 'Una página para presentar tu negocio, explicar tu servicio y facilitar que te contacten.',
    idealFor: 'Un servicio, una campaña o un negocio que está comenzando.',
    distinction: 'Una sola página, con el contenido justo para dar el primer paso.',
    features: ['1 página con hasta 5 secciones', 'Diseño a medida y desarrollo en React', 'Adaptación a celular, tablet y escritorio', 'Botón de WhatsApp y enlaces de contacto', 'Carga de textos e imágenes que nos entregues', '1 ronda de ajustes sobre el diseño acordado'],
    breakdown: [
      { label: 'Diseño y estructura del contenido', amount: 50000 },
      { label: 'Desarrollo de la página adaptable', amount: 90000 },
      { label: 'Enlaces y canales de contacto', amount: 20000 },
      { label: 'Pruebas y publicación inicial', amount: 20000 },
    ],
    comparison: { structure: '1 página · hasta 5 secciones', contact: 'WhatsApp y enlaces de contacto', gallery: 'Imágenes dentro de las secciones', motion: 'Transiciones básicas', interaction: 'Navegación y botones', revisions: '1 ronda' },
    cta: 'Quiero empezar',
    featured: false,
  },
  {
    id: 'profesional',
    title: 'Profesional',
    service: 'Desarrollo de páginas web',
    amount: 320000,
    eyebrow: '02 / Más espacio para tu negocio',
    description: 'Una web completa para mostrar tus servicios, proyectos y equipo, y recibir solicitudes desde la página.',
    idealFor: 'Empresas y profesionales que necesitan explicar mejor su propuesta.',
    distinction: 'Suma galería ampliable, animaciones y un formulario con envío de correo.',
    features: ['Portada con hasta 10 secciones', '1 página interior adicional', 'Galería de proyectos con imágenes ampliables', 'Animaciones de entrada y microinteracciones', 'Formulario de contacto con envío mediante EmailJS', '2 rondas de ajustes sobre el diseño acordado'],
    breakdown: [
      { label: 'Diseño personalizado y estructura', amount: 80000 },
      { label: 'Desarrollo de páginas y secciones', amount: 140000 },
      { label: 'Galería, animaciones y formulario', amount: 60000 },
      { label: 'Pruebas y publicación inicial', amount: 40000 },
    ],
    comparison: { structure: 'Portada de hasta 10 secciones + 1 página interior', contact: 'WhatsApp + formulario con envío de correo', gallery: 'Galería ampliable de proyectos', motion: 'Entradas, efectos en botones y tarjetas', interaction: 'Filtros de contenido y preguntas desplegables', revisions: '2 rondas' },
    cta: 'Hablemos de este plan',
    badge: 'Para una web como la nuestra',
    featured: true,
  },
  {
    id: 'premium',
    title: 'Premium',
    service: 'Desarrollo de páginas web',
    amount: 520000,
    eyebrow: '03 / Una experiencia más completa',
    description: 'Más páginas y recorridos de contenido para marcas con distintas líneas de servicio o catálogos informativos.',
    idealFor: 'Negocios con más contenido y necesidades de interacción específicas.',
    distinction: 'Amplía la estructura y personaliza cómo las personas exploran tus servicios.',
    features: ['Portada con hasta 10 secciones', 'Hasta 4 páginas interiores', 'Todo lo del Profesional, con mayor alcance', 'Catálogo informativo con categorías y filtros', 'Formularios con campos y validaciones a medida', '3 rondas de ajustes sobre el diseño acordado'],
    breakdown: [
      { label: 'Arquitectura de contenido y diseño', amount: 120000 },
      { label: 'Desarrollo del sitio multipágina', amount: 240000 },
      { label: 'Catálogo, filtros y formularios', amount: 100000 },
      { label: 'Pruebas y publicación inicial', amount: 60000 },
    ],
    comparison: { structure: 'Portada de hasta 10 secciones + hasta 4 páginas interiores', contact: 'Formularios personalizados con envío de correo', gallery: 'Galería + catálogo informativo por categorías', motion: 'Animaciones e interacciones adaptadas al sitio', interaction: 'Filtros y recorridos de contenido personalizados', revisions: '3 rondas' },
    cta: 'Quiero una web más completa',
    featured: false,
  },
]

export const formatCLP = (amount) => new Intl.NumberFormat('es-CL', {
  style: 'currency', currency: 'CLP', maximumFractionDigits: 0,
}).format(amount)

export const planComparisonRows = [
  { key: 'structure', label: 'Páginas y contenido' },
  { key: 'contact', label: 'Contacto' },
  { key: 'gallery', label: 'Imágenes y proyectos' },
  { key: 'motion', label: 'Animaciones' },
  { key: 'interaction', label: 'Interacción' },
  { key: 'revisions', label: 'Ajustes incluidos' },
]

export const complementaryPlans = [
  { title: 'Menú digital', service: 'Menús digitales', amount: 60000, description: 'Una carta digital de hasta 30 productos, organizada por categorías, con enlace para compartir y código QR. Sin pedidos ni pagos online.' },
  { title: 'Portafolio personal', service: 'Portafolios profesionales', amount: 120000, description: 'Una página con hasta 3 secciones: presentación, hasta 6 trabajos y contacto. Contenido entregado por el cliente.' },
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

