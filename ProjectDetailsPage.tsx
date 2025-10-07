import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, FileText, Camera, History } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

interface ProjectDetailsPageProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetailsPage({ project, onBack }: ProjectDetailsPageProps) {
  const handleAddTemplate = () => {
    alert("Funcionalidade de adicionar template da obra será implementada aqui");
  };

  const handleAddImage = () => {
    alert("Funcionalidade de adicionar imagem será implementada aqui");
  };

  const handleViewReports = () => {
    alert("Funcionalidade de ver histórico de relatórios será implementada aqui");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1>{project.name}</h1>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2>Gerenciamento do Projeto</h2>
          <p className="text-gray-600 mt-2">
            Selecione uma das opções abaixo para gerenciar o projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Adicionar Template da Obra</CardTitle>
              <CardDescription>
                Carregue e configure templates padrão para documentação da obra
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                onClick={handleAddTemplate}
              >
                Adicionar Template
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Adicionar Imagem</CardTitle>
              <CardDescription>
                Faça upload de fotos e imagens relacionadas ao projeto de monitoramento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                onClick={handleAddImage}
              >
                Adicionar Imagem
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <History className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle>Histórico de Relatórios</CardTitle>
              <CardDescription>
                Visualize e gerencie todos os relatórios gerados para este projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                onClick={handleViewReports}
              >
                Ver Histórico
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="font-medium">Nome:</Label>
                  <p className="text-gray-700">{project.name}</p>
                </div>
                <div>
                  <Label className="font-medium">Data de Criação:</Label>
                  <p className="text-gray-700">
                    {new Date(project.createdAt).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <Label className="font-medium">Descrição:</Label>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

function Label({ className, children }: LabelProps) {
  return <span className={className}>{children}</span>;
}