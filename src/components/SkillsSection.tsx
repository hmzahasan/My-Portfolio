import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Sparkles, 
  Database, 
  Terminal, 
  Search, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
    Code2: <Code2 className="w-4 h-4" />,
    Terminal: <Terminal className="w-4 h-4" />
  };

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.title }))
  );

  const filteredSkills = searchTerm.trim()
    ? allSkills.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-xs font-mono text-purple-400">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills Matrix & <span className="text-gradient-cyan">Core Technologies</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From React.js & Next.js frontend state to Express.js REST APIs, Gemini AI integrations, and relational database modeling.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. React, Gemini, Node)..."
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* If searching: show flat results */}
        {filteredSkills ? (
          <div className="space-y-4">
            <div className="text-xs font-mono text-cyan-400">
              Found {filteredSkills.length} matches for "{searchTerm}":
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{skill.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                      {skill.level}
                    </span>
                  </div>
                  <div className="text-[10px] text-purple-300 font-mono">{skill.category}</div>
                  <p className="text-xs text-slate-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Normal Tabbed View */
          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-4">
              {skillCategories.map((cat, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cat.title}
                    onClick={() => {
                      soundEffects.playClick();
                      setActiveTab(idx);
                    }}
                    onMouseEnter={() => soundEffects.playHover()}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {iconMap[cat.icon] || <Code2 className="w-4 h-4" />}
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-xs text-slate-400">
                  {skillCategories[activeTab].description}
                </p>
                <span className="text-[11px] font-mono text-cyan-400">
                  {skillCategories[activeTab].skills.length} Specialized Skills
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories[activeTab].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
                        <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        skill.level === 'Expert'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                          : skill.level === 'Advanced'
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/40'
                          : 'bg-slate-900 text-slate-300 border border-slate-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>

                    {skill.featured && (
                      <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Core Production Strength</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Concepts Footnote Banner */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-mono font-bold">Core CS Paradigms:</span>
                <span>OOP, Data Structures & Algorithms, Clean Architecture, MVVM Pattern, RESTful Principles</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
                <span>Languages: JS, TS, C++, Python, Java, PHP</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
