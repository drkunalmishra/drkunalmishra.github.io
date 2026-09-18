import React, { useState } from 'react';
import { 
  Database, 
  Network, 
  Cpu, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Lock, 
  Sparkles, 
  RefreshCw 
} from 'lucide-react';
import { STARTUP_BLUEPRINT } from '../data/profileData';

export const StartupBlueprint: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const selectedStage = STARTUP_BLUEPRINT.find(s => s.stepNumber === activeStage) || STARTUP_BLUEPRINT[0];

  const getStageIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Database': return <Database className={className} />;
      case 'Network': return <Network className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Scale': return <Scale className={className} />;
      default: return <Layers className={className} />;
    }
  };

  return (
    <section id="architecture" className="py-24 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4 shadow-glow-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Crucial Architectural Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Governed Multi-Agent <span className="text-gradient-cyan">Intelligence Platform</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            An enterprise-grade, end-to-end blueprint transforming raw multimodal data into mathematically verifiable business decisions. 
            Bridging Medallion Lakehouses, Semantic Ontologies, LangGraph Agents, and Gurobi Optimization.
          </p>
        </div>

        {/* Visual Pipeline Flow Diagram */}
        <div className="relative mb-12">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-emerald-500/40 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STARTUP_BLUEPRINT.map((stage) => {
              const isSelected = stage.stepNumber === activeStage;
              return (
                <button
                  key={stage.stageId}
                  onClick={() => setActiveStage(stage.stepNumber)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'glass-panel border-2 border-cyan-400 shadow-glow-cyan -translate-y-1'
                      : 'bg-dark-950/80 border border-slate-800 hover:border-slate-700 hover:bg-dark-900'
                  }`}
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      isSelected 
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50' 
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      STAGE 0{stage.stepNumber}
                    </span>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md' 
                        : 'bg-slate-900 text-slate-400 group-hover:text-cyan-400'
                    }`}>
                      {getStageIcon(stage.iconName, 'w-5 h-5')}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-display font-bold text-base text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {stage.tagline}
                  </p>

                  {/* Quick Tech Badge */}
                  <div className="flex flex-wrap gap-1">
                    {stage.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                    {stage.technologies.length > 2 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/90 text-cyan-400 border border-slate-800">
                        +{stage.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Active highlight indicator bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Stage Inspector Canvas */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Stage Overview & Key Capabilities */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                    Stage 0{selectedStage.stepNumber} Specification
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ID: {selectedStage.stageId}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {selectedStage.title}
                </h3>
                <p className="text-cyan-400 font-mono text-xs sm:text-sm mb-4">
                  {selectedStage.tagline}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedStage.summary}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Core Pipeline Capabilities</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedStage.keyCapabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies strip */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Integrated Stacks & Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-dark-950 border border-slate-700/80 text-cyan-300 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Guardrails, Governance & System Diagram */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Strict Guardrails Card */}
              <div className="p-5 rounded-2xl bg-dark-950/80 border border-red-500/30 shadow-lg">
                <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>Strict ABAC & Safety Guardrails</span>
                </div>
                <ul className="space-y-2">
                  {selectedStage.guardrails.map((gr, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                      <span>{gr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Highlights */}
              <div className="p-5 rounded-2xl bg-dark-950/80 border border-violet-500/30 shadow-lg">
                <div className="flex items-center gap-2 mb-3 text-violet-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-violet-400" />
                  <span>Architectural Highlights</span>
                </div>
                <ul className="space-y-2">
                  {selectedStage.architecturalHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-1.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Stage Selector Footer */}
              <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-center justify-between mt-auto">
                <span className="text-xs text-slate-400">Step {activeStage} of 4</span>
                <button
                  onClick={() => setActiveStage(activeStage === 4 ? 1 : activeStage + 1)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium transition-colors"
                >
                  <span>{activeStage === 4 ? 'Cycle to Stage 1' : 'Proceed to Next Stage'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Architecture Flow Map (Interactive Visual Topology) */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800/80 text-center">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>End-to-End Enterprise Flow Topology</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono">
            <div className="px-3 py-2 rounded-lg bg-dark-950 border border-cyan-500/40 text-cyan-300">
              Multimodal Ingest (PDF / SQL / Audio)
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
            <div className="px-3 py-2 rounded-lg bg-dark-950 border border-blue-500/40 text-blue-300">
              Databricks & Snowflake Lakehouse
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
            <div className="px-3 py-2 rounded-lg bg-dark-950 border border-purple-500/40 text-purple-300">
              Timbr + Purview Semantic Graph (ABAC)
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
            <div className="px-3 py-2 rounded-lg bg-dark-950 border border-emerald-500/40 text-emerald-300">
              LangGraph Multi-Agent Ensemble
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
            <div className="px-3 py-2 rounded-lg bg-dark-950 border border-amber-500/40 text-amber-300">
              Gurobi Mathematical Optimization
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
            <div className="px-3 py-2 rounded-lg bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 font-bold">
              Governed Decision Intelligence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
