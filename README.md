# A&D DIGITAL

Sitio web comercial de A&D DIGITAL, agencia digital en Valparaíso, Chile. Presenta servicios, precios iniciales, experiencia de las fundadoras, metodología y un cotizador que prepara una solicitud para enviar por WhatsApp.

Las mejoras se revisan en `dev`. Compilar o guardar cambios no los publica; el despliegue se realiza solo cuando se solicita expresamente.


```bash
npm install
npm run dev
```

Para comprobar la versión de producción y ejecutar el linter:

```bash
npm run build
npm run lint
```

Para actualizar el proyecto existente desde una computadora autorizada:

```bash
npm run build:production
npx wrangler pages deploy dist --project-name ayd-digital --branch main
```

El dominio `ayd-digital.cl` requiere agregar su zona a Cloudflare, configurar en NIC Chile los nameservers asignados y asociarlo en **Custom domains** del proyecto. No se debe considerar activo hasta comprobar DNS y HTTPS.


```bash
node --test src/services/quoteEmail.test.mjs
```

## Contenido y comprobaciones de desarrollo

- `src/data/siteData.js`: servicios, proyectos, casos de estudio y equipo.
- `src/data/brand.js`: datos de contacto de la agencia.
- `src/data/pricingData.js`: valores, alcances y desglose de los planes.
- `src/data/servicePages.js`: las páginas de landing pages, desarrollo web y software a medida.

`npm run build` genera el sitio en `dist`, las páginas `/servicios/landing-pages/`, `/servicios/desarrollo-web/` y `/servicios/software-a-medida/`, además de `sitemap.xml`. Estas páginas contienen HTML de lectura y metadatos propios antes de ejecutar JavaScript. `npm run preview` permite revisarlas localmente.

El formulario permite elegir correo o WhatsApp; empresa y presupuesto son opcionales. El selector de planes solo ofrece orientación sobre páginas web y catálogos informativos. Los pagos, usuarios y sistemas con datos requieren una cotización específica.

`npm run build:production` ejecuta el linter, las pruebas del correo y del contenido de servicios, y genera la compilación. Las pruebas de interfaz deben simular el proveedor de correo para evitar envíos reales.

La portada para compartir enlaces es `public/assets/ayd-digital-social-v2.png` (1200 × 630, fondo opaco). Su diseño editable está en `scripts/social-card.html`; al modificarlo, se debe volver a exportar una captura de 1200 × 630 al mismo PNG. Los metadatos Open Graph y Twitter de `index.html` usan esta imagen y se conservan en las páginas de servicios generadas.
