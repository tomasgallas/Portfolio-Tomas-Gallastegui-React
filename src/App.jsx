// src/App.jsx
import { useState } from 'react';
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
  // Estado global de idioma ('en' por defecto)
  const [lang, setLang] = useState('en');
  const t = translations[lang];

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