import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, Heart, Clock } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const Footer: React.FC = () => {
  const [pakistanTime, setPakistanTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setPakistanTime(new Intl.DateTimeFormat([], options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEffects.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono font-bold text-white text-base">Hamza Hassan</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                Full-Stack Developer
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Rawalpindi / Islamabad, Pakistan • Available for remote worldwide & relocation
            </p>
          </div>

          {/* Center: Live Pakistan Time */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/5 font-mono text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Local Time (PKT):</span>
            <span className="text-cyan-300 font-bold">{pakistanTime || 'Loading...'}</span>
          </div>

          {/* Right: Quick Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Hamza Hassan. Architected with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision & high-performance engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
