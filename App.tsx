import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectDetailsPage } from "./components/ProjectDetailsPage";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

type AppState = "login" | "projects" | "project-details";

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>("login");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleLogin = () => {
    setCurrentState("projects");
  };

  const handleLogout = () => {
    setCurrentState("login");
    setSelectedProject(null);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentState("project-details");
  };

  const handleBackToProjects = () => {
    setCurrentState("projects");
    setSelectedProject(null);
  };

  switch (currentState) {
    case "login":
      return <LoginPage onLogin={handleLogin} />;
    
    case "projects":
      return (
        <ProjectsPage 
          onLogout={handleLogout}
          onProjectSelect={handleProjectSelect}
        />
      );
    
    case "project-details":
      return selectedProject ? (
        <ProjectDetailsPage 
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      ) : null;
    
    default:
      return <LoginPage onLogin={handleLogin} />;
  }
}