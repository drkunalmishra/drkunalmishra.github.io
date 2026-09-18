export interface CompetencyMetric {
  subject: string;
  score: number;
  fullMark: number;
  category: string;
  keyFrameworks: string;
  description: string;
}

export interface TechStackMetric {
  technology: string;
  proficiency: number; // 0 to 100
  tier: 'Expert' | 'Advanced';
  category: 'Agentic & GenAI' | 'Data & Lakehouse' | 'Optimization & Math' | 'Cloud & Governance';
}

export const CORE_COMPETENCIES: CompetencyMetric[] = [
  {
    subject: "Multi-Agent Systems",
    score: 96,
    fullMark: 100,
    category: "Agentic AI",
    keyFrameworks: "LangGraph, CrewAI, AutoGen, Semantic Kernel",
    description: "Hierarchical agent networks, reflection loops, state machines, and multi-agent coordination."
  },
  {
    subject: "Responsible AI",
    score: 94,
    fullMark: 100,
    category: "Governance",
    keyFrameworks: "NIST AI RMF, Guardrails AI, NeMo, OWASP Top 10 for LLMs",
    description: "Safety bounds, hallucination prevention, prompt injection mitigation, and auditability."
  },
  {
    subject: "Knowledge Graphs",
    score: 95,
    fullMark: 100,
    category: "Ontology",
    keyFrameworks: "Timbr, OWL/RDF, Purview, Unity Catalog, SPARQL",
    description: "Enterprise semantic models, taxonomies, Graph-RAG, and deterministic entity grounding."
  },
  {
    subject: "Enterprise RAG",
    score: 93,
    fullMark: 100,
    category: "GenAI",
    keyFrameworks: "Hybrid Search, Vertex AI Search, Azure AI Search, Vector DBs",
    description: "High-precision context engineering, multi-hop retrieval, reranking, and chunking strategies."
  },
  {
    subject: "Mathematical Optimization",
    score: 90,
    fullMark: 100,
    category: "Quantitative",
    keyFrameworks: "Gurobi, Google OR-Tools, AIMMS, MILP, SciPy",
    description: "Decision intelligence, resource constraints, linear/mixed-integer programming, and solvers."
  },
  {
    subject: "Applied Econometrics",
    score: 89,
    fullMark: 100,
    category: "Quantitative",
    keyFrameworks: "Dynamic Panel Data, Causal ML, DiD, Volatility Models",
    description: "Empirical market dynamics, time-series forecasting, causal inference, and structural econometric testing."
  },
  {
    subject: "Cloud AI Architecture",
    score: 94,
    fullMark: 100,
    category: "Platforms",
    keyFrameworks: "Microsoft Azure, AWS, Databricks, Microsoft Fabric, Snowflake",
    description: "Multi-cloud reference architectures, Medallion Lakehouses, LLM gateways, and FinOps."
  },
  {
    subject: "Presales & Defense",
    score: 97,
    fullMark: 100,
    category: "Leadership",
    keyFrameworks: "RFP/RFI Strategy, Commercial Pricing, Executive Defense, POCs",
    description: "Translating business dilemmas into multi-million dollar winning AI roadmaps and enterprise delivery."
  }
];

export const TECH_STACK_MATRIX: TechStackMetric[] = [
  { technology: "LangGraph / CrewAI", proficiency: 96, tier: "Expert", category: "Agentic & GenAI" },
  { technology: "Timbr / Knowledge Graphs", proficiency: 95, tier: "Expert", category: "Cloud & Governance" },
  { technology: "Databricks & Delta Lake", proficiency: 94, tier: "Expert", category: "Data & Lakehouse" },
  { technology: "Microsoft Azure AI / Fabric", proficiency: 95, tier: "Expert", category: "Cloud & Governance" },
  { technology: "Gurobi & Google OR-Tools", proficiency: 91, tier: "Expert", category: "Optimization & Math" },
  { technology: "Snowflake & dbt", proficiency: 92, tier: "Advanced", category: "Data & Lakehouse" },
  { technology: "LLMOps & AgentOps (MLflow)", proficiency: 93, tier: "Expert", category: "Agentic & GenAI" },
  { technology: "Causal Inference & DiD", proficiency: 88, tier: "Advanced", category: "Optimization & Math" },
  { technology: "Microsoft Purview & Unity Catalog", proficiency: 94, tier: "Expert", category: "Cloud & Governance" },
  { technology: "Time-Series (GARCH/ARIMA)", proficiency: 90, tier: "Expert", category: "Optimization & Math" },
];
