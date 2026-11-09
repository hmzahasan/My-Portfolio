import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Database,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo, stats } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

interface HeroProps {
  onOpenResume: () => void;
  onOpenPlaygroundTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenPlaygroundTab }) => {
  const roles = [
    'Full-Stack Developer',
    'React.js & Next.js Specialist',
    'Gemini AI / LLM Integrator',
    'MERN Stack Engineer',
    'Node.js & Backend Architect'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const scrollToSection = (id: string) => {
    soundEffects.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intros */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time & Contract Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
              </h1>
              <div className="h-12 sm:h-14 flex items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-slate-300">
                  {displayText}
                  <span className="inline-block w-1 h-7 sm:h-8 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Objective & Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalInfo.tagline} Experienced in building component-based frontend architectures in 
              <span className="text-cyan-300 font-semibold"> React.js & Next.js</span>, fault-tolerant REST APIs in 
              <span className="text-indigo-300 font-semibold"> Node.js & Express</span>, and cutting-edge 
              <span className="text-purple-300 font-semibold"> Gemini AI</span> applications.
            </p>

            {/* Quick badges info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300 underline underline-offset-2">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 underline underline-offset-2">
                  github.com/{personalInfo.githubUsername}
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  scrollToSection('playground');
                }}
                className="group px-5 py-3 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Try Interactive Demos</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  scrollToSection('projects');
                }}
                className="px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenResume();
                }}
                className="px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume CV</span>
              </button>
            </div>

            {/* Fast Stats Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                  <div className="text-xl sm:text-2xl font-black font-mono text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Teaser */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-xl opacity-75"></div>
              
              {/* Code Card Terminal Preview */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">hamza-stack.config.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    <span>v2.5.0-ready</span>
                  </div>
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-3 text-slate-300">
                  <div className="text-slate-500">// Hamza Hassan — Engineering Profile</div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-cyan-300">name</span>:{' '}
                      <span className="text-emerald-300">"Hamza Hassan"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">degree</span>:{' '}
                      <span className="text-emerald-300">"BS Computer Science"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">cgpa</span>:{' '}
                      <span className="text-amber-400">3.48</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">internship</span>:{' '}
                      <span className="text-emerald-300">"NESCOM (Azure DevOps)"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">coreStack</span>: [
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"Next.js"</span>,{' '}
                      <span className="text-emerald-300">"TypeScript"</span>,{' '}
                      <span className="text-emerald-300">"Node.js"</span>,{' '}
                      <span className="text-emerald-300">"Gemini AI"</span>]
                    </div>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 text-slate-500">// Run Live Interactive Playground</div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-cyan-400 font-bold">Try Interactive Apps:</span>
                      <span className="text-[10px] text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded">4 Mini-Apps</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => {
                          scrollToSection('playground');
                          if (onOpenPlaygroundTab) onOpenPlaygroundTab('resume-matcher');
                        }}
                        className="p-2 rounded bg-slate-800/80 hover:bg-cyan-950/50 hover:border-cyan-500/40 border border-white/5 text-left text-[11px] transition-all group"
                      >
                        <div className="text-cyan-300 font-semibold flex items-center justify-between">
                          <span>AI Resume Matcher</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Gemini AI Semantic Gap</div>
                      </button>

                      <button
                        onClick={() => {
                          scrollToSection('playground');
                          if (onOpenPlaygroundTab) onOpenPlaygroundTab('banking-ledger');
                        }}
                        className="p-2 rounded bg-slate-800/80 hover:bg-emerald-950/50 hover:border-emerald-500/40 border border-white/5 text-left text-[11px] transition-all group"
                      >
                        <div className="text-emerald-300 font-semibold flex items-center justify-between">
                          <span>Banking Ledger</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Idempotency & Retries</div>
                      </button>

                      <button
                        onClick={() => {
                          scrollToSection('playground');
                          if (onOpenPlaygroundTab) onOpenPlaygroundTab('restaurant-assistant');
                        }}
                        className="p-2 rounded bg-slate-800/80 hover:bg-purple-950/50 hover:border-purple-500/40 border border-white/5 text-left text-[11px] transition-all group"
                      >
                        <div className="text-purple-300 font-semibold flex items-center justify-between">
                          <span>Menu LLM Chat</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Context Guardrails</div>
                      </button>

                      <button
                        onClick={() => {
                          scrollToSection('playground');
                          if (onOpenPlaygroundTab) onOpenPlaygroundTab('cli-terminal');
                        }}
                        className="p-2 rounded bg-slate-800/80 hover:bg-yellow-950/50 hover:border-yellow-500/40 border border-white/5 text-left text-[11px] transition-all group"
                      >
                        <div className="text-amber-300 font-semibold flex items-center justify-between">
                          <span>Developer CLI</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Hacker Shell Mode</div>
                      </button>
                    </div>
                  </div>

                  {/* Quick Feature Checklist */}
                  <div className="pt-1 flex flex-wrap gap-2 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> NESCOM Intern
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <CheckCircle2 className="w-3 h-3" /> MERN + Gemini API
                    </span>
                    <span className="flex items-center gap-1 text-purple-400">
                      <CheckCircle2 className="w-3 h-3" /> JWT & Idempotency
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
