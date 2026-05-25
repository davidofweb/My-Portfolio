import { SKILL_GROUPS } from '../data';
import { Laptop, Code2, Cpu, Sparkles, CheckSquare, Layers } from 'lucide-react';

export default function SkillsSection() {
  
  // Icon selector to match skill concepts
  const getGroupIcon = (id: string) => {
    switch (id) {
      case "core-design":
        return <Laptop className="h-5 w-5 text-indigo-600" />;
      case "framer-dev":
        return <Code2 className="h-5 w-5 text-indigo-600" />;
      default:
        return <Layers className="h-5 w-5 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md inline-block mb-3">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
            A developer-friendly design workflow.
          </h2>
          <p className="text-base text-slate-500 leading-relaxed font-sans">
            I bridges the gap between static design specs and production code. By maintaining a strict spacing system, semantic color structures, and dynamic constraints in Figma, developers can build my interfaces in record time.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {SKILL_GROUPS.map((group) => (
            <div 
              id={`skill-group-${group.id}`}
              key={group.id} 
              className="rounded-2xl border border-slate-100 bg-slate-50 p-8 flex flex-col justify-between hover:border-slate-200 transition-all shadow-xs"
            >
              
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-100">
                    {getGroupIcon(group.id)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Specific Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-slate-200">
                {group.skills.map((skill) => (
                  <div 
                    id={`skill-item-${skill.name.toLowerCase().replace(/ /g, '-')}`}
                    key={skill.name} 
                    className="bg-white border border-slate-100 p-4.5 rounded-xl flex flex-col hover:shadow-xs transition-shadow"
                  >
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-slate-900">{skill.name}</span>
                      <span className="text-[9px] font-mono uppercase bg-indigo-50 px-2 py-0.5 rounded font-bold text-indigo-600 border border-indigo-100">
                        {skill.experience}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-normal font-sans">
                      {skill.description}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Spacing Demonstration Blueprint Box */}
        <div className="mt-16 rounded-2xl border border-slate-100 bg-[#FAFAFA] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5 mb-2">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Are you a React or Tailwind developer?</span>
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              I name my Figma component layers after Tailwind CSS utilities and React block systems (`flex-col`, `gap-4`, `p-6`). This eliminates 90% of translation questions.
            </p>
          </div>
          
          <div className="flex gap-4 border-l-0 md:border-l border-slate-200 pl-0 md:pl-8 font-mono text-xs text-slate-400">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase font-bold text-slate-400">Breakpoint Grids</span>
              <span className="block text-slate-600">Mobile: 375px (4 col)</span>
              <span className="block text-slate-600">Desktop: 1200px (12 col)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
