export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  tags: string[];
  subtitle: string;
  category: string;
  color: string;
  stat: {
    label: string;
    value: string;
  };
}

export interface WireframeStep {
  componentName: string;
  wireframeLayout: string; // Describes visual layout block
  hifiLayout: string;
}

export interface CaseStudy {
  projectId: string;
  overview: string;
  problem: string;
  goal: string;
  process: {
    title: string;
    description: string;
  }[];
  wireframeSteps: WireframeStep[];
  designSystemTokens: {
    category: string;
    values: { name: string; value: string; usage: string }[];
  }[];
  handoffNotes: string[];
  outcome: {
    metrics: { label: string; value: string }[];
    summary: string;
  };
}

export interface Skill {
  name: string;
  experience: string; // e.g. "Advanced" or specific tool
  description: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  avatarSeed: string;
}
