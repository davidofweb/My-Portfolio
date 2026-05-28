import { SKILL_GROUPS } from '../data';
import { Laptop, Code2, Cpu, Sparkles, Layers } from 'lucide-react';

export default function SkillsSection() {
  
  // Icon selector to match skill concepts
  const getGroupIcon = (id: string) => {
    switch (id) {
      case "core-design":
        return <Laptop className="h-5 w-5 text-indigo-400" />;
      case "framer-dev":
        return <Code2 className="h-5 w-5 text-indigo-400" />;
      default:
        return <Layers className="h-5 w-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent border-b border-zinc-900/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md inline-block mb-3">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-4">
            A developer-friendly design workflow.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed font-sans font-normal">
            I bridges the gap between static design specs and production code. By maintaining a strict spacing system, semantic color structures, and dynamic constraints in Figma, developers can build my interfaces in record time.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {SKILL_GROUPS.map((group) => (
            <div 
              id={`skill-group-${group.id}`}
              key={group.id} 
              className="rounded-2xl bg-zinc-950/40 backdrop-blur-md border border-zinc-900 p-8 flex flex-col justify-between hover:border-zinc-800 hover:shadow-depth-3 transition-all duration-300 relative overflow-hidden group/card"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full pointer-events-none"></div>
              
              {/* Category Header */}
              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 shadow-depth-1">
                    {getGroupIcon(group.id)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Specific Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-zinc-900 relative z-10">
                {group.skills.map((skill) => (
                  <div 
                    id={`skill-item-${skill.name.toLowerCase().replace(/ /g, '-')}`}
                    key={skill.name} 
                    className="bg-[#0c0c10]/40 border border-zinc-900/60 p-4.5 rounded-xl flex flex-col hover-lift-3d transition-all duration-300"
                  >
                    
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-sm font-bold text-white">{skill.name}</span>
                      <span className="text-[9px] font-mono uppercase bg-zinc-950 px-2 py-0.5 rounded font-bold text-indigo-400 border border-zinc-800">
                        {skill.experience}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-normal font-sans">
                      {skill.description}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Spacing Demonstration Blueprint Box */}
        <div className="mt-16 rounded-2xl bg-[#09090b]/40 backdrop-blur-md border border-zinc-900 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden group">
          {/* Animated Sheen Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
          
          <div className="max-w-xl relative z-10 flex gap-4 items-start">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-depth-1 text-indigo-400">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5 mb-2">
                <span>Are you a React or Tailwind developer?</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                I name my Figma component layers after Tailwind CSS utilities and React block systems (`flex-col`, `gap-4`, `p-6`). This eliminates 90% of translation questions.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 border-l-0 md:border-l border-zinc-900 pl-0 md:pl-8 font-mono text-xs text-zinc-400 relative z-10 bg-zinc-950/50 p-4 rounded-xl border border-zinc-900/60">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase font-bold text-indigo-400">Breakpoint Grids</span>
              <span className="block text-zinc-300 font-medium">Mobile: 375px (4 col)</span>
              <span className="block text-zinc-300 font-medium">Desktop: 1200px (12 col)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
