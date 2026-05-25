import { PERSONAL_INFO } from '../data';
import { Mail, MessageSquare, Send, Twitter, Github, ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: "Twitter", href: `https://${PERSONAL_INFO.twitter}`, icon: Twitter },
    { label: "Telegram", href: `https://${PERSONAL_INFO.telegram}`, icon: Send },
    { label: "Discord", href: `https://${PERSONAL_INFO.discord}`, icon: MessageSquare },
    { label: "Github", href: `https://${PERSONAL_INFO.github}`, icon: Github }
  ];

  return (
    <footer id="site-footer" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-850">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          <div className="md:col-span-10 lg:col-span-5 flex flex-col items-start block">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-indigo-500 font-mono text-xs font-bold text-white uppercase">
                DO
              </span>
              <span className="text-sm font-semibold text-white tracking-widest uppercase">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Professional Web Developer & Designer building high-performance marketing pages and custom SaaS applications aligned cleanly with modern remote workloads.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-slate-800 p-2.5 hover:bg-slate-750 hover:text-white transition-all text-slate-400 flex items-center gap-1.5 text-xs font-semibold px-3"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Core Principles</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">01.</span>
                <span>8px Layout Spacing Grid Precision</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">02.</span>
                <span>Robust Figma Auto-Layout Components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">03.</span>
                <span>Developer-aligned specs & JSON tokens</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11 flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-2">Availability</h4>
              <p className="text-xs text-indigo-400 font-medium">● High Priority Projects</p>
              <p className="text-xs text-slate-500 mt-1">Bookings open for Q3/Q4 2026</p>
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="mt-8 md:mt-0 flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with pixel-perfect responsive execution.</p>
          <div className="flex gap-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-all">
              {PERSONAL_INFO.email}
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500 hover:text-slate-400">Web Dev & Design Portfolio v2.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
