import './SobreMi.css';

const stats = [
  { valor: '3+', label: 'años desarrollando' },
  { valor: '5+', label: 'proyectos en producción' },
  { valor: 'Full', label: 'stack — del back al front' },
];

function SobreMi() {
  return (
    <section id="sobre-mi" className="section sobre-mi">
      <p className="section__label">sobre mí</p>
      <h2 className="section__title">Quién está detrás del código</h2>

      <div className="sobre-mi__layout">
        <div className="sobre-mi__bio">
          <p>
            Soy Jhohan Bustamante, desarrollador full-stack freelance de Colombia.
            Trabajo bajo la marca <span className="sobre-mi__marca">KolisCode</span> y
            construyo aplicaciones web completas para negocios reales, desde el diseño
            de la base de datos hasta la interfaz que ve el usuario.
          </p>
          <p>
            Me muevo sobre todo en Angular + NestJS para proyectos empresariales, y en
            Next.js + Node.js cuando el proyecto lo pide. El stack lo decido según lo que
            necesita cada caso.
          </p>
          <p>
            Cuando no estoy programando, suelo estar probando alguna herramienta nueva o
            dándole vueltas al siguiente proyecto.
          </p>
        </div>

        <div className="sobre-mi__panel">
          <div className="sobre-mi__terminal-header">
            <span className="sobre-mi__dot" />
            <span className="sobre-mi__dot" />
            <span className="sobre-mi__dot" />
            <span className="sobre-mi__terminal-title">koliscode.json</span>
          </div>
          <pre className="sobre-mi__json">{`{
  "nombre":    "Jhohan Bustamante",
  "marca":     "KolisCode",
  "ubicacion": "Colombia 🇨🇴",
  "rol":       "Full-Stack Developer",
  "enfoque":   "freelance",
  "idiomas":   ["ES", "EN"],
  "disponible": true
}`}</pre>

          <div className="sobre-mi__stats">
            {stats.map(({ valor, label }) => (
              <div key={label} className="sobre-mi__stat">
                <span className="sobre-mi__stat-valor">{valor}</span>
                <span className="sobre-mi__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
