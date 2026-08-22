// =============================================================
//  SJSUHack — Master Configuration File
//  ---------------------------------------------------------------
//  ALL website content, colors, and data lives here.
//  Update this file to change anything on the site — no HTML
//  editing required. Colors are applied via CSS custom properties.
// =============================================================

const CONFIG = {

  // ─────────────────────────────────────────────
  // THEME & COLORS
  // Change any hex value to restyle the entire site.
  // ─────────────────────────────────────────────
  theme: {
    colors: {
      primary: "#0055A2",              // SJSU Blue — main accent
      secondary: "#E5A823",              // SJSU Gold — secondary accent
      accent: "#FFD700",              // Bright gold for highlights

      bgDark: "#060D1A",              // Page background (deep navy)
      bgCard: "#0D1B2E",              // Card / panel background
      bgSurface: "#142338",              // Elevated surface (slightly lighter)
      bgNavbar: "rgba(6,13,26,0.90)",   // Navbar (transparent w/ blur)

      textPrimary: "#FFFFFF",              // Main text
      textSecondary: "#8BA3C7",              // Secondary / muted text
      textMuted: "#4A6080",              // Very muted text (labels, timestamps)

      borderColor: "rgba(0,85,162,0.30)",  // Card borders
      glowPrimary: "rgba(0,85,162,0.55)",  // Blue glow (shadows, hovers)
      glowSecondary: "rgba(229,168,35,0.45)",// Gold glow (highlights)

      gradientHero: "linear-gradient(135deg, #060D1A 0%, #0D1B2E 60%, #142338 100%)",
      gradientCTA: "linear-gradient(135deg, #0055A2, #E5A823)",
      gradientCard: "linear-gradient(135deg, rgba(0,85,162,0.15), rgba(229,168,35,0.08))",
    },
    fonts: {
      heading: "Space Grotesk",   // Modern, tech-forward
      body: "Inter",           // Clean body text
    },
  },

  // ─────────────────────────────────────────────
  // EVENT META — Core event information
  // ─────────────────────────────────────────────
  event: {
    name: "SJSUHack",
    edition: "2026",
    tagline: "Build. Innovate. Shape the Future.",
    description: "SJSUHack is San Jose State University's flagship hackathon — co-powered by HP. SJSU students tackle real-world challenges using AI and emerging technologies.",
    shortDesc: "SJSU's premier hackathon, powered by HP",

    // Eligibility
    eligibility: "Open to currently enrolled SJSU students only.",
    teamSize: "2 to 5 members",

    // Dates (ISO format for countdown timer; displayDate for human-readable)
    // Day 1 (Sept 25): Hackathon — teams hack all day
    // Day 2 (Sept 26): Keynote, presentations & awards
    date: "2026-09-21T17:30:00",   // Event start (used by countdown)
    endDate: "2026-09-26T17:00:00",   // Event end
    displayDate: "September 21, 2026",
    displayDateRange: "September 21–26, 2026",

    location: "SJSU ISB Building",
    locationFull: "ISB Building, San Jose State University, San Jose, CA 95192",
    mapUrl: "https://maps.google.com/?q=SJSU+ISB+Building+San+Jose",

    // Registration
    registrationUrl: "https://forms.google.com/REPLACE_WITH_YOUR_FORM_ID",
    registrationOpen: true,
    devpostUrl: "#",         // Replace with Devpost URL when ready
    discordUrl: "#",         // Replace with Discord invite

    // Status: "coming_soon" | "registration_open" | "registration_closed" | "in_progress" | "judging" | "concluded"
    status: "registration_open",

    // Stats bar on homepage
    stats: {
      participants: "200+",
      prizes: "Prizes",
      mentors: "10+",
      hours: "25",
    },

    // Social links
    social: {
      instagram: "#",                       // e.g., https://instagram.com/sjsuhack
      twitter: "#",                       // e.g., https://twitter.com/sjsuhack
      linkedin: "#",                       // e.g., https://linkedin.com/company/sjsuhack
      github: "#",                       // e.g., https://github.com/sjsuhack
      email: "apps@sjsuhack.org",
    },
  },

  // ─────────────────────────────────────────────
  // NAVIGATION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "About", href: "about.html" },
      { label: "Schedule", href: "schedule.html" },
      { label: "Challenges", href: "challenges.html" },
      { label: "Judges", href: "judges.html" },
      { label: "Sponsors", href: "sponsors.html" },
      { label: "FAQ", href: "faq.html" },
      { label: "Resources", href: "resources.html" },
    ],
    ctaLabel: "Register Now",
    ctaHref: "register.html",
  },

  // ─────────────────────────────────────────────
  // JUDGES
  // Image files go in: public/assets/judges/
  // imageFile must match the exact filename (case-sensitive).
  // If the image is missing, placeholder.jpg is used automatically.
  // ─────────────────────────────────────────────
  // ─── KEYNOTE SPEAKERS ─────────────────────────────
  // Photos: public/assets/speakers/<imageFile>
  keynoteSpeakers: [
    {
      name: "Siddhartha Dixit",
      title: "Chief Technology Officer, SVP",
      company: "iTradeNetwork",
      imageFile: "siddhartha_dixit.jpg",   // file in assets/speakers/
      bio: "Visionary tech executive and CTO at iTradeNetwork. Expert in AI, supply chain technology, and enterprise software. Generously offering onsite interviews to select SJSU students.",
      linkedin: "#",
      tag: "Keynote Speaker",
    },
  ],

  // ─── JUDGES ──────────────────────────────────────────────
  // Photos: drop image file in public/assets/judges/ and set imageFile below.
  // Naming convention: firstname_lastname.jpg (all lowercase, underscores)
  // Photos from edgehackathon.com: upload the actual photo replacing the placeholder.
  judges: [
    {
      name: "Vivek Kompella",
      title: "Director, Enterprise Data & AI",
      company: "Informatica",
      imageFile: "vivek_kompella.jpg",      // ← Upload real photo from edgehackathon.com or LinkedIn
      bio: "Seasoned data science leader with extensive experience in enterprise AI, data architecture, and building large-scale ML platforms at top tech companies.",
      linkedin: "https://www.linkedin.com/in/vivek-kompella/",
    },
    {
      name: "Rengarajan Margasahayam",
      title: "Senior Director, Software Engineering",
      company: "Salesforce",
      imageFile: "rengarajan_margasahayam.jpg",  // ← Upload real photo
      bio: "Engineering leader at Salesforce driving large-scale software platform initiatives. Deep expertise in distributed systems and cloud-native engineering.",
      linkedin: "https://www.linkedin.com/in/rengam/",
    },
    {
      name: "Rohith Iyengar",
      title: "Senior AI Engineer",
      company: "HP AI Labs",
      imageFile: "rohith_iyengar.jpg",      // ← Upload real photo
      bio: "SJSU Alumni and AI engineer at HP Labs working on cutting-edge AI and machine learning applications for enterprise and edge computing.",
      linkedin: "https://www.linkedin.com/in/rohithiyengar/",
      tag: "SJSU Alumni",
    },
    {
      name: "Hariharasubramanian C.S.",
      title: "Distinguished Engineer",
      company: "Zededa",
      imageFile: "hariharasubramanian_cs.jpg",  // ← Upload real photo
      bio: "Distinguished Engineer at Zededa, a Silicon Valley-based edge AI company. Expert in edge computing, distributed systems, and AI infrastructure.",
      linkedin: "https://www.linkedin.com/in/cshari/",
    },
    {
      name: "Hrushikesh Pokala",
      title: "Senior Software Development Engineer",
      company: "Equifax",
      imageFile: "hrushikesh_pokala.jpg",
      bio: "MSADI alumnus at SJSU and senior engineer at Equifax. Brings experience in financial data platforms and AI-driven insights at enterprise scale.",
      linkedin: "https://www.linkedin.com/in/hrushiph/",
      tag: "SJSU Alumni",
    },
    {
      name: "Surbhi Gupta",
      title: "Senior Product Manager",
      company: "Technology Industry",
      imageFile: "surbhi_gupta.jpg",
      bio: "Experienced product and technology leader with a track record of building impactful products. Passionate about fostering innovation and supporting the next generation of engineers.",
      linkedin: "https://www.linkedin.com/in/surbhi-gupta-34064017/",
    },
  ],

  // ─────────────────────────────────────────────
  // MENTORS
  // Image files go in: public/assets/mentors/
  // Same naming convention as judges.
  // ─────────────────────────────────────────────
  // ─── ADVISORY PANEL ──────────────────────────────
  // Photos: public/assets/mentors/<imageFile>
  // These appear on the landing page as a grid, same style as judges.
  advisoryPanel: [
    {
      name: "Himant Goyal",
      title: "Sr. Product Manager",
      company: "Salesforce",
      imageFile: "himant_goyal.jpg",
      bio: "SJSU alumnus and Senior PM at Salesforce. Passionate about product strategy, AI-driven innovation, and nurturing the next generation of tech talent.",
      linkedin: "https://www.linkedin.com/in/himant-goyal-7a25b612/",
      tag: "SJSU Alumni",
    },
    {
      name: "Prof. Simon Sim",
      title: "Chair, Applied Data Science",
      company: "San Jose State University",
      imageFile: "prof_simon_sim.jpg",
      bio: "Chair of the Applied Data Science program at SJSU. Leading academic voice in data science education and applied AI research in Silicon Valley.",
      linkedin: "https://www.linkedin.com/in/simon-s-y-shim-8393b41/",
    },
    {
      name: "Jorge Rick Gosalvez",
      title: "Principal AI Product Manager",
      company: "HP Inc.",
      imageFile: "rick_gosalvez.jpg",
      bio: "Head of Product for HP AI Studio at HP AI Labs. Leading product strategy for enterprise AI tooling and bringing cutting-edge AI capabilities to HP's developer ecosystem.",
      linkedin: "https://www.linkedin.com/in/rickgosalvez/",
      tag: "SJSU Alumni",
    },
    {
      name: "Danny Steyer",
      title: "Program Specialist & Student Advisor",
      company: "San Jose State University",
      imageFile: "danny_steyer.jpg",
      bio: "Program Specialist and Student Advisor in the Applied Data Science department at SJSU. A dedicated champion of student success and innovation in the data science community.",
      linkedin: "https://www.linkedin.com/in/danny-steyer-b450b4106/",
    }
  ],

  // NOTE: advisoryPanel[] is the single source of truth for advisory/mentors pages.
  mentors: [], // ← Intentionally empty — data lives in advisoryPanel[]

  // ─────────────────────────────────────────────
  // SPONSORS — Single flat list (no tier labels)
  // Image files go in: public/assets/sponsors/<imageFile>
  // ─────────────────────────────────────────────
  sponsors: [
    {
      name: "San Jose State University",
      imageFile: "sjsu.png",
      url: "https://www.sjsu.edu/",
      description: "Co-host and primary academic partner",
    },
    {
      name: "HP Inc.",
      imageFile: "hp.png",
      url: "https://www.hp.com/us-en/workstations/zgx-nano-ai-station.html",
      description: "Technology sponsor and co-host",
    },
    {
      name: "iTradeNetwork",
      imageFile: "itradenetwork.webp",
      url: "https://www.itradenetwork.com/",
      description: "Enterprise supply chain technology sponsor",
    },
    {
      name: "SJSU Applied Data Science",
      imageFile: "sjsu_ads.png",
      url: "https://sjsu.edu/applied-data-science/",
      description: "SJSU's Applied Data Science program",
    },
  ],


  // ─────────────────────────────────────────────
  // CHALLENGES / TRACKS
  // ─────────────────────────────────────────────
  challenges: [
    {
      id: 1,
      title: "Local Agentic Systems",
      emoji: "🤖",
      color: "#0096D6",
      description: "Build autonomous AI agents that reason, plan, and act — entirely on local or hybrid infrastructure. Your agent runs on our ZGX Nano using multi-step reasoning and tool-use, with zero dependency on cloud AI APIs. This is the core track: pure local intelligence.",
      requirements: [
        "Agent must run on the event's ZGX Nano (local or hybrid)",
        "Local or hybrid inference only — no cloud AI API calls for core reasoning",
        "Multi-step reasoning or tool-use required (not just single-turn chat)",
        "Agent should complete a real, useful task autonomously",
        "Demonstrate at least one agentic loop with tool calls in the live demo",
      ],
      prize: "$3,000",
    },
    {
      id: 2,
      title: "Secure AI",
      emoji: "🔐",
      color: "#C0392B",
      description: "AI security is the next frontier. Build systems that protect AI models from adversarial attacks, detect prompt injection, secure multi-user inference on ZGX Nano, or implement access controls for locally-deployed LLMs.",
      requirements: [
        "Project must address AI security — model, inference, or deployment layer",
        "Local or hybrid architecture required — demonstrate on the ZGX Nano",
        "Show a real attack vector and your mitigation strategy",
        "Include a threat model in your pitch documentation",
      ],
      tools: ["Garak (LLM security)", "Ollama", "PrivateGPT", "LLM Guard", "llama.cpp"],
      prize: "$3,000",
    },
    {
      id: 3,
      title: "AI-Powered Productivity",
      emoji: "⚡",
      color: "#E5A823",
      description: "Build tools that amplify human productivity using AI — smart assistants, workflow automation, knowledge management, or intelligent collaboration. All inference runs locally or on the ZGX Nano, ensuring speed, privacy, and offline capability.",
      requirements: [
        "AI inference must run on the event's ZGX Nano (local or hybrid) — no cloud AI APIs",
        "Clear productivity use case with measurable user benefit",
        "Working prototype with a real-world workflow demo",
      ],
      tools: ["LangChain (local models)", "Ollama", "LlamaIndex", "Chroma DB", "n8n + local LLM"],
      prize: "$3,000",
    },
    {
      id: 4,
      title: "AI for Community Impact",
      emoji: "🌐",
      color: "#0055A2",
      description: "Build AI applications that address real community needs — in healthcare, education, accessibility, or public services. Projects must run locally or on the ZGX Nano, keeping data private and infrastructure independent of third-party cloud APIs.",
      requirements: [
        "Must run fully local or on the event's ZGX Nano",
        "No reliance on external paid AI APIs (OpenAI, Gemini, etc.)",
        "Addresses a real community or social problem",
        "Include a live local demo and brief impact statement",
      ],
      tools: ["Ollama", "LM Studio", "Hugging Face Transformers", "llama.cpp", "Whisper (local)"],
      prize: "$3,000",
    },
    {
      id: 5,
      title: "Generative AI & Creative Tech",
      emoji: "🎨",
      color: "#7B2FBE",
      description: "Explore the creative frontier of generative AI — text, images, audio, and multimodal experiences — with your AI models running on the event's ZGX Nano (local or hybrid). No cloud AI inference. Just raw local compute and creativity.",
      requirements: [
        "Generative model must run locally or on the ZGX Nano",
        "Novel creative application — art, music, storytelling, or interactive experience",
        "User-facing interface or interactive demo required",
        "Document your model selection and why it runs well on the ZGX Nano",
      ],
      tools: ["Stable Diffusion (local)", "ComfyUI", "Ollama", "Bark TTS", "AUTOMATIC1111"],
      prize: "$3,000",
    },
    {
      id: 6,
      title: "Responsible AI & Ethics",
      emoji: "⚖️",
      color: "#00A878",
      description: "Design AI systems that are transparent, fair, and accountable. AI running on our ZGX Nano is inherently more privacy-preserving — use that to your advantage. Build bias detection tools, explainability frameworks, or auditing systems for locally-run models.",
      requirements: [
        "Focus on fairness, transparency, explainability, or data privacy",
        "Local/hybrid architecture is required — data stays on the event's ZGX Nano or hybrid setup",
        "Include documentation on ethical design decisions made",
        "Demonstrate how local inference reduces privacy or bias risks vs cloud AI",
      ],
      tools: ["LIME", "SHAP", "IBM AI Fairness 360", "Ollama", "Presidio (local PII detection)"],
      prize: "$3,000",
    }
  ],

  // ─────────────────────────────────────────────
  // PRIZES
  // ─────────────────────────────────────────────
  prizes: {
    overall: [
      {
        place: "🥇 Grand Prize",
        amount: "Prizes & Hardware",
        perks: ["HP hardware bundle", "Fast-track interviews at HP", "6-month mentorship opportunity", "Trophy & certificates"],
        highlight: true,
      },
      {
        place: "🥈 Runner-Up",
        amount: "Prizes & Accessories",
        perks: ["HP accessories pack", "SJSU CS recognition", "Certificates"],
      },
      {
        place: "🥉 Third Place",
        amount: "Prizes & Swag",
        perks: ["Swag bundle", "Certificates"],
      },
    ],
    tracks: [],   // ← Add track prizes here if applicable
    special: [
      { award: "🌟 Best First-Timer", description: "Best project by first-time hackathon participants", prize: "Swag bundle" },
      { award: "🎨 Best UX/Design", description: "Most polished, user-friendly, and visually compelling", prize: "Swag bundle" },
      { award: "🌍 Most Impactful", description: "Highest potential real-world impact", prize: "Swag bundle" },
      { award: "🎤 Best Pitch", description: "Most compelling and clear presentation", prize: "Swag bundle" },
    ],
  },

  // ─────────────────────────────────────────────
  // SCHEDULE — Event timeline
  // Day 0 (Sept 21): Kickoff evening
  // Day 1 (Sept 25): Full hackathon day — teams hack & submit by 8PM
  // Day 2 (Sept 26): Final day — SJSU Student Union Ballroom, 2nd Floor
  // Types: "keynote" | "hacking" | "workshop" | "mentoring" | "logistics" | "judging" | "event"
  // ─────────────────────────────────────────────
  schedule: [
    {
      day: "Kickoff — Sept 21",
      date: "September 21, 2026",
      events: [
        { time: "5:30 PM", title: "🚀 Official Kickoff", description: "The journey begins! Join us for the official SJSUHack kickoff — meet your fellow participants, learn the rules, explore the challenges, and get cluster access set up.", type: "keynote", duration: "~2 hrs" },
        { time: "5:30 PM", title: "Intro & Welcome", description: "Welcome remarks from the organizing team. Overview of SJSUHack, the vision behind local agentic AI, and what to expect over the coming days.", type: "event", duration: "20 min" },
        { time: "5:50 PM", title: "Rubric & Judging Criteria", description: "Walk-through of the judging rubric — HP product integration, innovation, technical complexity, impact, and presentation. Q&A with judges panel.", type: "event", duration: "20 min" },
        { time: "6:10 PM", title: "Challenge Tracks Overview", description: "Deep-dive into all six challenge tracks. Understand the scope, requirements, and tools available for each category.", type: "event", duration: "25 min" },
        { time: "6:35 PM", title: "Team Formation & Networking", description: "Find your team! Solo participants connect with potential teammates. Mentors and advisors available for initial project ideation.", type: "logistics", duration: "" },
        { time: "7:05 PM", title: "ZGX Nano Access", description: "Technical onboarding — connect to the ZGX Nano, verify your access, and run your first local model. Support team on hand to help.", type: "workshop", duration: "30 min" },

      ],
    },
    {
      day: "Finals",
      date: "September 26, 2026 · SJSU Student Union Ballroom, 2nd Floor",
      events: [
        { time: "9:00 AM", title: "🌅 Morning Session", description: "Doors open at the SJSU Student Union Ballroom, 2nd Floor. Welcome to Finals Day!", type: "keynote", duration: "Morning · 9AM–11AM" },
        { time: "9:00 AM", title: "All Teams — Room Presentations", description: "All teams are divided across 3 rooms for their initial presentations with judges. Each team presents their local AI project and takes questions.", type: "judging", duration: "2 hrs" },
        { time: "11:00 AM", title: "Judge Tours", description: "Judges tour finalist project stations for a structured walkthrough of each project.", type: "judging", duration: "20 min" },
        { time: "11:30 AM", title: "Networking Session & Lunch", description: "Open networking for all participants, judges, advisors, and sponsors. Lunch served. Connect, celebrate, and enjoy the community.", type: "logistics", duration: "40 min" },
        { time: "1:00 PM", title: "🎤 Keynote Addresses", description: "Industry keynotes from our speakers and advisory board. Inspiring talks on the future of local AI, agentic systems, and responsible innovation.", type: "keynote", duration: "15 min" },
        { time: "1:30 PM", title: "🏆 Final Presentations", description: "Finalist teams deliver their live demo and pitch to the judges and audience. Teams have equal time to showcase their local AI project.", type: "judging", duration: "" },
        { time: "2:30 PM", title: "🙏 Thank You", description: "Appreciation remarks for all participants, volunteers, sponsors, and the SJSU community. Delivered by Himant.", type: "keynote", duration: "10 min" },
        { time: "2:40 PM", title: "🏅 Awards Ceremony", description: "Winners announced and prizes awarded. Grand Prize, Runner-Up, and special category awards presented by Professor Shim.", type: "keynote", duration: "20 min" },
        { time: "3:00 PM", title: "🎯 Closing & Takeaways", description: "Closing remarks and key takeaways from the event. What we built, what we learned, and where local agentic AI goes next. Delivered by Rick.", type: "keynote", duration: "10 min" },
        { time: "3:10 PM", title: "📸 Group Photo & Picture Session", description: "Gather for the official SJSUHack 2026 group photo! All participants, judges, advisors, and sponsors — don't miss the moment.", type: "event", duration: "" },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // FAQ
  // ─────────────────────────────────────────────
  faq: [
    {
      question: "Who can participate in SJSUHack?",
      answer: "SJSUHack is open exclusively to currently enrolled SJSU students — both undergraduate and graduate. You must have a valid SJSU student ID to register and participate.",
    },
    {
      question: "How large can my team be?",
      answer: "Teams must have 2 to 5 members. Solo participants may register but must join a team before hacking begins. We'll have a team formation session at the start of Day 1.",
    },
    {
      question: "Is it free to attend?",
      answer: "Yes — 100% free! SJSUHack provides meals, snacks, Wi-Fi, and all the resources and swag you need. Just bring your student ID and your ideas!",
    },
    {
      question: "Do I need to have prior coding experience?",
      answer: "Absolutely not! We welcome hackers of all experience levels. Beginners will find workshops, hands-on advisors, and guidance to help them get up and running quickly.",
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and any hardware you want to use. Day 1 is the hackathon and Day 2 is presentations — plan accordingly!",
    },
    {
      question: "How does the format work?",
      answer: "Kickoff is on September 21 with team formation and cluster setup. Day 1 (September 25) is the hackathon — teams build their projects from morning until the 8:00 PM submission deadline. Day 2 (September 26) is presentations and awards — teams present in morning rooms, followed by final presentations and awards in the afternoon.",
    },
    {
      question: "Can I start building my project before the hackathon?",
      answer: "No — all core code must be written during Day 1's hacking window. You may use open-source libraries, frameworks, public APIs, and datasets, but the project idea and implementation must originate at the event.",
    },
    {
      question: "How will projects be judged?",
      answer: "Projects are judged on Innovation (25%), Technical Complexity (25%), Real-World Impact & Feasibility (25%), and Presentation & Demo Quality (25%).",
    },
    {
      question: "Will there be hardware available to use?",
      answer: "HP will provide select hardware and equipment for participants. More details will be announced before the event.",
    },
    {
      question: "Is the event in-person?",
      answer: "Yes! SJSUHack is a fully in-person event held at the SJSU ISB Building. Attendance in person is required for all sessions.",
    },
    {
      question: "How do I register?",
      answer: "Click the 'Register Now' button anywhere on this site and complete the Google Form. Spots are limited — register early!",
    },
    {
      question: "Will I get a certificate of participation?",
      answer: "Yes! All participants who submit a project will receive a digital certificate of participation. Winners receive additional recognition certificates.",
    },
    {
      question: "What do I need to submit?",
      answer: "Every team must submit three deliverables before the Sept 25 hacking deadline: (1) a public Git repository (GitHub/GitLab) with source code and a README, (2) a Slide Deck (PDF or Google Slides link) covering your problem, solution, and architecture, and (3) a 2-minute max demo video (YouTube, Drive, or Loom) showing your project in action. All three are required.",
    },
    {
      question: "I have more questions — who do I contact?",
      answer: "Reach out to us at apps@sjsuhack.org or DM us on Instagram. We're happy to help!",
    },
  ],

  // ─────────────────────────────────────────────
  // RESOURCES — Helpful links for participants
  // ─────────────────────────────────────────────
  resources: [
    {
      category: "🖥️ ZGX Nano & Local Inference",
      items: [
        { title: "HP Nano AI Projects (GitHub)", url: "https://github.com/curtburk?tab=repositories", description: "Official collection of HP ZGX Nano AI projects and starter code — browse real demos and reference implementations" },
        { title: "HP ZGX Nano AI Station", url: "https://www.hp.com/us-en/workstations/zgx-nano-ai-station.html", description: "Official specs and overview of the HP ZGX Nano edge AI workstation used at the event" },
        { title: "HP ZGX Onboard — Get Started", url: "https://www.hp.com/us-en/workstations/zgx-onboard.html?jumpid=va_us_mu_mk_hc_r12139_aw_x_11233", description: "HP's official onboarding guide for the ZGX ecosystem — set up your environment and start building" },
        { title: "Hugging Face Model Hub", url: "https://huggingface.co/models", description: "Browse thousands of open-source models optimized for local deployment" },
      ],
    },
    {
      category: "🤖 Agentic AI Frameworks",
      items: [
        { title: "LangChain (Local Models)", url: "#", description: "Use any agentic AI Frameworks." },
      ],
    },
    {
      category: "🔐 AI Security & Privacy",
      items: [
        { title: "Garak — LLM Vulnerability Scanner", url: "https://github.com/leondz/garak", description: "Open-source tool for probing LLMs for prompt injection, jailbreaks, and vulnerabilities" },
        { title: "LLM Guard", url: "https://llm-guard.com", description: "Security toolkit for sanitizing LLM inputs and outputs — detects injection and PII leaks" },
        { title: "Presidio (Microsoft)", url: "https://microsoft.github.io/presidio/", description: "Local PII detection and anonymization to protect user data during inference" },
        { title: "PrivateGPT", url: "https://github.com/zylon-ai/private-gpt", description: "100% local RAG system — no data leaves your machine" },
        { title: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", description: "The definitive guide to LLM security vulnerabilities — essential reading for the Secure AI track" },
      ],
    },
    {
      category: "📊 Supply Chain & Enterprise AI",
      items: [
        { title: "iTradeNetwork", url: "https://www.itradenetwork.com/", description: "Our industry sponsor — enterprise supply chain technology platform connecting the fresh food industry" },
        { title: "Pandas — Data Analysis", url: "https://pandas.pydata.org", description: "The go-to Python library for supply chain data wrangling and analysis" },
        { title: "DuckDB", url: "https://duckdb.org", description: "Fast, local SQL analytics engine — great for offline supply chain data processing" },
        { title: "Chroma DB", url: "https://www.trychroma.com", description: "Local vector database for building AI-powered search over enterprise documents" },
        { title: "Apache Superset", url: "https://superset.apache.org", description: "Open-source data visualization for supply chain dashboards and analytics" },
      ],
    },
    {
      category: "🎨 Generative AI & Creative Tools",
      items: [
        { title: "Stable Diffusion (ComfyUI)", url: "https://github.com/comfyanonymous/ComfyUI", description: "Powerful local image generation with a node-based workflow interface" },
        { title: "AUTOMATIC1111 WebUI", url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui", description: "Feature-rich local Stable Diffusion interface — easy to set up on the ZGX Nano" },
        { title: "Bark TTS", url: "https://github.com/suno-ai/bark", description: "Local text-to-audio model — generate speech, music, and sound effects" },
        { title: "Whisper (local)", url: "https://github.com/openai/whisper", description: "Offline speech-to-text transcription from OpenAI — runs fully on-device" },
        { title: "Kokoro TTS", url: "https://github.com/hexgrad/kokoro", description: "Fast, high-quality local text-to-speech synthesis" },
      ],
    },
    {
      category: "⚖️ Responsible AI & Explainability",
      items: [
        { title: "SHAP", url: "https://shap.readthedocs.io", description: "Explain model predictions with Shapley values — works with any ML model locally" },
        { title: "LIME", url: "https://github.com/marcotcr/lime", description: "Local interpretable model-agnostic explanations for AI predictions" },
        { title: "IBM AI Fairness 360", url: "https://aif360.mybluemix.net", description: "Toolkit for detecting and mitigating bias in AI models" },
        { title: "Evidently AI", url: "https://www.evidentlyai.com", description: "Open-source ML observability — monitor model drift, data quality, and fairness" },
        { title: "ML Commons Croissant", url: "https://mlcommons.org/croissant/", description: "Standard dataset format for documenting data provenance and responsible use" },
      ],
    },
    {
      category: "🛠️ Dev Tools & Frameworks",
      items: [
        { title: "FastAPI", url: "https://fastapi.tiangolo.com", description: "Fast Python API framework — ideal for wrapping local models in a REST API" },
        { title: "Gradio", url: "https://www.gradio.app", description: "Build shareable ML demos and UIs in pure Python in minutes" },
        { title: "Streamlit", url: "https://streamlit.io", description: "Turn Python scripts into interactive data apps instantly" },
        { title: "Docker", url: "https://www.docker.com", description: "Containerize your AI app for easy demo and deployment" },
        { title: "GitHub Student Pack", url: "https://education.github.com/pack", description: "Free tools, credits, and services for student developers" },
      ],
    },
    {
      category: "📚 Learning & Reference",
      items: [
        { title: "fast.ai — Practical Deep Learning", url: "https://fast.ai", description: "Hands-on deep learning course — free and beginner-friendly" },
        { title: "Andrej Karpathy — Neural Networks: Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html", description: "Build neural networks from scratch — outstanding for understanding local models" },
        { title: "SJSU Applied Data Science Program", url: "https://sjsu.edu/applied-data-science/", description: "SJSU's interdisciplinary MS program in Applied Data Science — our academic partner" },
        { title: "Kaggle Learn", url: "https://kaggle.com/learn", description: "Free ML micro-courses with Jupyter notebooks" },
        { title: "LangChain Academy", url: "https://academy.langchain.com", description: "Free courses on building real-world LLM applications and agents" },
      ],
    },
  ],


  // ─────────────────────────────────────────────
  // ABOUT — Descriptions for the About page
  // ─────────────────────────────────────────────
  about: {
    mission: "HackSJSU brings together students, engineers, and innovators for 24 hours of building, learning, and connecting. We believe diverse minds tackling hard problems will create the future.",
    vision: "To inspire the next generation of AI builders at SJSU and beyond, creating a launchpad for ideas that drive real-world impact.",
    history: "[Describe how HackSJSU got started, past editions, and growth milestones. Replace this placeholder with actual history.]",
    organizers: "[HackSJSU is organized by the SJSU Computer Science Student Association (CSSA) in partnership with the College of Engineering. Replace with actual organizer info.]",
    aboutSJSU: "San Jose State University is one of the oldest public universities in California, at the heart of Silicon Valley. SJSU's College of Engineering produces world-class engineers who go on to shape the technology industry.",
    aboutHP: "HP Inc. creates technology that makes life better for everyone, everywhere. As a co-founding sponsor of HackSJSU, HP provides resources, mentors, and challenges to help students build the future of computing.",
    whyJoin: [
      { icon: "💡", title: "Build Something Real", desc: "Build a project from scratch and present a working demo. Real constraints, real creativity." },
      { icon: "🤝", title: "Network with Pros", desc: "Connect with HP engineers, SJSU faculty, and industry leaders in AI and tech." },
      { icon: "🏆", title: "Win Amazing Prizes", desc: "HP hardware bundles, career opportunities, and trophies up for grabs." },
      { icon: "📚", title: "Level Up Your Skills", desc: "Workshops, mentoring, and hands-on experience with cutting-edge AI tools." },
      { icon: "🚀", title: "Launch Your Career", desc: "Showcase your talent to HP recruiters and Silicon Valley companies." },
      { icon: "🎉", title: "Have Fun!", desc: "Free food, swag, friends, and memories that last throughout the event." },
    ],
  },

  // ─────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────
  contact: {
    email: "apps@sjsuhack.org",
    sponsorEmail: "apps@sjsuhack.org",
    pressEmail: "apps@sjsuhack.org",
    address: "San Jose State University, San Jose, CA 95192",
  },
};

// ─────────────────────────────────────────────
// AUTO-APPLY THEME — Do not modify this section
// Reads CONFIG.theme.colors and applies them as
// CSS custom properties on the document root.
// ─────────────────────────────────────────────
(function applyTheme() {
  if (typeof document === 'undefined') return;
  const apply = () => {
    const r = document.documentElement;
    const c = CONFIG.theme.colors;
    const f = CONFIG.theme.fonts;
    r.style.setProperty('--clr-primary', c.primary);
    r.style.setProperty('--clr-secondary', c.secondary);
    r.style.setProperty('--clr-accent', c.accent);
    r.style.setProperty('--clr-bg', c.bgDark);
    r.style.setProperty('--clr-card', c.bgCard);
    r.style.setProperty('--clr-surface', c.bgSurface);
    r.style.setProperty('--clr-navbar', c.bgNavbar);
    r.style.setProperty('--clr-text', c.textPrimary);
    r.style.setProperty('--clr-text-muted', c.textSecondary);
    r.style.setProperty('--clr-text-dim', c.textMuted);
    r.style.setProperty('--clr-border', c.borderColor);
    r.style.setProperty('--glow-p', c.glowPrimary);
    r.style.setProperty('--glow-s', c.glowSecondary);
    r.style.setProperty('--grad-cta', c.gradientCTA);
    r.style.setProperty('--grad-card', c.gradientCard);
    r.style.setProperty('--font-heading', `"${f.heading}", "Segoe UI", sans-serif`);
    r.style.setProperty('--font-body', `"${f.body}", "Segoe UI", sans-serif`);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
