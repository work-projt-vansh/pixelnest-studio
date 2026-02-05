import {
  AppWindow,
  BrainCircuit,
  LayoutTemplate,
  LineChart,
  MousePointerClick,
  Rocket
} from 'lucide-react';

export const serviceGroups = [
  {
    title: 'Design',
    services: [
      {
        title: 'UI/UX Design',
        description: 'End-to-end digital product design focused on conversion, accessibility, and scalable systems.',
        features: ['Design systems', 'Responsive flows', 'Accessibility first'],
        icon: LayoutTemplate
      },
      {
        title: 'SaaS Product Design',
        description: 'Complex SaaS dashboards and product journeys simplified through user-centric architecture.',
        features: ['Product strategy', 'Dashboard UX', 'User onboarding'],
        icon: BrainCircuit
      },
      {
        title: 'Prototype & Interaction Design',
        description: 'High-fidelity interactive prototypes with realistic flows for stakeholder alignment.',
        features: ['Micro-interactions', 'Motion prototypes', 'Usability testing'],
        icon: MousePointerClick
      }
    ]
  },
  {
    title: 'Development',
    services: [
      {
        title: 'Website & Landing Page Design',
        description: 'Marketing-led websites engineered for speed, lead generation, and storytelling.',
        features: ['Conversion copy blocks', 'SEO architecture', 'Analytics setup'],
        icon: AppWindow
      },
      {
        title: 'Website, App & SaaS Development',
        description: 'Production-grade platforms with clean architecture and maintainable codebases.',
        features: ['Next.js architecture', 'API integrations', 'Performance optimization'],
        icon: Rocket
      }
    ]
  },
  {
    title: 'Business Solutions',
    services: [
      {
        title: 'UX Research & Optimization',
        description: 'Research-backed improvements that reduce friction and improve conversion metrics.',
        features: ['Journey audits', 'Heatmap analysis', 'A/B test roadmap'],
        icon: LineChart
      },
      {
        title: 'CRM Development',
        description: 'Custom CRM workflows to streamline pipeline visibility and customer lifecycle automation.',
        features: ['Data model design', 'Role-based permissions', 'Automation rules'],
        icon: BrainCircuit
      }
    ]
  }
];
