import { Routes, Route, Navigate } from 'react-router-dom';
import { ProjectListPage } from "../pages/projects/projectListPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" />} />
      <Route path="/projects" element={<ProjectListPage />} />
    </Routes>
  );
}
