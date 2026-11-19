import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { servicePages } from '../src/data/servicePages.js'
import { escapeHTML, renderServicePage, serviceSchema, serviceURL } from '../src/data/servicePageMarkup.js'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
for (const service of servicePages) {
  const url = serviceURL(service)
  const title = `${service.service} | A&D DIGITAL`
  const schema = JSON.stringify(serviceSchema(service)).replaceAll('<', '\\u003c')
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHTML(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]+("\s*\/>)/, `$1${url}$2`)
    .replace(/(<meta name="description" content=")[^"]+("\s*\/>)/, `$1${escapeHTML(service.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]+("\s*\/>)/, `$1${url}$2`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]+("\s*\/>)/g, `$1${escapeHTML(title)}$2`)
    .replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]+("\s*\/>)/g, `$1${escapeHTML(service.description)}$2`)
    .replace('</head>', `<script id="service-schema" type="application/ld+json">${schema}</script></head>`)
    .replace('<div id="root"></div>', `<div id="root">${renderServicePage(service)}</div>`)
  const directory = new URL(`../dist/servicios/${service.slug}/`, import.meta.url)
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), html)
}
const urls = ['https://ayd-digital.cl/', ...servicePages.map(serviceURL)]
await writeFile(new URL('../dist/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>\n`)
console.log(`Generated ${servicePages.length} service pages and sitemap.xml.`)
