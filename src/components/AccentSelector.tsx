import React, { useEffect, useState } from 'react';
import { Palette, Layers, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type AccentId = 'blue' | 'orange' | 'lime' | 'red';

export interface AccentOption {
  id: AccentId;
  label: string;
  color: string; // primary hex
  colors: {
    50: string;
    100: string;
    200: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
}

export const ACCENTS: AccentOption[] = [
  {
    id: 'blue',
    label: 'Blue Accent',
    color: '#2563EB',
    colors: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      500: '#3b82f6',
      600: '#2563EB',
      700: '#1d4ed8',
      800: '#1e40af'
    }
  },
  {
    id: 'orange',
    label: 'Orange Accent',
    color: '#F97316',
    colors: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412'
    }
  },
  {
    id: 'lime',
    label: 'Lime Accent',
    color: '#84CC16',
    colors: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      500: '#84CC16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212'
    }
  },
  {
    id: 'red',
    label: 'Red Accent',
    color: '#EF4444',
    colors: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b'
    }
  }
];

export function applyAccent(accent: AccentOption) {
  const root = document.documentElement;
  Object.entries(accent.colors).forEach(([key, val]) => {
    root.style.setProperty(`--accent-${key}`, val);
  });
  // Also pass custom 3D glass ring highlights and spotlight flows
  root.style.setProperty(`--accent-color-glow`, `${accent.color}14`); // 8% alpha string hex mapping
  root.style.setProperty(`--accent-color-border-hover`, `${accent.color}26`); // 15% alpha
}

export default function AccentSelector() {
  const [activeAccentId, setActiveAccentId] = useState<AccentId>('blue');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('david_portfolio_accent') as AccentId;
    if (saved) {
      const match = ACCENTS.find(a => a.id === saved);
      if (match) {
        setActiveAccentId(saved);
        applyAccent(match);
      }
    } else {
      // Default to Blue
      const fallback = ACCENTS.find(a => a.id === 'blue');
      if (fallback) {
        applyAccent(fallback);
      }
    }
  }, []);

  const selectAccent = (id: AccentId) => {
    const match = ACCENTS.find(a => a.id === id);
    if (match) {
      setActiveAccentId(id);
      applyAccent(match);
      localStorage.setItem('david_portfolio_accent', id);
    }
  };

  const activeOption = ACCENTS.find(a => a.id === activeAccentId) || ACCENTS[0];

  return (
    <div id="accent-spec-container" className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: 'spring', damping: 20, stiffness: 220 }}
              className="absolute bottom-16 right-0 mb-2 w-56 rounded-2xl bg-white shadow-depth-3 glass-bezel p-4 overflow-hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-slate-400" />
                  <span>Interactive Accents</span>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              
              <div className="space-y-1.5">
                {ACCENTS.map((acc) => {
                  const isActive = acc.id === activeAccentId;
                  return (
                    <button
                      id={`accent-choice-item-${acc.id}`}
                      key={acc.id}
                      onClick={() => selectAccent(acc.id)}
                      className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium cursor-pointer transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] ${isActive ? 'bg-slate-50 text-slate-900 border border-slate-200/40 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/50'}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span 
                          className="h-3 w-3 rounded-full block border shadow-xs" 
                          style={{ 
                            backgroundColor: acc.color,
                            borderColor: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.05)'
                          }}
                        />
                        <span>{acc.label}</span>
                      </div>
                      
                      {isActive && (
                        <Check className="h-3.5 w-3.5 text-indigo-600 font-bold" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-4 border-t border-slate-100 pt-2 text-[10px] font-mono text-slate-400 text-center leading-relaxed">
                Theme: <strong className="text-zinc-800">White &amp; Graphite</strong>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Floater Trigger button with glassmorphism glow */}
        <button
          id="accent-floater-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 items-center gap-2.5 rounded-full bg-[#18181B] px-4.5 font-sans text-xs font-bold text-white shadow-depth-2 hover:bg-black transition-all duration-300 transform active:scale-95 cursor-pointer glass-bezel-dark group micro-active-button"
        >
          <div className="relative flex items-center justify-center">
            <Palette className="h-4 w-4 relative z-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span 
              className="absolute inset-0 rounded-full blur-xs opacity-70 animate-ping pointer-events-none" 
              style={{ backgroundColor: activeOption.color }}
            />
          </div>
          <span className="hidden sm:inline-block">Switch Colors</span>
          <span 
            className="h-2 w-2 rounded-full border border-white/20 shadow-xs block"
            style={{ backgroundColor: activeOption.color }}
          />
        </button>
      </div>
    </div>
  );
}
