import React from 'react';
import { ArrowUp, ArrowUpRight, Cpu, BookOpen, Globe, Mail, Phone } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-dark-950 pt-16 pb-12 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Executive summary */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  {PROFILE.name}
                </span>
                <span className="block text-xs font-mono text-cyan-400">
                  AI Solutioning & Presales Leader
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mb-6">
              AI Architect Sr. Advisor at NTT DATA. Specializing in enterprise-scale Generative AI, 
              Agentic multi-agent systems, ontology knowledge graphs, and quantitative decision intelligence.
            </p>

            <div className="flex flex-col gap-1 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
                  {PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-violet-400" />
                <span>{PROFILE.phone}</span>
              </div>
            </div>
          </div>

          {/* Direct Ecosystem Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Research & Digital Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={PROFILE.links.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors group"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>ResearchGate Profile (Doctoral Publications)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors group"
                >
                  <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn (Kunal Mishra)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors group"
                >
                  <svg className="w-4 h-4 fill-[#ff0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube Channel (@LogicSeKharido)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-red-400" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                >
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>ePortfolio Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Section Nav & Top Action */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
                Navigation
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                <a href="#architecture" className="hover:text-cyan-300 transition-colors">Architecture</a>
                <a href="#competencies" className="hover:text-cyan-300 transition-colors">Competencies</a>
                <a href="#research" className="hover:text-cyan-300 transition-colors">Research Lab</a>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
                <a href="#academic" className="hover:text-cyan-300 transition-colors">Academic</a>
                <a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs font-mono transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Sub-brand */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Kunal Mishra. All rights reserved. Enterprise AI Architecture & Quantitative Econometrics.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Bengaluru, India</span>
            <span>•</span>
            <span className="text-cyan-400">NTT DATA</span>
            <span>•</span>
            <span className="text-red-400">@LogicSeKharido</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
