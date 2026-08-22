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
    description: "SJSUHack is San Jose State University's flagship hackathon — co-powered by HP. SJSU students tackle real-world challenges using AI and emerging technologies, competing for $10,000 in prizes.",
    shortDesc: "SJSU's premier hackathon, powered by HP",

    // Eligibility
    eligibility: "Open to currently enrolled SJSU students only.",
    teamSize: "2 to 5 members",

    // Dates (ISO format for countdown timer; displayDate for human-readable)
    // Day 1 (Sept 25): Hackathon — teams hack all day
    // Day 2 (Sept 26): Keynote, presentations & awards
    date: "2026-09-25T08:00:00",   // Event start (used by countdown)
    endDate: "2026-09-26T17:00:00",   // Event end
    displayDate: "September 25, 2026",
    displayDateRange: "September 25–26, 2026",

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
      prizes: "$10,000",
      mentors: "10+",
      hours: "24",
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
      { label: "Prizes", href: "prizes.html" },
      { label: "Judges", href: "judges.html" },
      { label: "Mentors", href: "mentors.html" },
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
      name: "Danny Steyer",
      title: "Program Specialist & Student Advisor",
      company: "San Jose State University",
      imageFile: "danny_steyer.jpg",
      bio: "Program Specialist and Student Advisor in the Applied Data Science department at SJSU. A dedicated champion of student success and innovation in the data science community.",
      linkedin: "https://www.linkedin.com/in/danny-steyer-b450b4106/",
    },
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
      url: "https://www.sjsu.edu",
      description: "Co-host and primary academic partner",
    },
    {
      name: "HP Inc.",
      imageFile: "hp.png",
      url: "https://www.hp.com",
      description: "Technology sponsor and co-host",
    },
    {
      name: "iTradeNetwork",
      imageFile: "itradenetwork.png",
      url: "#",
      description: "Enterprise supply chain technology sponsor",
    },
    {
      name: "SJSU Applied Data Science",
      imageFile: "sjsu_ads.png",
      url: "https://www.sjsu.edu/datascience/",
      description: "SJSU's Applied Data Science program",
    },
  ],


  // ─────────────────────────────────────────────
  // CHALLENGES / TRACKS
  // ─────────────────────────────────────────────
  challenges: [
    {
      id: 1,
      title: "AI for Community Impact",
      emoji: "🌐",
      color: "#0055A2",
      description: "Build AI applications that address real community needs — in healthcare, education, accessibility, or public services. Projects must run locally or on the shared GPU cluster, keeping data private and infrastructure independent of third-party cloud APIs.",
      requirements: [
        "Must run fully local or on the event's shared GPU cluster",
        "No reliance on external paid AI APIs (OpenAI, Gemini, etc.)",
        "Addresses a real community or social problem",
        "Include a live local demo and brief impact statement",
      ],
      tools: ["Ollama", "LM Studio", "Hugging Face Transformers", "llama.cpp", "Whisper (local)"],
      prize: "$3,000",
    },
    {
      id: 2,
      title: "Generative AI & Creative Tech",
      emoji: "🎨",
      color: "#7B2FBE",
      description: "Explore the creative frontier of generative AI — text, images, audio, and multimodal experiences — running entirely on local hardware or the event's shared GPU cluster. No cloud dependency. Just raw compute and creativity.",
      requirements: [
        "Generative model must run locally or on the shared cluster",
        "Novel creative application — art, music, storytelling, or interactive experience",
        "User-facing interface or interactive demo required",
        "Document your model selection and why it runs well on local hardware",
      ],
      tools: ["Stable Diffusion (local)", "ComfyUI", "Ollama", "Bark TTS", "AUTOMATIC1111"],
      prize: "$3,000",
    },
    {
      id: 3,
      title: "AI-Powered Productivity",
      emoji: "⚡",
      color: "#E5A823",
      description: "Build tools that amplify human productivity using AI — smart assistants, workflow automation, knowledge management, or intelligent collaboration. All inference runs locally or on the shared GPU cluster, ensuring speed, privacy, and offline capability.",
      requirements: [
        "AI inference must be local or on the event's shared cluster",
        "Clear productivity use case with measurable user benefit",
        "Working prototype with a real-world workflow demo",
        "Must function without internet connectivity to AI APIs",
      ],
      tools: ["LangChain (local models)", "Ollama", "LlamaIndex", "Chroma DB", "n8n + local LLM"],
      prize: "$3,000",
    },
    {
      id: 4,
      title: "Responsible AI & Ethics",
      emoji: "⚖️",
      color: "#00A878",
      description: "Design AI systems that are transparent, fair, and accountable. Local and on-device AI is inherently more privacy-preserving — use that to your advantage. Build bias detection tools, explainability frameworks, or auditing systems for locally-run models.",
      requirements: [
        "Focus on fairness, transparency, explainability, or data privacy",
        "Local/hybrid architecture is required — data stays on-device or on the cluster",
        "Include documentation on ethical design decisions made",
        "Demonstrate how local inference reduces privacy or bias risks vs cloud AI",
      ],
      tools: ["LIME", "SHAP", "IBM AI Fairness 360", "Ollama", "Presidio (local PII detection)"],
      prize: "$3,000",
    },
    {
      id: 5,
      title: "Local Agentic Systems",
      emoji: "🤖",
      color: "#0096D6",
      description: "Build autonomous AI agents that reason, plan, and act — without phoning home to the cloud. Use the shared GPU cluster to run multi-step agent pipelines that browse, code, summarize, and coordinate tasks entirely on local infrastructure.",
      requirements: [
        "Agent must run fully on local hardware or the shared GPU cluster",
        "Multi-step reasoning or tool-use required (not just single-turn chat)",
        "Agent should complete a real, useful task autonomously",
        "Demonstrate at least one agentic loop with tool calls in the live demo",
      ],
      tools: ["Ollama + LangChain", "AutoGen (local)", "CrewAI", "Open Interpreter", "llama.cpp"],
      prize: "$3,000",
    },
    {
      id: 6,
      title: "Secure AI",
      emoji: "🔐",
      color: "#C0392B",
      description: "AI security is the next frontier. Build systems that protect AI models from adversarial attacks, detect prompt injection, secure multi-user inference on shared GPU clusters, or implement access controls for locally-deployed LLMs.",
      requirements: [
        "Project must address AI security — model, inference, or deployment layer",
        "Local or hybrid architecture required — demonstrate on the shared cluster",
        "Show a real attack vector and your mitigation strategy",
        "Include a threat model in your pitch documentation",
      ],
      tools: ["Garak (LLM security)", "Ollama", "PrivateGPT", "LLM Guard", "llama.cpp"],
      prize: "$3,000",
    },
  ],

  // ─────────────────────────────────────────────
  // PRIZES  (Total pool: $10,000)
  // ─────────────────────────────────────────────
  prizes: {
    overall: [
      {
        place: "🥇 Grand Prize",
        amount: "$5,000",
        perks: ["Cash prize split among team", "HP hardware bundle", "Fast-track interviews at HP", "6-month mentorship opportunity", "Trophy & certificates"],
        highlight: true,
      },
      {
        place: "🥈 Runner-Up",
        amount: "$3,000",
        perks: ["Cash prize split among team", "HP accessories pack", "SJSU CS recognition", "Certificates"],
      },
      {
        place: "🥉 Third Place",
        amount: "$2,000",
        perks: ["Cash prize split among team", "Swag bundle", "Certificates"],
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
  // Day 1 (Sept 25): Hackathon day — teams hack
  // Day 2 (Sept 26): Keynote, presentations & awards
  // Types: "keynote" | "hacking" | "workshop" | "mentoring" | "logistics" | "judging" | "event"
  // NOTE: Detailed schedule is being finalized — update times below when ready.
  // ─────────────────────────────────────────────
  schedule: [
    {
      day: "Day 1 — Hackathon",
      date: "September 25, 2026",
      events: [
        { time: "8:00 AM", title: "Check-in & Breakfast", description: "Arrive, grab your badge and t-shirt, and enjoy breakfast with fellow hackers.", type: "logistics", duration: "60 min" },
        { time: "9:00 AM", title: "Orientation & Team Formation", description: "Welcome briefing, rules overview, and team-matching session for solo participants.", type: "event", duration: "60 min" },
        { time: "10:00 AM", title: "🚀 Hacking Begins!", description: "The clock starts now. Start building your project — good luck!", type: "hacking", duration: "" },
        { time: "12:00 PM", title: "Lunch", description: "Catered lunch served in the main hall. Keep building!", type: "logistics", duration: "45 min" },
        { time: "2:00 PM", title: "Workshop: Building with AI APIs", description: "Hands-on session covering OpenAI, Gemini, and LangChain. Presented by HP engineers.", type: "workshop", duration: "60 min" },
        { time: "4:00 PM", title: "Workshop: HP Developer Tools", description: "Deep-dive into HP's developer ecosystem and HP AI Studio.", type: "workshop", duration: "60 min" },
        { time: "6:00 PM", title: "Dinner", description: "Catered dinner. Refuel, recharge, and keep hacking!", type: "logistics", duration: "45 min" },
        { time: "8:00 PM", title: "Office Hours with Advisory Board", description: "Sign up at the advisor table for 1:1 sessions with our industry advisors.", type: "mentoring", duration: "120 min" },
        { time: "10:00 PM", title: "⏰ Hacking Ends — Submissions Due", description: "All coding must stop. Submit your project via the registration form before this deadline.", type: "event", duration: "" },
      ],
    },
    {
      day: "Day 2 — Presentations & Awards",
      date: "September 26, 2026",
      events: [
        { time: "9:00 AM", title: "Welcome & Keynote Address", description: "Opening remarks from SJSU leadership and HP, followed by the keynote address.", type: "keynote", duration: "60 min" },
        { time: "10:00 AM", title: "Team Presentations Begin", description: "Teams present their projects to judges and the audience. Each team gets a dedicated time slot.", type: "judging", duration: "" },
        { time: "12:00 PM", title: "Lunch", description: "Catered lunch break during the presentation rounds.", type: "logistics", duration: "45 min" },
        { time: "1:00 PM", title: "Presentations Continue", description: "Second round of team presentations to the judging panel.", type: "judging", duration: "" },
        { time: "3:00 PM", title: "Judge Deliberation", description: "Judges score and deliberate on winners.", type: "judging", duration: "60 min" },
        { time: "4:00 PM", title: "🏆 Award Ceremony", description: "Winners announced! Prize distribution, sponsor recognition, and thank-you's.", type: "keynote", duration: "60 min" },
        { time: "5:00 PM", title: "Networking & Wrap-Up", description: "Celebrate your achievement! Connect with sponsors, judges, and fellow hackers.", type: "logistics", duration: "60 min" },
        { time: "6:00 PM", title: "Event Ends", description: "Thanks for making SJSUHack 2026 amazing. See you next year!", type: "event", duration: "" },
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
      question: "How does the 2-day format work?",
      answer: "Day 1 (September 25) is the hackathon — teams build their projects from morning to 10 PM. Day 2 (September 26) is presentations and awards — teams present to judges, followed by the keynote address and award ceremony.",
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
      answer: "Yes! SJSUHack is a fully in-person event held at the SJSU ISB Building. Attendance in person is required for both days.",
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
      question: "I have more questions — who do I contact?",
      answer: "Reach out to us at apps@sjsuhack.org or DM us on Instagram. We're happy to help!",
    },
  ],

  // ─────────────────────────────────────────────
  // RESOURCES — Helpful links for participants
  // ─────────────────────────────────────────────
  resources: [
    {
      category: "🛠 Starter Kits",
      items: [
        { title: "HackSJSU Starter Kit (GitHub)", url: "#", description: "Official boilerplate and project templates for all tracks" },
        { title: "HP Developer Resources", url: "https://developers.hp.com", description: "HP API documentation, SDKs, and developer tools" },
      ],
    },
    {
      category: "🤖 AI & ML APIs",
      items: [
        { title: "OpenAI API", url: "https://platform.openai.com", description: "GPT-4o, DALL-E 3, Whisper, Assistants API" },
        { title: "Google Gemini API", url: "https://ai.google.dev", description: "Multimodal AI by Google DeepMind — free tier available" },
        { title: "Anthropic Claude", url: "https://anthropic.com", description: "Claude 3.5 Sonnet — great for long-context tasks" },
        { title: "Hugging Face", url: "https://huggingface.co", description: "Open-source models, datasets, and Inference API" },
        { title: "Cohere", url: "https://cohere.com", description: "NLP APIs for classification, embeddings, and generation" },
        { title: "Replicate", url: "https://replicate.com", description: "Run any open-source AI model via API" },
      ],
    },
    {
      category: "☁️ Cloud & Hosting",
      items: [
        { title: "Google Cloud Platform", url: "https://cloud.google.com", description: "$300 free credits for new accounts" },
        { title: "Microsoft Azure", url: "https://azure.microsoft.com", description: "Student credits via Azure for Students" },
        { title: "Firebase", url: "https://firebase.google.com", description: "Free hosting, database, and auth by Google" },
        { title: "Vercel", url: "https://vercel.com", description: "Free frontend hosting — deploys from GitHub in seconds" },
        { title: "Supabase", url: "https://supabase.com", description: "Open-source Firebase alternative with PostgreSQL" },
      ],
    },
    {
      category: "📚 Learning & Reference",
      items: [
        { title: "fast.ai", url: "https://fast.ai", description: "Practical deep learning — free course" },
        { title: "Kaggle Learn", url: "https://kaggle.com/learn", description: "Free ML micro-courses with notebooks" },
        { title: "CS50 AI (Harvard)", url: "https://cs50.harvard.edu/ai", description: "Intro to AI with Python — free online" },
        { title: "LangChain Docs", url: "https://python.langchain.com", description: "Framework for building LLM-powered apps" },
      ],
    },
    {
      category: "🎨 Design & UI",
      items: [
        { title: "Figma", url: "https://figma.com", description: "Free collaborative design and prototyping" },
        { title: "shadcn/ui", url: "https://ui.shadcn.com", description: "Beautiful React components, copy-paste ready" },
        { title: "Tailwind CSS", url: "https://tailwindcss.com", description: "Utility-first CSS framework" },
        { title: "Framer Motion", url: "https://framer.com/motion", description: "Animation library for React" },
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
      { icon: "💡", title: "Build Something Real", desc: "24 hours to take an idea from zero to demo. Real constraints, real creativity." },
      { icon: "🤝", title: "Network with Pros", desc: "Connect with HP engineers, SJSU faculty, and industry leaders in AI and tech." },
      { icon: "🏆", title: "Win Amazing Prizes", desc: "$20,000+ in cash prizes, hardware, and career opportunities up for grabs." },
      { icon: "📚", title: "Level Up Your Skills", desc: "Workshops, mentoring, and hands-on experience with cutting-edge AI tools." },
      { icon: "🚀", title: "Launch Your Career", desc: "Showcase your talent to HP recruiters and Silicon Valley companies." },
      { icon: "🎉", title: "Have Fun!", desc: "Free food, swag, friends, and memories that last beyond the 24 hours." },
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
