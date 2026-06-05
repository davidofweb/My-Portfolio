import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle, Monitor, Tablet, Smartphone, Code2, Layers, Cpu, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

type SkillType = 'landing-pages' | 'saas-interfaces' | 'responsive-design';

interface SkillDetail {
  id: SkillType;
  label: string;
  gradientText: string;
  tagline: string;
  accentClass: string;
  accentGlow: string;
}

const SKILLS_DETAILS: SkillDetail[] = [
  {
    id: 'landing-pages',
    label: 'Landing Pages',
    gradientText: 'from-emerald-400 to-teal-500',
    tagline: 'High-converting structures and layout sections designed to drive product metrics.',
    accentClass: 'text-emerald-400 border-emerald-950/40 bg-emerald-950/10',
    accentGlow: 'rgba(16,185,129,0.15)'
  },
  {
    id: 'saas-interfaces',
    label: 'SaaS Interfaces',
    gradientText: 'from-indigo-400 to-violet-500',
    tagline: 'Sleek, responsive dashboards, data visualizers, and state-driven work layouts.',
    accentClass: 'text-indigo-400 border-indigo-950/40 bg-indigo-950/10',
    accentGlow: 'rgba(99,102,241,0.15)'
  },
  {
    id: 'responsive-design',
    label: 'Responsive Design',
    gradientText: 'from-amber-400 to-orange-500',
    tagline: 'Meticulously structured Figma auto-layouts that translate flawlessly to active code.',
    accentClass: 'text-amber-400 border-amber-950/40 bg-amber-950/10',
    accentGlow: 'rgba(245,158,11,0.15)'
  }
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [activeSkill, setActiveSkill] = useState<SkillType>('landing-pages');
  const [responsiveViewport, setResponsiveViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const autoCycleRef = useRef<boolean>(true);

  // Auto-cycles through active skills unless user manually starts clicking around
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoCycleRef.current) return;
      
      setActiveSkill((current) => {
        const currentIndex = SKILLS_DETAILS.findIndex(s => s.id === current);
        const nextIndex = (currentIndex + 1) % SKILLS_DETAILS.length;
        return SKILLS_DETAILS[nextIndex].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleManualSkillSelect = (skillId: SkillType) => {
    autoCycleRef.current = false; // halt auto cycling
    setActiveSkill(skillId);
  };

  const activeDetail = SKILLS_DETAILS.find(s => s.id === activeSkill) || SKILLS_DETAILS[0];

  return (
    <section id="hero" className="relative py-20 sm:py-28 lg:py-36 border-b border-zinc-900/10 overflow-hidden">
      
      {/* Background Interactive Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-505/5 rounded-full blur-[130px] pointer-events-none transition-all duration-1000" style={{ backgroundColor: activeDetail.id === 'saas-interfaces' ? 'rgba(99,102,241,0.06)' : activeDetail.id === 'landing-pages' ? 'rgba(16,185,129,0.04)' : 'rgba(245,158,11,0.04)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-505/3 rounded-full blur-[130px] pointer-events-none transition-all duration-1000" style={{ backgroundColor: activeDetail.id === 'landing-pages' ? 'rgba(16,185,129,0.05)' : activeDetail.id === 'responsive-design' ? 'rgba(245,158,11,0.05)' : 'rgba(99,102,241,0.03)' }}></div>

      {/* Grid Pattern Sheet */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 z-10">
        
        {/* Dynamic Multi-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Availability Pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mr-auto mb-6 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/40 shadow-depth-2 px-4 py-1.5 text-xs font-semibold text-indigo-400 font-mono inline-flex items-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-1.15 max-w-2xl font-sans">
              Creating high-conversions and modern{' '}
              <span className="relative inline-block min-w-[200px] sm:min-w-[340px] align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeDetail.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className={`block absolute left-0 bottom-0 top-0 right-0 bg-gradient-to-r ${activeDetail.gradientText} bg-clip-text text-transparent`}
                    style={{ textShadow: `0 0 40px ${activeDetail.accentGlow}` }}
                  >
                    {activeDetail.label}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible backing layout text to sustain dimensions */}
                <span className="opacity-0 pointer-events-none selective-heading-spacer">Responsive Design</span>
              </span>{' '}
              designed for growth.
            </h1>

            {/* Subheading descriptions */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans font-normal max-w-xl"
            >
              I am <strong>{PERSONAL_INFO.name}</strong>, a freelance Web and UI Designer. I build stunning SaaS portals, high-conversion landing pages, and rigorous design languages aligned perfectly with standard code frameworks.
            </motion.p>

            {/* Micro-Interactive Skill Navigation Switcher */}
            <div className="mt-8 flex flex-col gap-2.5 max-w-lg bg-zinc-950/30 border border-zinc-900 p-4.5 rounded-2xl backdrop-blur-md">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-500 block mb-1">
                Explore Core Disciplines:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {SKILLS_DETAILS.map((skill) => {
                  const isSelected = activeSkill === skill.id;
                  return (
                    <button
                      id={`hero-skill-toggle-${skill.id}`}
                      key={skill.id}
                      onClick={() => handleManualSkillSelect(skill.id)}
                      className={`relative rounded-xl p-2.5 text-left text-xs font-bold transition-all duration-300 select-none cursor-pointer border ${isSelected ? 'bg-zinc-900/90 border-zinc-800 text-white shadow-depth-2' : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-300'}`}
                    >
                      {/* Active Indicator Slide Backing */}
                      {isSelected && (
                        <motion.div
                          layoutId="activeSkillBackingSpot"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 -z-10"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <div className="flex flex-col h-full justify-between gap-1.5 relative z-10">
                        {/* Status bar */}
                        <div className="flex items-center justify-between">
                          <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-indigo-500 animate-pulse' : 'bg-zinc-850'}`}></span>
                          {isSelected && <Sparkles className="h-2.5 w-2.5 text-indigo-400" />}
                        </div>
                        <span className={`block transition-colors duration-200 mt-1 leading-none ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>{skill.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic tag definition explaining skill */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeDetail.id}
                  initial={{ opacity: 0, h: 0 }}
                  animate={{ opacity: 1, h: 'auto' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-zinc-450 font-sans mt-3 pl-2.5 border-l-2 border-indigo-500/40"
                >
                  {activeDetail.tagline}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center max-w-sm sm:max-w-none"
            >
              <button
                id="hero-cta-view-projects"
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-depth-2 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group micro-active-button"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
              
              <button
                id="hero-cta-contact"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto rounded-lg border border-zinc-800 bg-zinc-950/40 backdrop-blur-md shadow-depth-1 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/60 active:scale-[0.98] transition-all duration-300 cursor-pointer text-center micro-active-button"
              >
                Contact Me
              </button>
            </motion.div>

          </div>


          {/* RIGHT VISUAL DEMO PLAYGROUND */}
          <div className="lg:col-span-5 h-[380px] sm:h-[420px] relative">
            <motion.div 
              style={{ perspective: 1000 }}
              className="w-full h-full"
            >
              <div className="w-full h-full rounded-2xl bg-zinc-950/40 backdrop-blur-md border border-zinc-900 p-6 shadow-depth-3 flex flex-col relative overflow-hidden group/playground">
                
                {/* Decorative absolute components labels */}
                <div className="absolute top-2 right-4 flex items-center gap-1.5 text-[8.5px] font-mono text-zinc-550 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 inline-block animate-pulse"></span>
                  <span>LIVE HANDOFF PLAYGROUND</span>
                </div>

                {/* Dashboard Frame upper taskbar */}
                <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 mb-4 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                    <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                    <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                  </div>
                  <div className="h-4 w-1/3 bg-zinc-900 rounded-md flex items-center justify-center">
                    <span className="text-[7.5px] font-mono text-zinc-500 leading-none truncate">
                      {activeSkill === 'landing-pages' ? 'sales-funnel-optimized.fig' : activeSkill === 'saas-interfaces' ? 'ledger-dashboard-metrics.tsx' : `responsive-breakpoints-tester`}
                    </span>
                  </div>
                </div>

                {/* VISUAL VIEWS CONTAINER WITH ANIMATED TRANSITIONS */}
                <div className="flex-1 w-full relative overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    
                    {/* View 1: LANDING PAGES */}
                    {activeSkill === 'landing-pages' && (
                      <motion.div
                        key="view-landing-pages"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 flex flex-col gap-3 p-1.5"
                      >
                        {/* Simulated Hero Section mock */}
                        <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/5 p-3 flex flex-col gap-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[7.5px] font-mono text-emerald-400 font-extrabold uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">Conversion Section</span>
                            <span className="text-[7.5px] font-mono text-zinc-500">CTA Location: Top fold</span>
                          </div>
                          
                          <div className="h-3 w-4/5 bg-zinc-900 rounded-sm"></div>
                          <div className="h-2 w-2/3 bg-zinc-900 rounded-sm"></div>

                          {/* Trigger mock button */}
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <div className="h-5 w-20 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[7.5px] font-mono font-black text-emerald-100">
                              Claim trial now (free)
                            </div>
                            <span className="text-[7.5px] text-zinc-550 font-mono">No credit card card required</span>
                          </div>
                        </div>

                        {/* Conversion Metrics panel */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg bg-zinc-900/60 border border-zinc-850 p-2.5 flex flex-col gap-1 hover:border-zinc-800 transition duration-300">
                            <span className="text-[8px] font-mono text-zinc-500 uppercase">Bounce Reduction</span>
                            <span className="text-[13px] font-black text-white font-mono leading-none">-34.2%</span>
                          </div>
                          
                          <div className="rounded-lg bg-zinc-900/60 border border-zinc-850 p-2.5 flex flex-col gap-1 hover:border-zinc-805 transition duration-300 relative group/metric">
                            <div className="absolute inset-0 bg-emerald-500/[0.02] rounded-lg opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1">
                              <CheckCircle className="h-2 w-2 animate-pulse text-emerald-400" />
                              <span>Signup Rate</span>
                            </span>
                            <span className="text-[13px] font-bold text-white font-mono leading-none flex items-baseline gap-1">
                              <span>+14.85%</span>
                              <span className="text-[7.5px] text-zinc-450 font-normal">SLA Match</span>
                            </span>
                          </div>
                        </div>

                        {/* Interactive flow map indicator */}
                        <div className="rounded-lg bg-zinc-950 p-2.5 border border-zinc-900 flex items-center gap-2 mt-auto">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></div>
                          <span className="text-[8.5px] font-mono text-zinc-400 leading-none truncate">A/B Testing routing active: Variant-C yields highest margins</span>
                        </div>
                      </motion.div>
                    )}

                    {/* View 2: SAAS INTERFACES */}
                    {activeSkill === 'saas-interfaces' && (
                      <motion.div
                        key="view-saas-interfaces"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 flex flex-col gap-3 p-1.5"
                      >
                        {/* SaaS active transaction item card mock */}
                        <div className="rounded-lg border border-indigo-500/10 bg-zinc-900/40 p-3 flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="p-1 h-5 w-5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded flex items-center justify-center font-mono text-[9px] font-bold">NP</div>
                              <div>
                                <span className="block text-[8.5px] font-bold text-white font-sans leading-none">NovaPay Revenue</span>
                                <span className="block text-[7.5px] font-mono text-zinc-505 leading-none mt-0.5">Recurring subscription metrics</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-emerald-400">+$24,801.00</span>
                          </div>

                          {/* Micro-bars displaying server live loads */}
                          <div className="space-y-1 pt-1.5 border-t border-zinc-900">
                            <div className="flex items-center justify-between text-[7px] font-mono text-zinc-500">
                              <span>PROCESSING POWER</span>
                              <span>99.98% SUCCESS RATE</span>
                            </div>
                            <div className="h-1.5 bg-zinc-950 rounded relative overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '84.6%' }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                                className="h-full bg-indigo-550 rounded"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Animated metrics bar graph details */}
                        <div className="rounded-lg bg-zinc-900/20 border border-zinc-900 p-3 flex flex-col gap-2.5">
                          <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500">
                            <span>HOURLY DATA LOAD (LOGICAL SCALING)</span>
                            <span className="text-indigo-400 font-bold">24 Node Clusters</span>
                          </div>
                          
                          {/* Floating vertical mini-bars */}
                          <div className="h-12 flex items-end justify-between px-1.5 gap-1.5 mt-1">
                            {[25, 45, 30, 75, 55, 90, 65, 80, 50, 95].map((metricPercent, idx) => (
                              <div key={idx} className="flex-1 h-full bg-zinc-900 rounded-sm relative overflow-hidden group/bar">
                                <motion.div 
                                  initial={{ height: 0 }}
                                  animate={{ height: `${metricPercent}%` }}
                                  transition={{ duration: 0.8, delay: idx * 0.05, ease: 'easeOut' }}
                                  className="absolute bottom-0 left-0 right-0 bg-indigo-500/30 group-hover/bar:bg-indigo-500/60 rounded-xs transition duration-200"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive tool status log */}
                        <div className="rounded-lg bg-zinc-950 p-2 border border-zinc-900 text-center">
                          <span className="text-[7.5px] font-mono text-zinc-500">State reactive to user authentication context token keys.</span>
                        </div>
                      </motion.div>
                    )}

                    {/* View 3: RESPONSIVE DESIGN */}
                    {activeSkill === 'responsive-design' && (
                      <motion.div
                        key="view-responsive-design"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 flex flex-col p-1 gap-2 bg-[#08080c]/20"
                      >
                        {/* Interactive Responsive Viewport Bar Selector buttons */}
                        <div className="bg-zinc-950/80 border border-zinc-900 p-1.5 rounded-lg flex items-center justify-between">
                          <span className="text-[8.5px] font-mono font-bold uppercase text-zinc-500 pl-2">Breakpoint Tester</span>
                          <div className="flex gap-1">
                            <button
                              id="vp-btn-desktop"
                              onClick={() => setResponsiveViewport('desktop')}
                              className={`p-1 rounded text-zinc-400 hover:bg-zinc-900 cursor-pointer transition ${responsiveViewport === 'desktop' ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/40' : 'border border-transparent'}`}
                            >
                              <Monitor className="h-3 w-3" />
                            </button>
                            <button
                              id="vp-btn-tablet"
                              onClick={() => setResponsiveViewport('tablet')}
                              className={`p-1 rounded text-zinc-400 hover:bg-zinc-900 cursor-pointer transition ${responsiveViewport === 'tablet' ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/40' : 'border border-transparent'}`}
                            >
                              <Tablet className="h-3 w-3" />
                            </button>
                            <button
                              id="vp-btn-mobile"
                              onClick={() => setResponsiveViewport('mobile')}
                              className={`p-1 rounded text-zinc-400 hover:bg-zinc-900 cursor-pointer transition ${responsiveViewport === 'mobile' ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/40' : 'border border-transparent'}`}
                            >
                              <Smartphone className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        {/* Fluid Resizing Container Box Layout */}
                        <div className="flex-1 w-full bg-zinc-950/50 rounded-lg border border-zinc-900 p-3 flex flex-col items-center justify-center overflow-hidden">
                          <motion.div
                            animate={{
                              width: responsiveViewport === 'desktop' ? '100%' : responsiveViewport === 'tablet' ? '70%' : '40%',
                              maxWidth: '100%'
                            }}
                            transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                            className="bg-[#0b0b10] border border-zinc-800 rounded-xl p-3 shadow-md flex flex-col gap-2.5 h-44 overflow-hidden relative"
                          >
                            {/* Width visual label marker */}
                            <div className="absolute top-1 right-2 font-mono text-[6.5px] text-zinc-500">
                              {responsiveViewport === 'desktop' ? '1200px (desktop)' : responsiveViewport === 'tablet' ? '768px (tablet)' : '375px (mobile)'}
                            </div>
                            
                            <div className="h-3.5 w-1/3 bg-zinc-905 rounded border border-zinc-800"></div>

                            {/* Flexible dynamic layout grid that shifts automatically */}
                            <motion.div 
                              layout
                              className={`grid gap-2 items-stretch h-full ${responsiveViewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}
                            >
                              {[
                                { title: 'Modular Card A', num: '1' },
                                { title: 'Modular Card B', num: '2' },
                                { title: 'Modular Card C', num: '3' }
                              ].map((item, id) => (
                                <motion.div
                                  layout
                                  key={item.num}
                                  className="bg-zinc-900/80 border border-zinc-850 p-2 rounded-lg flex flex-col justify-between"
                                >
                                  <div>
                                    <span className="block text-[7.5px] font-mono text-zinc-500">TAG-0{item.num}</span>
                                    <span className="block text-[8px] font-bold text-white truncate mt-0.5">{item.title}</span>
                                  </div>
                                  <div className="h-1.5 w-4/5 bg-zinc-950 rounded mt-1"></div>
                                </motion.div>
                              ))}
                            </motion.div>

                          </motion.div>
                        </div>

                        {/* Interactive hint footer */}
                        <div className="text-center">
                          <span className="text-[7.5px] font-mono text-indigo-400">Click tablet/mobile icons above to trigger real-time auto-layout shifting!</span>
                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Developer system alignment metrics details */}
                <div className="border-t border-zinc-900 pt-3 mt-4 shrink-0 flex items-center justify-between text-[7.5px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Code2 className="h-3 w-3 text-indigo-405" />
                    <span>SYSTEM CORE v1.0.4</span>
                  </span>
                  <span>REACT 19 • LATEST TAILWIND PROPORTIONS</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
