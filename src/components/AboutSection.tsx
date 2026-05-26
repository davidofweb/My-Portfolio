import { PERSONAL_INFO } from '../data';
import { ShieldCheck, Zap, MessageSquare, Compass, Send } from 'lucide-react';

export default function AboutSection() {
  
  const benefits = [
    {
      title: "Conversion-Focused layouts",
      description: "I structure interfaces to naturally direct attention toward actions. Visual noise is minimized so your product core message stands out clearly.",
      icon: Zap
    },
    {
      title: "Clean Design systems",
      description: "Every frame, typography token, and spacing item is meticulously documented and linked in Figma, promoting solid atomic structure scaling.",
      icon: ShieldCheck
    },
    {
      title: "Async remote collaboration",
      description: "Fluent in async processes, using screen-recorded Loom walk-throughs, clear Slack channels, and daily updates to maintain swift momentum.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-100 relative overflow-hidden lighting-source-top">
      {/* Structural ambient 3D lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative text block */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50/80 px-3 py-1.5 rounded-md inline-block mb-3 border border-indigo-150/20 shadow-xs">
              My Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
              Hi, I'm {PERSONAL_INFO.name}.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-650 font-sans leading-relaxed text-slate-600">
              <p>
                I am a professional Web Developer & Designer with 3 years of experience crafting conversion-focused web applications, dynamic templates, and refined interface designs for modern founders.
              </p>
              <p className="font-semibold text-slate-800">
                I believe that state-of-the-art web systems must combine absolute aesthetic precision with smooth, performance-focused code.
              </p>
              <p>
                Whether building responsive layouts in React/TypeScript, developing custom animation hooks in Framer, or mapping out robust visual blueprints, I align layout grids and styles perfectly. This eliminates guesses and guarantees a rapid, launch-ready handoff.
              </p>
            </div>

            {/* Micro badge stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 mt-8">
              <div className="bg-white/40 p-4.5 rounded-xl border border-slate-200/50 shadow-xs backdrop-blur-xs">
                <span className="block text-xl font-extrabold font-mono text-slate-900 leading-none">3+</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400 mt-1">Years Exp</span>
              </div>
              <div className="bg-white/40 p-4.5 rounded-xl border border-slate-200/50 shadow-xs backdrop-blur-xs">
                <span className="block text-xl font-extrabold font-mono text-slate-900 leading-none">10+</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400 mt-1">Projects Live</span>
              </div>
              <div className="bg-white/40 p-4.5 rounded-xl border border-slate-200/50 shadow-xs backdrop-blur-xs">
                <span className="block text-xl font-extrabold font-mono text-slate-900 leading-none">100%</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400 mt-1">Remote Fit</span>
              </div>
            </div>
          </div>

          {/* Right Core benefits cards */}
          <div className="lg:col-span-6 space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                id={`benefit-card-${index}`}
                key={benefit.title} 
                className="bg-white shadow-depth-1 rounded-2xl p-6.5 flex gap-5 hover-lift-3d-sm glass-bezel transition-all duration-300"
              >
                
                <div className="p-3 bg-indigo-50/80 rounded-xl max-h-fit border border-indigo-100/60 shrink-0 shadow-xs">
                  <benefit.icon className="h-5 w-5 text-indigo-600" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
