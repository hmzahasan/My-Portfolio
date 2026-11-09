import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Terminal as TerminalIcon, 
  DollarSign, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  ArrowRight,
  Code2,
  FileCheck,
  Zap,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

interface PlaygroundProps {
  initialTab?: string;
}

export const InteractivePlayground: React.FC<PlaygroundProps> = ({ initialTab = 'resume-matcher' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  /* =========================================================
     TAB 1: AI RESUME & JOB MATCH ANALYZER (GEMINI AI SIMULATOR)
     ========================================================= */
  const presetRoles = [
    {
      title: "Full-Stack Developer (MERN + AI)",
      company: "TechCorp Global",
      description: "Looking for a Full-Stack Developer with hands-on expertise in React.js, Next.js, Node.js, Express.js, and MongoDB. Experience integrating Gemini AI or LLM APIs for user workflows, designing secure JWT authentication, and writing clean REST APIs is required."
    },
    {
      title: "Frontend Engineer (React & TypeScript)",
      company: "NextGen Software",
      description: "Seeking a passionate Frontend Developer skilled in React.js, modern TypeScript, Tailwind CSS, and component-based design systems. Must be proficient in state management, responsive web design, and consuming REST APIs."
    },
    {
      title: "Backend / API Systems Engineer",
      company: "FinScale Labs",
      description: "Seeking a Backend Engineer proficient in Node.js, Express, MongoDB, and relational schema modeling. Must understand transaction safety, idempotency mechanisms to prevent duplicate financial charges, and clean RESTful API design."
    }
  ];

  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [jobDescription, setJobDescription] = useState(presetRoles[0].description);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    score: number;
    verdict: string;
    matchedSkills: string[];
    gapSkills: string[];
    interviewQuestions: string[];
    tailoredSummary: string;
  } | null>({
    score: 96,
    verdict: "Exceptional Match — Hamza's technical stack directly covers 100% of the core competencies required.",
    matchedSkills: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI Integration", "JWT Authentication", "REST APIs"],
    gapSkills: ["AWS S3 (Easily adoptable with existing backend skills)"],
    interviewQuestions: [
      "How did you implement idempotency in your backend banking system to prevent duplicate transactions?",
      "Can you walk us through the prompt engineering and JSON structuring techniques you used with the Gemini API?",
      "How did you architect the Azure DevOps extension during your internship at NESCOM?"
    ],
    tailoredSummary: "Proactive Full-Stack Developer with proven expertise in MERN stack architectures and production Gemini AI integrations. Successfully delivered an enterprise Azure DevOps extension at NESCOM and built secure, fault-tolerant financial and LLM applications."
  });

  const runResumeAnalysis = () => {
    soundEffects.playClick();
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      let score = 94;
      let matched = ["React.js", "Node.js", "REST APIs", "TypeScript", "Tailwind CSS"];
      let gaps = ["Docker (Containerization)", "GraphQL"];

      if (jobDescription.toLowerCase().includes("gemini") || jobDescription.toLowerCase().includes("ai")) {
        score = 98;
        matched.push("Gemini AI API", "LLM Prompt Engineering", "MongoDB");
      }
      if (jobDescription.toLowerCase().includes("idempotency") || jobDescription.toLowerCase().includes("bank")) {
        score = 97;
        matched.push("Idempotency Architecture", "Dual-Entry Ledger", "JWT Auth");
      }

      setAnalysisResult({
        score,
        verdict: `Strong Match (${score}%) — Hamza Hassan possesses targeted hands-on experience covering the requested technologies.`,
        matchedSkills: matched,
        gapSkills: gaps,
        interviewQuestions: [
          "Explain your strategy for prompt structuring when integrating Google Gemini with Node.js.",
          "How does your banking project guarantee zero double-spending when network requests fail mid-flight?",
          "How do you organize reusable React components with clean TypeScript interfaces?"
        ],
        tailoredSummary: "High-caliber Full-Stack Developer proficient in modern frontend ecosystems (React, Next.js, TypeScript) and resilient backend services (Node.js, Express, MongoDB). Demonstrates enterprise delivery track record from NESCOM internship."
      });
      setIsAnalyzing(false);
      soundEffects.playChime();
    }, 1200);
  };

  /* =========================================================
     TAB 2: RESTAURANT MENU ASSISTANT (LLM CONVERSATIONAL CHAT)
     ========================================================= */
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; time: string }>>([
    {
      sender: 'assistant',
      text: "👋 Welcome to The Bistro! I am Hamza's LLM Menu Assistant. You can ask me about ingredients, allergens, dietary preferences (vegan, gluten-free, halal), or ask for pairing recommendations!",
      time: "Just now"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  const samplePrompts = [
    "What vegan and gluten-free options do you have?",
    "Is the Arrabiata pasta very spicy?",
    "Recommend a dessert to pair with the Truffle Risotto",
    "What are your top chef specials under $25?"
  ];

  const handleSendChat = (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || isBotTyping) return;

    soundEffects.playClick();
    const userMsg = {
      sender: 'user' as const,
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsBotTyping(true);

    setTimeout(() => {
      let botReply = "Our culinary team prepares everything fresh daily. Let me know if you have specific dietary constraints!";
      const lower = textToSend.toLowerCase();

      if (lower.includes('vegan') || lower.includes('gluten')) {
        botReply = "🌿 Excellent choice! We offer our **Wild Mushroom & Truffle Risotto (Gluten-Free, Dairy-Free upon request)** and our **Roasted Mediterranean Quinoa Bowl (100% Vegan & Gluten-Free)** topped with avocado, toasted pine nuts, and tahini drizzle!";
      } else if (lower.includes('spicy') || lower.includes('arrabiata')) {
        botReply = "🌶️ The **Penne all'Arrabiata** features a vibrant San Marzano tomato sauce infused with Calabrian chili flakes and garlic. It rates at a medium-high spice level (3 out of 5 peppers), but our chef can gladly adjust the heat to your preference!";
      } else if (lower.includes('dessert') || lower.includes('risotto') || lower.includes('pair')) {
        botReply = "🍮 For pairing with the earthy richness of the Truffle Risotto, our chef recommends the **Meyer Lemon Infused Panna Cotta** with fresh raspberries—the crisp citrus acidity provides a sublime balance to the savory truffle notes!";
      } else if (lower.includes('special') || lower.includes('under') || lower.includes('recommend') || lower.includes('25')) {
        botReply = "⭐ Top Chef Specials under $25:\n1. **Pan-Seared Citrus Herb Salmon** ($22) served with asparagus\n2. **Handmade Truffle Tagliatelle** ($19) with aged parmesan\n3. **Artisan Wood-Fired Margherita** ($16) with fresh buffalo mozzarella";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsBotTyping(false);
      soundEffects.playClick();
    }, 700);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping]);

  /* =========================================================
     TAB 3: BANKING LEDGER & IDEMPOTENCY ENGINE
     ========================================================= */
  const [userBalance, setUserBalance] = useState(2500);
  const [recipientBalance, setRecipientBalance] = useState(1200);
  const [transferAmount, setTransferAmount] = useState(200);
  const [simulateGlitch, setSimulateGlitch] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState("idemp_key_8f93e");
  const [ledgerLog, setLedgerLog] = useState<Array<{
    id: string;
    type: 'DEBIT' | 'CREDIT';
    account: string;
    amount: number;
    idempotencyKey: string;
    status: 'COMMITTED' | 'CACHED_IDEMPOTENT_HIT';
    timestamp: string;
  }>>([
    {
      id: "tx_101",
      type: "DEBIT",
      account: "acc_hamza_01",
      amount: 150,
      idempotencyKey: "idemp_key_init_01",
      status: "COMMITTED",
      timestamp: "10:14:02"
    },
    {
      id: "tx_102",
      type: "CREDIT",
      account: "acc_recipient_99",
      amount: 150,
      idempotencyKey: "idemp_key_init_01",
      status: "COMMITTED",
      timestamp: "10:14:02"
    }
  ]);
  const [transferStatusMessage, setTransferStatusMessage] = useState<string | null>(null);

  const executeTransfer = () => {
    soundEffects.playClick();

    if (transferAmount > userBalance) {
      setTransferStatusMessage("❌ Insufficient account balance.");
      return;
    }

    // Check if this idempotency key was already processed
    const alreadyProcessed = ledgerLog.some((item) => item.idempotencyKey === idempotencyKey);

    if (alreadyProcessed) {
      // Idempotency Catch!
      setTransferStatusMessage(
        `🛡️ [IDEMPOTENCY PREVENTED DOUBLE-SPEND]: Request with Key "${idempotencyKey}" already processed. Returning cached success receipt without deducting funds again!`
      );
      soundEffects.playHover();
      return;
    }

    // Normal Execution
    setUserBalance((prev) => prev - transferAmount);
    setRecipientBalance((prev) => prev + transferAmount);

    const now = new Date().toLocaleTimeString();
    const newTxId = 'tx_' + Math.floor(1000 + Math.random() * 9000);

    const newEntries = [
      {
        id: newTxId + '_dr',
        type: 'DEBIT' as const,
        account: 'acc_hamza_01',
        amount: transferAmount,
        idempotencyKey: idempotencyKey,
        status: 'COMMITTED' as const,
        timestamp: now
      },
      {
        id: newTxId + '_cr',
        type: 'CREDIT' as const,
        account: 'acc_recipient_99',
        amount: transferAmount,
        idempotencyKey: idempotencyKey,
        status: 'COMMITTED' as const,
        timestamp: now
      }
    ];

    setLedgerLog((prev) => [...newEntries, ...prev]);

    if (simulateGlitch) {
      setTransferStatusMessage(
        `⚠️ Glitch simulated! Network timed out on client side, but Idempotency Key saved state. Click 'Transfer Funds' again to test idempotency filter!`
      );
    } else {
      setTransferStatusMessage(
        `✅ Transferred $${transferAmount} successfully. Double-entry ledger updated atomically.`
      );
      // Generate next new key
      setIdempotencyKey('idemp_key_' + Math.random().toString(36).substring(2, 7));
    }
    soundEffects.playChime();
  };

  const resetBankingDemo = () => {
    setUserBalance(2500);
    setRecipientBalance(1200);
    setIdempotencyKey('idemp_key_' + Math.random().toString(36).substring(2, 7));
    setTransferStatusMessage(null);
  };

  /* =========================================================
     TAB 4: DEVELOPER INTERACTIVE CLI TERMINAL
     ========================================================= */
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "whoami",
      output: terminalCommands["whoami"]
    }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    soundEffects.playClick();

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    if (cleanCmd === 'hire') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const reply = terminalCommands[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" to see available commands.`;

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, output: reply }]);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  return (
    <section id="playground" className="py-20 relative bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Interactive Experience Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Test Drive Hamza's <span className="text-gradient-cyan">Projects Live</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Interact with simulated live prototypes of the applications featured on Hamza's CV.
            Evaluate the Gemini AI analyzer, test the dining chatbot, verify financial idempotency, or explore via CLI terminal.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('resume-matcher');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'resume-matcher'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>1. AI Resume Matcher (Gemini)</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('restaurant-assistant');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'restaurant-assistant'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2. Restaurant Menu LLM Bot</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('banking-ledger');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'banking-ledger'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>3. Banking Ledger & Idempotency</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('cli-terminal');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'cli-terminal'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold shadow-lg shadow-amber-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            <TerminalIcon className="w-4 h-4" />
            <span>4. Developer Terminal (CLI)</span>
          </button>
        </div>

        {/* Playground Container Card */}
        <div className="glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-slate-950/80 backdrop-blur-xl">
          
          {/* TAB 1: AI RESUME & JOB MATCH ANALYZER */}
          {activeTab === 'resume-matcher' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">AI Resume & Job Match Analyzer</h3>
                    <span className="text-[10px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-700/50 px-2 py-0.5 rounded">
                      Gemini API Simulation
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Select a target job description below or paste your own to simulate Hamza's MERN + Gemini AI application.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">Sample Roles:</span>
                  {presetRoles.map((role, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedPresetIndex(idx);
                        setJobDescription(role.description);
                      }}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-colors ${
                        selectedPresetIndex === idx
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                          : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'
                      }`}
                    >
                      Role {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input JD area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 space-y-3">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                    Target Job Description (JD):
                  </label>
                  <textarea
                    rows={6}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-400 resize-none transition-colors"
                    placeholder="Paste any job spec here..."
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Comparing against candidate: <strong>Hamza Hassan (Full-Stack & Gemini AI)</strong>
                    </span>
                    <button
                      onClick={runResumeAnalysis}
                      disabled={isAnalyzing}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all flex items-center gap-2 shadow-md shadow-cyan-500/20 disabled:opacity-50"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Gemini Processing...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Run Gemini Evaluation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Analysis Output Panel */}
                <div className="lg:col-span-6 bg-slate-900/60 rounded-xl border border-white/10 p-5 space-y-4">
                  {isAnalyzing ? (
                    <div className="h-64 flex flex-col items-center justify-center space-y-3 text-center">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
                        <Sparkles className="w-5 h-5 text-cyan-400 absolute inset-0 m-auto animate-pulse" />
                      </div>
                      <p className="text-xs font-mono text-cyan-300">Evaluating semantic compatibility via Gemini API...</p>
                      <p className="text-[11px] text-slate-400">Extracting entity graph & computing interview questions</p>
                    </div>
                  ) : analysisResult ? (
                    <div className="space-y-4">
                      {/* Top Score Banner */}
                      <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-black text-cyan-400 text-xl">
                            {analysisResult.score}%
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Gemini Semantic Fit Score</div>
                            <div className="text-[11px] text-emerald-400 font-mono">Status: Highly Recommended</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                          Tokens: 642 / 1.2s
                        </span>
                      </div>

                      {/* Verdict */}
                      <div className="text-xs text-slate-300 leading-relaxed bg-cyan-950/20 border border-cyan-500/20 p-2.5 rounded-lg">
                        <strong className="text-cyan-300">AI Verdict:</strong> {analysisResult.verdict}
                      </div>

                      {/* Matched Skills */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Verified Matches ({analysisResult.matchedSkills.length}):</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {analysisResult.matchedSkills.map((sk, i) => (
                            <span key={i} className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                              ✓ {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interview Questions Preview */}
                      <div className="space-y-1.5 border-t border-white/5 pt-3">
                        <div className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-purple-400" />
                          <span>AI-Generated Technical Interview Questions:</span>
                        </div>
                        <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                          {analysisResult.interviewQuestions.map((q, i) => (
                            <li key={i}>{q}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESTAURANT MENU ASSISTANT (LLM CHATBOT) */}
          {activeTab === 'restaurant-assistant' && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">Restaurant Menu Assistant (LLM)</h3>
                    <span className="text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-700/50 px-2 py-0.5 rounded">
                      Context-Grounded Agent
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulates Hamza's LLM assistant answering diner questions in natural language with menu catalog context injection.
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Grounding: <span className="text-emerald-400">Strict Catalog Schema</span>
                </div>
              </div>

              {/* Chat Container */}
              <div className="h-[360px] overflow-y-auto space-y-3 p-4 bg-slate-900/60 rounded-xl border border-white/10">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none'
                          : 'bg-slate-800/90 text-slate-200 border border-white/10 rounded-tl-none'
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>
                      <div className={`text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-purple-200' : 'text-slate-400'}`}>
                        {m.time}
                      </div>
                    </div>
                  </div>
                ))}

                {isBotTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800/90 border border-white/10 rounded-2xl rounded-tl-none p-3 flex items-center gap-1.5 text-xs text-purple-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                      <span className="text-[11px] font-mono ml-2">Consulting menu database...</span>
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Prompt Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-slate-400">Try quick questions:</span>
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendChat(p)}
                    className="text-[11px] bg-slate-900 hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 px-2.5 py-1 rounded-full transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendChat();
                }}
                className="flex items-center gap-2 pt-2"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask anything about the menu, dietary needs, spicy levels, or pairings..."
                  className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isBotTyping}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all disabled:opacity-40 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: BANKING LEDGER & IDEMPOTENCY ENGINE */}
          {activeTab === 'banking-ledger' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">Banking Transaction System & Idempotency Visualizer</h3>
                    <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded">
                      Node.js / Express Architecture
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulates Hamza's fault-tolerant ledger and idempotency key safeguard that stops double-charging during network interruptions.
                  </p>
                </div>
                <button
                  onClick={resetBankingDemo}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Demo</span>
                </button>
              </div>

              {/* Balances Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-slate-400">Hamza's Account (acc_hamza_01)</div>
                  <div className="text-2xl font-black font-mono text-emerald-400">${userBalance.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 font-mono">Status: Verified & Protected</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-slate-400">Recipient Account (acc_recipient_99)</div>
                  <div className="text-2xl font-black font-mono text-cyan-400">${recipientBalance.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 font-mono">Status: External Verified Wallet</div>
                </div>
              </div>

              {/* Transfer Controls */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Transfer Amount ($):</label>
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">HTTP Idempotency Header:</label>
                    <input
                      type="text"
                      value={idempotencyKey}
                      onChange={(e) => setIdempotencyKey(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-amber-300 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <button
                      onClick={executeTransfer}
                      className="w-full py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <DollarSign className="w-4 h-4" />
                      <span>Execute Transfer</span>
                    </button>
                  </div>
                </div>

                {/* Glitch Simulator Switch */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={simulateGlitch}
                      onChange={(e) => setSimulateGlitch(e.target.checked)}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-0"
                    />
                    <span>
                      Simulate Network Timeout / Double Click (keeps same Idempotency-Key)
                    </span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                    Guarantees Exactly-Once Processing
                  </span>
                </div>
              </div>

              {/* Status Banner */}
              {transferStatusMessage && (
                <div className={`p-3 rounded-lg text-xs leading-relaxed border ${
                  transferStatusMessage.includes('PREVENTED')
                    ? 'bg-amber-950/40 text-amber-300 border-amber-500/40'
                    : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                }`}>
                  {transferStatusMessage}
                </div>
              )}

              {/* Immutable Double-Entry Ledger Log */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Double-Entry Immutable Transaction Ledger:
                  </span>
                  <span className="text-[11px] text-slate-400">Real-time DB Commit Log</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-900/90 text-slate-400 border-b border-white/10">
                      <tr>
                        <th className="p-2.5">TX ID</th>
                        <th className="p-2.5">Type</th>
                        <th className="p-2.5">Account</th>
                        <th className="p-2.5">Amount</th>
                        <th className="p-2.5">Idempotency Key</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {ledgerLog.map((tx) => (
                        <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-2.5 text-slate-400">{tx.id}</td>
                          <td className="p-2.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              tx.type === 'DEBIT' ? 'bg-red-950 text-red-400 border border-red-800/40' : 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                            }`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="p-2.5 text-slate-300">{tx.account}</td>
                          <td className="p-2.5 font-bold">${tx.amount}</td>
                          <td className="p-2.5 text-amber-300/80">{tx.idempotencyKey}</td>
                          <td className="p-2.5 text-emerald-400">{tx.status}</td>
                          <td className="p-2.5 text-slate-400">{tx.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: DEVELOPER INTERACTIVE CLI TERMINAL */}
          {activeTab === 'cli-terminal' && (
            <div className="p-5 sm:p-7 space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono ml-2">hamza@portfolio-terminal: ~</span>
                </div>
                <span className="text-[11px] text-slate-400">Type "help" for command list</span>
              </div>

              {/* Terminal Screen */}
              <div className="min-h-[320px] max-h-[420px] overflow-y-auto space-y-3 text-xs leading-relaxed text-slate-200">
                <div className="text-slate-400">
                  Welcome to Hamza Hassan's interactive portfolio CLI shell (v1.0.0).<br />
                  Try typing <span className="text-cyan-400 font-bold">help</span>, <span className="text-cyan-400 font-bold">skills</span>, <span className="text-cyan-400 font-bold">projects</span>, or <span className="text-emerald-400 font-bold">hire</span>.
                </div>

                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span>guest@hamza-portfolio:~$</span>
                      <span className="text-white font-bold">{item.cmd}</span>
                    </div>
                    <div className="text-slate-300 whitespace-pre-wrap pl-2 border-l border-cyan-500/30">
                      {item.output}
                    </div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command Input Form */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-xs text-cyan-400 font-bold">guest@hamza-portfolio:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type a command (help, skills, projects, hire)..."
                  className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-white/10 font-mono"
                >
                  Enter
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
