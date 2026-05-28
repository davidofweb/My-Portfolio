import { TESTIMONIALS } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  
  // Custom letter logo avatars instead of messy dummy photo CDN imports
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-transparent border-b border-zinc-900/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md inline-block mb-3">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-4">
            Loved by builders and product teams.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed font-sans">
            Hear from product vice presidents, technical co-founders, and engineering leads who have experienced the acceleration of working with a design system focused designer.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id} 
              className="bg-[#09090b]/40 backdrop-blur-md border border-zinc-900 p-6.5 sm:p-8 rounded-2xl flex flex-col justify-between hover-lift-3d glass-bezel-dark transition-all duration-300 relative group"
            >
              
              {/* Glow light effect inside each testimonial on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/[0.03] to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

              {/* Quote icon accent */}
              <Quote className="h-8 w-8 text-zinc-800 group-hover:text-zinc-700 transition-colors absolute top-6 right-6" />

              <div className="flex-1">
                <p className="text-sm text-zinc-300 leading-relaxed font-sans pr-4 relative">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-900 mt-8 relative">
                
                {/* Initials Avatar */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-650 font-mono text-sm font-bold text-white uppercase leading-none shadow-[0_0_12px_rgba(99,102,241,0.4)]">
                  {getInitials(testimonial.author)}
                </span>

                <div>
                  <span className="block text-sm font-bold text-white">{testimonial.author}</span>
                  <span className="block text-[10.5px] font-mono font-medium text-zinc-500 uppercase tracking-wide leading-none mt-1">
                    {testimonial.role}, <span className="font-bold text-indigo-400">{testimonial.company}</span>
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Real-world metric reminder badge */}
        <div className="mt-16 flex items-center justify-center">
          <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 rounded-full bg-zinc-950/60 border border-zinc-900 px-6 py-3 text-xs sm:text-sm text-zinc-350 font-sans max-w-2xl backdrop-blur-md">
            <span className="font-bold flex items-center gap-1 shrink-0 text-white">
              <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
              <span>Developer Trust Quotient:</span>
            </span>
            <span>96% of engineers report redesign execution cycles dropped by 50% or more.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
