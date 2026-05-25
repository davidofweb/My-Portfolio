import React, { useState, FormEvent } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Briefcase, Calendar, Globe, Send, CheckCircle2, Copy, Check, ShieldAlert } from 'lucide-react';

export default function ContactSection() {
  const [projectType, setProjectType] = useState<string>('landing-page');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all layout fields to submit your brief.");
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
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left direct contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md inline-block mb-3">
                Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
                Let's construct something premium together.
              </h2>
              <p className="text-sm sm:text-base text-slate-550 leading-relaxed font-sans mb-8">
                Ready to optimize your product's landing page conversions or streamline your design system for fast remote development? Drop me a line.
              </p>

              <div className="space-y-6">
                
                {/* Email Panel Copy Direct */}
                <div className="flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
                  <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-lg shrink-0">
                    <Mail className="h-4.5 w-4.5 text-indigo-600" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="block text-[9px] font-mono tracking-wider font-bold uppercase text-slate-400">DIRECT EMAIL</span>
                    <span className="block text-sm font-bold text-slate-900 truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    id="copy-direct-email-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition select-none"
                    aria-label="Copy Email"
                  >
                    {copiedText ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
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
                <div className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed font-sans">
                  <span className="text-indigo-500 mt-0.5">●</span>
                  <span>**Typical Response SLA**: Under 18 business hours. I provide an async project brief draft within the same day.</span>
                </div>

                {/* Additional handles */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 mt-6 text-xs sm:text-sm">
                  <div>
                    <span className="block font-semibold text-slate-400">Telegram</span>
                    <a href={`https://${PERSONAL_INFO.telegram}`} target="_blank" rel="noreferrer" className="block text-indigo-600 font-bold font-sans mt-0.5 hover:underline">t.me/orduszn</a>
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400">Discord</span>
                    <a href={`https://${PERSONAL_INFO.discord}`} target="_blank" rel="noreferrer" className="block text-indigo-600 font-bold font-sans mt-0.5 hover:underline">discord.gg/orduszn</a>
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400">Twitter</span>
                    <a href={`https://${PERSONAL_INFO.twitter}`} target="_blank" rel="noreferrer" className="block text-indigo-600 font-bold font-sans mt-0.5 hover:underline">x.com/orduszn</a>
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400">Availability</span>
                    <span className="block text-emerald-600 font-bold font-sans mt-0.5 font-semibold">● Open for roles</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability Widget and status */}
            <div className="mt-12 bg-indigo-600 text-white rounded-2xl p-6 border border-indigo-500 shadow-lg">
              <span className="text-[9px] font-mono tracking-widest uppercase font-extrabold text-indigo-200">WORKLOAD STATUS</span>
              <h4 className="text-md font-bold mt-1">Bookings open for freelancing & contracts</h4>
              <p className="text-xs text-indigo-100 mt-2 font-sans leading-relaxed">
                Contact me early to lock in custom software engineering bookings, high-fidelity app designs, and frontend development schedules.
              </p>
            </div>
          </div>

          {/* Right interactive form card panel */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-2xl p-6.5 sm:p-10 shadow-xs relative">
              
              {isSubmitted ? (
                // SUCCESS SUBMISSION VIEW
                <div id="contact-success-card" className="py-12 text-center flex flex-col items-center justify-center gap-6 animate-fade-in">
                  <div className="h-16 w-16 bg-emerald-50 border border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Project brief sent successfully!</h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      Thank you for submitting your goals, **{name}**. {PERSONAL_INFO.name}'s Slack notification is active and will compile the design/dev requirements within 18 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-550 bg-slate-50 border border-slate-150 rounded-xl leading-relaxed text-xs text-slate-550 max-w-md text-left font-sans">
                    <span className="font-bold text-slate-800">Next Action State:</span> An intake summary review details will be sent to your inbox (**{email}**). Keep a lookout.
                  </div>

                  <button
                    id="submit-another-brief-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 rounded-lg border border-slate-250 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer transition"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                // ACTIVE FORM INTERFACE layout
                <form id="contact-form-brief" onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div>
                    <span className="block text-xs font-semibold text-slate-705 text-slate-800 mb-3">
                      Project Type Interest:
                    </span>
                    
                    {/* Select box tags selection grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                      {projectOptions.map((opt) => (
                        <button
                          id={`proj-opt-${opt.id}`}
                          type="button"
                          key={opt.id}
                          onClick={() => setProjectType(opt.id)}
                          className={`rounded-lg border px-4 py-2.5 text-xs font-semibold text-left select-none cursor-pointer transition-all ${projectType === opt.id ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs' : 'bg-slate-50 border-slate-100 text-slate-700 hover:border-slate-350'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs text-slate-800 focus:border-indigo-500 focus:outline-hidden transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs text-slate-800 focus:border-indigo-500 focus:outline-hidden transition"
                      />
                    </div>

                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">Project Scope Summary</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Redesigning our core SaaS marketing flow to improve developer handoff and lift conversion rate metrics..."
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs text-slate-800 focus:border-indigo-500 focus:outline-hidden transition resize-none leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="pt-2 border-t border-slate-150">
                    <button
                      id="submit-contact-brief-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-indigo-600 py-3 text-center text-xs font-bold text-white shadow-xs hover:bg-indigo-505 hover:bg-indigo-550 transition-colors cursor-pointer flex items-center justify-center gap-2"
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
