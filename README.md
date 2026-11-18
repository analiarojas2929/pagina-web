# A&D DIGITAL

Sitio web comercial de A&D DIGITAL, agencia digital en Valparaíso, Chile. Presenta servicios, precios iniciales, experiencia de las fundadoras, metodología y un cotizador que prepara una solicitud para enviar por WhatsApp.

## Desarrollo

```bash
npm install
npm run dev
```

Para comprobar la versión de producción y ejecutar el linter:

```bash
npm run build
npm run lint
```

## Publicar en Cloudflare Pages con ayd-digital.cl

### Estado de la publicación

La versión actual está publicada en **https://ayd-digital.pages.dev/**, en el proyecto `ayd-digital`, mediante carga directa con Wrangler. La integración de compilación desde GitHub no quedó vinculada porque Cloudflare devolvió el error `8000011`; las actualizaciones todavía no son automáticas.

Para actualizar el proyecto existente desde una computadora autorizada:

```bash
npm run build:production
npx wrangler pages deploy dist --project-name ayd-digital --branch main
```

El dominio `ayd-digital.cl` requiere agregar su zona a Cloudflare, configurar en NIC Chile los nameservers asignados y asociarlo en **Custom domains** del proyecto. No se debe considerar activo hasta comprobar DNS y HTTPS.

### Configuración de referencia para un proyecto con integración Git

El sitio está preparado para Cloudflare Pages. El alojamiento gratuito requiere una cuenta de Cloudflare y vincular el repositorio una vez. El workflow de GitHub valida el proyecto; la publicación la realiza la integración de Cloudflare.

1. En Cloudflare, entra a **Workers & Pages → Create application → Pages → Connect to Git**.
2. Conecta GitHub y selecciona **analiarojas2929/pagina-web**.
3. Configura el nombre del proyecto como `ayd-digital` (si está disponible), rama de producción `main`, preset **React (Vite)**, comando `npm run build:production` y salida `dist`. Deja la raíz del proyecto vacía.
4. Publica. Cloudflare asignará una URL `*.pages.dev`; usa la dirección real que muestre el panel.
5. En Cloudflare, agrega **ayd-digital.cl** como zona con el plan Free y copia los dos nameservers que asigne a esa zona.
6. En el registrador del dominio, configura esos dos nameservers. Los nombres exactos se obtienen del panel, no se pueden anticipar.
7. En el proyecto Pages, abre **Custom domains → Set up a custom domain**, agrega `ayd-digital.cl` y completa la asociación. Agrega también `www.ayd-digital.cl` si deseas usarlo.
8. En EmailJS, agrega `https://ayd-digital.cl` y la URL `*.pages.dev` real a los origenes permitidos; incluye `https://www.ayd-digital.cl` si lo configuras.

Cada push a `main` se desplegará automáticamente después de conectar GitHub a Cloudflare. El dominio empezará a servir la web cuando la zona esté activa, el dominio esté asociado al proyecto y el certificado HTTPS esté emitido.

`.node-version` fija Node.js 22. `.env.production` contiene únicamente identificadores públicos de EmailJS para habilitar el formulario al compilar. El dominio canónico y las imágenes para compartir apuntan a `https://ayd-digital.cl/`.

Documentacion: [integracion con Git](https://developers.cloudflare.com/pages/get-started/git-integration/) y [dominios propios](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Contenido editable

Los datos visibles del sitio se centralizan en [`src/data/siteData.js`](./src/data/siteData.js):

- `brand`: nombre, eslogan, ubicación y número de WhatsApp de la agencia.
- `services`: catálogo de servicios y beneficios.
- `plans`: los tres planes web, sus valores iniciales en CLP, alcance, comparativa y desglose del trabajo. La suma de `breakdown` debe coincidir con `amount`.
- `complementaryPlans`: menú digital y portafolio personal con un alcance acotado.
- `planComparisonRows`: filas de la comparación de planes.
- `portfolio` y `portfolioCategories`: referencias, tecnologías, demos, clasificación e imágenes.
- `founders`: nombres, cargos, biografías, especialidades, fotografías y perfiles de LinkedIn.
- `workflow` y `faqs`: metodología y preguntas frecuentes.

Las imágenes de proyectos y perfiles usan rutas locales cuando estén disponibles. Si `image` o `photo` están vacíos, la página muestra una previsualización tipográfica o un avatar ilustrativo, no una captura ni una fotografía real.

## Cotizaciones

El formulario permite preparar una solicitud por WhatsApp o redactar y enviar un correo desde una ventana del sitio. El número de WhatsApp se configura en `brand.whatsappNumber`.

### Activar el envío directo de correo

El correo usa [EmailJS](https://www.emailjs.com/docs/), compatible con el alojamiento estático en Cloudflare Pages. No abre Gmail ni otra aplicación. Sin configuración, el botón de envío permanece deshabilitado y WhatsApp sigue disponible.

1. Crea una cuenta en EmailJS y conecta la cuenta autorizada para enviar en **Email Services**.
2. Crea una plantilla con estos campos:
   - **To Email:** `ayd.digital.vregion@gmail.com` (fijo; no usar una variable del visitante).
   - **From Email:** la cuenta conectada, usando el remitente predeterminado del servicio.
   - **From Name:** `{{from_name}} · Solicitud web`.
   - **Reply-To:** `{{reply_to}}`.
   - **Subject:** `{{subject}}`.
   - **Content:** copia el contenido de [`docs/quote-email-template.html`](./docs/quote-email-template.html) en el editor HTML.
3. Copia `.env.example` a `.env.local` y completa el Service ID, Template ID y Public Key. Reinicia `npm run dev`.
4. Para producción, los tres identificadores públicos están configurados en `.env.production`; puedes reemplazarlos por variables de compilación en Cloudflare Pages.
5. En EmailJS, limita los dominios permitidos a los de tu sitio y al origen local que uses para desarrollo.

Estas tres variables son identificadores públicos usados por el navegador. No agregues contraseñas, claves privadas ni tokens de Gmail a variables `VITE_`.

El campo editable **De** identifica al solicitante y se usa como **Reply-To**; no autoriza el envío desde una dirección arbitraria. El remitente real siempre es la cuenta conectada a EmailJS. Si cambias `brand.email`, actualiza también el destinatario fijo de la plantilla.

Comprobación de la integración sin enviar correos reales:

```bash
node --test src/services/quoteEmail.test.mjs
```
