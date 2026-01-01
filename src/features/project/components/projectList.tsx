import type { Project } from '../types';

interface Props {
  projects: Project[];
}

export function ProjectList({ projects }: Props) {
  return (
    <ul>
      {projects.map((project)=>{
        return <li key={project.id}>
          <b>{project.name}</b> / {project.owner} / {project.status}
        </li>;
      })}
    </ul>
  );
}
