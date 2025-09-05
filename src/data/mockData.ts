import { RoadmapItem, TeamMember, FAQ, Order, OrionValidator } from '@/types';

export const roadmapItems: RoadmapItem[] = [
  {
    id: '1',
    title: 'Orion Alpha Release',
    description: 'First prototype with basic validator functionality',
    status: 'completed',
    date: 'March 2024',
    quarter: 'Q1 2024'
  },
  {
    id: '2',
    title: 'Starlink Integration',
    description: 'Full Starlink satellite connectivity for remote locations',
    status: 'completed',
    date: 'June 2024',
    quarter: 'Q2 2024'
  },
  {
    id: '3',
    title: 'Renewable Energy Module',
    description: 'Solar and wind power integration for sustainable operation',
    status: 'in-progress',
    date: 'September 2024',
    quarter: 'Q3 2024'
  },
  {
    id: '4',
    title: 'Multi-Chain Support',
    description: 'Support for Ethereum, Polygon, and other major networks',
    status: 'in-progress',
    date: 'December 2024',
    quarter: 'Q4 2024'
  },
  {
    id: '5',
    title: 'Global Network Launch',
    description: 'Worldwide deployment of Orion validator network',
    status: 'upcoming',
    date: 'March 2025',
    quarter: 'Q1 2025'
  },
  {
    id: '6',
    title: 'AI-Powered Optimization',
    description: 'Machine learning for automatic performance optimization',
    status: 'upcoming',
    date: 'June 2025',
    quarter: 'Q2 2025'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Elena Vasquez',
    role: 'CEO & Founder',
    bio: 'Former SpaceX engineer with 15 years in satellite technology and blockchain infrastructure.',
    image: '/src/assets/team-elena.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'CTO',
    bio: 'Ethereum core developer and expert in distributed systems and consensus mechanisms.',
    image: '/src/assets/team-marcus.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '3',
    name: 'Dr. Amira Hassan',
    role: 'Head of Engineering',
    bio: 'PhD in Renewable Energy Systems, leading our sustainable infrastructure initiatives.',
    image: '/src/assets/team-amira.jpg',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Jake Thompson',
    role: 'Product Manager',
    bio: 'Former AWS Solutions Architect specializing in edge computing and IoT infrastructure.',
    image: '/src/assets/team-jake.jpg',
    linkedin: '#'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is an Orion Remote Validator?',
    answer: 'Orion Remote Validators are specialized hardware devices that run blockchain validator nodes in remote locations using renewable energy and satellite connectivity. They enable truly decentralized validation infrastructure.',
    category: 'General'
  },
  {
    id: '2',
    question: 'How does Starlink integration work?',
    answer: 'Our validators come with integrated Starlink terminals, providing high-speed internet connectivity anywhere on Earth. This ensures your validator remains online even in remote locations without traditional internet infrastructure.',
    category: 'Technical'
  },
  {
    id: '3',
    question: 'What renewable energy sources are supported?',
    answer: 'Orion validators support solar panels, wind turbines, and battery storage systems. The built-in energy management system automatically optimizes power usage and can operate entirely off-grid.',
    category: 'Technical'
  },
  {
    id: '4',
    question: 'What is the expected ROI for validator operators?',
    answer: 'ROI varies by network, but Ethereum validators typically earn 4-7% APY. Orion validators can achieve higher returns due to lower operational costs from renewable energy and remote operation capabilities.',
    category: 'Financial'
  },
  {
    id: '5',
    question: 'Do I need technical expertise to operate an Orion validator?',
    answer: 'No technical expertise required! Orion validators come pre-configured and include a user-friendly dashboard. Our 24/7 support team handles updates, maintenance, and troubleshooting.',
    category: 'General'
  },
  {
    id: '6',
    question: 'What blockchain networks are supported?',
    answer: 'Currently supporting Ethereum 2.0, with Polygon and Avalanche coming Q4 2024. Our roadmap includes 10+ major networks by 2025.',
    category: 'Technical'
  },
  {
    id: '7',
    question: 'What happens if my validator goes offline?',
    answer: 'Orion validators include redundant connectivity (Starlink + cellular) and battery backup. Our monitoring system alerts you immediately of any issues, and remote diagnostics allow quick resolution.',
    category: 'Technical'
  },
  {
    id: '8',
    question: 'Is there a warranty or service guarantee?',
    answer: '3-year comprehensive warranty covering hardware, software, and connectivity. 99.9% uptime SLA with automatic compensation for downtime exceeding thresholds.',
    category: 'Support'
  }
];

export const orionValidators: OrionValidator[] = [
  {
    id: 'orion-v1',
    name: 'Orion Validator V1',
    description: 'Professional-grade remote validator with Starlink connectivity and renewable energy support',
    price: 1200,
    currency: 'USDT',
    features: [
      'Starlink Satellite Connectivity',
      'Solar + Battery Power System',
      'Multi-Network Support',
      '99.9% Uptime SLA',
      '24/7 Remote Monitoring',
      '3-Year Warranty',
      'Pre-configured Setup',
      'Remote Management Dashboard'
    ],
    inStock: true
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ord-001',
    userId: 'user-1',
    productName: 'Orion Validator V1',
    amount: 1200,
    currency: 'USDT',
    status: 'confirmed',
    createdAt: new Date('2024-01-15'),
    txHash: '0xabcd1234...'
  },
  {
    id: 'ord-002',
    userId: 'admin-1',
    productName: 'Orion Validator V1',
    amount: 1200,
    currency: 'USDT',
    status: 'pending',
    createdAt: new Date('2024-01-16'),
  }
];