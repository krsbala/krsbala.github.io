import { Section } from './Section';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

interface ContactSectionProps {
  contact: ContactInfo;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Section id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on social media.
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a href={`mailto:${contact.email}`} aria-label="Email" className="text-primary hover:text-accent transition-colors">
            <Mail className="h-8 w-8" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary hover:text-accent transition-colors">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-primary hover:text-accent transition-colors">
            <Github className="h-8 w-8" />
          </a>
        </div>
      </div>
    </Section>
  );
}
