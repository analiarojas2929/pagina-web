const config = {
  serviceId: import.meta.env?.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env?.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env?.VITE_EMAILJS_PUBLIC_KEY,
}

export const isQuoteEmailConfigured = (settings = config) =>
  Boolean(settings.serviceId && settings.templateId && settings.publicKey)

export async function sendQuoteEmail({ name, replyTo, subject, message }, settings = config) {
  if (!isQuoteEmailConfigured(settings)) {
    throw new Error('El envío de correo todavía no está habilitado. Puedes contactarnos por WhatsApp.')
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: settings.serviceId,
      template_id: settings.templateId,
      user_id: settings.publicKey,
      template_params: {
        from_name: name,
        reply_to: replyTo,
        subject,
        message,
      },
    }),
    signal: AbortSignal.timeout(20000),
  })

  if (!response.ok) {
    throw new Error(response.status === 429
      ? 'Se alcanzó el límite de envíos. Espera unos minutos antes de volver a intentar.'
      : 'El servicio no pudo enviar el correo. Intenta nuevamente o contáctanos por WhatsApp.')
  }
}
