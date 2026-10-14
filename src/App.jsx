// src/App.jsx
import { useState, useEffect } from 'react';
import './index.css';
import { translations } from './data/translations';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  // 👈 Sincronizamos el idioma del HTML y el título de la pestaña
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'es'
      ? 'Tomás Gallastegui — Desarrollador Web Full-Stack'
      : 'Tomás Gallastegui — Full-Stack Web Developer';
  }, [lang]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <Projects t={t.projects} />
        <About t={t.about} />
        <Contact t={t.contact} />
      </main>

      <Footer t={t.footer} />
      <ChatAssistant t={t.chat} />
    </>
  );
}

export default App;