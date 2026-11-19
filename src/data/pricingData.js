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
