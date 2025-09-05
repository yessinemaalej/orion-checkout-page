import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/types';

interface AuthContextType {
  currentUser: User | null;
  currentRole: UserRole;
  switchRole: (role: UserRole) => void;
  login: (user: User) => void;
  logout: () => void;
  connectWallet: () => Promise<void>;
  isWalletConnected: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: Record<UserRole, User> = {
  admin: {
    id: 'admin-1',
    name: 'Sarah Chen',
    email: 'admin@orion.dev',
    role: 'admin',
    walletAddress: '0x1234...5678'
  },
  user: {
    id: 'user-1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'user',
    walletAddress: '0xabcd...efgh'
  },
  manufacturer: {
    id: 'mfg-1',
    name: 'Maria Rodriguez',
    email: 'maria@orion-tech.com',
    role: 'manufacturer',
    walletAddress: '0x9876...4321'
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<UserRole>('user');
  const [currentUser, setCurrentUser] = useState<User | null>(mockUsers.user);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const switchRole = (role: UserRole) => {
    setCurrentRole(role);
    setCurrentUser(mockUsers[role]);
  };

  const login = (user: User) => {
    setCurrentUser(user);
    setCurrentRole(user.role);
  };

  const logout = () => {
    setCurrentUser(null);
    setIsWalletConnected(false);
  };

  const connectWallet = async () => {
    // Simulate wallet connection delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsWalletConnected(true);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      currentRole,
      switchRole,
      login,
      logout,
      connectWallet,
      isWalletConnected
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}