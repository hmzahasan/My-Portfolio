import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Star,
  Users,
  Brain,
  Globe2
} from 'lucide-react';
import { experience, education } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const achievements = [
    {
      title: "Enterprise Delivery at NESCOM",
      desc: "Engineered a custom Azure DevOps extension used in real project management workflows, exporting linked work items directly to Excel."
    },
    {
      title: "Production-Grade Full-Stack & AI Systems",
      desc: "Built complete applications spanning MERN stack, Gemini AI APIs, and an ACID-safe banking ledger with idempotency keys."
    },
    {
      title: "High Academic Standing (CGPA 3.48/4.0)",
      desc: "Maintained top quartile academic performance at Iqra University while building industry-ready software systems."
    }
  ];

  const softSkills = [
    { name: "Technical Communication", desc: "Translating complex architectural concepts for both technical teams and stakeholders." },
    { name: "Analytical Problem Solving", desc: "Debugging distributed edge cases, race conditions, and API rate limits." },
    { name: "Agile Teamwork", desc: "100% on-time milestone delivery in collaborative sprint environments." },
    { name: "Rapid Tool Adaptability", desc: "Quickly learning emerging frameworks, SDKs, and enterprise systems." }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Track Record & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience & <span className="text-gradient-emerald">Education</span>
          </h2>
          <p className="text-sm text-slate-400">
            Professional software development internship at NESCOM, academic foundations at Iqra University, and proven project achievements.
          </p>
        </div>

        {/* Timeline Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: NESCOM Internship Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-cyan-400">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </div>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all space-y-5"
              >
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Impact Highlight Badge */}
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 font-medium">
                  🎯 <strong>Enterprise Impact:</strong> {exp.impactMetric}
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Achievements Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-amber-400">
                <Award className="w-4 h-4" />
                <span>Verified Milestones</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((ach, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{ach.title}</span>
                    </div>
                    <div className="text-xs text-slate-400 pl-5">{ach.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Soft Skills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-purple-400">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded">
                      {edu.period}
                    </span>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                        CGPA: {edu.cgpa} / {edu.maxCgpa}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-2">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {edu.institution}, {edu.location}
                  </div>
                </div>

                {/* Key Coursework */}
                <div className="space-y-2 border-t border-white/5 pt-3">
                  <div className="text-xs font-mono text-slate-300">
                    Key Coursework:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[10px] font-mono bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 border-t border-white/5 pt-3">
                  <div className="text-xs font-mono text-slate-300">
                    Academic Standing:
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                    {edu.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Soft Skills & Languages */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-emerald-400">
                <Brain className="w-4 h-4" />
                <span>Professional Strengths</span>
              </div>
              <div className="space-y-2.5">
                {softSkills.map((sk, i) => (
                  <div key={i} className="text-xs space-y-0.5">
                    <span className="font-semibold text-slate-200">{sk.name}:</span>{' '}
                    <span className="text-slate-400">{sk.desc}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Languages:</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-cyan-300">Urdu (Native)</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-purple-300">English (Professional)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

