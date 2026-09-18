import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Research Lab', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Academic', href: '#academic' },
    { label: 'Credentials', href: '#certifications' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20 border border-cyan-500/40 group-hover:border-cyan-400 shadow-glow-cyan transition-all">
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {PROFILE.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-mono">
                NTT DATA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              AI Architect Sr. Advisor & Researcher
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 glass-panel border border-slate-800/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PROFILE.links.researchGate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          >
            ResearchGate
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
          <button
            onClick={onOpenContact}
            className="relative group px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Executive Brief</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl glass-panel border border-slate-800/80 shadow-2xl animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Executive Brief & Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
