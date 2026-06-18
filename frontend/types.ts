import React from 'react';

export interface ServicePillar {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: Date;
}

export interface FormData {
  companyName: string;
  email: string;
  employees: string;
  message: string;
}

// --- Case Study & Strategic Types ---

export type ModuleColor = 'indigo' | 'emerald' | 'purple' | 'orange' | 'pink' | 'teal' | 'cyan' | 'rose' | 'violet' | 'slate';

export interface CaseStudyMetric {
  label: string;
  value: string;
  type: 'percentage' | 'time' | 'count' | 'qualitative';
  impact: 'cost' | 'time' | 'accuracy' | 'adoption' | 'other';
  icon: string; // Lucide icon name string
}

export interface RoadmapStep {
  short: string;
  full: string;
  icon: string;
}

export interface CaseStudy {
  // Identifiers & Routing
  slug: string;
  id: string;
  
  // Company Information
  companyName: string;
  country: string;
  industry: string;
  companySize?: string;
  
  // Project Details
  projectType: 'Implementation' | 'Optimization' | 'Migration' | 'Managed Services' | 'Integration';
  moduleName: string;
  moduleColor: ModuleColor;
  caseStudyTitle: string;
  
  // 4-Step Roadmap Content
  roadmap: {
    problem: RoadmapStep;
    action: RoadmapStep;
    solution: RoadmapStep;
    result: RoadmapStep;
  };

  // Metrics
  metrics: CaseStudyMetric[];

  // Deep Dive Content
  deepDive: {
    challengeSection: string;
    approachSection: string;
    technicalSection: string;
    impactSection: string;
  };

  // Related Case Studies (Slugs)
  relatedBy: {
    sameModule: string[];
    sameCountry: string[];
    sameCompany: string[];
  };

  // Metadata & SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  publishedDate: string;
  featured: boolean;
  difficulty: 'Low' | 'Medium' | 'High';
}

export interface DiagnosticQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    score: number;
  }[];
}