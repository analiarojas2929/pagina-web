import { brand } from './brand.js'
import { formatCLP, plans } from './pricingData.js'
import { servicePages } from './servicePages.js'

export const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
export const serviceURL = service => `https://ayd-digital.cl/servicios/${service.slug}/`

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', name: service.service,
    description: service.description, url: serviceURL(service),
    areaServed: { '@type': 'Country', name: 'Chile' },
    provider: { '@type': 'Organization', '@id': 'https://ayd-digital.cl/#organization', name: brand.name, url: 'https://ayd-digital.cl/' },
  }
}

export function renderServicePage(service) {
  const quote = `/?servicio=${encodeURIComponent(service.slug)}#cotizacion`
  const offers = plans.filter(plan => service.planIds.includes(plan.id))
  return `<div class="service-page">
    <header class="service-page-header"><div class="container"><a class="service-page-brand" href="/" aria-label="${escapeHTML(brand.name)}, inicio"><img src="/assets/logo-ayd-digital-dark.png" alt="${escapeHTML(brand.name)}" width="232" height="72"></a><nav aria-label="Navegación del servicio"><a href="/#proyectos">Proyectos</a><a class="service-page-cta" href="${quote}">Cotizar este servicio ↗</a></nav></div></header>
    <main>
      <section class="service-page-hero container"><nav class="service-breadcrumb" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">/</span><span>${escapeHTML(service.service)}</span></nav><p class="eyebrow">SERVICIOS DE A&amp;D DIGITAL</p><h1>${escapeHTML(service.title)}</h1><p class="service-page-lead">${escapeHTML(service.description)}</p><p class="service-page-audience">${escapeHTML(service.audience)}</p><a href="${quote}" class="service-page-cta">Conversemos sobre tu proyecto ↗</a></section>
      <section class="service-page-scope container" aria-labelledby="scope-title"><div><p class="eyebrow">EL TRABAJO INCLUIDO</p><h2 id="scope-title">Qué podemos construir contigo</h2><ul>${service.deliverables.map(text => `<li><span aria-hidden="true">✓</span>${escapeHTML(text)}</li>`).join('')}</ul></div><aside><h2>Valor de referencia</h2>${offers.length ? offers.map(plan => `<p class="service-page-price"><span>${escapeHTML(plan.title)}</span><strong>Desde ${escapeHTML(formatCLP(plan.amount))} CLP</strong></p>`).join('') : '<p class="service-page-custom">Cotización según alcance</p>'}<p>${escapeHTML(service.scope)}</p><a href="/#planes">Comparar todos los planes ↗</a></aside></section>
      <section class="service-page-faq container" aria-labelledby="service-faq-title"><h2 id="service-faq-title">Antes de comenzar</h2>${service.faq.map(item => `<details><summary>${escapeHTML(item.question)}</summary><p>${escapeHTML(item.answer)}</p></details>`).join('')}</section>
      <section class="service-page-related container" aria-labelledby="related-title"><h2 id="related-title">Otros servicios para tu negocio</h2><div>${servicePages.filter(item => item.slug !== service.slug).map(item => `<a href="/servicios/${item.slug}/">${escapeHTML(item.service)} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>
    </main><footer class="service-page-footer"><div class="container"><span>${escapeHTML(brand.name)} · ${escapeHTML(brand.location)}</span><a href="${quote}">Solicitar una cotización ↗</a><a href="/">Volver al inicio</a></div></footer>
  </div>`
}
