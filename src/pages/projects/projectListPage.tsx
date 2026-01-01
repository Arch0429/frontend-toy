import { useProjects } from '../../features/project/hooks/useProjects';
import { ProjectList } from '../../features/project/components/projectList';

export function ProjectListPage() {
  const { projects } = useProjects();

  return (
    <div>
      <h1>프로젝트 목록</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
