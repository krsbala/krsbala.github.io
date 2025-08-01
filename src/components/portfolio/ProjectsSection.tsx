import Image from 'next/image';
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Dot } from 'lucide-react';

interface Project {
  title: string;
  description: string[];
  imageUrl?: string;
  link: string;
  aiHint?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" className="bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden bg-background/50 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1 shadow-lg">
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.aiHint}
              />
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 text-muted-foreground">
                {project.description.map((point, i) => (
                   <li key={i} className="flex">
                     <Dot className="h-5 w-5 shrink-0 -ml-1 text-primary" />
                     <span>{point}</span>
                   </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
