// src/components/About.jsx
function About({ t }) {
  return (
    <section id="sobre-mi">
      <div className="section-container">
        <div className="text-content fade-in-up">
          <h2>{t.title}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>{t.p4}</p>
        </div>
        <div className="skills-content fade-in-up" style={{ '--delay': '0.2s' }}>
          <h3>{t.skillsTitle}</h3>
          <ul className="skills-grid">
            {t.skills.map((skill) => (
              <li key={skill} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;