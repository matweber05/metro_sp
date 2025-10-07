import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Plus, LogOut, FolderOpen } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

interface ProjectsPageProps {
  onLogout: () => void;
  onProjectSelect: (project: Project) => void;
}

export function ProjectsPage({ onLogout, onProjectSelect }: ProjectsPageProps) {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Linha 4 - Amarela",
      description: "Monitoramento da extensão Vila Sônia",
      createdAt: "2024-01-15"
    },
    {
      id: "2", 
      name: "Linha 6 - Laranja",
      description: "Obra da estação Brasilândia",
      createdAt: "2024-02-20"
    }
  ]);
  
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProjectName && newProjectDescription) {
      const newProject: Project = {
        id: Date.now().toString(),
        name: newProjectName,
        description: newProjectDescription,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setProjects([...projects, newProject]);
      setNewProjectName("");
      setNewProjectDescription("");
      setShowCreateForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1>Sistema de Monitoramento de Metro</h1>
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2>Meus Projetos</h2>
          <Button onClick={() => setShowCreateForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Projeto
          </Button>
        </div>

        {showCreateForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Criar Novo Projeto</CardTitle>
              <CardDescription>
                Preencha os dados para criar um novo projeto de monitoramento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Nome do Projeto</Label>
                  <Input
                    id="projectName"
                    type="text"
                    placeholder="Ex: Linha 5 - Lilás"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Descrição</Label>
                  <Input
                    id="projectDescription"
                    type="text"
                    placeholder="Descrição do projeto..."
                    value={newProjectDescription}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Criar Projeto</Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5" />
                  {project.name}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Criado em: {new Date(project.createdAt).toLocaleDateString('pt-BR')}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => onProjectSelect(project)}
                  >
                    Abrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}