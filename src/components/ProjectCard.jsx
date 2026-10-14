// src/components/ProjectCard.jsx

function ProjectCard({ 
  title, 
  description, 
  imgSrc, 
  tags = [], 
  demoUrl, 
  repoUrl,
  liveText = "Live Demo", // 👈 Recibimos las props traducidas con valor por defecto
  codeText = "View Code" 
}) {
  return (
    <article className="project-card">
      <img 
        src={imgSrc} 
        alt={`${title} project preview`} 
        loading="lazy" 
      />
      
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        
        <div className="links">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              {liveText}
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              {codeText}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;