import Image from 'next/image';
import { Section } from './Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  imageUrl?: string;
  imageCaption?: string;
  aiHint?: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <Section id="achievements" className="bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <Card key={index} className="overflow-hidden bg-background/50 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="grid md:grid-cols-2">
              {achievement.imageUrl && (
                <div className={`relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image
                    src={achievement.imageUrl}
                    alt={achievement.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    data-ai-hint={achievement.aiHint}
                  />
                  {achievement.imageCaption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs text-center">
                      {achievement.imageCaption}
                    </div>
                  )}
                </div>
              )}
              <div className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
