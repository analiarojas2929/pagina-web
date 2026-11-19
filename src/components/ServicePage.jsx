import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { servicePages } from '../data/servicePages'
import { renderServicePage, serviceSchema, serviceURL } from '../data/servicePageMarkup'
import './ServicePage.css'

export default function ServicePage() {
  const { slug } = useParams()
  const service = servicePages.find(item => item.slug === slug)

  useEffect(() => {
    if (!service) {
      document.title = 'Página no encontrada | A&D DIGITAL'
      document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, follow')
      return
    }
    document.title = `${service.service} | A&D DIGITAL`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', serviceURL(service))
    document.querySelector('meta[name="description"]')?.setAttribute('content', service.description)
    let schema = document.getElementById('service-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'service-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify(serviceSchema(service))
  }, [service])

  if (!service) return <main className="service-page-missing container"><h1>No encontramos esta página</h1><p>Puedes explorar nuestros servicios desde el inicio.</p><a href="/">Volver al inicio</a></main>

  // The shared renderer escapes every text value and only uses our own service data.
  return <div dangerouslySetInnerHTML={{ __html: renderServicePage(service) }} />
}
