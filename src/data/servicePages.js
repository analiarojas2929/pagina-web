export const servicePages = [
  {
    slug: 'landing-pages',
    service: 'Landing pages',
    title: 'Landing pages para presentar tu negocio',
    description: 'Diseño y desarrollo de landing pages en Chile: una página adaptable para explicar tu servicio, presentar tu oferta y facilitar el contacto.',
    audience: 'Para un servicio específico, una campaña o un emprendimiento que necesita una presencia digital clara.',
    deliverables: ['Una página con hasta 5 secciones para el plan Esencial', 'Diseño adaptado a tu identidad y desarrollo en React', 'Versión para celular, tablet y escritorio', 'Carga inicial de los textos e imágenes que nos entregues', 'Botones de contacto, revisión y publicación inicial'],
    planIds: ['esencial'],
    scope: 'El alcance inicial contempla una página informativa. Formularios con envío automático, nuevas páginas e integraciones se definen en una propuesta adicional.',
    faq: [
      { question: '¿Qué contenido necesito entregar?', answer: 'Tu logo si ya tienes uno, la descripción de tu servicio, fotografías o imágenes con permiso de uso y tus datos de contacto. Organizamos ese contenido para construir la página.' },
      { question: '¿Incluye dominio y hosting?', answer: 'La publicación inicial está incluida en el desarrollo. El dominio y los servicios de alojamiento o terceros se contratan y cotizan por separado; sus cuentas quedan a tu nombre.' },
    ],
  },
  {
    slug: 'desarrollo-web',
    service: 'Desarrollo de páginas web',
    title: 'Páginas web para mostrar lo que hace tu empresa',
    description: 'Desarrollo de páginas web a medida en Chile: servicios, equipo, proyectos y formularios en una experiencia adaptable a celular y escritorio.',
    audience: 'Para empresas y profesionales con varios servicios, proyectos que mostrar y más información que comunicar.',
    deliverables: ['Estructura de contenido y diseño personalizado', 'Páginas y secciones según el plan acordado', 'Galería de proyectos y presentación de servicios', 'Animaciones cuidadas y navegación adaptable', 'Formularios y canales de contacto definidos en la propuesta'],
    planIds: ['profesional', 'premium'],
    scope: 'El Profesional contempla una portada de hasta 10 secciones y una página interior. El Premium amplía el alcance a hasta 4 páginas interiores. Tiendas, pagos, usuarios y bases de datos requieren una propuesta específica.',
    faq: [
      { question: '¿Podré solicitar cambios?', answer: 'Sí. El Profesional incluye 2 rondas de ajustes y el Premium 3, sobre el alcance aprobado. Agrupamos tus comentarios en cada ronda; funciones nuevas se cotizan por separado.' },
      { question: '¿Cómo funciona el correo del formulario?', answer: 'Podemos conectar un servicio como EmailJS para recibir consultas desde la web. La cuenta se configura para tu proyecto y está sujeta a los límites y condiciones del proveedor.' },
    ],
  },
  {
    slug: 'software-a-medida',
    service: 'Software a medida',
    title: 'Software a medida para los procesos de tu negocio',
    description: 'Diseño y desarrollo de software a medida en Chile. Definimos contigo los procesos, las funciones y las integraciones que necesita tu negocio.',
    audience: 'Para negocios que necesitan resolver un proceso específico, organizar información o conectar herramientas.',
    deliverables: ['Levantamiento de necesidades y definición del alcance', 'Propuesta de pantallas y recorridos de uso', 'Desarrollo de las funcionalidades acordadas', 'Evaluación de cuentas de usuario, datos e integraciones', 'Pruebas y entrega documentada del proyecto'],
    planIds: [],
    scope: 'Se cotiza según funciones, datos, usuarios e integraciones. Los planes de páginas web no incluyen automáticamente un sistema de gestión, una aplicación con base de datos ni una tienda con pagos.',
    faq: [
      { question: '¿Por qué no hay un precio único?', answer: 'El trabajo cambia según el número de pantallas, los permisos, los datos y los servicios que debamos conectar. Primero definimos el problema y luego entregamos una propuesta con alcance y valor.' },
      { question: '¿Se puede desarrollar por etapas?', answer: 'Podemos acordar una primera versión con las funciones prioritarias y separar las siguientes mejoras en etapas. Cada etapa se define y cotiza antes de comenzar.' },
    ],
  },
]
