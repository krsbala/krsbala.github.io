import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';

interface Achievement {
  value: string;
  label: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <Section id="achievements" className="bg-secondary">
       <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="text-center bg-background/50 border-primary/20 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">{achievement.value}</p>
              <p className="text-sm text-muted-foreground">{achievement.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
