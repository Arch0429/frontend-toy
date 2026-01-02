import type { Project } from '../types';
import { ProjectStatusBadge } from './projectStatusBadge';

interface Props {
  projects: Project[];
}

export function ProjectList({ projects }: Props) {
  return (
    <ul>
      {projects.map((project)=>{
        return <li key={project.id}>
          <b>{project.name}</b> / {project.owner} / 
          <ProjectStatusBadge status={project.status} />
        </li>;
      })}
    </ul>
  );
}
