import type { Project} from "../types";

const mockProjects: Project[] = [
  {
    id: 1,
    name: '사내 솔루션 고도화',
    status: 'IN_PROGRESS',
    owner: '카리나',
  },
  {
    id: 2,
    name: '관리자 페이지 개선',
    status: 'READY',
    owner: '장원영',
  },
  {
    id: 3,
    name: '레거시 화면 리팩토링',
    status: 'DONE',
    owner: '안유진',
  },
];

export function useProjects() {
  return {
    projects: mockProjects,
  };
}
