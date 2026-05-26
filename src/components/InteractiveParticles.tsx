import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ParticleConfig {
  id: number;
  baseX: number; // percentage width
  baseY: number; // percentage height
  size: number; // px size
  factorX: number; // movement sensitivity multiplier in X
  factorY: number; // movement sensitivity multiplier in Y
  opacity: number;
  color: string;
  pulseDuration: number;
  delay: number;
  isGlowOrb: boolean; // boolean to denote volumetric blur orbs
  isCross: boolean; // boolean to render crosshair indicators
}

// Helper to generate a structured set of particles with deterministic distribution
function generateParticles(): ParticleConfig[] {
  const list: ParticleConfig[] = [];
  
  // 1. Generate deep background soft blurred lighting orbs (volumetric bokeh lights)
  const colors = [
    'bg-indigo-400/10 blur-xl',
    'bg-emerald-400/8 blur-xl',
    'bg-sky-400/8 blur-xl',
    'bg-indigo-300/10 blur-2xl',
  ];
  
  for (let i = 0; i < 6; i++) {
    list.push({
      id: i,
      baseX: 15 + (i * 15) + (Math.sin(i) * 5),
      baseY: 20 + ((i % 3) * 25) + (Math.cos(i) * 5),
      size: 60 + (i * 20),
      factorX: -45 - (i * 15), // Large movement in opposite direction for parallax depth
      factorY: -45 - (i * 15),
      opacity: 0.25 + (i * 0.05),
      color: colors[i % colors.length],
      pulseDuration: 6 + i,
      delay: i * 0.4,
      isGlowOrb: true,
      isCross: false
    });
  }

  // 2. Generate sharp foreground crisp nodes (constellations / grid locks)
  const foregroundColors = [
    'bg-slate-300',
    'bg-indigo-400/70',
    'bg-emerald-400/60',
    'bg-indigo-500/40',
  ];

  for (let i = 0; i < 20; i++) {
    list.push({
      id: 10 + i,
      baseX: 10 + (i * 4.2) + (Math.cos(i) * 8),
      baseY: 15 + ((i % 4) * 18) + (Math.sin(i) * 10),
      size: 2 + (i % 3), // 2px to 4px
      factorX: 20 + ((i % 5) * 8), // Moves in synchronization for dynamic parallax pop
      factorY: 20 + ((i % 5) * 8),
      opacity: 0.3 + ((i % 4) * 0.15),
      color: foregroundColors[i % foregroundColors.length],
      pulseDuration: 3.5 + (i * 0.3),
      delay: i * 0.15,
      isGlowOrb: false,
      isCross: i % 5 === 0 // 20% crosses
    });
  }

  return list;
}

export default function InteractiveParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<ParticleConfig[]>([]);

  // Smooth springs for tracking the cursor / finger motion direction
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 100, mass: 0.6 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize position relative to center: range is [-0.5, 0.5]
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cursorX.set(x);
    cursorY.set(y);
  };

  const handlePointerLeave = () => {
    // Gracefully ease back to zero-state calibration
    cursorX.set(0);
    cursorY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden"
    >
      {/* Visual blueprint overlay linking coordinates */}
      {particles.map((p) => (
        <ParticleItem 
          key={p.id}
          config={p}
          smoothX={smoothX}
          smoothY={smoothY}
        />
      ))}
    </div>
  );
}

interface ParticleItemProps {
  key?: React.Key;
  config: ParticleConfig;
  smoothX: any;
  smoothY: any;
}

function ParticleItem({ config, smoothX, smoothY }: ParticleItemProps) {
  // Dynamically map smooth motion inputs to layout translation coordinates
  const transX = useTransform(smoothX, (v: number) => v * config.factorX);
  const transY = useTransform(smoothY, (v: number) => v * config.factorY);

  if (config.isGlowOrb) {
    return (
      <motion.div
        className={`absolute rounded-full pointer-events-none mix-blend-multiply ${config.color}`}
        style={{
          left: `${config.baseX}%`,
          top: `${config.baseY}%`,
          width: config.size,
          height: config.size,
          x: transX,
          y: transY,
          opacity: config.opacity,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [config.opacity, config.opacity * 1.3, config.opacity],
        }}
        transition={{
          duration: config.pulseDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: config.delay,
        }}
      />
    );
  }

  if (config.isCross) {
    return (
      <motion.div
        className="absolute pointer-events-none text-slate-350/30"
        style={{
          left: `${config.baseX}%`,
          top: `${config.baseY}%`,
          x: transX,
          y: transY,
          opacity: config.opacity,
        }}
        animate={{
          opacity: [config.opacity, config.opacity * 1.6, config.opacity],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: config.pulseDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: config.delay,
        }}
      >
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.2"
          className="transform"
        >
          <line x1="6" y1="0" x2="6" y2="12" />
          <line x1="0" y1="6" x2="12" y2="6" />
        </svg>
      </motion.div>
    );
  }

  // Draw crisp micro-indicator grids
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${config.color}`}
      style={{
        left: `${config.baseX}%`,
        top: `${config.baseY}%`,
        width: config.size,
        height: config.size,
        x: transX,
        y: transY,
        opacity: config.opacity,
      }}
      animate={{
        scale: [1, 1.35, 1],
        opacity: [config.opacity, config.opacity * 1.8, config.opacity],
      }}
      transition={{
        duration: config.pulseDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: config.delay,
      }}
    />
  );
}
