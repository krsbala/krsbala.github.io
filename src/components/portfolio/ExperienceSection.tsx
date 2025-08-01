import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Dot } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="relative pl-8 before:absolute before:top-0 before:left-3 before:h-full before:w-0.5 before:bg-border">
        {experience.map((item, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-1.5 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
              <Briefcase className="h-3 w-3 text-primary-foreground" />
            </div>
            <Card className="border-l-4 border-primary shadow-md">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-2 sm:mb-0">
                    <CardTitle>{item.role}</CardTitle>
                    <p className="text-accent font-semibold">{item.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1 rounded-full">{item.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex">
                      <Dot className="h-5 w-5 shrink-0 -ml-1 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
