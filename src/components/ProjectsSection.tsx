import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Code2, 
  X, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Database,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { soundEffects } from '../utils/audio';

interface ProjectsSectionProps {
  onOpenDemo?: (demoId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDemo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & LLM', 'Full-Stack', 'Frontend', 'Backend Systems'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleInspect = (p: Project) => {
    soundEffects.playClick();
    setSelectedProject(p);
  };

  const handleLaunchDemo = (demoId?: string) => {
    soundEffects.playClick();
    if (demoId && onOpenDemo) {
      onOpenDemo(demoId);
      const el = document.getElementById('playground');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Flagship Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured <span className="text-gradient-cyan">Projects & Architecture</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Each project demonstrates production engineering principles: Gemini AI integration, resilient idempotency keys, enterprise DevOps extensions, and clean component systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEffects.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => soundEffects.playHover()}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="space-y-4">
                {/* Category & Demo Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  {project.liveDemoId && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                      Live Demo Available
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <ul className="space-y-1.5 text-xs text-slate-300 border-t border-white/5 pt-3">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-slate-900/90 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleInspect(project)}
                  className="text-xs font-medium text-slate-300 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoId ? (
                    <button
                      onClick={() => handleLaunchDemo(project.liveDemoId)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors flex items-center gap-1"
                    >
                      <span>Try Demo</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : null}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-950 rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedProject(null);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>System Architecture & Design:</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                {selectedProject.architectureDetails.overview}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Technical Highlights:</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 bg-slate-900/40 p-3 rounded-xl border border-white/5">
                {selectedProject.architectureDetails.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono">0{i + 1}.</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Idempotency or AI Concept if present */}
            {selectedProject.architectureDetails.idempotencyOrAIConcept && (
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                <div className="text-xs font-mono text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Engineering Deep Dive:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.architectureDetails.idempotencyOrAIConcept}
                </p>
              </div>
            )}

            {/* Tech Stack Distribution */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                Technology Breakdown:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {selectedProject.architectureDetails.techStack.map((stack, i) => (
                  <div key={i} className="bg-slate-900/70 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] font-bold text-white mb-1.5">{stack.category}</div>
                    <div className="flex flex-wrap gap-1">
                      {stack.items.map((item) => (
                        <span key={item} className="text-[10px] font-mono text-cyan-300 bg-cyan-950/50 px-1.5 py-0.5 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 px-4 py-2 rounded-xl border border-white/10"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {selectedProject.liveDemoId && (
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    handleLaunchDemo(selectedProject.liveDemoId);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open Interactive Demo</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
