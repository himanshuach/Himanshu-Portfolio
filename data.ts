import { Project, ExperienceItem, EducationItem, TechCategory, AIPillar } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'payment-gateway',
    number: '01',
    title: '3rd Party Payment Gateway API Integration',
    description: 'RESTful payment APIs for initiation, status tracking, and transactions with mock workflow and real-time transaction monitoring.',
    longDescription: 'Designed and developed high-reliability RESTful payment APIs for payment initiation, status tracking, and transactions. Implemented a mock payment workflow with real-time transaction monitoring and webhook verification using Supabase and Redis.',
    tags: ['FastAPI', 'Python', 'Supabase', 'REST APIs', 'Redis', 'Django'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    colSpanDesktop: 8,
    heightDesktop: '400px',
    layout: 'split',
    demoUrl: 'https://github.com/himanshuach',
    githubUrl: 'https://github.com/himanshuach',
    metrics: [
      { label: 'Latency', value: '<25ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Security', value: 'HMAC-SHA256' },
    ],
    keyFeatures: [
      'RESTful payment initiation and webhook lifecycle verification',
      'Mock banking simulator with idempotency key validation',
      'Real-time transaction tracking state backed by Supabase & Redis',
      'Multi-currency processing and automated settlement reports'
    ]
  },
  {
    id: 'chat-app',
    number: '02',
    title: 'Chat App',
    description: 'Real-time Chat App built with MERN stack featuring user authentication, real-time messaging, and group chats.',
    longDescription: 'Developed a real-time Chat App using React (MERN stack). Features include JWT user authentication, real-time bidirectional messaging via WebSockets (Socket.io), and multi-user group chat channels.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    imageUrl: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop',
    colSpanDesktop: 4,
    heightDesktop: '400px',
    layout: 'vertical',
    demoUrl: 'https://github.com/himanshuach/Chat-App',
    githubUrl: 'https://github.com/himanshuach/Chat-App',
    metrics: [
      { label: 'Latency', value: '<18ms' },
      { label: 'Concurrency', value: '10k+ msgs/s' },
    ],
    keyFeatures: [
      'Sub-20ms WebSocket pipeline with automatic reconnect and heartbeats',
      'JWT Authentication & protected group conversation channels',
      'Clean dark-mode interface with live typing indicators and presence'
    ]
  },
  {
    id: 'kopykitabh',
    number: '03',
    title: 'KopyKitabh',
    description: 'E-commerce platform for buying books with product listings, search, and book details.',
    longDescription: 'Developed KopyKitabh, an e-commerce website for buying books with product listings, instant category filtering, and rich book details.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    bgImageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop',
    colSpanDesktop: 5,
    heightDesktop: '400px',
    layout: 'compact',
    demoUrl: 'https://github.com/himanshuach/KopyKitabh',
    githubUrl: 'https://github.com/himanshuach/KopyKitabh',
    metrics: [
      { label: 'Catalog', value: '5,000+ Titles' },
      { label: 'Search Speed', value: '4ms' },
    ],
    keyFeatures: [
      'Interactive catalog with real-time filtering and cart drawer',
      'Dynamic book preview modals and responsive layout design',
      'Lightweight vanilla JavaScript architecture'
    ]
  },
  {
    id: 'local-ai-agent',
    number: '04',
    title: 'LocalAIAgent',
    description: 'Autonomous agent system running locally with zero-telemetry and offline reasoning.',
    longDescription: 'Zero-telemetry local inference runtime connecting quantized open-weights models through tool-calling hooks, memory vector recall, and local filesystem sandbox execution.',
    tags: ['Python', 'LLM', 'LangChain', 'RAG'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
    colSpanDesktop: 7,
    heightDesktop: '400px',
    layout: 'split-reversed',
    demoUrl: 'https://github.com/himanshuach/LocalAIAgent',
    githubUrl: 'https://github.com/himanshuach/LocalAIAgent',
    metrics: [
      { label: 'Inference', value: '100% Local' },
      { label: 'Privacy', value: 'Zero Data Leak' },
    ],
    keyFeatures: [
      'GGUF/Ollama model binding with memory-mapped buffers',
      'Self-correcting code execution in sandboxed sub-processes',
      'Local persistent embedding store using FAISS and Chroma'
    ]
  },
  {
    id: 'weber-live',
    number: '05',
    title: 'Weber Landing & App',
    description: 'Full-stack application and responsive landing page using React, TypeScript, Supabase, and shadcn/ui.',
    longDescription: 'Designed and built modern full-stack web applications and landing pages with smooth animations, Supabase auth/db integration, and accessible shadcn/ui component systems.',
    tags: ['React', 'TypeScript', 'Supabase', 'shadcn/ui', 'Tailwind CSS'],
    iconName: 'layers',
    colSpanDesktop: 6,
    heightDesktop: '300px',
    layout: 'compact',
    demoUrl: 'https://ll-ten-ivory.vercel.app',
    githubUrl: 'https://ll-ten-ivory.vercel.app',
    metrics: [
      { label: 'Live URL', value: 'll-ten-ivory' },
      { label: 'Performance', value: '98 Lighthouse' },
    ],
    keyFeatures: [
      'Production-ready landing page deployed live on Vercel',
      'Supabase backend integration for auth and real-time state',
      'shadcn/ui accessible components with custom animations'
    ]
  },
  {
    id: 'bluechat-p2p',
    number: '06',
    title: 'Bluechat WebRTC',
    description: 'Secure peer-to-peer communication tool with DTLS/SRTP encryption.',
    longDescription: 'Direct browser-to-browser P2P WebRTC data channels with DTLS/SRTP encryption, zero central server data storage, and low-latency audio/video negotiation.',
    tags: ['WebRTC', 'React', 'FastAPI'],
    iconName: 'forum',
    colSpanDesktop: 6,
    heightDesktop: '300px',
    layout: 'compact',
    demoUrl: 'https://github.com/himanshuach/Bluechat',
    githubUrl: 'https://github.com/himanshuach/Bluechat',
    metrics: [
      { label: 'Topology', value: 'Full Mesh P2P' },
      { label: 'Encryption', value: 'DTLS/SRTP' },
    ],
    keyFeatures: [
      'Signaling server only for ICE candidate exchange',
      'Direct peer connection with sub-millisecond packet transmission',
      'Ephemeral session state with zero logs retained'
    ]
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full stack Intern',
    company: 'OBRIVE',
    period: 'June 2026 – Jul 2026',
    status: 'Past',
    location: 'Remote',
    bullets: [
      'Developed responsive web interfaces from Figma designs using Next.js, React, TypeScript, and Tailwind CSS.',
      'Built reusable UI components and collaborated with designers to deliver production-ready features.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma']
  },
  {
    id: 'exp-2',
    role: 'Full Stack Intern',
    company: 'Weber Technologies',
    period: 'Sep 2025 – Dec 2025',
    status: 'Past',
    liveUrl: 'https://ll-ten-ivory.vercel.app',
    bullets: [
      'Built and optimized full-stack web applications using React, TypeScript, Supabase, and Tailwind CSS.',
      'Designed and developed a responsive landing page using TypeScript and React with modern UI standards.',
      'Implemented modern UI components with shadcn/ui and smooth animations.',
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'United Tours India',
    period: 'Jan 2025 – Apr 2025',
    status: 'Past',
    liveUrl: 'https://unitedtoursindia.com',
    bullets: [
      'Enhanced UI/UX by redesigning 20+ pages using React and Tailwind CSS.',
      'SEO-optimized pages using modern React toolkits and best practices.',
      'Improved page performance by 30% using lazy loading and memoization.',
    ],
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'SEO', 'Performance Optimization']
  },
  {
    id: 'exp-4',
    role: 'Designing Intern',
    company: 'Achilyon',
    period: 'Sep 2024 – Dec 2024',
    status: 'Past',
    location: 'Remote',
    bullets: [
      'Designed and developed 20+ responsive web pages with strong usability focus.',
      'Collaborated with cross-functional teams to boost performance and retention by 20%.',
    ],
    technologies: ['UI/UX', 'Responsive Design', 'Figma', 'Web Performance']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'chandigarh-university',
    degree: 'BE in Computer Science and Engineering',
    institution: 'Chandigarh University',
    period: 'July 2021 – May 2025',
    description: 'Comprehensive computer science & software engineering curriculum focusing on data structures, algorithms, system design, web technologies, and database architecture.',
    highlights: [
      'Core focus on Full Stack Web Architecture and Operating Systems',
      'Advanced coursework in Algorithms, Database Systems, and Networks',
      'Capstone Projects in Distributed Systems and Agentic AI Applications'
    ]
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'Flutter', 'HTML5', 'CSS3', 'Bootstrap', 'shadcn/ui', 'Vue.js', 'Svelte']
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Node.js', 'REST APIs', 'JWT Authentication', 'Supabase', 'Express.js', 'MongoDB', 'Socket.io']
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Dart']
  },
  {
    title: 'AI & Databases',
    skills: ['LLM Integration', 'RAG', 'AI Agents', 'Prompt Engineering', 'MongoDB', 'PostgreSQL', 'LangChain', 'Vector DBs']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'VS Code', 'Render', 'Vercel', 'Firebase', 'Netlify', 'Docker', 'WebRTC', 'Figma']
  }
];

export const AI_PILLARS: AIPillar[] = [
  {
    id: 'llm-orchestration',
    title: 'LLM Orchestration',
    description: 'Designing robust pipelines for language models, integrating dynamic prompting, and managing multi-step inference chains to solve complex computational tasks.',
    icon: 'hub',
    tags: ['LangChain', 'OpenAI', 'Anthropic'],
    glowColor: 'cyan',
    details: [
      'Dynamic few-shot prompting with adaptive exemplar selection',
      'Structured JSON schema enforcement with Pydantic / Zod',
      'Fallback chains and model cascading for cost vs. latency balance'
    ]
  },
  {
    id: 'rag-architectures',
    title: 'RAG Architectures',
    description: 'Implementing scalable Retrieval-Augmented Generation systems using high-dimensional vector databases to provide accurate, context-grounded AI responses.',
    icon: 'dataset',
    tags: ['Pinecone', 'Chroma', 'Semantic Search'],
    glowColor: 'indigo',
    details: [
      'Hierarchical chunking strategies with contextual metadata headers',
      'Hybrid dense & sparse BM25 retrieval reranked with cross-encoders',
      'Context window compression and token budgeting algorithms'
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Developing autonomous agents capable of complex reasoning, tool utilization, and long-term memory management for end-to-end task execution.',
    icon: 'smart_toy',
    tags: ['Workflows', 'Tool Use', 'Memory'],
    glowColor: 'cyan',
    details: [
      'ReAct and Plan-and-Solve cognitive looping architectures',
      'Deterministic sandbox tool-calling interfaces with error recovery',
      'Episodic, semantic, and working memory recall pipelines'
    ]
  },
  {
    id: 'performance-ethics',
    title: 'Performance & Ethics',
    description: 'Optimizing prompt engineering strategies, conducting rigorous evaluations, and ensuring data privacy and algorithmic fairness in production deployments.',
    icon: 'speed',
    tags: ['Prompt Eng', 'Evaluation', 'Privacy'],
    glowColor: 'indigo',
    details: [
      'Automated RAG Triad evaluation (groundedness, relevance, recall)',
      'PII redaction and local privacy gateway shielding',
      'Quantization benchmarks and TTFT latency profiling'
    ]
  }
];
