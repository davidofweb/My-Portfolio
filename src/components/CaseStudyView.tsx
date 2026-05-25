import React, { useState } from 'react';
import { Project, CaseStudy } from '../types';
import { PERSONAL_INFO } from '../data';
import { ArrowLeft, Figma, CheckCircle2, Copy, Check, Terminal, Cpu, MoveDown, Layers, Layout, Grid } from 'lucide-react';
import { motion } from 'motion/react';

interface CaseStudyViewProps {
  key?: string;
  project: Project;
  caseStudy: CaseStudy;
  onBack: () => void;
}

export default function CaseStudyView({ project, caseStudy, onBack }: CaseStudyViewProps) {
  const [activeTokenTab, setActiveTokenTab] = useState(0);
  const [interactiveMode, setInteractiveMode] = useState<'blueprint' | 'production'>('production');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Spacing unit pixel helper values
  const spacingJsonSpec = JSON.stringify({
    "themes": {
      "light": {
        "primary": "indigo-600",
        "neutral-dark": "slate-900",
        "neutral-light": "slate-50",
        "font-family-display": "Plus Jakarta Sans",
        "font-family-body": "Inter"
      }
    },
    "grid": {
      "columns": 12,
      "max-width": "1200px",
      "base-gap": "24px",
      "spacing-units": [8, 16, 24, 32, 64, 128]
    }
  }, null, 2);

  const handleCopyTokens = () => {
    navigator.clipboard.writeText(spacingJsonSpec);
    setCopiedToken("spec");
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const handleCopyIndividualToken = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#FAFAFA]"
    >
      {/* Mini Breadcrumbs bar */}
      <div className="bg-white border-b border-slate-100 py-3">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <button onClick={onBack} className="hover:text-indigo-600 font-medium cursor-pointer">Works</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{project.title} Case Study</span>
          </div>
          <span className="text-emerald-500 font-mono font-bold uppercase tracking-wider block bg-emerald-500/10 px-2 py-0.5 rounded leading-none">
            {project.stat.value} Stat Lift
          </span>
        </div>
      </div>

      {/* Hero Header Jumbotron */}
      <section className="bg-white border-b border-slate-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <button
            id="back-trigger-case-study"
            onClick={onBack}
            className="group mb-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4.5 py-2 text-sm font-semibold text-slate-700 hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>All Case Studies</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left title column */}
            <div className="lg:col-span-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md inline-block mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
                Redesigning {project.title}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed font-sans max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Right Quick stats grid panel */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl grid grid-cols-2 gap-6">
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">CLIENT</span>
                <span className="block text-sm font-bold text-slate-900">{project.client}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">ROLE</span>
                <span className="block text-sm font-bold text-slate-900">{project.role}</span>
              </div>
              <div className="col-span-2 pt-4 border-t border-slate-200">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">KEY CONVERSION METRIC</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-indigo-600 font-mono leading-none">{project.stat.value}</span>
                  <span className="text-xs font-semibold text-slate-500">{project.stat.label}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAIN BODY AND WORKSPACE COMPARISON SLIDER */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          {/* Overviews, Problem, Goals layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            
            {/* Narrative text block */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xs">
                <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-indigo-600 mb-4 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>The Overview</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xs">
                <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-indigo-600 mb-4">
                  The Problem
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xs">
                <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-indigo-600 mb-4">
                  The Goal
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {caseStudy.goal}
                </p>
              </div>

            </div>

            {/* Sidebar with interactive FIGMA WIREFRAME VS HIFI LIVE SIMULATOR */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col shadow-xl">
                
                {/* Simulator Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Cpu className="h-3.5 w-3.5" />
                      <span>Figma Component Spec</span>
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-sans">Interactive Layout Simulator</p>
                  </div>
                  
                  {/* Selector Toggles */}
                  <div className="flex bg-slate-850 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setInteractiveMode('blueprint')}
                      className={`text-[10px] font-mono leading-none tracking-tight font-bold rounded px-2.5 py-1.5 cursor-pointer transition-all ${interactiveMode === 'blueprint' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-350'}`}
                    >
                      Blueprint
                    </button>
                    <button
                      onClick={() => setInteractiveMode('production')}
                      className={`text-[10px] font-mono leading-none tracking-tight font-bold rounded px-2.5 py-1.5 cursor-pointer transition-all ${interactiveMode === 'production' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-350'}`}
                    >
                      Production UI
                    </button>
                  </div>
                </div>

                {/* Simulated Rendering Container */}
                <div className="relative aspect-square w-full bg-slate-950 rounded-2xl flex items-center justify-center p-4 overflow-hidden border border-slate-950">
                  
                  {interactiveMode === 'blueprint' ? (
                    // BLUEPRINT/FIGMA GRAPH DIRECTIVES - SHOWING SPEC MARKS
                    <div className="w-full text-slate-300 font-mono text-[9px] relative flex flex-col gap-4 border border-indigo-500/30 p-4 rounded bg-indigo-950/5 select-none animate-pulse">
                      
                      {/* Flex/padding specifications */}
                      <div className="absolute top-1.5 left-1.5 text-[7px] text-indigo-400 font-bold bg-indigo-500/10 px-1 py-0.5 rounded leading-none border border-indigo-400/20">
                        Frame: Auto Layout (W: Fill, H: Hug, Gap: 16)
                      </div>
                      <div className="absolute right-2 top-2 text-[7px] text-pink-400 font-bold bg-pink-500/10 px-1.5 py-0.5 rounded border border-pink-400/20">
                        Pad-y: 24px
                      </div>

                      {/* Header spec box */}
                      <div className="border border-dashed border-pink-400 p-2.5 rounded relative mt-4 flex items-center justify-between">
                        <span className="text-[7px] text-pink-400 absolute -top-2.5 left-1 bg-slate-950 px-1">SPEC Badge_Container [V-Align]</span>
                        <div className="h-4 w-12 bg-slate-800 border-dashed border border-slate-600 rounded flex items-center justify-center text-[7px] text-slate-400">H: 16px</div>
                        <div className="h-4 w-16 bg-indigo-500/10 border-dashed border border-indigo-400 rounded flex items-center justify-center text-[7px] text-indigo-300">W: 64px</div>
                      </div>

                      {/* Layout guidelines spacing */}
                      <div className="h-[1px] bg-pink-400/40 w-full relative">
                        <span className="absolute -top-2 right-1/2 bg-slate-950 px-1.5 text-pink-400 text-[7px] font-bold">Gap: 16px (spacing-xs)</span>
                      </div>

                      {/* Headline / Body text mock indicators */}
                      <div className="border border-indigo-400/30 rounded p-3 flex flex-col gap-2 relative bg-slate-950">
                        <div className="absolute top-1 right-2 text-[6px] text-indigo-400">font-family-display</div>
                        <div className="h-3 w-4/5 bg-slate-800 border border-slate-600 rounded-sm"></div>
                        <div className="space-y-1.5 pt-2">
                          <div className="h-1.5 w-full bg-slate-800 rounded-sm"></div>
                          <div className="h-1.5 w-11/12 bg-slate-800 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Margin padding measurements */}
                      <div className="border-t border-b border-dashed border-pink-400 py-1.5 text-center text-[7px] text-pink-300 font-bold bg-pink-500/5 mt-2">
                        OUTER PADDING HORIZONTAL: 32px (spacing-md)
                      </div>
                    </div>
                  ) : (
                    // HIGH FIDELITY COMPONENT RENDER
                    <div className="w-full h-full flex flex-col justify-center p-2">
                      <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col text-left gap-4 shadow-lg hover:shadow-2xl transition-all">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 text-[10.5px] font-mono font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-md uppercase tracking-widest">
                            {project.client}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">ID: ap-93</span>
                        </div>
                        
                        <div className="space-y-2">
                          <h5 className="text-lg font-bold text-white tracking-tight font-sans">
                            Automated Integration Metrics
                          </h5>
                          <p className="text-xs text-slate-450 leading-relaxed font-sans">
                            Providing engineers with a centralized, fully responsive platform to extract raw key-value tokens for variables directly from visual design frames.
                          </p>
                        </div>

                        {/* Visual graph snippet within */}
                        <div className="bg-slate-950 rounded-xl p-4 border border-slate-850 flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono text-slate-500 leading-none uppercase">LIFT LEVEL</span>
                            <div className="text-xl font-bold font-mono text-white leading-none">{project.stat.value}</div>
                          </div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block"></span>
                            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">ACTIVE SPEC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                <div className="mt-4 flex items-start gap-2 text-xs text-slate-400 font-sans leading-relaxed">
                  <span className="text-indigo-400 font-semibold font-mono">Note:</span>
                  <span>Toggle between **Blueprint** to audit structural padding frames and **Production UI** to see the finalized rendering.</span>
                </div>

              </div>

            </div>

          </div>

          <hr className="border-slate-200 my-16" />

          {/* STEP BY STEP PROCESS LAYOUT */}
          <div className="mb-20">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">Execution Pipeline</span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                The UI/UX Design Process
              </h2>
              <p className="text-sm text-slate-500 mt-2 font-sans">
                Every project is treated as an engineering-aligned system. Here is how I structured this deliverable to guarantee visual luxury and rapid builder speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.process.map((step, idx) => (
                <div 
                  key={step.title}
                  className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col shadow-xs"
                >
                  <span className="text-xs font-mono font-bold text-indigo-600 block mb-4">{step.title}</span>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans flex-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* DESIGN SYSTEM TOKENS GRID / THE FIGMA REPLICATE */}
          <div id="design-tokens" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            
            {/* Tokens Tab interface layout left block */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">DESIGN CODE SYNC</span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Design System Tokens
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
                  Interactive specifications created in Figma and exported seamlessly using standard JSON formats. Click tabs to inspect values.
                </p>
              </div>

              {/* Tab options headers */}
              <div className="flex border-b border-slate-200 mb-6 font-mono text-xs font-bold">
                {caseStudy.designSystemTokens.map((tokenCat, index) => (
                  <button
                    id={`token-category-tab-${index}`}
                    key={tokenCat.category}
                    onClick={() => setActiveTokenTab(index)}
                    className={`pb-3 pr-6 select-none cursor-pointer relative transition-colors ${activeTokenTab === index ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {tokenCat.category}
                  </button>
                ))}
              </div>

              {/* Tab tables values content */}
              <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium">
                      <th className="p-3 sm:p-4">Global Name</th>
                      <th className="p-3 sm:p-4">Figma Value</th>
                      <th className="p-3 sm:p-4">Functional Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {caseStudy.designSystemTokens[activeTokenTab].values.map((val) => (
                      <tr key={val.name} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-900 flex items-center gap-1.5">
                          <button
                            onClick={() => handleCopyIndividualToken(val.name)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-500 rounded p-1 transition-all"
                            title="Copy variable name"
                          >
                            {copiedToken === val.name ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                          </button>
                          <span>{val.name}</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 font-mono text-xs">{val.value}</td>
                        <td className="p-3 sm:p-4 text-slate-500 text-xs sm:text-sm font-sans">{val.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Simulated interactive Terminal code-viewer right block */}
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl text-slate-300 font-mono text-xs">
                
                {/* Code window bar bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-850/60">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-indigo-400" />
                    <span className="text-[10px] text-slate-400">spacing-tokens.json</span>
                  </div>
                  <button
                    id="copy-tokens-spec-btn"
                    onClick={handleCopyTokens}
                    className="flex items-center gap-1 text-[10px] bg-slate-850 hover:bg-slate-800 px-2 py-1 rounded transition-colors text-slate-300 cursor-pointer"
                  >
                    {copiedToken === "spec" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Spec</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tokens code JSON */}
                <div className="p-5 overflow-x-auto bg-slate-900 max-h-[290px]">
                  <pre className="text-[10px] leading-relaxed text-slate-400 select-all">
                    <code>{spacingJsonSpec}</code>
                  </pre>
                </div>

              </div>
            </div>

          </div>

          <hr className="border-slate-200 my-16" />

          {/* DEVELOPER HANDOFF PANEL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            <div className="lg:col-span-5 bg-white border border-slate-100 p-8 rounded-2xl shadow-xs">
              <h3 className="text-md font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-600" />
                <span>Production Developer Notes</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                I do not design isolated layouts. Here are the specific handoff guidelines applied to this Figma project to allow immediate React/HTML integration.
              </p>
              
              <ul className="space-y-4">
                {caseStudy.handoffNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-3 text-xs text-slate-600 leading-relaxed font-sans">
                    <span className="h-5 w-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-mono font-bold text-[9px] text-indigo-600 shrink-0">
                      {idx + 1}
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome panel columns stats */}
            <div className="lg:col-span-7 bg-indigo-600 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full shadow-lg">
              
              {/* Abs mesh circles decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl transform translate-x-12 -translate-y-12"></div>
              
              <div className="relative mb-10">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-indigo-200 block mb-2">PROJECT OUTCOME</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight max-w-lg">
                  Conversion focused design delivering immediate enterprise values.
                </h3>
              </div>

              {/* Sub grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative border-t border-indigo-500/30 pt-8 mt-auto">
                {caseStudy.outcome.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-3xl font-extrabold font-mono text-white mb-1">{metric.value}</span>
                    <span className="block text-[10px] font-mono tracking-wider font-semibold uppercase text-indigo-200">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative pt-4 border-t border-indigo-500/20 text-xs sm:text-sm text-indigo-100 font-sans leading-relaxed">
                {caseStudy.outcome.summary}
              </div>

            </div>

          </div>

          {/* BACK CALL BUTTON CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">Would you like a similar design system for your SaaS?</h4>
              <p className="text-xs text-slate-400 mt-1 font-sans">Book a free project audit calls or collaborate directly.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="rounded-lg border border-slate-700 bg-slate-950 px-5 py-2.5 text-xs font-semibold hover:border-slate-500 cursor-pointer transition-colors"
              >
                Go Back
              </button>
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold hover:bg-indigo-500 transition-colors cursor-pointer"
              >
                Hire {PERSONAL_INFO.name}
              </a>
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
