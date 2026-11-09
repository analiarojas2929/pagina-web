# A&D DIGTAL

Sitio web comercial de A&D DIGTAL, agencia digital en Valparaíso, Chile. Presenta servicios, precios iniciales, experiencia de las fundadoras, metodología y un cotizador que prepara una solicitud para enviar por WhatsApp.

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

## Publicar en GitHub Pages

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

El formulario valida los campos y genera un enlace de WhatsApp con los datos ingresados. No existe un backend y el mensaje no se envía automáticamente: la persona debe revisarlo y enviarlo desde WhatsApp. El número de destino se configura en `brand.whatsappNumber`.
