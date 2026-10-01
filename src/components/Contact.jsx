// src/components/Contact.jsx
import { useState } from 'react';

function Contact({ t }) {
  const [copied, setCopied] = useState(false);
  const email = "gallasteguitomase@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/tomas-gallastegui-90a373342/";
  const githubUrl = "https://github.com/tomasgallas";
  const cvUrl = "https://tomasgallas.github.io/CurriculumVitae-GallasteguiTomas/";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contacto">
      <div className="section-container">
        <h2 className="fade-in-up">{t.title}</h2>
        <p className="fade-in-up" style={{ '--delay': '0.2s' }}>{t.subtitle}</p>
        <div className="contact-links fade-in-up" style={{ '--delay': '0.4s' }}>
          <a href={`mailto:${email}`} className="contact-card" onClick={handleCopyEmail} title="Click to copy">
            {!copied ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            )}
            <span>{copied ? t.copied : email}</span>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span>LinkedIn</span>
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
          <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="contact-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>{t.cv}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;