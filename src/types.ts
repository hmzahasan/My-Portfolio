export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack' | 'AI & LLM' | 'Frontend' | 'Backend Systems';
  tags: string[];
  features: string[];
  architectureDetails: {
    overview: string;
    highlights: string[];
    techStack: { category: string; items: string[] }[];
    idempotencyOrAIConcept?: string;
  };
  githubUrl: string;
  liveDemoId?: 'resume-matcher' | 'restaurant-assistant' | 'banking-ledger';
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName?: string;
    featured?: boolean;
    description: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
  impactMetric: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  maxCgpa: string;
  coursework: string[];
  achievements: string[];
}

