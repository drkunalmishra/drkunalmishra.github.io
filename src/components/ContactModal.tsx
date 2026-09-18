import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/40 shadow-2xl bg-dark-900/95 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Executive Channel</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            Connect with Kunal Mishra
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Available for Enterprise AI advisory, executive solution defense, research collaborations, and keynotes.
          </p>
        </div>

        {/* Direct Channels */}
        <div className="space-y-3 mb-6">
          {/* Email */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-dark-950 border border-slate-800 group hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                <a href={`mailto:${PROFILE.email}`} className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300">
                  {PROFILE.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PROFILE.email, 'email')}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-dark-950 border border-slate-800 group hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-950/80 border border-violet-800/50 flex items-center justify-center text-violet-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Mobile & WhatsApp</div>
                <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-mono text-white hover:text-violet-300">
                  {PROFILE.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PROFILE.phone, 'phone')}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy phone number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-950 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Base Location</div>
              <div className="text-xs sm:text-sm font-mono text-white">
                {PROFILE.location}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Strip */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-[#0a66c2]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href={PROFILE.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-red-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-[#ff0000]" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>@LogicSeKharido</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
