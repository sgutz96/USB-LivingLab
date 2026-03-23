import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TickerSection } from './components/TickerSection';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { LabsSection } from './components/LabsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProblemsSection } from './components/ProblemsSection';
import { ImpactSection } from './components/ImpactSection';
import { MethodologySection } from './components/MethodologySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <TickerSection />
          <AboutSection />
          <PhilosophySection/>
          <LabsSection />
          <ProjectsSection />
          <ProblemsSection />
          <ImpactSection />
          <MethodologySection/>
          <ContactSection />
        </main>
        <Footer />
        <ThemeToggle />
        <BackToTop />
      </div>
    </>
  );
}