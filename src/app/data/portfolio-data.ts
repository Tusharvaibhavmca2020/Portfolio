// Single source of truth for all portfolio content.
// Edit text here — never in the templates.

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: {
    name: string;
    stack?: string;
    points: string[];
  }[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
}

export interface PortfolioData {
  name: string;
  roles: string[];
  tagline: string;
  location: string;
  email: string;
  resumeFile: string;
  socials: SocialLink[];
  summary: string;
  stats: Stat[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
}

export const PORTFOLIO: PortfolioData = {
  name: 'Tushar Vaibhav',
  roles: [
    'Backend Engineer',
    '.NET Core & Node.js',
    'Microservices Architect',
    'Full-Stack Developer',
  ],
  tagline:
    'Designing scalable, high-performance systems with C#, ASP.NET Core, Node.js and the SQL/NoSQL stack.',
  location: 'Noida, Uttar Pradesh, India',
  email: 'tusharthakurcipet@gmail.com',
  resumeFile: 'assets/Tushar_Vaibhav_CV.docx',
  socials: [
    { label: 'GitHub', href: 'https://github.com/tusharvaibhavmca2020', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tushar-vaibhav-mca', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:tusharthakurcipet@gmail.com', icon: 'email' },
  ],

  summary:
    'Backend Engineer with 4 years of experience designing scalable, high-performance ' +
    'systems using C#, ASP.NET Core, Node.js, REST APIs, SQL Server, PostgreSQL and ' +
    'MongoDB. Proven strength in microservices architecture, enterprise data migration, ' +
    'ETL pipelines, database optimization, and full-stack delivery with ReactJS and ' +
    'Angular. Experienced across airline, carbon-analytics, forensic, and agri-distribution ' +
    'domains, and skilled at using AI tools such as Claude and ChatGPT to accelerate ' +
    'development, debugging, and solution design.',

  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '10+', label: 'Enterprise Projects' },
    { value: '4', label: 'Industry Domains' },
    { value: '4', label: 'Microservices Built' },
  ],

  skills: [
    { category: 'Languages', items: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'Python'] },
    {
      category: 'Backend',
      items: [
        'ASP.NET Core',
        'Web API',
        'MVC',
        'Razor Pages',
        'Entity Framework Core',
        'Node.js',
        'Express.js',
      ],
    },
    { category: 'Frontend', items: ['ReactJS', 'Angular', 'RxJS', 'HTML', 'CSS'] },
    {
      category: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'PL/pgSQL', 'Query Optimization'],
    },
    {
      category: 'Architecture',
      items: [
        'Microservices',
        'REST APIs',
        'API Gateway (YARP)',
        'Event-Driven (MassTransit / RabbitMQ)',
        'SignalR',
        'SOLID',
        'Dependency Injection',
      ],
    },
    {
      category: 'Data & Integration',
      items: [
        'ETL / ELT',
        'Data Migration',
        'Schema Transformation',
        'Batch & Bulk Processing',
        'Salesforce Bulk API',
        'Heroku Connect',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'Docker', 'AWS S3', 'Firebase', 'JWT / 2FA', 'Git', 'IIS'],
    },
    {
      category: 'AI-Assisted Development',
      items: ['Claude', 'ChatGPT', 'Ollama (local LLM)', 'Prompt Engineering'],
    },
  ],

  experience: [
    {
      role: 'Application Engineer',
      company: 'Quadrafort Technologies Pvt. Ltd.',
      location: 'Noida, UP',
      period: 'Sep 2024 — Present',
      projects: [
        {
          name: 'IIL Field Sales & Distribution Platform',
          stack: 'Node.js · PostgreSQL',
          points: [
            'Refactored the data-access layer of a Node.js/Express field-sales platform, converting 565+ inline SQL queries across 38 modules into parameterized PL/pgSQL stored functions.',
            'Reduced complex hand-built queries (including 180-line multi-tier UNION queries) to single parameterized function calls, moving logic to the database layer for maintainability and performance.',
            'Kept every query fully parameterized to guard against SQL injection, preserving existing API behavior with zero regressions.',
          ],
        },
        {
          name: 'Enterprise Data Migration Platform (LTIMindtree)',
          stack: 'ASP.NET Core',
          points: [
            'Designed high-performance ASP.NET Core REST APIs migrating millions of records across many tables from SQL Server to MongoDB with zero data loss.',
            'Converted complex SQL joins into optimized MongoDB aggregation pipelines and built bulk-insert / batch-processing strategies for reliable high-volume processing.',
            'Resolved critical production issues — high CPU utilization and aggregation timeouts — by refactoring merge stages and temporary-collection usage.',
          ],
        },
        {
          name: 'CarbonCare — Carbon Emission Tracking',
          stack: 'ASP.NET Core · ReactJS',
          points: [
            'Built a secure ASP.NET Core / Razor Pages backend with REST APIs and background scheduled services to process Excel uploads and auto-calculate emission metrics.',
            'Developed responsive ReactJS dashboards with data visualizations; deployed and maintained the application on IIS.',
          ],
        },
        {
          name: 'eForensics FSL (NIC)',
          stack: 'ASP.NET MVC',
          points: [
            'Integrated MongoDB into an existing PostgreSQL-based ASP.NET MVC application for hybrid storage.',
            'Developed and optimized aggregation pipelines while maintaining data consistency with legacy systems.',
          ],
        },
      ],
    },
    {
      role: 'Associate Application Engineer (.NET)',
      company: 'Sutraa Technosoft Pvt. Ltd.',
      location: 'Noida, UP',
      period: 'May 2024 — Aug 2024',
      projects: [
        {
          name: 'Backend & Dashboard Development',
          stack: 'ASP.NET Core · ReactJS',
          points: [
            'Built backend architecture with ASP.NET Core and Razor Pages.',
            'Developed dynamic ReactJS frontend components with integrated data-visualization dashboards.',
          ],
        },
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Birdres Technologies Pvt. Ltd.',
      location: 'Gurgaon, HR',
      period: 'Jun 2022 — May 2024',
      projects: [
        {
          name: 'Eagle — Airline Information Platform',
          stack: 'ASP.NET Core Web API',
          points: [
            'Developed and maintained scalable ASP.NET Core Web APIs delivering real-time airline schedules, pricing, routes, and seat availability at scale.',
            'Integrated multiple third-party airline systems with robust error handling, logging, and retry mechanisms.',
          ],
        },
        {
          name: 'CUSS — Common Use Self Service',
          stack: 'AngularJS · SQL Server',
          points: [
            'Integrated multiple airline APIs to automate boarding-pass and bag-tag printing at airport self-service kiosks.',
            'Built real-time monitoring and reporting tools, improving operational transparency for airport operations teams.',
          ],
        },
      ],
    },
  ],

  projects: [
    {
      name: 'API Performance Analyzer',
      tagline: 'Multi-Tenant API Monitoring Platform',
      description:
        'A self-hosted APM platform architected as a 4-microservice ASP.NET Core 8 system behind a ' +
        'YARP API gateway with per-service MongoDB databases. Ingests HTTP performance logs and surfaces ' +
        'latency, error-rate, and traffic analytics through real-time SignalR dashboards and an Angular SPA. ' +
        'Features batch ingestion (up to 1,000 entries/call), per-key rate limiting (500 req/min), an ' +
        'in-memory metrics-aggregation engine (latency percentiles, RPS, uptime), JWT + TOTP 2FA, RBAC, ' +
        'a configurable alerting engine (email & signed webhooks), anomaly detection, SLA tracking, and public status pages.',
      tags: [
        'ASP.NET Core 8',
        'Angular',
        'MongoDB',
        'YARP',
        'SignalR',
        'JWT / TOTP',
        'Microservices',
      ],
    },
    {
      name: 'Enterprise Data Migration Engine',
      tagline: 'SQL / File → Salesforce',
      description:
        'A .NET 8 microservices platform (YARP gateway + MassTransit/RabbitMQ event bus) migrating data from ' +
        'SQL Server, PostgreSQL, MySQL, CSV, and JSON into Salesforce via Bulk API 2.0. Engineered a streaming, ' +
        'bounded-memory ETL pipeline (10,000-row batches via IAsyncEnumerable) with a pluggable mapping engine, ' +
        'foreign-key relationship reconstruction using Salesforce External IDs, per-row failure capture with ' +
        'retry-failed-only, cron scheduling, and throughput tracking. Integrated a local LLM (Ollama) for ' +
        'AI-assisted column-to-field auto-mapping, with an Angular control plane on PostgreSQL 16 and Docker.',
      tags: [
        '.NET 8',
        'Microservices',
        'MassTransit',
        'RabbitMQ',
        'Salesforce Bulk API',
        'Ollama (LLM)',
        'Docker',
      ],
    },
  ],
};
