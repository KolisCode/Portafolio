import { useRef, useState } from 'react';
import './Cotizacion.css';

const WHATSAPP = '573208146176';
const EMAIL = 'JhohanBustamante@koliscode.com';

const TIPOS = [
  'Sitio web',
  'E-commerce',
  'API / Backend',
  'SaaS a medida',
  'Integración con IA',
  'Dashboard / Analítica',
  'Otro',
];

const MONEDAS = ['USD', 'COP', 'EUR'];

const PLAZOS = ['Flexible', 'Lo antes posible', 'En 1 – 2 meses', 'En 3+ meses'];

const EMPTY = {
  nombre: '',
  email: '',
  tipo: TIPOS[0],
  moneda: 'USD',
  monto: '',
  presupuestoADefinir: true,
  plazo: PLAZOS[0],
  descripcion: '',
};

// Presupuesto: "A definir juntos" o un monto libre con su moneda.
function formatearPresupuesto(d) {
  if (d.presupuestoADefinir || !d.monto) return 'A definir juntos';
  return `${Number(d.monto).toLocaleString('es-CO')} ${d.moneda}`;
}

// Arma el mismo mensaje estructurado tanto para WhatsApp como para el correo.
function componerMensaje(d) {
  return [
    '*Solicitud de cotización — KolisCode*',
    '',
    `Nombre: ${d.nombre}`,
    d.email ? `Email: ${d.email}` : null,
    `Tipo de proyecto: ${d.tipo}`,
    `Presupuesto: ${formatearPresupuesto(d)}`,
    `Plazo: ${d.plazo}`,
    '',
    'Descripción:',
    d.descripcion,
    '',
    '📎 Puedo adjuntar archivos (brief, referencias, wireframes) directamente en este chat/correo.',
  ]
    .filter((l) => l !== null)
    .join('\n');
}

function Cotizacion() {
  const [datos, setDatos] = useState(EMPTY);
  const formRef = useRef(null);

  const set = (campo) => (e) => setDatos((d) => ({ ...d, [campo]: e.target.value }));

  // Submit nativo del form → valida los `required` antes de abrir WhatsApp.
  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(componerMensaje(datos))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Fallback por correo: reusa la validación nativa del form y compone un mailto.
  const enviarEmail = () => {
    if (formRef.current && !formRef.current.reportValidity()) return;
    const asunto = `Solicitud de cotización — ${datos.tipo}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(
      componerMensaje(datos),
    )}`;
    window.location.href = url;
  };

  return (
    <section id="cotizacion" className="section cotizacion">
      <p className="section__label">cotización</p>
      <h2 className="section__title">Solicita una cotización</h2>

      <div className="cotizacion__layout">
        <div className="cotizacion__texto">
          <p>
            Cuéntame en 30 segundos qué necesitas y te devuelvo una propuesta con alcance,
            tiempos y precio. Sin compromiso.
          </p>
          <p className="cotizacion__prompt">
            <span className="cotizacion__symbol">$</span> ./koliscode --quote
          </p>
          <p className="cotizacion__nota">
            Al enviar se abre WhatsApp (o tu correo) con los datos ya redactados; solo
            confirmas el envío.
          </p>
        </div>

        <form ref={formRef} className="cotizacion__form" onSubmit={enviarWhatsApp}>
          <div className="cotizacion__form-bar">
            <span className="cotizacion__dot" />
            <span className="cotizacion__dot" />
            <span className="cotizacion__dot" />
            <span className="cotizacion__form-title">nueva-solicitud.txt</span>
          </div>

          <div className="cotizacion__fields">
            <div className="cotizacion__row">
              <label className="cotizacion__field">
                <span className="cotizacion__label-txt">Nombre *</span>
                <input
                  type="text"
                  required
                  value={datos.nombre}
                  onChange={set('nombre')}
                  placeholder="Cómo te llamas"
                  autoComplete="name"
                />
              </label>
              <label className="cotizacion__field">
                <span className="cotizacion__label-txt">Email</span>
                <input
                  type="email"
                  value={datos.email}
                  onChange={set('email')}
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <div className="cotizacion__row">
              <label className="cotizacion__field">
                <span className="cotizacion__label-txt">Tipo de proyecto</span>
                <select value={datos.tipo} onChange={set('tipo')}>
                  {TIPOS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="cotizacion__field">
                <span className="cotizacion__label-txt">Plazo</span>
                <select value={datos.plazo} onChange={set('plazo')}>
                  {PLAZOS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="cotizacion__field">
              <span className="cotizacion__label-txt">Presupuesto</span>
              <label className="cotizacion__check">
                <input
                  type="checkbox"
                  checked={datos.presupuestoADefinir}
                  onChange={(e) =>
                    setDatos((d) => ({ ...d, presupuestoADefinir: e.target.checked }))
                  }
                />
                <span>A definir juntos</span>
              </label>
              {!datos.presupuestoADefinir && (
                <div className="cotizacion__budget-inputs">
                  <select value={datos.moneda} onChange={set('moneda')} aria-label="Moneda">
                    {MONEDAS.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    inputMode="numeric"
                    value={datos.monto}
                    onChange={set('monto')}
                    placeholder="Monto aproximado"
                  />
                </div>
              )}
            </div>

            <label className="cotizacion__field">
              <span className="cotizacion__label-txt">Cuéntame del proyecto *</span>
              <textarea
                required
                rows={4}
                value={datos.descripcion}
                onChange={set('descripcion')}
                placeholder="Qué quieres construir, funcionalidades clave, referencias…"
              />
            </label>

            <div className="cotizacion__actions">
              <button type="submit" className="cotizacion__btn cotizacion__btn--primary">
                <IconWhatsapp />
                Cotizar por WhatsApp
              </button>
              <button
                type="button"
                className="cotizacion__btn cotizacion__btn--ghost"
                onClick={enviarEmail}
              >
                <IconEmail />
                Enviar por correo
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export default Cotizacion;
