// src/components/Header.jsx

function Header({ lang, setLang, t }) {
  return (
    <header>
      <nav>
        <a href="/" className="logo">
          Tomas Gallastegui
        </a>

        <ul>
          <li><a href="#proyectos">{t.projects}</a></li>
          <li><a href="#sobre-mi">{t.about}</a></li>
          <li><a href="#contacto">{t.contact}</a></li>
          
          {/* Botón selector de idioma */}
          <li>
            <button 
              type="button" 
              className="lang-toggle"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              title={lang === 'en' ? "Cambiar a Español" : "Switch to English"}
            >
              {lang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;