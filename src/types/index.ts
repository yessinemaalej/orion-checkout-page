export type UserRole = 'admin' | 'user' | 'manufacturer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  walletAddress?: string;
}

export interface Order {
  id: string;
  userId: string;
  productName: string;
  amount: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'failed';
  createdAt: Date;
  txHash?: string;
  clientDetails?: {
    name: string;
    email: string;
    phone: string;
    telegramHandle: string;
    shippingAddress: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  shipmentStatus?: 'order-received' | 'preparing' | 'shipped' | 'delivered';
  trackingNumber?: string | null;
}

export interface OrionValidator {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  inStock: boolean;
  manufacturerId?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
  quarter: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}