import React from 'react';
import { Shield, ArrowRight, Layers, Brain, Terminal, ChevronDown } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden tech-grid">
      {/* Background Neural Network Hero Banner */}
      <div className="absolute top-0 left-0 right-0 h-[480px] md:h-[620px] pointer-events-none z-0 overflow-hidden">
        <img
          src="./hero-network.jpg"
          alt="Neural Network Architecture Banner"
          className="w-full h-full object-cover object-center opacity-35 filter contrast-125 saturate-125"
          onError={(e) => {
            // Fallback to png if jpg fails
            const target = e.currentTarget;
            if (!target.src.endsWith('.png')) {
              target.src = './hero-network.png';
            }
          }}
        />
        {/* Soft edge gradients blending image into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-dark-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-glow-cyan">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>AI Architect Sr. Advisor @ NTT DATA</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono backdrop-blur-md">
            <Brain className="w-3.5 h-3.5 text-violet-400" />
            <span>Dual Doctoral Researcher (AI & Analytics)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono backdrop-blur-md">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Enterprise Multi-Agent Governance</span>
          </div>
        </div>

        {/* Hero Headline & Subhead */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Architecting <span className="text-gradient-cyan">Governed Agentic AI</span> & Quantitative Decision Systems
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
            <span className="text-white font-semibold">{PROFILE.name}</span> is an AI Solutioning & Presales Leader with{' '}
            <span className="text-cyan-300 font-medium">over 14 years of enterprise experience</span> spanning foundation model architectures, 
            knowledge graphs, multi-agent frameworks, and empirical econometrics. Moving global enterprises from experimental prototypes to 
            battle-tested, production-ready AI platforms.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#architecture"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <Layers className="w-4 h-4 text-cyan-200" />
              <span>Explore Startup Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#research"
              className="px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-violet-500/50 hover:bg-slate-800/80 font-medium text-sm transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Research & Econometrics Lab</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-5 py-3.5 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs transition-colors"
            >
              mishrakunal1990@gmail.com
            </button>
          </div>
        </div>

        {/* High-Impact KPI Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl glass-panel border border-slate-800/80 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
              14+
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Years Experience</div>
            <p className="text-xs text-slate-400">Enterprise AI, Presales & Cloud Platforms</p>
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800/80 relative overflow-hidden group hover:border-violet-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 group-hover:text-violet-300 transition-colors">
              8
            </div>
            <div className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1">Landmark Roles</div>
            <p className="text-xs text-slate-400">NTT DATA, ORMAE, Tech Mahindra & more</p>
            <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/5 rounded-full blur-xl pointer-events-none" />
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800/80 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 group-hover:text-emerald-300 transition-colors">
              2
            </div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Doctoral Tracks</div>
            <p className="text-xs text-slate-400">Walsh (DBA AI) & ISBR (FPM Analytics)</p>
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800/80 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 group-hover:text-amber-300 transition-colors">
              4+
            </div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">AI Credentials</div>
            <p className="text-xs text-slate-400">Google Vertex, Azure AI, Dataiku, GenAI</p>
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#architecture" 
          aria-label="Scroll down to startup blueprint"
          className="text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
