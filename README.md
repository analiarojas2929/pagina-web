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

## Despliegue automático en Netlify

El archivo [`netlify.toml`](./netlify.toml) configura Node.js 22, valida el código y las pruebas antes de compilar, publica `dist` y permite abrir directamente rutas de React. También incluye los identificadores públicos de EmailJS para que el correo esté habilitado al desplegar.

Vinculación inicial (una sola vez):

1. En [Netlify](https://app.netlify.com/start), elige importar un proyecto existente desde **GitHub**.
2. Selecciona **analiarojas2929/pagina-web** y la rama **main**.
3. Netlify leerá el comando de compilación y la carpeta de publicación desde `netlify.toml`. Confirma la publicación.
4. Agrega el dominio publicado a los orígenes permitidos de EmailJS.

Si el sitio ya existe en Netlify, vincula ese mismo repositorio desde **Project configuration → Build & deploy → Continuous deployment**; no necesitas crear otro sitio.

A partir de la vinculación, cada `git push` a `main` inicia automáticamente una compilación y un despliegue. Los cambios locales deben guardarse, confirmarse en Git y subirse a GitHub para publicarse. No hace falta cargar `dist` manualmente ni configurar un token de Netlify en GitHub Actions.

## Publicar en GitHub Pages (alternativa)

El despliegue se realiza automáticamente al subir cambios a la rama `main`.

1. En GitHub, abre el repositorio y entra en **Settings → Pages**.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. En VS Code, guarda los cambios y súbelos al repositorio (pestaña **Control de código fuente → Sincronizar cambios**).
4. En GitHub, abre la pestaña **Actions** y espera a que termine el flujo **Deploy to GitHub Pages**.
5. La dirección publicada aparecerá en **Settings → Pages**.

La primera publicación puede tardar unos minutos. Cada nuevo cambio que se suba a `main` actualizará el sitio automáticamente.

## Contenido editable

Los datos visibles del sitio se centralizan en [`src/data/siteData.js`](./src/data/siteData.js):

- `brand`: nombre, eslogan, ubicación y número de WhatsApp de la agencia.
- `services` y `plans`: descripciones, beneficios y precios iniciales.
- `portfolio` y `portfolioCategories`: referencias, tecnologías, demos, clasificación e imágenes.
- `founders`: nombres, cargos, biografías, especialidades, fotografías y perfiles de LinkedIn.
- `workflow` y `faqs`: metodología y preguntas frecuentes.

Las imágenes de proyectos y perfiles usan rutas locales cuando estén disponibles. Si `image` o `photo` están vacíos, la página muestra una previsualización tipográfica o un avatar ilustrativo, no una captura ni una fotografía real.

## Cotizaciones

El formulario permite preparar una solicitud por WhatsApp o redactar y enviar un correo desde una ventana del sitio. El número de WhatsApp se configura en `brand.whatsappNumber`.

### Activar el envío directo de correo

El correo usa [EmailJS](https://www.emailjs.com/docs/), compatible con el alojamiento estático en GitHub Pages. No abre Gmail ni otra aplicación. Sin configuración, el botón de envío permanece deshabilitado y WhatsApp sigue disponible.

1. Crea una cuenta en EmailJS y conecta la cuenta autorizada para enviar en **Email Services**.
2. Crea una plantilla con estos campos:
   - **To Email:** `ayd.digital.vregion@gmail.com` (fijo; no usar una variable del visitante).
   - **From Email:** la cuenta conectada, usando el remitente predeterminado del servicio.
   - **From Name:** `{{from_name}} · Solicitud web`.
   - **Reply-To:** `{{reply_to}}`.
   - **Subject:** `{{subject}}`.
   - **Content:** copia el contenido de [`docs/quote-email-template.html`](./docs/quote-email-template.html) en el editor HTML.
3. Copia `.env.example` a `.env.local` y completa el Service ID, Template ID y Public Key. Reinicia `npm run dev`.
4. Para GitHub Pages, agrega esos mismos tres valores como variables del repositorio en **Settings → Secrets and variables → Actions → Variables** y vuelve a desplegar.
5. En EmailJS, limita los dominios permitidos a los de tu sitio y al origen local que uses para desarrollo.

Estas tres variables son identificadores públicos usados por el navegador. No agregues contraseñas, claves privadas ni tokens de Gmail a variables `VITE_`.

El campo editable **De** identifica al solicitante y se usa como **Reply-To**; no autoriza el envío desde una dirección arbitraria. El remitente real siempre es la cuenta conectada a EmailJS. Si cambias `brand.email`, actualiza también el destinatario fijo de la plantilla.

Comprobación de la integración sin enviar correos reales:

```bash
node --test src/services/quoteEmail.test.mjs
```
