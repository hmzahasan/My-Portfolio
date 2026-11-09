import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  name: "Hamza Hassan",
  title: "Full-Stack Developer",
  tagline: "Building high-performance web applications, resilient backend architectures, and production-ready Gemini AI / LLM systems.",
  location: "Rawalpindi, Pakistan",
  email: "hamzahassanhh2608@gmail.com",
  phone: "+92-317-5446684",
  github: "https://github.com/hmzahasan",
  githubUsername: "hmzahasan",
  whatsapp: "https://wa.me/923175446684",
  availability: "Available for Full-time Roles & High-Impact Contracts",
  objective: "Aspiring Full-Stack Developer with a strong foundation in modern web development technologies and a passion for building responsive, user-friendly applications. Experienced in developing academic and personal projects involving component-based frontend architecture, backend REST APIs, and secure, database-driven and LLM-powered systems. Seeking an opportunity to contribute frontend, backend, and AI development skills and continue growing as a Developer in a collaborative team environment."
};

export const stats = [
  { label: "Academic CGPA", value: "3.48", sub: "/ 4.0 Iqra University" },
  { label: "Industry Experience", value: "NESCOM", sub: "Azure DevOps Extension" },
  { label: "Core Projects", value: "5+", sub: "Full-Stack, AI & REST" },
  { label: "Task Delivery Rate", value: "100%", sub: "Agile & Team Sprints" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Component-driven architectures, reactive state, and high-performance UI",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Expert", featured: true, description: "Reusable components, custom hooks, React lifecycle & virtual DOM" },
      { name: "Next.js", level: "Advanced", featured: true, description: "App Router, SSR/SSG, server components & API route optimization" },
      { name: "TypeScript", level: "Advanced", featured: true, description: "Strong typing, interfaces, generics, type-safe API responses" },
      { name: "JavaScript (ES6+)", level: "Expert", featured: true, description: "Modern ESNext, asynchronous flows, closures, DOM manipulation" },
      { name: "Tailwind CSS", level: "Expert", featured: true, description: "Utility-first modern styling, responsive design tokens, glassmorphism" },
      { name: "HTML5 & CSS3", level: "Expert", featured: false, description: "Semantic markup, modern CSS grid, flexbox layout, animations" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Robust REST APIs, secure authentication, and financial-grade ledger systems",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", featured: true, description: "Event-driven runtime, asynchronous I/O, middleware pipelines" },
      { name: "Express.js", level: "Advanced", featured: true, description: "Modular routers, RESTful endpoint development, custom middlewares" },
      { name: "REST API Architecture", level: "Expert", featured: true, description: "Clean endpoint contracts, idempotency, status codes, error handling" },
      { name: "JWT Authentication", level: "Advanced", featured: true, description: "Stateless bearer auth, token verification, role-based access control" },
      { name: "Idempotency Architecture", level: "Advanced", featured: false, description: "Unique idempotency keys preventing duplicate financial transfers" }
    ]
  },
  {
    title: "AI & LLM Integration",
    description: "Next-generation generative AI workflows and natural language interfaces",
    icon: "Sparkles",
    skills: [
      { name: "Gemini API", level: "Advanced", featured: true, description: "Multimodal prompts, structured JSON output, context streaming" },
      { name: "LLM App Development", level: "Advanced", featured: true, description: "Prompt engineering, domain context injection, guardrails" },
      { name: "Natural Language Interfaces", level: "Advanced", featured: true, description: "Conversational agents, smart query parsing, AI verdict systems" },
      { name: "AI Resume & Gap Analysis", level: "Advanced", featured: false, description: "Automated candidate-job matching, rubric generation & tailoring" }
    ]
  },
  {
    title: "Databases & Schemas",
    description: "Document stores, relational databases, and data modeling",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced", featured: true, description: "Mongoose ODM, aggregation pipelines, document indexing" },
      { name: "MySQL", level: "Advanced", featured: true, description: "Relational queries, ACID transactions, join optimization" },
      { name: "Firebase Firestore", level: "Proficient", featured: false, description: "Realtime data sync, NoSQL document modeling, security rules" },
      { name: "Relational Schema Design", level: "Advanced", featured: false, description: "Normalization (1NF-3NF), foreign keys, integrity constraints" }
    ]
  },
  {
    title: "Languages & Core CS",
    description: "Algorithmic thinking and multi-paradigm programming",
    icon: "Code2",
    skills: [
      { name: "TypeScript / JavaScript", level: "Expert", featured: true, description: "Primary full-stack development language" },
      { name: "C++", level: "Advanced", featured: true, description: "Memory management, algorithms, data structures execution" },
      { name: "Python", level: "Advanced", featured: true, description: "Scripting, data handling, AI prototyping" },
      { name: "Java", level: "Proficient", featured: false, description: "OOP principles, JVM architecture, class design" },
      { name: "PHP", level: "Proficient", featured: false, description: "Server-side scripting, dynamic pages, MySQL connectivity" }
    ]
  },
  {
    title: "Tools & DevOps",
    description: "Version control, enterprise tooling, and API inspection",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: "Advanced", featured: true, description: "Branching strategies, pull requests, version control" },
      { name: "Azure DevOps", level: "Advanced", featured: true, description: "Custom extensions, REST API integration, work item tracking" },
      { name: "Postman", level: "Advanced", featured: true, description: "API testing, automated collection runners, header verification" },
      { name: "VS Code", level: "Expert", featured: false, description: "Daily driver IDE with optimized dev environment & linting" },
      { name: "Figma", level: "Proficient", featured: false, description: "UI wireframing, design system translation to Tailwind CSS" },
      { name: "MySQL Workbench", level: "Advanced", featured: false, description: "Visual schema modeling, query execution, indexing analysis" }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "NESCOM (National Engineering & Scientific Commission)",
    location: "Islamabad, Pakistan",
    period: "July 2025 – September 2025",
    type: "Internship",
    impactMetric: "Azure DevOps Extension Used in Real Engineering Workflows",
    highlights: [
      "Engineered an Azure DevOps custom extension to export complex work items and hierarchical linked work items directly to Excel, substantially streamlining project reporting cycles.",
      "Integrated Azure DevOps REST APIs to retrieve, transform, and structure project management data with high reliability and zero data loss.",
      "Participated in the full software development lifecycle (SDLC) encompassing requirements analysis, frontend UI, backend integration, testing, and production deployment.",
      "Collaborated closely with cross-functional engineering teams to translate enterprise specs into production-ready features delivered strictly on schedule."
    ],
    technologies: ["Azure DevOps API", "JavaScript", "TypeScript", "REST APIs", "Excel Integration", "Git"]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Iqra University",
    location: "Islamabad, Pakistan",
    period: "Expected: January 2027",
    cgpa: "3.48",
    maxCgpa: "4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Application Development",
      "Mobile App Development",
      "Object-Oriented Programming (OOP)",
      "Clean Architecture & Design Patterns"
    ],
    achievements: [
      "Maintained a strong 3.48 / 4.0 CGPA while concurrently architecting industry-level software systems",
      "Delivered 100% of academic team project milestones on or ahead of scheduled deadlines"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-resume-matcher",
    title: "AI Resume & Job Match Analyzer",
    subtitle: "Full-Stack MERN + Gemini AI Application",
    description: "An intelligent career copilot that bridges candidate qualifications with job market requirements. Users upload/paste resumes and target job descriptions; Gemini AI performs deep semantic analysis to output a compatibility score, skill gaps, tailored preparation plan, and customized technical interview questions.",
    category: "AI & LLM",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT Auth", "Tailwind CSS"],
    features: [
      "Full-stack MERN application secured with JWT authentication and protected user routes",
      "Deep semantic compatibility scoring powered by Google Gemini AI API",
      "Comprehensive skill-gap radar highlighting missing keywords and prerequisites",
      "Tailored interview questions generator simulating real technical recruiter evaluations",
      "Automated AI-powered resume content generator tailored to specific job specs"
    ],
    architectureDetails: {
      overview: "Designed with a decoupled client-server architecture. The frontend sends structured resume and job payloads to Express.js endpoints. The backend orchestrates prompt engineering pipelines via Google Gemini API, enforces strict JSON schema validation, and persists evaluation reports in MongoDB.",
      highlights: [
        "Prompt engineering with structured JSON schema responses to ensure predictable UI parsing",
        "Secure JWT token lifecycle with HTTP-only cookies and Authorization headers",
        "MongoDB schema caching previous evaluation results for fast historical retrieval"
      ],
      techStack: [
        { category: "Frontend", items: ["React.js", "Tailwind CSS", "Axios"] },
        { category: "Backend", items: ["Node.js", "Express.js", "JWT"] },
        { category: "AI & Data", items: ["Google Gemini API", "MongoDB", "Mongoose"] }
      ],
      idempotencyOrAIConcept: "Gemini Structured Prompts: Engineered prompt blueprints specifying role constraints, scoring rubrics (0-100), and categorical gap analysis to deliver zero-hallucination analysis."
    },
    githubUrl: "https://github.com/hmzahasan",
    liveDemoId: "resume-matcher",
    stats: [
      { label: "AI Latency", value: "<1.4s" },
      { label: "Analysis Accuracy", value: "95%+" },
      { label: "Report Sections", value: "4 Distinct" }
    ]
  },
  {
    id: "restaurant-menu-assistant",
    title: "Restaurant Menu Assistant",
    subtitle: "LLM Conversational Dining Companion",
    description: "A natural-language conversational assistant engineered to guide diners through complex menus. It parses dietary preferences, spice tolerances, ingredient questions, and pairing recommendations in real time using contextual LLM prompting.",
    category: "AI & LLM",
    tags: ["React.js", "LLM Development", "Gemini API", "Prompt Engineering", "Tailwind CSS"],
    features: [
      "Natural language understanding for complex customer queries (allergies, vegans, dietary preferences)",
      "Context injection supplying real-time menu item details, prices, and chef ingredients",
      "Interactive recommendation engine calculating dish pairings based on user preferences",
      "Clean conversational UI with simulated streaming and quick prompt shortcuts"
    ],
    architectureDetails: {
      overview: "Built as an LLM application leveraging prompt context injection. Menu catalog schemas are dynamically converted into context windows, enabling the assistant to answer questions strictly grounded in the restaurant's actual inventory.",
      highlights: [
        "System prompt guardrails preventing out-of-domain answers and hallucinations",
        "Dynamic query preprocessing to extract price constraints and dietary restrictions",
        "Optimized token consumption with succinct response formatting"
      ],
      techStack: [
        { category: "Frontend", items: ["React.js", "Responsive UI", "CSS Animations"] },
        { category: "AI Engine", items: ["Gemini LLM API", "System Guardrails", "Context Injection"] }
      ]
    },
    githubUrl: "https://github.com/hmzahasan",
    liveDemoId: "restaurant-assistant",
    stats: [
      { label: "Intent Recognition", value: "98%" },
      { label: "Dietary Filters", value: "Vegan, Halal, GF" },
      { label: "Response Time", value: "~850ms" }
    ]
  },
  {
    id: "banking-transaction-system",
    title: "Banking Transaction System",
    subtitle: "Fault-Tolerant Financial Ledger & REST API",
    description: "A production-oriented backend banking system with JWT-based authentication, dual-entry ledger tracking, and idempotency key enforcement to guarantee zero duplicate charges during network failures or user retry storms.",
    category: "Backend Systems",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Financial Ledger", "Idempotency"],
    features: [
      "Cryptographic JWT authentication protecting account operations and transfer endpoints",
      "Double-entry bookkeeping ledger recording every debit and credit atomically",
      "Idempotency key mechanism caching request hashes to eliminate duplicate transfer executions",
      "Comprehensive balance validation and ACID-compliant transaction safety",
      "Detailed audit logs with timestamped transaction receipts"
    ],
    architectureDetails: {
      overview: "Architected around strict financial safety principles. Every transfer request requires a unique idempotency key. If an identical key is received within a cooldown window, the server returns the cached outcome instead of re-executing funds transfer.",
      highlights: [
        "Distributed lock simulation ensuring atomic balance decrement and increment",
        "Idempotency key table with TTL indexing and deterministic SHA-256 request payload hashing",
        "Stateless JWT validation with granular permission scopes"
      ],
      techStack: [
        { category: "Backend Engine", items: ["Node.js", "Express.js"] },
        { category: "Persistence", items: ["MongoDB", "Mongoose Transactions"] },
        { category: "Security", items: ["JWT", "Bcrypt", "Idempotency Layer"] }
      ],
      idempotencyOrAIConcept: "Idempotency Guarantee: Client generates UUIDv4 `X-Idempotency-Key`. The backend stores the pending state before deducting funds; subsequent retries immediately receive the finalized receipt."
    },
    githubUrl: "https://github.com/hmzahasan",
    liveDemoId: "banking-ledger",
    stats: [
      { label: "Duplicate Transfer Risk", value: "0.00%" },
      { label: "Ledger Consistency", value: "ACID Guaranteed" },
      { label: "Auth Token", value: "JWT HS256" }
    ]
  },
  {
    id: "azure-devops-extension",
    title: "Enterprise Azure DevOps Work Item Exporter",
    subtitle: "NESCOM Industry Internship Project",
    description: "An enterprise extension built for Azure DevOps during Hamza's internship at NESCOM. Facilitates direct structured export of work items and recursive linked work items to Excel, significantly cutting manual reporting time for project managers.",
    category: "Full-Stack",
    tags: ["Azure DevOps REST APIs", "JavaScript", "TypeScript", "Excel XML/XLSX", "NESCOM"],
    features: [
      "Direct integration inside the Azure DevOps portal interface via custom extension manifest",
      "Recursive traversal of linked work items (Parents, Children, Related, Predecessors)",
      "High-speed tabular formatting and Excel export preserving hierarchy and metadata",
      "Streamlined reporting workflow deployed into live engineering teams"
    ],
    architectureDetails: {
      overview: "Interfaced directly with Azure DevOps REST API endpoints using OAuth/PAT tokens. Collected hierarchical JSON work item trees and transformed them via client-side streaming into structured spreadsheets.",
      highlights: [
        "Recursive graph traversal algorithm handling circular link references",
        "Batched API requests to respect Azure DevOps rate limits",
        "Adopted by engineering managers for sprint and deliverable reporting"
      ],
      techStack: [
        { category: "Platform", items: ["Azure DevOps API", "Extension SDK"] },
        { category: "Client Code", items: ["TypeScript", "JavaScript", "HTML/CSS"] }
      ]
    },
    githubUrl: "https://github.com/hmzahasan",
    stats: [
      { label: "Export Speed", value: "10x Faster" },
      { label: "Hierarchy Depth", value: "Multi-Level" },
      { label: "Status", value: "NESCOM Deployed" }
    ]
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    subtitle: "React.js Administrative & Task Portal",
    description: "A component-based dashboard providing dual-perspective workflow management: administrators assign tasks with deadlines and priority, while team members access dedicated dashboards to transition states (pending, completed, failed) with local storage persistence.",
    category: "Frontend",
    tags: ["React.js", "React Hooks", "LocalStorage", "State Management", "Tailwind CSS"],
    features: [
      "Role-based view switching: Admin Control Room vs. Employee Dashboard",
      "Granular task lifecycle management (New, In Progress, Completed, Failed)",
      "Persistent state management utilizing local storage without requiring external DB setup",
      "Responsive analytics summary cards showing team completion rates"
    ],
    architectureDetails: {
      overview: "Demonstrates clean component separation and state lifting in React.js. Utilizes custom hooks (`useLocalStorage`) to synchronize application state automatically.",
      highlights: [
        "Component-based architecture following modular atomic design",
        "Deep use of useState, useEffect, and useContext for synchronized task tracking",
        "Zero-latency UI updates with instant optimistic rendering"
      ],
      techStack: [
        { category: "Framework", items: ["React.js", "ES6+"] },
        { category: "Styling", items: ["Tailwind CSS", "Lucide Icons"] }
      ]
    },
    githubUrl: "https://github.com/hmzahasan",
    stats: [
      { label: "Storage", value: "Local Persistence" },
      { label: "Roles", value: "Admin & Employee" }
    ]
  },
  {
    id: "movie-database-app",
    title: "Movie Database & Explorer",
    subtitle: "Dynamic React.js API-Driven Platform",
    description: "A high-fidelity movie discovery application fetching real-time data from a public REST API. Features debounced live search, dynamic category carousels, genre filtering, and modal overviews with ratings and trailers.",
    category: "Frontend",
    tags: ["React.js", "Public REST API", "Axios", "Debounce Search", "Responsive Grid"],
    features: [
      "Live search with debounced keystrokes to minimize redundant API calls",
      "Dynamic categorization: Trending Now, Top Rated, Upcoming Releases, and Genres",
      "Interactive movie details modal with synopsis, cast breakdown, and viewer ratings",
      "Mobile-first responsive grid layout with smooth skeleton loading states"
    ],
    architectureDetails: {
      overview: "Built to showcase API consumption best practices, error boundaries, and asynchronous data fetching in modern React.",
      highlights: [
        "Debounced input handlers reducing network requests by over 70%",
        "Graceful fallback handling for missing poster art and network errors",
        "Reusable card and modal components"
      ],
      techStack: [
        { category: "Frontend", items: ["React.js", "Axios", "CSS Modules / Tailwind"] },
        { category: "Data Source", items: ["Live Movie REST API"] }
      ]
    },
    githubUrl: "https://github.com/hmzahasan",
    stats: [
      { label: "Data Source", value: "Live REST API" },
      { label: "Search Latency", value: "Debounced 300ms" }
    ]
  }
];

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  - whoami       : Display Hamza's summary & developer identity
  - skills       : List core tech stack & competencies
  - projects     : View flagship projects & live demos
  - experience   : NESCOM internship details
  - education    : Iqra University BSCS & CGPA
  - contact      : How to reach Hamza (email, phone, github)
  - hire         : Check Hamza's availability for hire!
  - clear        : Clear console output`,

  whoami: `Hamza Hassan — Full-Stack Developer
Location: Rawalpindi / Islamabad, Pakistan
Passionate about building responsive frontend web apps (React, Next.js, Tailwind),
scalable backend APIs (Node.js, Express, MongoDB, MySQL), and cutting-edge Gemini AI integrations.
CGPA: 3.48 / 4.0 | Iqra University (Expected Jan 2027)`,

  skills: `Technical Skills Matrix:
• Frontend  : React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3
• Backend   : Node.js, Express.js, REST API Development, JWT Auth, Idempotency
• AI / LLMs : LLM Application Development, Google Gemini API, Prompt Engineering
• Databases : MongoDB, MySQL, Firebase Firestore, Schema Design
• Tools     : Git/GitHub, Azure DevOps, VS Code, Postman, Figma, MySQL Workbench
• Core CS   : Data Structures, Algorithms, OOP, Clean Architecture, MVVM`,

  projects: `Flagship Projects:
1. AI Resume & Job Match Analyzer (MERN + Gemini AI) -> Semantic fit score & interview prep
2. Restaurant Menu Assistant (LLM Companion) -> Conversational dining recommendations
3. Banking Transaction System (Node.js, Express, MongoDB) -> Dual ledger & idempotency keys
4. Enterprise Azure DevOps Extension (NESCOM) -> Hierarchical Excel work item exporter
5. Employee Management System (React.js) -> Admin & staff task tracking
6. Movie Database Explorer (React.js) -> Debounced search & REST API integration`,

  experience: `Industry Experience:
Role: Software Development Intern
Company: NESCOM, Islamabad (July 2025 – September 2025)
Key Impact: Built custom Azure DevOps extension exporting work items to Excel;
integrated Azure DevOps REST APIs; collaborated with engineering team on production features.`,

  education: `Academic Background:
Degree: Bachelor of Science in Computer Science (BSCS)
Institution: Iqra University, Islamabad (Expected: Jan 2027)
CGPA: 3.48 / 4.0
Coursework: Data Structures, Database Systems, Web Dev, App Dev, OOP, Algorithms`,

  contact: `Contact Hamza Hassan:
Email    : hamzahassanhh2608@gmail.com
Phone    : +92-317-5446684
GitHub   : https://github.com/hmzahasan
WhatsApp : +923175446684`,

  hire: `🚀 Hamza Hassan is AVAILABLE for:
- Full-time Software Engineer / Full-Stack Developer positions
- React / Next.js / Node.js roles
- AI / LLM Application Developer opportunities
- High-impact contract & engineering projects
Reach out directly: hamzahassanhh2608@gmail.com or WhatsApp +92-317-5446684!`
};
