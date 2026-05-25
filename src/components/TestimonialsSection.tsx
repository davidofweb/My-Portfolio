import { TESTIMONIALS } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  
  // Custom letter logo avatars instead of messy dummy photo CDN imports
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md inline-block mb-3">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
            Loved by builders and product teams.
          </h2>
          <p className="text-base text-slate-500 leading-relaxed font-sans">
            Hear from product vice presidents, technical co-founders, and engineering leads who have experienced the acceleration of working with an design system focused designer.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id} 
              className="bg-slate-50 border border-slate-100 p-6.5 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-slate-200 hover:bg-white hover:shadow-xs transition-all relative group"
            >
              
              {/* Quote icon accent */}
              <Quote className="h-8 w-8 text-indigo-100 group-hover:text-indigo-200 transition-colors absolute top-6 right-6" />

              <div className="flex-1">
                <p className="text-sm text-slate-650 leading-relaxed font-sans pr-4 relative">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200 mt-8 relative">
                
                {/* Initials Avatar */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-mono text-sm font-bold text-white uppercase leading-none">
                  {getInitials(testimonial.author)}
                </span>

                <div>
                  <span className="block text-sm font-bold text-slate-900">{testimonial.author}</span>
                  <span className="block text-[10.5px] font-mono font-medium text-slate-450 uppercase tracking-wide leading-none mt-1">
                    {testimonial.role}, <span className="font-bold text-indigo-600">{testimonial.company}</span>
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Real-world metric reminder badge */}
        <div className="mt-16 flex items-center justify-center">
          <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 rounded-full bg-indigo-50/50 border border-indigo-100 px-6 py-3 text-xs sm:text-sm text-indigo-950 font-sans max-w-2xl">
            <span className="font-bold flex items-center gap-1 shrink-0">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Developer Trust Quotient:</span>
            </span>
            <span>96% of engineers report redesign execution cycles dropped by 50% or more.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
