// Completar con el número de Jennifer, en formato internacional y solo dígitos.
const WHATSAPP_NUMBER = '56972111180';
const form = document.querySelector('#contact-form');
function buildMessage(data) {
  return ['Hola Jennifer, quisiera orientación sobre un plan de salud.', '', `Nombre: ${data.get('nombre').trim()}`, `WhatsApp: ${data.get('telefono').trim()}`, ...(data.get('correo').trim() ? [`Correo: ${data.get('correo').trim()}`] : []), `Sistema de salud actual: ${data.get('sistema')}`, `Necesito: ${data.get('necesidad')}`, ...(data.get('mensaje').trim() ? ['', `Mi consulta: ${data.get('mensaje').trim()}`] : []), '', 'Acepto que me contactes para responder esta consulta.'].join('\n');
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const status = document.querySelector('#form-status');
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    status.textContent = 'El contacto por WhatsApp estará disponible pronto. Falta configurar el número de Jennifer.';
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(new FormData(form)))}`;
  status.textContent = 'Tu consulta está preparada. Presiona Enviar en WhatsApp para hacérsela llegar a Jennifer.';
  window.location.assign(url);
});
