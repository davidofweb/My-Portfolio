import { useState, useEffect } from 'react';
import { Project, CaseStudy, SkillGroup, Testimonial } from './types';
import { PERSONAL_INFO, PROJECTS, CASE_STUDIES } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectSkeletonCard from './components/ProjectSkeletonCard';
import CaseStudyView from './components/CaseStudyView';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ThreeCanvas from './components/ThreeCanvas';
import AccentSelector from './components/AccentSelector';
import HeroSection from './components/HeroSection';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Figma, Sparkles, Layout, Compass, ShieldCheck, Mail, ArrowUpRight, RefreshCw } from 'lucide-react';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Simulate loading projects on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProjects(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleReloadProjects = () => {
    setLoadingProjects(true);
    setTimeout(() => {
      setLoadingProjects(false);
    }, 1200);
  };

  // If case study is opened, scroll to top automatically to see the material
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [selectedProjectId]);

  const handleViewCaseStudy = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleBackToAllProjects = () => {
    setSelectedProjectId(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    setSelectedProjectId(null);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };



  const renderProjectShowcase = () => {
    return (
      <section id="projects" className="py-20 md:py-28 bg-transparent border-b border-zinc-900/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          {/* Projects Header block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md inline-block mb-3">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-4">
                Redesigns that deliver real conversions.
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed font-sans">
                A showcase of SaaS portals and marketing layouts. Click **“Read Design Case Study”** below to audit the comprehensive design system, spacing variables, and developer workflow guidelines.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0 h-fit">
              {/* Manual trigger reload simulation */}
              <button
                id="reload-projects-trigger"
                onClick={handleReloadProjects}
                disabled={loadingProjects}
                className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-850 px-3 py-1.5 rounded-lg h-fit border border-zinc-800/60 select-none cursor-pointer transition active:scale-[0.98] disabled:opacity-40"
                title="Re-trigger simulated layout load"
              >
                <RefreshCw className={`h-3 w-3 ${loadingProjects ? 'animate-spin text-indigo-400' : ''}`} />
                <span>Simulate Load</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 bg-zinc-950/40 backdrop-blur-md border border-zinc-900/80 px-3 py-1.5 rounded-lg h-fit">
                <span>FIGMA 2026 SPEC READY</span>
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 inline-block animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Projects Grid layout with skeleton render state */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingProjects ? (
              // Display skeleton loaders
              Array.from({ length: PROJECTS.length || 3 }).map((_, idx) => (
                <div key={`project-skeleton-${idx}`} className="animate-fade-in">
                  <ProjectSkeletonCard />
                </div>
              ))
            ) : (
              // Display active cards
              PROJECTS.map((project) => (
                <div key={project.id} className="animate-fade-in">
                  <ProjectCard 
                    project={project} 
                    onViewCaseStudy={handleViewCaseStudy} 
                  />
                </div>
              ))
            )}
          </div>

        </div>
      </section>
    );
  };

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId);
  const activeCaseStudy = selectedProjectId ? CASE_STUDIES[selectedProjectId] : null;

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-between selection:bg-indigo-950 selection:text-indigo-300 leading-normal font-sans relative">
      
      {/* Immersive high-performance 3D background */}
      <ThreeCanvas />

      {/* Dynamic Navigation Header component */}
      <Header 
        selectedProjectId={selectedProjectId} 
        onBack={handleBackToAllProjects} 
        onNavigate={handleNavigateSection} 
      />

      {/* Main Container Views */}
      <main id="main-content" className="flex-1 z-10 relative">
        <AnimatePresence mode="wait">
          {selectedProjectId && activeProject && activeCaseStudy ? (
            <CaseStudyView 
              key={`case-study-${selectedProjectId}`}
              project={activeProject} 
              caseStudy={activeCaseStudy} 
              onBack={handleBackToAllProjects} 
            />
          ) : (
            <motion.div
              key="home-index-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection onNavigate={handleNavigateSection} />
              {renderProjectShowcase()}
              <SkillsSection />
              <AboutSection />
              <TestimonialsSection />
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dynamic Site Footer */}
      <Footer />

      {/* Modern interactive accent picker widget */}
      <AccentSelector />

    </div>
  );
}
