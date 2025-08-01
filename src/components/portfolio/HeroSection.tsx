import Image from 'next/image';
import { Section } from './Section';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  name: string;
  tagline: string;
  photoUrl: string;
}

export function HeroSection({ name, tagline, photoUrl }: HeroSectionProps) {
  return (
    <Section id="hero" className="flex items-center min-h-[calc(100vh-56px)] pt-0 pb-0">
      <div className="text-center w-full">
        <Image
          src={photoUrl}
          alt={name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 shadow-lg border-4 border-primary/50"
          priority
          data-ai-hint="profile photo"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2">{name}</h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8">{tagline}</p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
