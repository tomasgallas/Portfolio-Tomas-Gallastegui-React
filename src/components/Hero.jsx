// src/components/Hero.jsx
function Hero({ t }) {
  return (
    <section id="hero">
      <div className="content">
        <h1 className="fade-in-up" style={{ '--delay': '0.2s' }}>
          {t.greeting} <span className="highlight">Tomas Gallastegui</span>
        </h1>
        <h2 className="fade-in-up" style={{ '--delay': '0.4s' }}>{t.role}</h2>
        <p className="fade-in-up" style={{ '--delay': '0.6s' }}>{t.bio}</p>
        <a href="#contacto" className="cta-button fade-in-up" style={{ '--delay': '0.8s' }}>
          {t.cta}
        </a>
      </div>
    </section>
  );
}
export default Hero;