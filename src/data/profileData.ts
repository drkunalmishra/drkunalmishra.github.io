export interface RoleExperience {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  category: 'Enterprise AI' | 'Presales & Solutioning' | 'Data & Cloud' | 'Telecom & Core';
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  badge?: string;
  description: string;
  focusAreas: string[];
}

export interface BlueprintStage {
  stepNumber: number;
  stageId: string;
  title: string;
  tagline: string;
  iconName: string;
  accentColor: string;
  summary: string;
  technologies: string[];
  keyCapabilities: string[];
  guardrails: string[];
  architecturalHighlights: string[];
}

export interface ResearchDomain {
  id: string;
  title: string;
  badge: string;
  icon: string;
  abstract: string;
  keyMethods: string[];
  practicalApplications: string[];
  frameworkEquation?: string;
}

export const PROFILE = {
  name: "Kunal Mishra",
  headline: "AI Solutioning & Presales Leader | AI Architect Sr. Advisor @ NTT DATA",
  subheading: "Enterprise GenAI, Agentic AI, Knowledge Graphs, Governance & Quantitative Decision Intelligence",
  experienceYears: "14+",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9019304677",
  email: "mishrakunal1990@gmail.com",
  summary: `I am an Enterprise AI Solutioning and Presales Leader with over 14 years of experience across technology delivery, analytics, intelligent automation, data platforms, artificial intelligence, and enterprise solution architecture.

At NTT DATA, I work with global Fortune 500 clients to shape enterprise-scale Data and AI solutions, with a strong focus on Generative AI, Agentic AI, enterprise AI platforms, Responsible AI, and AI-led transformation. My work goes beyond selecting individual technologies—I apply structured enterprise AI best practices to help organizations move from early ideas and isolated use cases to scalable, governed, and production-ready AI platforms. Alongside my professional leadership, I am pursuing dual doctoral research in Artificial Intelligence and Business Analytics.`,
  stats: [
    { label: "Experience", value: "14+ Yrs" },
    { label: "Enterprises Guided", value: "30+" },
    { label: "Doctoral Tracks", value: "2 Ongoing" },
    { label: "Tier-1 Orgs", value: "8 Landmark Roles" },
  ],
  links: {
    researchGate: "https://www.researchgate.net/profile/Kunal-Mishra-22",
    linkedin: "https://www.linkedin.com/in/kunal-mishra-57aa902b",
    youtube: "https://www.youtube.com/@LogicSeKharido",
    github: "https://github.com/kunalmishra",
    portfolio: "https://kunalmishra.ai",
  }
};

export const STARTUP_BLUEPRINT: BlueprintStage[] = [
  {
    stepNumber: 1,
    stageId: "lakehouse",
    title: "Medallion Lakehouse Foundation",
    tagline: "Multimodal Data Ingestion & Unified Tiering",
    iconName: "Database",
    accentColor: "from-cyan-500 to-blue-600",
    summary: "Scalable ingestion of multimodal enterprise data (unstructured PDF/audio/video, relational DBs, event streams) into structured Delta lakehouse tiers with zero data silos.",
    technologies: ["Databricks Delta Lake", "Snowflake", "Apache Spark", "Iceberg", "dbt", "Vector Embeddings"],
    keyCapabilities: [
      "Bronze Tier: Raw immutable ingestion of multimodal assets with cryptographic hash tracking",
      "Silver Tier: Cleaned, deduplicated, enriched schemas with automated vector embeddings generation",
      "Gold Tier: Business-ready feature store and curated domain marts optimized for low-latency analytical queries",
      "Near real-time streaming pipelines supporting high-throughput ingestion"
    ],
    guardrails: [
      "Automated PII anonymization & masking prior to silver tier ingestion",
      "Cryptographic lineage verification from source to gold feature tables",
      "Strict data retention policies and schema drift anomaly alarms"
    ],
    architecturalHighlights: [
      "Zero-copy cloning across cross-cloud lakehouses (Azure & AWS)",
      "Hybrid index combining HNSW vector indexes with relational inverted indices"
    ]
  },
  {
    stepNumber: 2,
    stageId: "ontology",
    title: "Semantic Ontology & ABAC Guardrails",
    tagline: "Contextual Grounding & Hallucination Elimination",
    iconName: "Network",
    accentColor: "from-purple-500 to-indigo-600",
    summary: "Translates disconnected relational tables and vector embeddings into a unified enterprise business taxonomy and knowledge graph, protected by strict Attribute-Based Access Control.",
    technologies: ["Timbr Knowledge Graph", "Microsoft Purview", "Unity Catalog", "OWL/RDF", "OpenSPARQL", "ABAC Policies"],
    keyCapabilities: [
      "Ontology mapping that translates raw relational and semantic tables into rich conceptual entity graphs",
      "Deterministic relationship traversal enabling exact multi-hop reasoning without hallucination",
      "Unified metadata discovery via Microsoft Purview and Unity Catalog catalogs",
      "Granular role, attribute, and row-level entitlement propagation across semantic nodes"
    ],
    guardrails: [
      "Zero-trust ABAC: Dynamic query-time evaluation of user clearance against entity security tags",
      "Negative constraint checks: Queries violating corporate compliance or boundary policies are dropped before agent dispatch",
      "Hallucination elimination by requiring all synthesized claims to be grounded in verified ontology triples"
    ],
    architecturalHighlights: [
      "Federated semantic layer queryable via SQL over Graph (Timbr)",
      "Automated ontology reconciliation for conflicting enterprise taxonomies"
    ]
  },
  {
    stepNumber: 3,
    stageId: "agentic",
    title: "Multi-Agent Orchestration & Semantic RAG",
    tagline: "Autonomous Reasoning & Dynamic Task Delegation",
    iconName: "Cpu",
    accentColor: "from-cyan-400 to-emerald-500",
    summary: "Hierarchical multi-agent network orchestrated with stateful workflow engines, executing semantic RAG, dynamic planning, tool calling, and self-correcting evaluation loops.",
    technologies: ["LangGraph", "CrewAI", "AutoGen", "Semantic Kernel", "LiteLLM Gateway", "LangSmith Observability"],
    keyCapabilities: [
      "Stateful agentic graphs (LangGraph) for deterministic state machines with human-in-the-loop checkpoints",
      "Specialized agent roles: Discovery Agent, Ontology Traverser, Econometric Modeler, and Verification Critic",
      "Semantic RAG combining dense vector retrieval, sparse BM25, and ontology graph traversals",
      "Model-agnostic LLM gateway routing between GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Llama 3 models"
    ],
    guardrails: [
      "Reflection loops: Output evaluator audits response against ontological evidence prior to final output",
      "Token budget, latency limits, and cycle-detection circuit breakers to prevent runaway agent loops",
      "Prompt injection shields and jailbreak classification filters on agent inter-communication"
    ],
    architecturalHighlights: [
      "Cyclic graph topologies with automated rollback to previous checkpoint upon sub-task failure",
      "AgentOps live telemetry capturing traces, tool execution times, and reasoning tokens"
    ]
  },
  {
    stepNumber: 4,
    stageId: "optimization",
    title: "Quantitative Optimization & Auditability",
    tagline: "Mathematical Solvers & End-to-End Governance",
    iconName: "Scale",
    accentColor: "from-emerald-400 to-teal-600",
    summary: "Translates agent insights into mathematically provable, optimal business decisions using industrial linear/mixed-integer solvers, tracked by rigorous MLflow auditing.",
    technologies: ["Gurobi Optimizer", "Google OR-Tools", "MLflow Registry", "Optuna", "FastAPI", "Prometheus"],
    keyCapabilities: [
      "Mixed-Integer Linear Programming (MILP) and non-linear mathematical optimization of complex resource allocations",
      "Coupled Agentic-Optimization architecture: Agents formulate constraints; Gurobi computes provably optimal frontiers",
      "End-to-end lineage tracking via MLflow: prompt version, agent graph state, solver parameters, and objective metrics",
      "Decision intelligence dashboards streaming verifiable KPIs and shadow testing results"
    ],
    guardrails: [
      "Hard constraint invariants: Solvers enforce regulatory, budget, and risk boundaries mathematically",
      "Full cryptographic audit logs of agent reasoning paths and solver certificates",
      "Automated model drift detection and sensitivity re-optimization trigger"
    ],
    architecturalHighlights: [
      "Sub-millisecond solver invocation pipeline via optimized C++ bindings",
      "Reproducible decision artifacts versioned in MLflow Model Registry"
    ]
  }
];

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  {
    id: "applied-econometrics",
    title: "Applied Econometrics & Microeconometrics",
    badge: "Doctoral Focus",
    icon: "TrendingUp",
    abstract: "Empirical investigation of economic agent behavior, market dynamics, and policy shifts using panel data methods, instrumental variables, and generalized method of moments (GMM).",
    keyMethods: [
      "Dynamic Panel Data Models (Arellano-Bond)",
      "Instrumental Variables & 2SLS for Endogeneity Mitigation",
      "Fixed vs Random Effects Diagnostics (Hausman Specification)",
      "Quantile Regression for Heterogeneous Impact Distributions"
    ],
    practicalApplications: [
      "Enterprise software pricing elasticity and subscription churn dynamics",
      "Assessing productivity shocks from enterprise AI adoption across industries",
      "Demand estimation under supply chain constraints"
    ],
    frameworkEquation: "Y_{it} = \\alpha + \\beta X_{it} + \\mu_i + \\lambda_t + \\varepsilon_{it}"
  },
  {
    id: "financial-econometrics",
    title: "Financial Econometrics & Volatility Modeling",
    badge: "Quantitative Finance",
    icon: "Activity",
    abstract: "Modeling high-frequency asset returns, asymmetric volatility clustering, structural breaks, and systemic financial risk under non-normal distributions.",
    keyMethods: [
      "GARCH, EGARCH & GJR-GARCH Asymmetric Volatility Modeling",
      "Value at Risk (VaR) & Expected Shortfall (CVaR) Backtesting",
      "Cointegration & Vector Error Correction Models (VECM)",
      "Stochastic Volatility & Jump-Diffusion Formulations"
    ],
    practicalApplications: [
      "Portfolio risk optimization under extreme tail events",
      "Algorithmic hedging strategies and systemic liquidity transmission",
      "FinTech credit risk scoring and macroeconomic stress-testing"
    ],
    frameworkEquation: "\\sigma_t^2 = \\omega + \\sum_{i=1}^p \\alpha_i \\varepsilon_{t-i}^2 + \\sum_{j=1}^q \\beta_j \\sigma_{t-j}^2"
  },
  {
    id: "time-series",
    title: "Time-Series Analysis & Non-Stationary Processes",
    badge: "Empirical Modeling",
    icon: "LineChart",
    abstract: "Rigorous decomposition, structural break identification, and multivariate forecasting across non-stationary macroeconomic and enterprise operational series.",
    keyMethods: [
      "ARIMA / SARIMAX with Exogenous Shock Regressors",
      "State-Space Models & Kalman Filtering for Latent Factors",
      "Bayesian Vector Autoregression (BVAR)",
      "Spectral Analysis & Wavelet Decomposition"
    ],
    practicalApplications: [
      "Enterprise cloud compute demand and FinOps forecasting",
      "Macro-economic indicators tracking for enterprise procurement planning",
      "Anomaly detection in distributed telecommunications traffic"
    ],
    frameworkEquation: "X_t = c + \\sum_{i=1}^p \\Phi_i X_{t-i} + \\varepsilon_t + \\sum_{j=1}^q \\Theta_j \\varepsilon_{t-j}"
  },
  {
    id: "causal-inference",
    title: "Causal Inference & Quasi-Experimental Evaluation",
    badge: "Decision Science",
    icon: "GitFork",
    abstract: "Disentangling true causal mechanisms from mere correlation in observational enterprise data where randomized controlled trials (A/B testing) are unfeasible or unethical.",
    keyMethods: [
      "Difference-in-Differences (DiD) & Synthetic Controls",
      "Regression Discontinuity Design (RDD: Sharp & Fuzzy)",
      "Propensity Score Matching & Double Machine Learning (DML)",
      "Directed Acyclic Graphs (DAGs) & Pearl's do-Calculus"
    ],
    practicalApplications: [
      "Measuring actual revenue uplift attributable to GenAI copilots",
      "Evaluating intervention effects of workforce reskilling initiatives",
      "Customer lifetime value causality analysis post customer service interventions"
    ],
    frameworkEquation: "\\tau_{DiD} = (\\bar{Y}_{T,Post} - \\bar{Y}_{T,Pre}) - (\\bar{Y}_{C,Post} - \\bar{Y}_{C,Pre})"
  },
  {
    id: "ai-empirical-econ",
    title: "AI & LLMs in Empirical Economic Research",
    badge: "Frontier Intersection",
    icon: "Brain",
    abstract: "Synthesizing deep language models, synthetic economic agent simulations, and unstructured narrative texts (earnings calls, regulatory filings) into quantifiable economic variables.",
    keyMethods: [
      "Fine-tuned NLP sentiment & policy uncertainty index extraction",
      "LLM Agent-based computational economics (ABCE) simulation",
      "High-dimensional variable selection via LASSO and Tree Ensembles",
      "Representation learning on company knowledge graphs"
    ],
    practicalApplications: [
      "Automated extraction of corporate risk exposures from 10-K filings",
      "Simulating market clearing prices under heterogeneous agent beliefs",
      "Semantic indexing of global central bank commentary for rate forecasts"
    ],
    frameworkEquation: "\\mathcal{L}_{Econ} = \\mathbb{E}_{\\theta}[\\text{Loss}(f_{LLM}(Text), Y_{Econ})] + \\lambda \\Omega(\\theta)"
  }
];

export const EXPERIENCES: RoleExperience[] = [
  {
    id: "ntt-data",
    company: "NTT DATA",
    title: "AI Architect Sr. Advisor / Senior Architect",
    period: "July 2025 - Present",
    location: "Greater Bengaluru Area, India",
    category: "Enterprise AI",
    summary: "Leading enterprise Data and AI solutioning for global Fortune 500 clients, with a focus on Generative AI, Agentic AI, enterprise AI platforms, Responsible AI, and AI-led transformation.",
    highlights: [
      "Shape AI strategies, use-case portfolios, maturity assessments, and transformation roadmaps moving organizations from isolated experiments to scalable and governed AI adoption.",
      "Design multi-cloud solution architectures across Microsoft Azure, AWS, Databricks, Microsoft Fabric, and open-source AI ecosystems.",
      "Architect foundation-model selection, enterprise RAG, agent platforms, multi-agent patterns, model gateways, guardrails, LLMOps, AgentOps, and AI FinOps.",
      "Lead high-value technical responses for multi-million dollar RFPs and RFIs, driving executive solution defence and commercial viability.",
      "Promote ontology-led enterprise knowledge approaches using business taxonomies, semantic models, metadata, and knowledge graphs to dramatically improve grounding and agent reasoning."
    ],
    technologies: ["Agentic AI", "Microsoft Azure", "AWS", "Databricks", "Microsoft Fabric", "LangGraph", "Knowledge Graphs", "LLMOps", "AI FinOps", "Responsible AI"]
  },
  {
    id: "ormae",
    company: "ORMAE",
    title: "Associate Director - Presales & Solutioning / Presales Director",
    period: "December 2023 - July 2025",
    location: "Bengaluru, India",
    category: "Presales & Solutioning",
    summary: "Led presales and solutioning across artificial intelligence, machine learning, mathematical optimization, decision intelligence, business intelligence, and modern data platforms.",
    highlights: [
      "Identified and prioritized client use cases based on business value, data readiness, technical feasibility, and implementation complexity.",
      "Developed GTM propositions, client demonstrations, proofs of concept, and business cases across predictive analytics, optimization, and emerging Generative AI solutions.",
      "Spearheaded early enterprise GenAI use cases using OpenAI and Meta Llama models for document analysis, knowledge assistance, summarization, and decision support.",
      "Collaborated with global technology partners including Gurobi, AIMMS, and Databricks to strengthen solution capabilities and partner-led offerings.",
      "Bridged presales with delivery by defining scope, reference architectures, resource requirements, and risk mitigation strategies."
    ],
    technologies: ["Mathematical Optimization", "Gurobi", "AIMMS", "Databricks", "OpenAI", "Meta Llama", "Decision Intelligence", "Predictive Analytics"]
  },
  {
    id: "tech-mahindra",
    company: "Tech Mahindra",
    title: "Solutions Architect - Presales",
    period: "September 2021 - November 2023",
    location: "Melbourne, VIC, Australia",
    category: "Presales & Solutioning",
    summary: "Supported enterprise data, analytics, and visualization solutioning across presales, RFP responses, and large-scale cloud transformation programs.",
    highlights: [
      "Designed cloud-based solutions across AWS and Microsoft Azure covering data platforms, data warehousing, analytics, machine learning, and visualization.",
      "Translated complex client requirements into technical solution approaches, architecture blueprints, effort estimates, and competitive proposal content.",
      "Architected proof-of-concept solutions using traditional ML techniques such as time-series forecasting, classification, segmentation, and anomaly detection.",
      "Pioneered early Generative AI solution exploration in 2023 utilizing OpenAI and Meta Llama models for document summarization, conversational analytics, and AI reporting.",
      "Marked a strategic career pivot from traditional data/analytics solutioning into enterprise AI and Generative AI architecture."
    ],
    technologies: ["AWS", "Microsoft Azure", "Cloud Data Platforms", "Machine Learning", "OpenAI", "Forecasting", "Data Warehousing"]
  },
  {
    id: "jiffy-ai",
    company: "JIFFY.ai",
    title: "Presales Solution Consultant (Intelligent Automation)",
    period: "January 2021 - September 2021",
    location: "Bengaluru, India",
    category: "Enterprise AI",
    summary: "Designed intelligent automation solutions using RPA, workflow orchestration, OCR, document intelligence, and AI-assisted business rules.",
    highlights: [
      "Identified high-ROI automation opportunities across enterprise workflows, conducting deep discovery and target process architecture definition.",
      "Supported complex intelligent document-processing (IDP) solutions involving document classification, table extraction, validation, and human-in-the-loop exception handling.",
      "Authored POC solutions, process flow diagrams, scope matrices, and comprehensive RFP responses.",
      "Formulated automation success metrics: extraction accuracy, FTE effort reduction, exception rate, and turnaround-time acceleration."
    ],
    technologies: ["Intelligent Automation", "RPA", "OCR", "Document Intelligence", "Workflow Orchestration", "Business Rules"]
  },
  {
    id: "crg-solutions",
    company: "CRG Solutions",
    title: "Solution Consultant (Data Visualization & Advanced Analytics)",
    period: "April 2018 - December 2020",
    location: "Bengaluru, India",
    category: "Data & Cloud",
    summary: "Delivered consulting and solution development engagements across data visualization, business intelligence, data preparation, and supervised machine learning.",
    highlights: [
      "Engaged senior business and technical stakeholders to translate analytical requirements into executive KPI dashboards and automated pipelines.",
      "Used Tableau for high-impact interactive visualization and Alteryx for data cleansing, ETL blending, feature preparation, and analytical workflows.",
      "Applied supervised ML techniques including regression, classification, clustering, and predictive customer scoring for business use cases.",
      "Established foundational expertise in data quality, analytical modeling, visualization, and stakeholder storytelling."
    ],
    technologies: ["Tableau", "Alteryx", "Supervised ML", "Data Blending", "ETL", "Predictive Analytics"]
  },
  {
    id: "tracxn",
    company: "Tracxn",
    title: "Senior Analyst",
    period: "January 2017 - March 2018",
    location: "Bangalore, India",
    category: "Data & Cloud",
    summary: "Tracked global early-stage and funded startups, business models, and emerging technologies across enterprise software sectors.",
    highlights: [
      "Prepared custom Deep Dive Reports, Sector Analysis Reports, Industry Updates, and Competitor Intelligence for top Venture Capital, PE, and Corporate Development firms.",
      "Conducted specialized research on emerging market trends in Business Intelligence, ERP, Aviation Technology, and Field Force Automation.",
      "Conducted client strategy workshops and published market snapshot newsletters."
    ],
    technologies: ["Market Intelligence", "Venture Capital Due Diligence", "Enterprise Software", "Competitor Analysis"]
  },
  {
    id: "infosys",
    company: "Infosys",
    title: "Senior Associate Consultant",
    period: "June 2016 - January 2017",
    location: "Hyderabad, India",
    category: "Telecom & Core",
    summary: "Delivered advanced telecom business data analytics POCs and SAP SD functional consulting for tier-1 global clients.",
    highlights: [
      "Completed Corporate Customer Opportunity Analytics POC as Telecom Business Analyst for Telstra Telecom (Australia).",
      "Delivered Order Management Analytics POC for Level 3 Communications (US).",
      "Analyzed trends in massive telecom billing data sets using statistical techniques and implemented automated quality validation checks.",
      "Delivered SAP SD functional configuration, customer master mapping, and pricing procedures for Albemarle (US manufacturing client)."
    ],
    technologies: ["Telecom Analytics", "Statistical Modeling", "SAP SD", "ETL", "Data Quality"]
  },
  {
    id: "huawei",
    company: "Huawei Technologies",
    title: "Service Delivery Engineer",
    period: "June 2011 - April 2015",
    location: "Bengaluru, India / Overseas (Bahrain, China, Ethiopia)",
    category: "Telecom & Core",
    summary: "Engineered, deployed, and validated large-scale carrier BSS/CRM systems across global telecommunication operators.",
    highlights: [
      "Onsite SPOC for VIVA Bahrain (STC) UAT Phase 1; achieved a 95% success rate, recognized with the Team Contributor Award by Huawei Middle East.",
      "Onsite SPOC for LOT5 deployment and integration for Ethio Telecom (Ethiopia), scaling systems to handle 17.26 million telecom subscribers.",
      "Led and mentored an 18-member Oracle COTS test team in Nanjing, China.",
      "Test Manager for EMTS Nigeria, deploying and integrating Huawei Test Lab solution for enterprise transformation.",
      "Recipient of Best Contributor Award (Dec 2012) in HTIPL."
    ],
    technologies: ["Telecom BSS", "Oracle Siebel CRM", "AIA", "Billing Systems", "Integration Testing", "Large-Scale Architecture"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Walsh College",
    degree: "Doctor of Business Administration (DBA)",
    field: "Artificial Intelligence",
    period: "July 2024 - June 2027",
    badge: "Doctoral Research",
    description: "Doctoral dissertation exploring enterprise AI adoption frameworks, multi-agent organizational dynamics, and governance mechanisms for mission-critical enterprise systems.",
    focusAreas: ["Enterprise AI Governance", "Multi-Agent System Orchestration", "Decision Science", "Strategic Technology Adoption"]
  },
  {
    institution: "ISBR Business School",
    degree: "Fellow Program in Management (FPM)",
    field: "Business Analytics",
    period: "August 2024 - August 2027",
    badge: "Doctoral Fellowship",
    description: "Advanced doctoral research focusing on applied econometrics, time-series forecasting, quantitative causal evaluation, and data-driven corporate strategy.",
    focusAreas: ["Applied Econometrics", "Financial Volatility Modeling", "Causal Machine Learning", "Quantitative Business Analytics"]
  },
  {
    institution: "Texas McCombs School of Business",
    degree: "Post Graduate Program (PGP)",
    field: "Artificial Intelligence and Machine Learning",
    period: "June 2024 - June 2025",
    badge: "Executive Credential",
    description: "Rigorous curriculum covering deep learning architectures, reinforcement learning, natural language processing, computer vision, and scalable ML engineering.",
    focusAreas: ["Deep Learning", "Reinforcement Learning", "NLP & Transformers", "ML Engineering Systems"]
  },
  {
    institution: "Great Lakes Institute of Management",
    degree: "Post Graduate Program in Management (PGPM)",
    field: "Marketing & Strategy",
    period: "2015 - 2016",
    badge: "Business Management",
    description: "Intensive executive business management program focusing on business strategy, enterprise go-to-market propositions, and analytical commercial frameworks.",
    focusAreas: ["Strategic Marketing", "Commercial Solutioning", "Financial Modeling", "Corporate Strategy"]
  },
  {
    institution: "JSS Science and Technology University",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Information Science and Engineering",
    period: "September 2007 - June 2011",
    badge: "Undergraduate",
    description: "Core computer science foundation encompassing data structures, algorithms, database management systems, network protocols, and distributed computing.",
    focusAreas: ["Algorithms & Data Structures", "Database Architecture", "Computer Networks", "Software Engineering"]
  }
];

export const CERTIFICATIONS = [
  {
    name: "Generative AI Essentials",
    issuer: "Google / Industry Consortium",
    icon: "Sparkles",
    badge: "Enterprise AI",
    date: "Certified",
    description: "Foundational and applied principles of generative models, prompt engineering, and LLM safety."
  },
  {
    name: "Dataiku Core Designer",
    issuer: "Dataiku",
    icon: "Layers",
    badge: "Analytics & ML",
    date: "Certified",
    description: "End-to-end data preparation, pipeline building, machine learning modeling, and production deployment."
  },
  {
    name: "Create & Maintain Vertex AI Search Data Stores",
    issuer: "Google Cloud",
    icon: "Search",
    badge: "Cloud AI Search",
    date: "Certified",
    description: "Configuring enterprise search indices, grounded document retrieval, and semantic vector stores on GCP."
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    icon: "Cloud",
    badge: "Azure AI",
    date: "Certified",
    description: "Core Azure AI services including Azure OpenAI, Cognitive Services, Computer Vision, and conversational AI."
  }
];

export const HONORS_AWARDS = [
  {
    title: "Best Contributor Award",
    organization: "HTIPL",
    date: "Dec 2012",
    description: "Recognized for exceptional engineering delivery and international test lab leadership."
  },
  {
    title: "Team Contributor Award - VIVA Bahrain",
    organization: "VIVA (STC) Bahrain & Huawei",
    date: "Global Deployment",
    description: "Achieved 95% UAT success rate for mission-critical carrier billing transformation."
  },
  {
    title: "Team Contributor Award - Ethio Telecom",
    organization: "Ethio Telecom & Huawei",
    date: "Global Deployment",
    description: "Architected and delivered LOT5 transformation supporting 17.26 million subscribers."
  }
];
