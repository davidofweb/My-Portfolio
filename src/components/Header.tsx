import { PERSONAL_INFO } from '../data';
import { ArrowLeft, Menu, X, Globe, Mail, Figma, Link2, Twitter, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  selectedProjectId: string | null;
  onBack: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ selectedProjectId, onBack, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (selectedProjectId) {
      onBack();
      // Allow state update to finish before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-1.5">
          {selectedProjectId ? (
            <button 
              id="back-btn-header"
              onClick={onBack}
              className="group mr-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Works</span>
            </button>
          ) : (
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-mono text-sm font-bold text-white transition-transform group-hover:scale-105">
                DO
              </span>
              <div>
                <span className="block text-sm font-semibold tracking-tight text-slate-900">{PERSONAL_INFO.name}</span>
                <span className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-none mt-0.5">{PERSONAL_INFO.title}</span>
              </div>
            </button>
          )}
        </div>

        {/* Desktop Web Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer relative py-1"
            >
              {item.label}
            </button>
          ))}
          <span className="h-4 w-[1px] bg-slate-200"></span>
          <a
            id="cta-header-contact"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition-all cursor-pointer"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-slate-100 bg-white md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-all text-left w-full cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-4 border-t border-slate-100 pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                  className="flex justify-center items-center rounded-lg bg-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-all cursor-pointer"
                >
                  Hire Me
                </a>
                <div className="flex items-center justify-center gap-5 py-2 text-slate-400">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-600" title="Email"><Mail className="h-4 w-4" /></a>
                  <a href={`https://${PERSONAL_INFO.twitter}`} target="_blank" rel="noreferrer" className="hover:text-slate-600" title="Twitter"><Twitter className="h-4 w-4" /></a>
                  <a href={`https://${PERSONAL_INFO.telegram}`} target="_blank" rel="noreferrer" className="hover:text-slate-600" title="Telegram"><Send className="h-4 w-4" /></a>
                  <a href={`https://${PERSONAL_INFO.discord}`} target="_blank" rel="noreferrer" className="hover:text-slate-600" title="Discord"><MessageSquare className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
