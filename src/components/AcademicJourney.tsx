import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../data/profileData';

export const AcademicJourney: React.FC = () => {
  return (
    <section id="academic" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Research Pedigree</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Academic <span className="text-gradient-emerald">Journey & Research</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            A continuous trajectory of scholarship connecting rigorous doctoral business administration, quantitative fellowship, and deep technical engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATION.map((edu, index) => {
            const isDoctoral = edu.badge?.includes('Doctoral');
            return (
              <div
                key={index}
                className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative group ${
                  isDoctoral
                    ? 'border-emerald-500/40 bg-dark-950/80 shadow-glow-emerald hover:-translate-y-1'
                    : 'border-slate-800/80 hover:border-slate-700 bg-dark-950/50 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      isDoctoral
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40 font-semibold'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      {edu.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {edu.institution}
                  </h3>

                  <div className="text-sm font-semibold text-emerald-400 mb-1">
                    {edu.degree}
                  </div>
                  
                  <div className="text-xs font-mono text-slate-400 mb-4">
                    Major: {edu.field}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                {/* Focus areas tags */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Focus Areas:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 text-[11px] font-mono border border-slate-800"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
