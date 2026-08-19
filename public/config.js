// =============================================================
//  HackSJSU — Master Configuration File
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
      primary:          "#0055A2",              // SJSU Blue — main accent
      secondary:        "#E5A823",              // SJSU Gold — secondary accent
      accent:           "#FFD700",              // Bright gold for highlights

      bgDark:           "#060D1A",              // Page background (deep navy)
      bgCard:           "#0D1B2E",              // Card / panel background
      bgSurface:        "#142338",              // Elevated surface (slightly lighter)
      bgNavbar:         "rgba(6,13,26,0.90)",   // Navbar (transparent w/ blur)

      textPrimary:      "#FFFFFF",              // Main text
      textSecondary:    "#8BA3C7",              // Secondary / muted text
      textMuted:        "#4A6080",              // Very muted text (labels, timestamps)

      borderColor:      "rgba(0,85,162,0.30)",  // Card borders
      glowPrimary:      "rgba(0,85,162,0.55)",  // Blue glow (shadows, hovers)
      glowSecondary:    "rgba(229,168,35,0.45)",// Gold glow (highlights)

      gradientHero:     "linear-gradient(135deg, #060D1A 0%, #0D1B2E 60%, #142338 100%)",
      gradientCTA:      "linear-gradient(135deg, #0055A2, #E5A823)",
      gradientCard:     "linear-gradient(135deg, rgba(0,85,162,0.15), rgba(229,168,35,0.08))",
    },
    fonts: {
      heading: "Space Grotesk",   // Modern, tech-forward
      body:    "Inter",           // Clean body text
    },
  },

  // ─────────────────────────────────────────────
  // EVENT META — Core event information
  // ─────────────────────────────────────────────
  event: {
    name:             "HackSJSU",
    edition:          "2026",
    tagline:          "Build. Innovate. Shape the Future.",
    description:      "HackSJSU is San Jose State University's flagship 24-hour hackathon — co-powered by HP. Students from across California tackle real-world challenges using AI and emerging technologies, competing for $20,000+ in prizes.",
    shortDesc:        "SJSU's premier 24-hour hackathon, powered by HP",

    // Dates (ISO format for countdown timer; displayDate for human-readable)
    date:             "2026-09-02T08:00:00",   // Event start (used by countdown)
    endDate:          "2026-09-03T16:00:00",   // Event end
    displayDate:      "September 2, 2026",
    displayDateRange: "September 2–3, 2026",

    location:         "San Jose State University",
    locationFull:     "Event Center, San Jose State University, San Jose, CA 95192",
    mapUrl:           "https://maps.google.com/?q=SJSU+Event+Center+San+Jose",

    // Registration
    registrationUrl:  "https://forms.google.com/REPLACE_WITH_YOUR_FORM_ID",
    registrationOpen: true,
    devpostUrl:       "#",         // Replace with Devpost URL when ready
    discordUrl:       "#",         // Replace with Discord invite

    // Status: "coming_soon" | "registration_open" | "registration_closed" | "in_progress" | "judging" | "concluded"
    status:           "registration_open",

    // Stats bar on homepage
    stats: {
      participants: "500+",
      prizes:       "$20,000+",
      mentors:      "30+",
      hours:        "24",
    },

    // Social links
    social: {
      instagram: "#",                       // e.g., https://instagram.com/hacksjsu
      twitter:   "#",                       // e.g., https://twitter.com/hacksjsu
      linkedin:  "#",                       // e.g., https://linkedin.com/company/hacksjsu
      github:    "#",                       // e.g., https://github.com/hacksjsu
      email:     "hackathon@sjsu.edu",
    },
  },

  // ─────────────────────────────────────────────
  // NAVIGATION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "About",      href: "about.html" },
      { label: "Schedule",   href: "schedule.html" },
      { label: "Challenges", href: "challenges.html" },
      { label: "Prizes",     href: "prizes.html" },
      { label: "Judges",     href: "judges.html" },
      { label: "Mentors",    href: "mentors.html" },
      { label: "Sponsors",   href: "sponsors.html" },
      { label: "FAQ",        href: "faq.html" },
      { label: "Resources",  href: "resources.html" },
    ],
    ctaLabel: "Register Now",
    ctaHref:  "register.html",
  },

  // ─────────────────────────────────────────────
  // JUDGES
  // Image files go in: public/assets/judges/
  // imageFile must match the exact filename (case-sensitive).
  // If the image is missing, placeholder.jpg is used automatically.
  // ─────────────────────────────────────────────
  // ─── JUDGES ──────────────────────────────────────────────
  // Photos: drop image file in public/assets/judges/ and set imageFile below.
  // Naming convention: firstname_lastname.jpg (all lowercase, underscores)
  // Photos from edgehackathon.com: upload the actual photo replacing the placeholder.
  judges: [
    {
      name:      "Vivek Kompella",
      title:     "Director, Enterprise Data & AI",
      company:   "Informatica",
      imageFile: "vivek_kompella.jpg",      // ← Upload real photo from edgehackathon.com or LinkedIn
      bio:       "Seasoned data science leader with extensive experience in enterprise AI, data architecture, and building large-scale ML platforms at top tech companies.",
      linkedin:  "https://www.linkedin.com/in/vivek-kompella/",
    },
    {
      name:      "Rengarajan Margasahayam",
      title:     "Senior Director, Software Engineering",
      company:   "Salesforce",
      imageFile: "rengarajan_margasahayam.jpg",  // ← Upload real photo
      bio:       "Engineering leader at Salesforce driving large-scale software platform initiatives. Deep expertise in distributed systems and cloud-native engineering.",
      linkedin:  "#",
    },
    {
      name:      "Rohith Iyengar",
      title:     "Senior AI Engineer",
      company:   "HP AI Labs",
      imageFile: "rohith_iyengar.jpg",      // ← Upload real photo
      bio:       "SJSU Alumni and AI engineer at HP Labs working on cutting-edge AI and machine learning applications for enterprise and edge computing.",
      linkedin:  "#",
    },
    {
      name:      "Hariharasubramanian C.S.",
      title:     "Distinguished Engineer",
      company:   "Zededa",
      imageFile: "hariharasubramanian_cs.jpg",  // ← Upload real photo
      bio:       "Distinguished Engineer at Zededa, a Silicon Valley-based edge AI company. Expert in edge computing, distributed systems, and AI infrastructure.",
      linkedin:  "#",
    },
    {
      name:      "Hrushikesh Pokala",
      title:     "Senior Software Development Engineer",
      company:   "Equifax",
      imageFile: "hrushikesh_pokala.jpg",   // ← Upload real photo
      bio:       "MSADI alumnus at SJSU and senior engineer at Equifax. Brings experience in financial data platforms and AI-driven insights at enterprise scale.",
      linkedin:  "#",
    },
    {
      name:      "Siddhartha Dixit",
      title:     "Chief Technology Officer, SVP",
      company:   "iTradeNetwork",
      imageFile: "siddhartha_dixit.jpg",    // ← Upload real photo
      bio:       "CTO and SVP at iTradeNetwork. Visionary tech executive with expertise in supply chain technology and AI. Willing to extend onsite interviews to students.",
      linkedin:  "#",
    },
  ],

  // ─────────────────────────────────────────────
  // MENTORS
  // Image files go in: public/assets/mentors/
  // Same naming convention as judges.
  // ─────────────────────────────────────────────
  // ─── ADVISORY BOARD / MENTORS ────────────────────────────
  // These are the Advisory Board members from the GuestList sheet.
  // Photos: public/assets/mentors/<imageFile>
  mentors: [
    {
      name:      "Prof. Simon Sim",
      title:     "Chair, Applied Data Science",
      company:   "San Jose State University",
      imageFile: "prof_simon_sim.jpg",     // ← Upload photo
      expertise: "Applied Data Science & AI Education",
      linkedin:  "#",
    },
    {
      name:      "Himant Goyal",
      title:     "Senior Product Manager",
      company:   "Salesforce",
      imageFile: "himant_goyal.jpg",       // ← Upload photo
      expertise: "Product Strategy & AI",
      linkedin:  "#",
    },
    {
      name:      "Rick Gosalvez",
      title:     "Advisory Board",
      company:   "HP AI Labs",
      imageFile: "rick_gosalvez.jpg",      // ← Upload photo
      expertise: "AI Research & Enterprise Tech",
      linkedin:  "#",
    },
  ],

  // ─────────────────────────────────────────────
  // SPONSORS
  // Image files go in: public/assets/sponsors/
  // Tiers: platinum | gold | silver | bronze | community
  // ─────────────────────────────────────────────
  sponsors: {
    platinum: [
      {
        name:        "San Jose State University",
        imageFile:   "sjsu.png",                  // Add sjsu.png to assets/sponsors/
        url:         "https://www.sjsu.edu",
        description: "Co-host and primary academic sponsor",
      },
      {
        name:        "HP Inc.",
        imageFile:   "hp.png",                    // Add hp.png to assets/sponsors/
        url:         "https://www.hp.com",
        description: "Technology sponsor and co-host",
      },
    ],
    gold: [
      {
        name:        "iTradeNetwork",
        imageFile:   "itradenetwork.png",        // ← Add logo to assets/sponsors/
        url:         "#",
        description: "Enterprise supply chain technology sponsor",
      },
    ],
    silver: [
      {
        name:        "SJSU Applied Data Science",
        imageFile:   "sjsu_ads.png",             // ← Add logo to assets/sponsors/
        url:         "https://www.sjsu.edu/datascience/",
        description: "SJSU's Applied Data Science program",
      },
      {
        name:        "SJSU AI Institute",
        imageFile:   "sjsu_ai.png",              // ← Add logo to assets/sponsors/
        url:         "https://www.sjsu.edu/aiml/",
        description: "SJSU Artificial Intelligence & Machine Learning Institute",
      },
    ],
    bronze: [],
    community: [
      {
        name:        "SJSU Cybersecurity Center",
        imageFile:   "sjsu_cybersecurity.png",   // ← Add logo to assets/sponsors/
        url:         "https://www.sjsu.edu/cybersecurity/",
        description: "Cybersecurity research and education",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CHALLENGES / TRACKS
  // ─────────────────────────────────────────────
  challenges: [
    {
      id:           1,
      title:        "AI for Social Good",
      emoji:        "🤝",
      color:        "#0055A2",
      description:  "Leverage AI to solve pressing social challenges in healthcare, education, accessibility, and community support. Build solutions that make a meaningful difference in people's lives.",
      requirements: [
        "Must integrate at least one AI/ML model or API",
        "Solution addresses a real-world social problem",
        "Include a demo + impact assessment in your pitch",
      ],
      tools:        ["OpenAI API", "Google Gemini", "Hugging Face", "TensorFlow", "PyTorch"],
      prize:        "$3,000",
    },
    {
      id:           2,
      title:        "Generative AI & Creative Tech",
      emoji:        "🎨",
      color:        "#7B2FBE",
      description:  "Push the boundaries of generative AI in art, music, storytelling, and design. Explore the fascinating intersection of human creativity and machine intelligence.",
      requirements: [
        "Must use a generative AI model (LLM, image gen, audio gen, etc.)",
        "Novel, creative application of AI",
        "User-facing interface or interactive experience required",
      ],
      tools:        ["Stable Diffusion", "DALL-E", "Suno AI", "ElevenLabs", "Runway ML"],
      prize:        "$3,000",
    },
    {
      id:           3,
      title:        "AI-Powered Productivity",
      emoji:        "⚡",
      color:        "#E5A823",
      description:  "Build tools that amplify human productivity using AI. Think smart assistants, workflow automation, intelligent collaboration platforms, and knowledge management systems.",
      requirements: [
        "Clear productivity use case with measurable improvement",
        "AI/ML is the core of the solution (not a peripheral feature)",
        "Working prototype required",
      ],
      tools:        ["LangChain", "AutoGPT", "n8n", "OpenAI Assistants API", "Zapier AI"],
      prize:        "$3,000",
    },
    {
      id:           4,
      title:        "Responsible AI & Ethics",
      emoji:        "⚖️",
      color:        "#00A878",
      description:  "Design AI systems that are transparent, fair, and accountable. Build bias detection tools, explainability frameworks, privacy-preserving AI, or responsible deployment pipelines.",
      requirements: [
        "Focus on fairness, transparency, explainability, or privacy",
        "Must include documentation on ethical design decisions",
        "Demonstrate how your solution reduces AI risk or bias",
      ],
      tools:        ["IBM AI Fairness 360", "Google What-If Tool", "LIME", "SHAP", "Presidio"],
      prize:        "$2,000",
    },
    {
      id:           5,
      title:        "HP Open Innovation Challenge",
      emoji:        "🖨️",
      color:        "#0096D6",
      description:  "HP's signature challenge: use HP APIs, hardware, or developer tools to redefine the future of work, sustainable printing, or personal computing.",
      requirements: [
        "Must integrate HP technology (API, hardware, or SDK)",
        "Focus on work, print, sustainability, or computing innovation",
        "Demonstrate real-world applicability and scalability",
      ],
      tools:        ["HP Developer Portal", "HP Print APIs", "HP Instant Ink API"],
      prize:        "$5,000",
      special:      true,
      sponsor:      "HP Inc.",
    },
  ],

  // ─────────────────────────────────────────────
  // PRIZES
  // ─────────────────────────────────────────────
  prizes: {
    overall: [
      {
        place:     "🥇 Grand Prize",
        amount:    "$5,000",
        perks:     ["Cash prize split among team", "HP hardware bundle", "Fast-track interviews at HP", "6-month mentorship opportunity", "Trophy & certificates"],
        highlight: true,
      },
      {
        place:     "🥈 Runner-Up",
        amount:    "$3,000",
        perks:     ["Cash prize split among team", "HP accessories pack", "SJSU CS recognition", "Certificates"],
      },
      {
        place:     "🥉 Third Place",
        amount:    "$2,000",
        perks:     ["Cash prize split among team", "Swag bundle", "Certificates"],
      },
    ],
    tracks: [
      { track: "AI for Social Good",              amount: "$3,000" },
      { track: "Generative AI & Creative Tech",   amount: "$3,000" },
      { track: "AI-Powered Productivity",         amount: "$3,000" },
      { track: "Responsible AI & Ethics",         amount: "$2,000" },
      { track: "HP Open Innovation Challenge",    amount: "$5,000" },
    ],
    special: [
      { award: "🌟 Best First-Timer",   description: "Best project by first-time hackathon participants",     prize: "$500 + swag" },
      { award: "🎨 Best UX/Design",     description: "Most polished, user-friendly, and visually compelling", prize: "$500 + swag" },
      { award: "🌍 Most Impactful",     description: "Highest potential real-world impact",                   prize: "$500 + swag" },
      { award: "🎤 Best Pitch",         description: "Most compelling and clear presentation",                 prize: "$500 + swag" },
    ],
  },

  // ─────────────────────────────────────────────
  // SCHEDULE — Event timeline
  // Types: "keynote" | "hacking" | "workshop" | "mentoring" | "logistics" | "judging" | "event"
  // ─────────────────────────────────────────────
  schedule: [
    {
      day:    "Day 1",
      date:   "September 2, 2026",
      events: [
        { time: "8:00 AM",  title: "Check-in & Breakfast",               description: "Arrive, grab your badge and t-shirt, and enjoy a hot breakfast with fellow hackers.",                   type: "logistics",  duration: "60 min" },
        { time: "9:00 AM",  title: "Opening Ceremony",                   description: "Welcome from SJSU Dean of Engineering and HP leadership. Keynote and challenge kickoff.",              type: "keynote",    duration: "60 min" },
        { time: "10:00 AM", title: "Team Formation",                     description: "Find your teammates! Use the team-matching board or join the Discord #team-formation channel.",         type: "event",      duration: "30 min" },
        { time: "10:30 AM", title: "🚀 Hacking Begins!",                 description: "24 hours on the clock. Start building your project. Good luck!",                                        type: "hacking",    duration: "" },
        { time: "12:00 PM", title: "Lunch",                              description: "Catered lunch served in the main hall. Keep building!",                                                  type: "logistics",  duration: "45 min" },
        { time: "2:00 PM",  title: "Workshop: Building with AI APIs",    description: "Hands-on session covering OpenAI, Gemini, and LangChain. Presented by HP engineers.",                   type: "workshop",   duration: "60 min" },
        { time: "4:00 PM",  title: "Workshop: HP Developer Tools",       description: "Deep-dive into HP's developer ecosystem, APIs, and what's available to use in your project.",            type: "workshop",   duration: "60 min" },
        { time: "6:00 PM",  title: "Dinner",                             description: "Catered dinner. Refuel, recharge, and keep hacking!",                                                    type: "logistics",  duration: "45 min" },
        { time: "7:00 PM",  title: "Mini-Challenge: Best AI Demo",       description: "Show off your early prototype for fun prizes. Participation is optional.",                               type: "event",      duration: "60 min" },
        { time: "8:00 PM",  title: "Office Hours with Mentors",          description: "Sign up at the mentor table for 1:1 sessions with our industry mentors.",                                type: "mentoring",  duration: "120 min" },
        { time: "11:00 PM", title: "🍕 Midnight Snacks",                 description: "Pizza and snacks delivered. Fuel for the night owls!",                                                   type: "logistics",  duration: "30 min" },
      ],
    },
    {
      day:    "Day 2",
      date:   "September 3, 2026",
      events: [
        { time: "12:00 AM", title: "Midnight Check-in with Mentors",     description: "Optional drop-in session. Share your progress, get feedback, and stay on track.",                        type: "mentoring",  duration: "60 min" },
        { time: "6:00 AM",  title: "Sunrise Breakfast",                  description: "Breakfast for the overnight hackers. You made it through the night!",                                    type: "logistics",  duration: "30 min" },
        { time: "9:00 AM",  title: "Final Sprint",                       description: "One hour left! Polish your project, test your demo, and prepare your submission.",                       type: "hacking",    duration: "60 min" },
        { time: "10:00 AM", title: "⏰ Hacking Ends",                    description: "All coding must stop. Commit your code and prepare your Devpost submission.",                            type: "event",      duration: "" },
        { time: "10:30 AM", title: "📤 Devpost Submissions Due",         description: "Final deadline for Devpost submission. No exceptions.",                                                   type: "event",      duration: "" },
        { time: "11:00 AM", title: "Demo Fair Begins",                   description: "All teams set up their projects at assigned tables. Judges will circulate and ask questions.",           type: "judging",    duration: "90 min" },
        { time: "12:30 PM", title: "Lunch",                              description: "Catered lunch served during the demo fair.",                                                              type: "logistics",  duration: "45 min" },
        { time: "1:00 PM",  title: "Judge Deliberation",                 description: "Judges score and deliberate on winners for all tracks.",                                                  type: "judging",    duration: "60 min" },
        { time: "2:30 PM",  title: "🏆 Closing Ceremony",               description: "Winners announced! Prize distribution, sponsor recognition, and thank-you's.",                            type: "keynote",    duration: "60 min" },
        { time: "3:30 PM",  title: "Networking & Wrap-Up",               description: "Celebrate your achievement! Connect with sponsors, judges, and fellow hackers.",                         type: "logistics",  duration: "60 min" },
        { time: "4:30 PM",  title: "Event Ends",                         description: "Thanks for making HackSJSU amazing. See you next year!",                                                  type: "event",      duration: "" },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // FAQ
  // ─────────────────────────────────────────────
  faq: [
    {
      question: "Who can participate in HackSJSU?",
      answer:   "HackSJSU is open to all currently enrolled undergraduate and graduate students from any accredited university or college. Students from SJSU and other institutions are equally welcome.",
    },
    {
      question: "How large can my team be?",
      answer:   "Teams can have 2 to 4 members. Solo participants may register but must join a team before hacking begins. We'll have a team formation session at the start of the event.",
    },
    {
      question: "Is it free to attend?",
      answer:   "Yes — 100% free! HackSJSU provides meals, snacks, Wi-Fi, and all the resources and swag you need throughout the entire 24-hour event.",
    },
    {
      question: "Do I need to have prior coding experience?",
      answer:   "Absolutely not! We welcome hackers of all experience levels. Beginners will find workshops, hands-on mentors, and starter kits to help them get up and running quickly.",
    },
    {
      question: "What should I bring?",
      answer:   "Bring your laptop, charger, student ID, any hardware you want to use, toiletries if you're staying overnight, and most importantly — your ideas and enthusiasm!",
    },
    {
      question: "Can I start building my project before the hackathon?",
      answer:   "No — all core code must be written during the hackathon window. You may use open-source libraries, frameworks, public APIs, and datasets, but the project idea and implementation must originate at the event.",
    },
    {
      question: "How will projects be judged?",
      answer:   "Projects are judged on Innovation (25%), Technical Complexity (25%), Real-World Impact & Feasibility (25%), and Presentation & Demo Quality (25%). Track-specific rubrics may add additional criteria.",
    },
    {
      question: "Will there be hardware available to use?",
      answer:   "HP will provide select hardware and equipment for participants, especially for the HP Open Innovation Challenge track. More details will be announced before the event.",
    },
    {
      question: "Is the event in-person?",
      answer:   "Yes! HackSJSU is a fully in-person event held at the SJSU Event Center. We strongly encourage attending in person for the workshops, mentoring, and networking.",
    },
    {
      question: "How do I register?",
      answer:   "Click the 'Register Now' button anywhere on this site and complete the Google Form. Spots are limited, so register as early as possible to secure your place.",
    },
    {
      question: "Will I get a certificate of participation?",
      answer:   "Yes! All participants who submit a project will receive a digital certificate of participation. Winners receive additional recognition certificates.",
    },
    {
      question: "I have more questions — who do I contact?",
      answer:   "Reach out to us at hackathon@sjsu.edu or DM us on Instagram and Twitter. We're happy to help!",
    },
  ],

  // ─────────────────────────────────────────────
  // RESOURCES — Helpful links for participants
  // ─────────────────────────────────────────────
  resources: [
    {
      category: "🛠 Starter Kits",
      items: [
        { title: "HackSJSU Starter Kit (GitHub)", url: "#",                           description: "Official boilerplate and project templates for all tracks" },
        { title: "HP Developer Resources",        url: "https://developers.hp.com",   description: "HP API documentation, SDKs, and developer tools" },
      ],
    },
    {
      category: "🤖 AI & ML APIs",
      items: [
        { title: "OpenAI API",             url: "https://platform.openai.com",      description: "GPT-4o, DALL-E 3, Whisper, Assistants API" },
        { title: "Google Gemini API",      url: "https://ai.google.dev",            description: "Multimodal AI by Google DeepMind — free tier available" },
        { title: "Anthropic Claude",       url: "https://anthropic.com",            description: "Claude 3.5 Sonnet — great for long-context tasks" },
        { title: "Hugging Face",           url: "https://huggingface.co",           description: "Open-source models, datasets, and Inference API" },
        { title: "Cohere",                 url: "https://cohere.com",               description: "NLP APIs for classification, embeddings, and generation" },
        { title: "Replicate",              url: "https://replicate.com",            description: "Run any open-source AI model via API" },
      ],
    },
    {
      category: "☁️ Cloud & Hosting",
      items: [
        { title: "Google Cloud Platform",  url: "https://cloud.google.com",         description: "$300 free credits for new accounts" },
        { title: "Microsoft Azure",        url: "https://azure.microsoft.com",      description: "Student credits via Azure for Students" },
        { title: "Firebase",               url: "https://firebase.google.com",      description: "Free hosting, database, and auth by Google" },
        { title: "Vercel",                 url: "https://vercel.com",               description: "Free frontend hosting — deploys from GitHub in seconds" },
        { title: "Supabase",               url: "https://supabase.com",             description: "Open-source Firebase alternative with PostgreSQL" },
      ],
    },
    {
      category: "📚 Learning & Reference",
      items: [
        { title: "fast.ai",                url: "https://fast.ai",                  description: "Practical deep learning — free course" },
        { title: "Kaggle Learn",            url: "https://kaggle.com/learn",        description: "Free ML micro-courses with notebooks" },
        { title: "CS50 AI (Harvard)",      url: "https://cs50.harvard.edu/ai",      description: "Intro to AI with Python — free online" },
        { title: "LangChain Docs",         url: "https://python.langchain.com",     description: "Framework for building LLM-powered apps" },
      ],
    },
    {
      category: "🎨 Design & UI",
      items: [
        { title: "Figma",                  url: "https://figma.com",                description: "Free collaborative design and prototyping" },
        { title: "shadcn/ui",              url: "https://ui.shadcn.com",            description: "Beautiful React components, copy-paste ready" },
        { title: "Tailwind CSS",           url: "https://tailwindcss.com",          description: "Utility-first CSS framework" },
        { title: "Framer Motion",          url: "https://framer.com/motion",        description: "Animation library for React" },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // ABOUT — Descriptions for the About page
  // ─────────────────────────────────────────────
  about: {
    mission:     "HackSJSU brings together students, engineers, and innovators for 24 hours of building, learning, and connecting. We believe diverse minds tackling hard problems will create the future.",
    vision:      "To inspire the next generation of AI builders at SJSU and beyond, creating a launchpad for ideas that drive real-world impact.",
    history:     "[Describe how HackSJSU got started, past editions, and growth milestones. Replace this placeholder with actual history.]",
    organizers:  "[HackSJSU is organized by the SJSU Computer Science Student Association (CSSA) in partnership with the College of Engineering. Replace with actual organizer info.]",
    aboutSJSU:   "San Jose State University is one of the oldest public universities in California, at the heart of Silicon Valley. SJSU's College of Engineering produces world-class engineers who go on to shape the technology industry.",
    aboutHP:     "HP Inc. creates technology that makes life better for everyone, everywhere. As a co-founding sponsor of HackSJSU, HP provides resources, mentors, and challenges to help students build the future of computing.",
    whyJoin: [
      { icon: "💡", title: "Build Something Real",      desc: "24 hours to take an idea from zero to demo. Real constraints, real creativity." },
      { icon: "🤝", title: "Network with Pros",         desc: "Connect with HP engineers, SJSU faculty, and industry leaders in AI and tech." },
      { icon: "🏆", title: "Win Amazing Prizes",        desc: "$20,000+ in cash prizes, hardware, and career opportunities up for grabs." },
      { icon: "📚", title: "Level Up Your Skills",      desc: "Workshops, mentoring, and hands-on experience with cutting-edge AI tools." },
      { icon: "🚀", title: "Launch Your Career",        desc: "Showcase your talent to HP recruiters and Silicon Valley companies." },
      { icon: "🎉", title: "Have Fun!",                 desc: "Free food, swag, friends, and memories that last beyond the 24 hours." },
    ],
  },

  // ─────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────
  contact: {
    email:         "hackathon@sjsu.edu",
    sponsorEmail:  "sponsors@hacksjsu.com",
    pressEmail:    "press@hacksjsu.com",
    address:       "San Jose State University, San Jose, CA 95192",
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
    r.style.setProperty('--clr-primary',        c.primary);
    r.style.setProperty('--clr-secondary',      c.secondary);
    r.style.setProperty('--clr-accent',         c.accent);
    r.style.setProperty('--clr-bg',             c.bgDark);
    r.style.setProperty('--clr-card',           c.bgCard);
    r.style.setProperty('--clr-surface',        c.bgSurface);
    r.style.setProperty('--clr-navbar',         c.bgNavbar);
    r.style.setProperty('--clr-text',           c.textPrimary);
    r.style.setProperty('--clr-text-muted',     c.textSecondary);
    r.style.setProperty('--clr-text-dim',       c.textMuted);
    r.style.setProperty('--clr-border',         c.borderColor);
    r.style.setProperty('--glow-p',             c.glowPrimary);
    r.style.setProperty('--glow-s',             c.glowSecondary);
    r.style.setProperty('--grad-cta',           c.gradientCTA);
    r.style.setProperty('--grad-card',          c.gradientCard);
    r.style.setProperty('--font-heading',       `"${f.heading}", "Segoe UI", sans-serif`);
    r.style.setProperty('--font-body',          `"${f.body}", "Segoe UI", sans-serif`);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
