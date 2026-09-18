import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/profileData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedRole, setExpandedRole] = useState<string>(EXPERIENCES[0].id);

  const categories = ['All', 'Enterprise AI', 'Presales & Solutioning', 'Data & Cloud', 'Telecom & Core'];

  const filteredExperiences = selectedCategory === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter(exp => exp.category === selectedCategory);

  return (
    <section id="experience" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory (14+ Years)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Enterprise <span className="text-gradient-cyan">Experience Timeline</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              From global carrier telecom delivery to leading enterprise Generative AI and multi-agent presales solutioning at NTT DATA.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedRole === exp.id;
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node icon */}
                <div 
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${
                    isExpanded 
                      ? 'bg-cyan-500 text-dark-950 shadow-glow-cyan scale-110' 
                      : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:border-cyan-500/50'
                  }`}
                >
                  <span className="text-[10px] md:text-xs font-mono font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Experience Card */}
                <div 
                  className={`glass-panel p-6 rounded-2xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'border-cyan-500/40 shadow-xl bg-dark-950/90' 
                      : 'border-slate-800/80 hover:border-slate-700 bg-dark-950/50 cursor-pointer'
                  }`}
                  onClick={() => setExpandedRole(exp.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.company}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                          {exp.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-cyan-400">
                        {exp.title}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Expandable Highlights */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800/80 animate-in fade-in duration-200">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Key Responsibilities & Deliverables:
                      </h4>
                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {!isExpanded && (
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 pt-2 border-t border-slate-800/50">
                      <span>Click to view detailed impact & technologies</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
