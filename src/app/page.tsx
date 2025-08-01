import portfolioData from '@/data/portfolio-data.json';
import { Header } from '@/components/portfolio/Header';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AchievementsSection } from '@/components/portfolio/AchievementsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection 
          name={portfolioData.name}
          tagline={portfolioData.tagline}
          photoUrl={portfolioData.photoUrl}
        />
        {portfolioData.achievements.length > 0 && <AchievementsSection achievements={portfolioData.achievements} />}
        <ExperienceSection experience={portfolioData.experience} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
