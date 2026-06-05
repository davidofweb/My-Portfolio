import React from 'react';
import { Project } from '../types';
import { ArrowRight, Figma, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onViewCaseStudy: (projectId: string) => void;
}

export default function ProjectCard({ project, onViewCaseStudy }: ProjectCardProps) {
  
  // Renders a high-fidelity visual preview component matching the specific project.
  // Tailored to follow premium dark universe aesthetics perfectly.
  const renderVisualPreview = () => {
    switch (project.id) {
      case "apex-saas":
        return (
          <div className="relative w-full h-full bg-zinc-950 overflow-hidden flex flex-col pt-3 px-4">
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <div className="flex items-center gap-1.5 flex-row">
                <div className="h-2 w-2 rounded-full bg-red-500/80"></div>
                <div className="h-2 w-2 rounded-full bg-amber-500/80"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500/80"></div>
                <span className="text-[9px] text-zinc-500 font-mono ml-1">apex-analytics.io</span>
              </div>
              <div className="h-3 w-16 rounded bg-zinc-900"></div>
            </div>

            {/* Mock SaaS Dashboard Interior */}
            <div className="flex-1 mt-3 grid grid-cols-12 gap-2.5">
              {/* Left sidebar Mock */}
              <div className="col-span-3 flex flex-col gap-1.5 border-r border-zinc-900 pr-1.5">
                <div className="h-2.5 w-full bg-indigo-500/20 rounded-sm"></div>
                <div className="h-2 w-4/5 bg-zinc-900 rounded-sm"></div>
                <div className="h-2 w-11/12 bg-zinc-900 rounded-sm"></div>
                <div className="h-2 w-3/5 bg-zinc-900 rounded-sm"></div>
              </div>
              
              {/* Content body Mock */}
              <div className="col-span-9 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="h-3.5 w-24 bg-zinc-900 rounded-sm"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1 py-0.5 rounded leading-none">+42.8%</span>
                  </div>
                </div>

                {/* Analytical Card */}
                <div className="rounded border border-indigo-500/20 bg-indigo-950/20 p-2.5 flex flex-col gap-1.5">
                  <span className="text-[9px] font-mono text-indigo-400">ENGAGEMENT INTENSITY</span>
                  <div className="text-[14px] font-bold text-white font-mono leading-none">$23,491.00</div>
                  {/* Minichart lines */}
                  <div className="h-6 flex items-end gap-1 pt-1">
                    <div className="flex-1 h-2.5 bg-indigo-500/20 rounded-xs"></div>
                    <div className="flex-1 h-4 bg-indigo-500/30 rounded-xs"></div>
                    <div className="flex-1 h-3 bg-indigo-500/20 rounded-xs"></div>
                    <div className="flex-1 h-5.5 bg-indigo-500/50 rounded-xs"></div>
                    <div className="flex-1 h-4.5 bg-indigo-500/45 rounded-xs"></div>
                    <div className="flex-1 h-6 bg-indigo-600 rounded-xs"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Absolute badge */}
            <div className="absolute bottom-3 right-3 rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-lg flex items-center gap-1 uppercase tracking-wider">
              <Sparkles className="h-2.5 w-2.5 text-indigo-200" />
              <span>SaaS System Spec</span>
            </div>
          </div>
        );

      case "novapay-dashboard":
        return (
          <div className="relative w-full h-full bg-[#0d0d11] overflow-hidden flex flex-col pt-3 px-4">
            {/* Interface Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <div className="flex items-center gap-1.5 flex-row">
                <span className="text-[10px] font-serif font-black text-white tracking-wide">NovaPay.</span>
                <span className="text-[9px] font-mono text-zinc-500">/ ledger</span>
              </div>
              <div className="flex gap-1.5 flex-row">
                <div className="h-3 w-8 rounded-full bg-emerald-950/30 border border-emerald-500/20"></div>
                <div className="h-3 w-12 rounded-full bg-zinc-900"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 mt-3 flex flex-col gap-2">
              {/* Balance card */}
              <div className="flex items-center justify-between bg-zinc-950/80 border border-zinc-900 p-2 rounded-lg">
                <div>
                  <div className="text-[9px] text-zinc-500 font-mono">Ledger Balance (USD)</div>
                  <div className="text-[14px] font-extrabold text-white font-mono leading-tight">$142,830.00</div>
                </div>
                <div className="h-7 w-7 rounded bg-emerald-500 text-white flex items-center justify-center font-mono text-[9px] font-black">N+</div>
              </div>

              {/* Transaction Grid List */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between py-1 border-b border-dashed border-zinc-900 text-[10px]">
                  <span className="text-zinc-400 font-medium">Remote Salary Transfer</span>
                  <span className="font-mono text-emerald-400 font-semibold">+$4,200.00</span>
                </div>
                <div className="flex items-center justify-between py-1 text-[10px]">
                  <span className="text-zinc-400 font-medium">Cloud Hosting (AWS)</span>
                  <span className="font-mono text-zinc-500 font-semibold">-$240.50</span>
                </div>
              </div>
            </div>
            {/* Base Spec Grid decoration */}
            <div className="absolute top-2 right-12 w-6 h-6 border-r border-t border-emerald-500/20 flex flex-col justify-between">
              <span className="text-[6px] font-mono text-emerald-500/40 ml-1 leading-none">GRID</span>
              <span className="text-[6px] font-mono text-emerald-500/40 text-right leading-none">8px</span>
            </div>
          </div>
        );

      case "coreref-docs":
        return (
          <div className="relative w-full h-full bg-[#0a0a0f] overflow-hidden flex pt-3">
            {/* Left sidebar section index */}
            <div className="w-1/3 border-r border-zinc-900 px-3 flex flex-col gap-2">
              <div className="h-3 w-10 bg-zinc-800 rounded-sm"></div>
              <div className="flex flex-col gap-1">
                <div className="h-2 w-11/12 bg-zinc-900 rounded-sm"></div>
                <div className="h-2 w-4/5 bg-indigo-950/30 rounded-sm border-l border-indigo-500 pl-1"></div>
                <div className="h-2 w-9/12 bg-zinc-900 rounded-sm"></div>
                <div className="h-2 w-10/12 bg-zinc-900 rounded-sm"></div>
              </div>
            </div>

            {/* Reader workspace and side terminal */}
            <div className="flex-1 flex gap-2 pl-2 flex-row">
              <div className="w-2/3 flex flex-col gap-2">
                <div className="h-3 w-2/3 bg-zinc-800 rounded-sm"></div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-zinc-900 rounded-sm"></div>
                  <div className="h-1.5 w-11/12 bg-zinc-900 rounded-sm"></div>
                  <div className="h-1.5 w-10/12 bg-zinc-900 rounded-sm text-indigo-400 font-mono text-[7px] font-bold">`api_key_v1`</div>
                </div>
              </div>
              
              {/* Terminal sandbox */}
              <div className="w-1/3 bg-zinc-950 p-2 rounded-tl-lg flex flex-col gap-1 flex-grow">
                <div className="flex gap-1 flex-row">
                  <div className="h-1 w-1 bg-red-400 rounded-full"></div>
                  <div className="h-1 w-1 bg-zinc-800 rounded-full"></div>
                </div>
                <div className="h-2 w-2/3 bg-zinc-800 rounded-xs mt-1"></div>
                <div className="h-1.5 w-11/12 bg-zinc-900 rounded-xs"></div>
                <div className="h-1 w-4/5 bg-emerald-500/20 rounded-xs"></div>
              </div>
            </div>
            
            {/* Spacing alignment visualizer overlay */}
            <div className="absolute bottom-1 right-20 text-[7px] font-mono text-zinc-500 bg-zinc-950 px-1 py-0.5 rounded border border-zinc-900 shadow-xs">
              Line Max: 75ch
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article 
      id={`project-card-${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#09090b]/40 backdrop-blur-md border border-zinc-900 hover:border-zinc-805 shadow-depth-3 hover-lift-3d glass-bezel-dark transition-all duration-400"
    >
      
      {/* Visual Workspace Thumb */}
      <div className="aspect-16/10 w-full overflow-hidden bg-zinc-950 border-b border-zinc-900/60 relative">
        {/* Shiny lighting gradient overlay sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.08] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          {renderVisualPreview()}
        </div>

        {/* Dynamic Project Summary Overlay showing when user hovers */}
        <div className="absolute inset-0 z-20 bg-[#060608]/96 backdrop-blur-xs p-5 flex flex-col justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
          <div className="space-y-4">
            <div>
              <span className="block text-[8.5px] font-mono font-bold tracking-widest text-zinc-500 uppercase">DESIGN ROLE</span>
              <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">{project.role}</span>
            </div>
            
            <div>
              <span className="block text-[8.5px] font-mono font-bold tracking-widest text-zinc-500 uppercase">KEY RESOLUTION</span>
              <span className="text-xs text-zinc-300 block mt-1 leading-relaxed font-sans font-normal">
                {project.id === "apex-saas" && "Optimized standard page sections and Auto-Layout rules, reducing bounce rates by 31%."}
                {project.id === "novapay-dashboard" && "Created scalable, adaptive grids aligning dense financial lists with monospace digits."}
                {project.id === "coreref-docs" && "Constructed a book-like API terminal reader layout keeping lines under comfortable 75ch."}
              </span>
            </div>
          </div>

          <div className="border-t border-zinc-900/80 pt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono font-bold text-zinc-500 uppercase">{project.stat.label}</span>
              <span className="text-xs font-black text-indigo-400 font-mono mt-0.5">{project.stat.value}</span>
            </div>
            
            <div className="rounded-md bg-indigo-950/40 border border-indigo-900/40 px-2 py-1 flex items-center gap-1.5 text-[8.5px] font-mono font-bold text-indigo-400">
              <span>EXPLORE METRICS</span>
              <ArrowRight className="h-2.5 w-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section Info */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 relative">
        
        {/* Dynamic spot lighting glow in background of card content on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(100px_at_var(--x,_50%)_var(--y,_50%),rgba(99,102,241,0.04)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Metric Tag and Client info */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 block">
            {project.client}
          </span>
          <div className="rounded-full bg-zinc-950 border border-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-indigo-400 font-mono flex items-center gap-1 shadow-xs">
            <span>{project.stat.label}:</span>
            <span className="font-bold">{project.stat.value}</span>
          </div>
        </div>

        {/* Project description hierarchy */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors duration-300 relative z-10">
          {project.title}
        </h3>
        
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1 pr-1 relative z-10 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Project specific categorizer tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md bg-zinc-950 px-2.5 py-1 text-[11px] font-medium text-zinc-300 border border-zinc-800/80 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 hover:shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trigger Button to Case Study */}
        <div className="pt-4 border-t border-zinc-900 flex items-center relative z-10">
          <button
            id={`open-study-btn-${project.id}`}
            onClick={() => onViewCaseStudy(project.id)}
            className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors cursor-pointer w-full text-left micro-active-button"
          >
            <span>Read Design Case Study</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-350" />
          </button>
        </div>

      </div>
    </article>
  );
}
