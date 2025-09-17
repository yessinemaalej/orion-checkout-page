import { ReactNode } from 'react';
import Navigation from './Navigation';
import CheckoutForm from './CheckoutForm';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex gap-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
        
        {/* Persistent Checkout Form */}
        <div className="w-80 flex-shrink-0 hidden lg:block">
          <CheckoutForm />
        </div>
      </div>
      
      {/* Mobile Checkout Form */}
      <div className="lg:hidden p-4">
        <CheckoutForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;