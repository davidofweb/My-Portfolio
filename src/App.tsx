import { useState, useEffect } from 'react';
import { Project, CaseStudy, SkillGroup, Testimonial } from './types';
import { PERSONAL_INFO, PROJECTS, CASE_STUDIES } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import CaseStudyView from './components/CaseStudyView';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Figma, Sparkles, Layout, Compass, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

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

  const renderHomeHero = () => {
    return (
      <section id="hero" className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-slate-100">
        
        {/* Abstract background spacing layouts markers */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 flex flex-col items-center text-center">
          
          {/* Top Pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-full border border-indigo-150 bg-indigo-50/50 px-4 py-1.5 text-xs font-semibold text-indigo-700 font-mono inline-flex items-center gap-1.5 shadow-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{PERSONAL_INFO.availability}</span>
          </motion.div>

          {/* Primary headline display text */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none max-w-4xl"
          >
            Creating modern SaaS layouts designed for <span className="text-indigo-600 relative">growth</span> and builder alignment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl font-sans"
          >
            I'm <strong>{PERSONAL_INFO.name}</strong>, a freelance Web and UI Designer specializing in high-converting landing pages, sleek SaaS panels, and rigorous developer-aligned visual systems.
          </motion.p>

          {/* CTA Row buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <button
              id="hero-cta-view-projects"
              onClick={() => handleNavigateSection('projects')}
              className="w-full sm:w-auto rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Explore My Works</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              id="hero-cta-contact"
              onClick={() => handleNavigateSection('contact')}
              className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:border-slate-350 transition-colors cursor-pointer text-center"
            >
              Start Project Brief
            </button>
          </motion.div>

          {/* Value statement indicators columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 border-t border-slate-100 pt-10 text-left w-full max-w-4xl"
          >
            <div className="flex gap-3">
              <div className="p-2 h-fit bg-slate-50 border border-slate-100 rounded-lg shrink-0">
                <Layout className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-950 uppercase tracking-widest font-mono">Conversion UI Core</h3>
                <p className="text-xs text-slate-450 mt-1 leading-relaxed">Layout logic structured specifically to decrease bounce bounce metrics.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-2 h-fit bg-slate-50 border border-slate-100 rounded-lg shrink-0">
                <Compass className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-950 uppercase tracking-widest font-mono">Figma Auto-Layout</h3>
                <p className="text-xs text-slate-450 mt-1 leading-relaxed">Fully responsive frames scaling beautifully down to target phone sizes.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-2 h-fit bg-slate-50 border border-slate-100 rounded-lg shrink-0">
                <ShieldCheck className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-950 uppercase tracking-widest font-mono">No-Guess Dev Handoff</h3>
                <p className="text-xs text-slate-450 mt-1 leading-relaxed">Documented spacing tokens matching standard CSS and Tailwind parameters.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    );
  };

  const renderProjectShowcase = () => {
    return (
      <section id="projects" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          {/* Projects Header block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md inline-block mb-3">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
                Redesigns that deliver real conversions.
              </h2>
              <p className="text-base text-slate-500 leading-relaxed font-sans">
                A showcase of SaaS portals and marketing layouts. Click **“Read Design Case Study”** below to audit the comprehensive design system, spacing variables, and developer workflow guidelines.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 bg-white border border-slate-100 px-3 py-1.5 rounded-lg shrink-0 h-fit">
              <span>FIGMA 2026 SPEC READY</span>
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 inline-block"></span>
            </div>
          </div>

          {/* Projects Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewCaseStudy={handleViewCaseStudy} 
              />
            ))}
          </div>

        </div>
      </section>
    );
  };

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId);
  const activeCaseStudy = selectedProjectId ? CASE_STUDIES[selectedProjectId] : null;

  return (
    <div className="min-h-screen bg-white text-slate-850 flex flex-col justify-between selection:bg-indigo-100 selection:text-indigo-900 leading-normal font-sans">
      
      {/* Dynamic Navigation Header component */}
      <Header 
        selectedProjectId={selectedProjectId} 
        onBack={handleBackToAllProjects} 
        onNavigate={handleNavigateSection} 
      />

      {/* Main Container Views */}
      <main id="main-content" className="flex-1">
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
              {renderHomeHero()}
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

    </div>
  );
}
