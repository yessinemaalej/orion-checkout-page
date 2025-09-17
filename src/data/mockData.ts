import { RoadmapItem, TeamMember, FAQ, Order, OrionValidator } from '@/types';

export const roadmapItems: RoadmapItem[] = [
  {
    id: '1',
    title: 'Orion Alpha Release',
    description: 'First prototype with basic validator functionality',
    status: 'completed',
    date: 'Juin 2024',
    quarter: 'Q1 2024'
  },
  {
    id: '2',
    title: 'Starlink Integration',
    description: 'Full Starlink satellite connectivity for remote locations',
    status: 'completed',
    date: 'July 2024',
    quarter: 'Q2 2024'
  },
  {
    id: '3',
    title: 'Renewable Energy Module',
    description: 'Solar and wind power integration for sustainable operation',
    status: 'completed',
    date: 'July 2024',
    quarter: 'Q3 2024'
  },
  {
    id: '4',
    title: 'First batch of Orions',
    description: 'Ship first 5 units to early adopters',
    status: 'in-progress',
    date: 'Juin 2025',
    quarter: 'Q1 2025'
  },
  {
    id: '6',
    title: 'Batch 2 Release',
    description: 'Scale production and ship 15 more units',
    status: 'upcoming',
    date: 'October 2025',
    quarter: 'Q3 2025'
  },
  {
    id: '6',
    title: 'Global Network Launch',
    description: 'Worldwide deployment of Orion validator network',
    status: 'upcoming',
    date: 'Dec 2025',
    quarter: 'Q4 2025'
  },

];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Azeem Saifi',
    role: 'Senior Development Manager',
    bio: '',
    image: '/src/assets/team-azeem.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Stefan',
    role: 'Head of Orion / Business Development',
    bio: '',
    image: '/src/assets/team-stefan.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '3',
    name: 'Oli',
    role: 'COO / Business Development',
    bio: '',
    image: '/src/assets/team-oli.webp',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '4',
    name: 'Amir',
    role: 'Embedded Systems Engineer',
    bio: '',
    image: '/src/assets/team-amir.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '5',
    name: 'Yessine',
    role: 'Web3 Fullstack Engineer',
    bio: '',
    image: '/src/assets/team-yessine.jpg',
    linkedin: '#',
    twitter: '#'
  }];

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
    answer: 'At this moment, Orion validators support solar panels and later we will expand to wind turbines, and battery storage systems. The built-in energy management system automatically optimizes power usage and can operate entirely off-grid.',
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
    answer: 'Supporting Odyssey chain.',
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
    txHash: '0xabcd1234567890abcdef',
    clientDetails: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1-555-0123',
      telegramHandle: '@johndoe_crypto',
      shippingAddress: {
        street: '123 Blockchain Ave',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94102',
        country: 'USA'
      }
    },
    shipmentStatus: 'shipped',
    trackingNumber: 'ORN-2024-001'
  },
  {
    id: 'ord-002',
    userId: 'user-2',
    productName: 'Orion Validator V1',
    amount: 1200,
    currency: 'USDT',
    status: 'confirmed',
    createdAt: new Date('2024-01-16'),
    txHash: '0xdef456789abc012345678',
    clientDetails: {
      name: 'Alice Chen',
      email: 'alice.chen@example.com',
      phone: '+1-555-0456',
      telegramHandle: '@alice_validator',
      shippingAddress: {
        street: '456 Crypto Street',
        city: 'Austin',
        state: 'TX',
        zipCode: '73301',
        country: 'USA'
      }
    },
    shipmentStatus: 'preparing',
    trackingNumber: 'ORN-2024-002'
  },
  {
    id: 'ord-003',
    userId: 'user-3',
    productName: 'Orion Validator V1',
    amount: 1200,
    currency: 'USDT',
    status: 'pending',
    createdAt: new Date('2024-01-17'),
    clientDetails: {
      name: 'Bob Martinez',
      email: 'bob.martinez@example.com',
      phone: '+1-555-0789',
      telegramHandle: '@bob_orion',
      shippingAddress: {
        street: '789 Node Drive',
        city: 'Miami',
        state: 'FL',
        zipCode: '33101',
        country: 'USA'
      }
    },
    shipmentStatus: 'order-received',
    trackingNumber: null
  },
  {
    id: 'ord-004',
    userId: 'user-4',
    productName: 'Orion Validator V1',
    amount: 1200,
    currency: 'USDT',
    status: 'confirmed',
    createdAt: new Date('2024-01-18'),
    txHash: '0x789abc012def345678901',
    clientDetails: {
      name: 'Diana Kumar',
      email: 'diana.kumar@example.com',
      phone: '+44-20-7946-0958',
      telegramHandle: '@diana_nodes',
      shippingAddress: {
        street: '12 Validation Lane',
        city: 'London',
        state: 'Greater London',
        zipCode: 'SW1A 1AA',
        country: 'UK'
      }
    },
    shipmentStatus: 'delivered',
    trackingNumber: 'ORN-2024-004'
  }
];