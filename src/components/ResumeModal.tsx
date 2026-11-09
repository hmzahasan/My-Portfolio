import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo, experience, education, projects, skillCategories } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundEffects.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl border border-white/10 shadow-2xl my-8 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Hamza Hassan — Curriculum Vitae</span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
              Verified 2026 Profile
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900/40 space-y-6 text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-white/10 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              {personalInfo.name}
            </h1>
            <div className="text-sm font-semibold text-cyan-400 font-mono tracking-wider">
              {personalInfo.title}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-300 font-mono pt-1">
              <span>{personalInfo.location}</span>
              <span>|</span>
              <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">
                {personalInfo.email}
              </a>
              <span>|</span>
              <a href={personalInfo.whatsapp} className="text-cyan-400 hover:underline">
                {personalInfo.phone}
              </a>
              <span>|</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                GitHub: {personalInfo.githubUsername}
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
              Objective
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed text-justify">
              {personalInfo.objective}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-300">
              <p>
                <strong className="text-white">Frontend:</strong> React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design (Flexbox, Grid)
              </p>
              <p>
                <strong className="text-white">Backend:</strong> Node.js, Express.js, REST API Development, JWT Authentication
              </p>
              <p>
                <strong className="text-white">AI / LLMs:</strong> LLM Application Development, Gemini API (AI Integration)
              </p>
              <p>
                <strong className="text-white">State & APIs:</strong> React Hooks (useState, useEffect, useContext), REST API Integration, Axios, Fetch API
              </p>
              <p>
                <strong className="text-white">Tools & Platforms:</strong> Git & GitHub, VS Code, Azure DevOps, Figma, Postman, MySQL Workbench, MS Office (Excel, Word, PowerPoint)
              </p>
              <p>
                <strong className="text-white">Programming Languages:</strong> JavaScript, TypeScript, C++, Python, Java, PHP
              </p>
              <p>
                <strong className="text-white">Databases:</strong> MongoDB, MySQL, Firebase Firestore, Relational Schema Design
              </p>
              <p>
                <strong className="text-white">Core Concepts:</strong> Object-Oriented Programming, Data Structures, Algorithms, Clean Architecture, MVVM, REST APIs
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
              Experience
            </h2>
            {experience.map((exp, i) => (
              <div key={i} className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white">
                    {exp.role} — <span className="text-cyan-300">{exp.company}</span>
                  </div>
                  <div className="text-slate-400 font-mono text-[11px]">{exp.period}</div>
                </div>
                <div className="text-slate-400 italic text-[11px]">{exp.location}</div>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
              Projects
            </h2>
            <div className="space-y-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>
                      {proj.title} <span className="text-slate-400 font-normal">({proj.subtitle})</span>
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 text-slate-300">
                    {proj.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
              Education
            </h2>
            {education.map((edu, i) => (
              <div key={i} className="space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-slate-400 font-mono text-[11px]">{edu.period}</div>
                </div>
                <div className="text-slate-300">
                  {edu.institution}, {edu.location} | <strong className="text-emerald-400">CGPA: {edu.cgpa} / {edu.maxCgpa}</strong>
                </div>
                <div className="text-slate-400">
                  <strong>Key Coursework:</strong> {edu.coursework.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
              Achievements
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li><strong>Internship at NESCOM:</strong> Successfully delivered an Azure DevOps extension used in real project management workflows</li>
              <li><strong>Full-Stack & AI Projects:</strong> Built functional frontend, backend, and LLM-based applications, including a JWT-secured banking transaction system</li>
              <li><strong>Strong Academic Record:</strong> Maintained a CGPA of 3.48/4.0 while working on industry-level projects</li>
            </ul>
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
            <div className="space-y-1">
              <h3 className="font-bold text-white uppercase text-[11px] text-cyan-400">Soft Skills</h3>
              <p className="text-slate-300 leading-relaxed">
                Communication, Problem Solving, Teamwork (100% Milestone Delivery), Adaptability & Time Management
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-white uppercase text-[11px] text-cyan-400">Languages</h3>
              <p className="text-slate-300">
                <strong>Urdu:</strong> Native | <strong>English:</strong> Professional Working Proficiency
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
