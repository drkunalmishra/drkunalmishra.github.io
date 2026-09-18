import React from 'react';
import { Award, CheckCircle2, Sparkles, Layers, Search, Cloud, Trophy, Star } from 'lucide-react';
import { CERTIFICATIONS, HONORS_AWARDS } from '../data/profileData';

export const Certifications: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Search': return <Search className="w-5 h-5 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-400" />;
      default: return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan">Global Recognition</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Industry-standard certifications across cloud AI platforms, coupled with engineering awards for international telecom transformations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-3">
                  Issuer: {cert.issuer}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Honors & Awards Strip */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-dark-950/70 relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-6">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-display font-bold text-white">
              International Delivery & Engineering Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HONORS_AWARDS.map((award, index) => (
              <div key={index} className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {award.organization}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {award.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
