// src/components/ProjectCard.jsx

function ProjectCard({ title, description, imgSrc, tags = [], demoUrl, repoUrl }) {
  return (
    <article className="project-card">
      <img 
        src={imgSrc} 
        alt={`Screenshot of ${title} project`} 
        loading="lazy" 
      />
      
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        {/* Renderizado de los tags del proyecto */}
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        
        {/* Renderizado condicional de los enlaces */}
        <div className="links">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;