import React from 'react';
import { Project } from '../types';
import { ArrowRight, Figma, Sparkles, MoveRight } from 'lucide-react';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onViewCaseStudy: (projectId: string) => void;
}

export default function ProjectCard({ project, onViewCaseStudy }: ProjectCardProps) {
  
  // Renders a high-fidelity visual preview component matching the specific project.
  // This avoids generic image placeholders and demonstrates custom CSS styling capability.
  const renderVisualPreview = () => {
    switch (project.id) {
      case "apex-saas":
        return (
          <div className="relative w-full h-full bg-slate-900 overflow-hidden flex flex-col pt-3 px-4">
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span className="text-[9px] text-slate-500 font-mono ml-1">apex-analytics.io</span>
              </div>
              <div className="h-3 w-16 roundedbg-slate-800 bg-slate-800"></div>
            </div>

            {/* Mock SaaS Dashboard Interior */}
            <div className="flex-1 mt-3 grid grid-cols-12 gap-2.5">
              {/* Left sidebar Mock */}
              <div className="col-span-3 flex flex-col gap-1.5 border-r border-slate-800/60 pr-1.5">
                <div className="h-2.5 w-full bg-indigo-500/25 rounded-sm"></div>
                <div className="h-2 w-4/5 bg-slate-800 rounded-sm"></div>
                <div className="h-2 w-11/12 bg-slate-800 rounded-sm"></div>
                <div className="h-2 w-3/5 bg-slate-800 rounded-sm"></div>
              </div>
              
              {/* Content body Mock */}
              <div className="col-span-9 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="h-3.5 w-24 bg-slate-800 rounded-sm"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1 py-0.5 rounded leading-none">+42.8%</span>
                  </div>
                </div>

                {/* Analytical Card */}
                <div className="rounded border border-indigo-500/20 bg-indigo-950/20 p-2.5 flex flex-col gap-1.5">
                  <span className="text-[9px] font-mono text-indigo-300">ENGAGEMENT INTENSITY</span>
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
            <div className="absolute bottom-3 right-3 rounded-full bg-indigo-500 px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-lg flex items-center gap-1 uppercase tracking-wider">
              <Sparkles className="h-2.5 w-2.5 text-indigo-200" />
              <span>SaaS System Spec</span>
            </div>
          </div>
        );

      case "novapay-dashboard":
        return (
          <div className="relative w-full h-full bg-[#FAFAFA] border border-slate-100 overflow-hidden flex flex-col pt-3 px-4">
            {/* Interface Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-serif font-black text-slate-900 tracking-wide">NovaPay.</span>
                <span className="text-[9px] font-mono text-slate-400">/ ledger</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-3 w-8 rounded-full bg-emerald-100"></div>
                <div className="h-3 w-12 rounded-full bg-slate-200"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 mt-3 flex flex-col gap-2">
              {/* Balance card */}
              <div className="flex items-center justify-between bg-white border border-slate-100 p-2 rounded-lg">
                <div>
                  <div className="text-[9px] text-slate-400">Ledger Balance (USD)</div>
                  <div className="text-[14px] font-extrabold text-slate-950 font-mono leading-tight">$142,830.00</div>
                </div>
                <div className="h-7 w-7 rounded bg-emerald-500 text-white flex items-center justify-center font-mono text-[9px] font-black">N+</div>
              </div>

              {/* Transaction Grid List */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between py-1 border-b border-dashed border-slate-100 text-[10px]">
                  <span className="text-slate-600 font-medium">Remote Salary Transfer</span>
                  <span className="font-mono text-emerald-500 font-semibold">+$4,200.00</span>
                </div>
                <div className="flex items-center justify-between py-1 text-[10px]">
                  <span className="text-slate-600 font-medium">Cloud Hosting (AWS)</span>
                  <span className="font-mono text-slate-800 font-semibold">-$240.50</span>
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
          <div className="relative w-full h-full bg-white overflow-hidden flex pt-3">
            {/* Left sidebar section index */}
            <div className="w-1/3 border-r border-slate-100 px-3 flex flex-col gap-2">
              <div className="h-3 w-10 bg-slate-900 rounded-sm"></div>
              <div className="flex flex-col gap-1">
                <div className="h-2 w-11/12 bg-slate-100 rounded-sm"></div>
                <div className="h-2 w-4/5 bg-indigo-50 rounded-sm border-l border-indigo-500 pl-1"></div>
                <div className="h-2 w-9/12 bg-slate-100 rounded-sm"></div>
                <div className="h-2 w-10/12 bg-slate-100 rounded-sm"></div>
              </div>
            </div>

            {/* Reader workspace and side terminal */}
            <div className="flex-1 flex gap-2 pl-2">
              <div className="w-2/3 flex flex-col gap-2">
                <div className="h-3 w-2/3 bg-slate-800 rounded-sm"></div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
                  <div className="h-1.5 w-11/12 bg-slate-100 rounded-sm"></div>
                  <div className="h-1.5 w-10/12 bg-slate-100 rounded-sm text-indigo-600 font-mono text-[7px] font-bold">`api_key_v1`</div>
                </div>
              </div>
              
              {/* Terminal sandbox */}
              <div className="w-1/3 bg-slate-950 p-2 rounded-tl-lg flex flex-col gap-1 flex-grow">
                <div className="flex gap-1">
                  <div className="h-1 w-1 bg-red-400 rounded-full"></div>
                  <div className="h-1 w-1 bg-slate-800 rounded-full"></div>
                </div>
                <div className="h-2 w-2/3 bg-slate-800 rounded-xs mt-1"></div>
                <div className="h-1.5 w-11/12 bg-slate-900 rounded-xs"></div>
                <div className="h-1 w-4/5 bg-emerald-500/20 rounded-xs"></div>
              </div>
            </div>
            
            {/* Spacing alignment visualizer overlay */}
            <div className="absolute bottom-1 right-20 text-[7px] font-mono text-slate-400 bg-white/90 border border-slate-100 px-1 py-0.5 rounded shadow-xs">
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs hover:border-slate-200 hover:shadow-md transition-all duration-300"
    >
      
      {/* Visual Workspace Thumb */}
      <div className="aspect-16/10 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          {renderVisualPreview()}
        </div>
      </div>

      {/* Narrative Section Info */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        
        {/* Metric Tag and Client info */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
            {project.client}
          </span>
          <div className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 font-mono flex items-center gap-1">
            <span>{project.stat.label}:</span>
            <span className="font-bold">{project.stat.value}</span>
          </div>
        </div>

        {/* Project description hierarchy */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
          {project.subtitle}
        </p>

        {/* Project specific categorizer tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trigger Button to Case Study */}
        <div className="pt-4 border-t border-slate-50 flex items-center">
          <button
            id={`open-study-btn-${project.id}`}
            onClick={() => onViewCaseStudy(project.id)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer w-full text-left"
          >
            <span>Read Design Case Study</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </article>
  );
}
