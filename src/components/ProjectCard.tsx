export default function ProjectCard({ project }) {
  return (
    <article className="card">
      {project.image && <img src={project.image} alt={project.title} />}
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="card-actions">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repo</a>}
        </div>
      </div>
    </article>
  );
}