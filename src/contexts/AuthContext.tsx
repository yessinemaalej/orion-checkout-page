import React, { createContext, useContext, useState, ReactNode , useEffect} from 'react';
import { User, UserRole } from '@/types';
declare global {
  interface Window {
    ethereum?: any;
  }
}
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

  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && window.ethereum?.isMetaMask;
  };

  // Handle account changes
  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      // User disconnected their wallet
      setIsWalletConnected(false);
      setWalletAddress(null);
      if (currentUser) {
        setCurrentUser({
          ...currentUser,
          walletAddress: undefined
        });
      }
    } else {
      // User switched accounts
      const newAddress = accounts[0];
      setWalletAddress(newAddress);
      setIsWalletConnected(true);
      if (currentUser) {
        setCurrentUser({
          ...currentUser,
          walletAddress: newAddress
        });
      }
    }
  };

  // Set up MetaMask event listeners
  useEffect(() => {
    if (isMetaMaskInstalled()) {
      // Listen for account changes
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // Listen for chain changes (optional)
      window.ethereum.on('chainChanged', () => {
        // Reload the page when chain changes
        window.location.reload();
      });

      // Check if already connected
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            handleAccountsChanged(accounts);
          }
        })
        .catch((error: any) => {
          console.error('Error checking MetaMask connection:', error);
        });
    }

    // Cleanup function
    return () => {
      if (isMetaMaskInstalled()) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, [currentUser]);

  const switchRole = (role: UserRole) => {
    setCurrentRole(role);
    const newUser = { ...mockUsers[role] };
    if (walletAddress) {
      newUser.walletAddress = walletAddress;
    }
    setCurrentUser(newUser);
  };

  const login = (user: User) => {
    setCurrentUser(user);
    setCurrentRole(user.role);
  };

  const logout = () => {
    setCurrentUser(null);
    setIsWalletConnected(false);
  setWalletAddress(null);
  };

  const connectWallet = async () => {
    if (!isMetaMaskInstalled()) {
      throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
    }

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('No accounts found. Please connect your MetaMask wallet.');
      }

      const address = accounts[0];
      setWalletAddress(address);
      setIsWalletConnected(true);
      
      // Update current user with wallet address
      if (currentUser) {
        setCurrentUser({
          ...currentUser,
          walletAddress: address
        });
      }
    } catch (error: any) {
      console.error('Error connecting to MetaMask:', error);
      setIsWalletConnected(false);
      setWalletAddress(null);
      
      if (error.code === 4001) {
        throw new Error('Please connect to MetaMask to continue.');
      } else {
        throw new Error('Failed to connect to MetaMask. Please try again.');
      }
    }
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