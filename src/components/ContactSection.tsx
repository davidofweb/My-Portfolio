import React, { useState, FormEvent } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Send, CheckCircle2, Copy, Check, ShieldAlert } from 'lucide-react';

export default function ContactSection() {
  const [projectType, setProjectType] = useState<string>('landing-page');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name || !email || !message) {
      setFormError("Please fill in all layout fields to submit your brief.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const projectOptions = [
    { id: 'landing-page', label: 'Landing Page Redesign' },
    { id: 'saas-system', label: 'SaaS Design System' },
    { id: 'ui-ux-design', label: 'Complex UI/UX Design' },
    { id: 'other', label: 'Other/Contract Role' }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent border-b border-zinc-900/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left direct contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md inline-block mb-3">
                Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-4">
                Let's construct something premium together.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans mb-8">
                Ready to optimize your product's landing page conversions or streamline your design system for fast remote development? Drop me a line.
              </p>

              <div className="space-y-6">
                
                {/* Email Panel Copy Direct */}
                <div className="flex items-center gap-4 bg-[#09090b]/40 border border-zinc-900 p-4 rounded-xl shadow-xs backdrop-blur-md">
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0">
                    <Mail className="h-4.5 w-4.5 text-indigo-400" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="block text-[9px] font-mono tracking-wider font-bold uppercase text-zinc-550">DIRECT EMAIL</span>
                    <span className="block text-sm font-bold text-white truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    id="copy-direct-email-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-850 cursor-pointer transition select-none flex-row"
                    aria-label="Copy Email"
                  >
                    {copiedText ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Response SLA indicator */}
                <div className="flex items-start gap-3 text-xs text-zinc-400 leading-relaxed font-sans">
                  <span className="text-indigo-500 mt-0.5 animate-pulse">●</span>
                  <span>**Typical Response SLA**: Under 18 business hours. I provide an async project brief draft within the same day.</span>
                </div>

                {/* Additional handles */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-zinc-900 mt-6 text-xs sm:text-sm">
                  <div>
                    <span className="block font-semibold text-zinc-500">Telegram</span>
                    <a href={`https://${PERSONAL_INFO.telegram}`} target="_blank" rel="noreferrer" className="block text-indigo-400 font-bold font-sans mt-0.5 hover:underline">t.me/orduszn</a>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-500">Discord</span>
                    <a href={`https://${PERSONAL_INFO.discord}`} target="_blank" rel="noreferrer" className="block text-indigo-400 font-bold font-sans mt-0.5 hover:underline">discord.gg/orduszn</a>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-500">Twitter</span>
                    <a href={`https://${PERSONAL_INFO.twitter}`} target="_blank" rel="noreferrer" className="block text-indigo-400 font-bold font-sans mt-0.5 hover:underline">x.com/orduszn</a>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-500">Availability</span>
                    <span className="block text-emerald-400 font-bold font-sans mt-0.5">● Open for roles</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability Widget and status */}
            <div className="mt-12 bg-indigo-650 text-white rounded-2xl p-6 border border-indigo-600 shadow-md">
              <span className="text-[9px] font-mono tracking-widest uppercase font-extrabold text-indigo-200">WORKLOAD STATUS</span>
              <h4 className="text-md font-bold mt-1">Bookings open for freelancing & contracts</h4>
              <p className="text-xs text-indigo-100 mt-2 font-sans leading-relaxed">
                Contact me early to lock in custom software engineering bookings, high-fidelity app designs, and frontend development schedules.
              </p>
            </div>
          </div>

          {/* Right interactive form card panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#09090b]/40 backdrop-blur-md border border-zinc-905 shadow-depth-3 rounded-2xl p-6.5 sm:p-10 relative overflow-hidden">
              {/* Soft visual depth lights */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full pointer-events-none"></div>
              
              {isSubmitted ? (
                // SUCCESS SUBMISSION VIEW
                <div id="contact-success-card" className="py-12 text-center flex flex-col items-center justify-center gap-6 relative z-10">
                  <div className="h-16 w-16 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shadow-depth-2">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-xl font-bold text-white tracking-tight">Project brief sent successfully!</h3>
                    <p className="text-xs sm:text-sm text-zinc-350 font-sans leading-relaxed">
                      Thank you for submitting your goals, **{name}**. {PERSONAL_INFO.name}'s Slack notification is active and will compile the design/dev requirements within 18 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl leading-relaxed text-xs text-zinc-400 max-w-md text-left font-sans shadow-xs">
                    <span className="font-bold text-white">Next Action State:</span> An intake summary review details will be sent to your inbox (**{email}**). Keep a lookout.
                  </div>

                  <button
                    id="submit-another-brief-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                      setFormError('');
                    }}
                    className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-zinc-350 hover:bg-zinc-850 cursor-pointer transition"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                // ACTIVE FORM INTERFACE layout
                <form id="contact-form-brief" onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                  
                  {formError && (
                    <div className="flex gap-2.5 items-center p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-medium flex-row">
                      <ShieldAlert className="h-4 w-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div>
                    <span className="block text-xs font-semibold text-zinc-300 mb-3">
                      Project Type Interest:
                    </span>
                    
                    {/* Select box tags selection grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {projectOptions.map((opt) => (
                        <button
                          id={`proj-opt-${opt.id}`}
                          type="button"
                          key={opt.id}
                          onClick={() => setProjectType(opt.id)}
                          className={`rounded-lg px-4 py-2.5 text-xs font-semibold text-left select-none cursor-pointer transition-all duration-300 flex items-center justify-between border ${projectType === opt.id ? 'bg-indigo-650 border-indigo-600 text-white shadow-depth-2 translate-y-[-1px]' : 'bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:bg-zinc-900/40'}`}
                        >
                          <span>{opt.label}</span>
                          {projectType === opt.id && <span className="h-1.5 w-1.5 rounded-full bg-white block animate-pulse"></span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-450 mb-1.5">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-zinc-900 bg-zinc-950/60 px-4 py-2.5 text-xs text-white placeholder-zinc-650 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 focus:outline-hidden transition-all duration-350"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-450 mb-1.5">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-zinc-900 bg-zinc-950/60 px-4 py-2.5 text-xs text-white placeholder-zinc-650 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 focus:outline-hidden transition-all duration-350"
                      />
                    </div>

                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-450 mb-1.5">Project Scope Summary</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Redesigning our core SaaS marketing flow to improve developer handoff and lift conversion rate metrics..."
                      className="w-full rounded-lg border border-zinc-900 bg-zinc-950/60 px-4 py-2.5 text-xs text-white placeholder-zinc-650 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 focus:outline-hidden transition-all duration-350 resize-none leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="pt-2 border-t border-zinc-900">
                    <button
                      id="submit-contact-brief-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-indigo-650 py-3 text-center text-xs font-bold text-white shadow-depth-2 hover:bg-indigo-600 hover:shadow-depth-3 hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 flex-row"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Transmit Private Project Brief</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
