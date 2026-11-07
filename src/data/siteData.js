import {
  BriefcaseBusiness,
  Code2,
  Globe,
  Palette,
  ShoppingCart,
  Sparkles,
  Zap,
} from 'lucide-react'

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Cotización', href: '#cotizacion' },
  { label: 'Contacto', href: '#contacto' },
]

export const services = [
  {
    icon: Code2,
    title: 'Desarrollo de software',
    description:
      'Soluciones a medida para automatizar procesos, mejorar productividad y escalar tu negocio.',
  },
  {
    icon: Globe,
    title: 'Páginas web profesionales',
    description:
      'Sitios modernos, rápidos y optimizados para generar confianza, leads y presencia digital sólida.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Portafolios personales',
    description:
      'Diseños premium para profesionales, freelances y especialistas que buscan destacar en línea.',
  },
  {
    icon: ShoppingCart,
    title: 'Tiendas online',
    description:
      'E-commerce funcional, atractivo y pensado para vender mejor con una experiencia fluida.',
  },
  {
    icon: Sparkles,
    title: 'Sistemas personalizados',
    description:
      'Plataformas adaptadas a tus procesos internos, procesos, usuarios y objetivos empresariales.',
  },
  {
    icon: Zap,
    title: 'Optimización y soporte',
    description:
      'Mejoras continuas, mantenimiento y ajustes para mantener tu producto siempre actualizado y eficiente.',
  },
]

export const plans = [
  {
    name: 'Básico',
    price: 'Desde $350',
    description: 'Ideal para un sitio simple y claro.',
    features: ['Landing page', 'Diseño responsive', 'Formulario de contacto', 'SEO básico', 'Soporte inicial'],
    highlighted: false,
  },
  {
    name: 'Profesional',
    price: 'Desde $950',
    description: 'Perfecto para negocios con mayor presencia digital.',
    features: ['Sitio completo', 'Secciones de servicios', 'Portafolio y testimonios', 'Integración de WhatsApp', 'Optimización UX/UI'],
    highlighted: true,
  },
  {
    name: 'Personalizado',
    price: 'A medida',
    description: 'Solución exclusiva para proyectos específicos.',
    features: ['Sistema a medida', 'Integraciones personalizadas', 'Dashboards y gestión', 'Escalabilidad', 'Soporte estratégico'],
    highlighted: false,
  },
]

export const portfolio = [
  {
    category: 'E-commerce',
    title: 'StoreNova',
    description: 'Marketplace elegante para productos premium con flujo de ventas y diseño orientado a conversión.',
  },
  {
    category: 'Portafolio',
    title: 'Marta Studio',
    description: 'Sitio personal para fotógrafa con narración visual, galería premium y formularios integrados.',
  },
  {
    category: 'Sistema',
    title: 'FlowOps',
    description: 'Dashboard administrativo para gestión interna, reportes y automatización de procesos del equipo.',
  },
  {
    category: 'Negocio',
    title: 'NorthBrand',
    description: 'Landing experience para marca con estrategia digital, servicios y generación de leads.',
  },
]

export const highlights = [
  'Más de 5 años de experiencia',
  'Soluciones personalizadas y escalables',
  'Enfoque en conversión, diseño y performance',
]

export const contactLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  { label: 'WhatsApp', href: 'https://wa.me/5491123456789', icon: 'WA' },
]

export const whatsappNumber = '5491123456789'

export const quoteServices = [
  'Páginas web profesionales',
  'Portafolio personal',
  'Tienda online',
  'Sistema personalizado',
  'Desarrollo de software',
  'Otro',
]

export const stats = [
  { value: '120+', label: 'Proyectos entregados' },
  { value: '97%', label: 'Satisfacción de clientes' },
  { value: '24/7', label: 'Atención y soporte' },
]
