import React from 'react';

export default function ProjectSkeletonCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#09090b]/20 backdrop-blur-md border border-zinc-900 shadow-depth-3 h-full">
      
      {/* Visual Workspace Thumb Skeleton with sliding sweep shine */}
      <div className="aspect-16/10 w-full bg-[#030303]/70 border-b border-zinc-900/60 relative overflow-hidden flex flex-col pt-3 px-4">
        {/* Shimmer sweep overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/8 to-transparent -translate-x-full animate-shimmer pointer-events-none" style={{ width: '200%' }}></div>
        
        {/* Mock Header skeleton structure */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
          <div className="flex items-center gap-1.5 flex-row">
            <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
            <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
            <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
            <div className="h-2 w-24 bg-zinc-900 rounded-sm ml-1"></div>
          </div>
          <div className="h-3 w-12 bg-zinc-900 rounded-sm"></div>
        </div>

        {/* Mock Dashboard Content skeleton */}
        <div className="flex-1 mt-3 grid grid-cols-12 gap-2.5 opacity-60">
          <div className="col-span-3 flex flex-col gap-1.5 border-r border-zinc-900 pr-1.5">
            <div className="h-2.5 w-full bg-zinc-900 rounded-sm"></div>
            <div className="h-2 w-4/5 bg-zinc-900/40 rounded-sm"></div>
            <div className="h-2 w-11/12 bg-zinc-900/40 rounded-sm"></div>
          </div>
          
          <div className="col-span-9 flex flex-col gap-3">
            <div className="h-3.5 w-20 bg-zinc-900 rounded-sm"></div>
            <div className="rounded border border-zinc-900/60 bg-zinc-950/40 p-2.5 flex flex-col gap-2">
              <div className="h-2.5 w-1/2 bg-zinc-900 rounded-sm"></div>
              <div className="h-5 w-3/4 bg-zinc-900/65 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section Info with pulse bars */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 space-y-4">
        
        {/* Metric Tag and Client layout placeholder */}
        <div className="flex items-center justify-between">
          <div className="h-3.5 w-24 bg-zinc-900 rounded animate-pulse"></div>
          <div className="h-5 w-28 bg-zinc-900 rounded-full animate-pulse"></div>
        </div>

        {/* Project title placeholder */}
        <div className="h-6 w-3/4 bg-zinc-900 rounded animate-pulse"></div>
        
        {/* Subtitle / desc placeholder lines */}
        <div className="space-y-2 pt-1.5">
          <div className="h-3.5 w-full bg-zinc-900/70 rounded animate-pulse"></div>
          <div className="h-3.5 w-5/6 bg-zinc-900/70 rounded animate-pulse"></div>
        </div>

        {/* Tag Pills placeholder layout */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          <div className="h-5 w-12 bg-zinc-900 rounded animate-pulse"></div>
          <div className="h-5 w-16 bg-zinc-900 rounded animate-pulse"></div>
          <div className="h-5 w-14 bg-zinc-900 rounded animate-pulse"></div>
        </div>

        {/* Read study button footer placeholder */}
        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between mt-auto">
          <div className="h-4.5 w-32 bg-zinc-900 rounded animate-pulse"></div>
          <div className="h-4.5 w-4.5 rounded-full bg-zinc-900 animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}
