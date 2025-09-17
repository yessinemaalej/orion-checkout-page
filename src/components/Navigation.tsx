import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Rocket, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentRole, switchRole, connectWallet, isWalletConnected } = useAuth();
const { toast } = useToast();

  const handleWalletConnect = async () => {
    try {
      await connectWallet();
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to MetaMask",
        variant: "default"
      });
    } catch (error: any) {
      toast({
        title: "Connection Failed",
        description: error.message || "Failed to connect wallet",
        variant: "destructive"
      });
    }
  };
  const navItems = [
    { name: 'Home', href: '/', roles: ['admin', 'user', 'manufacturer'] },
        { name: 'FAQ', href: '/#faq', roles: ['admin', 'user', 'manufacturer'] },

    { name: 'Dashboard', href: '/dashboard', roles: ['admin', 'user', 'manufacturer'] },
    { name: 'Admin Panel', href: '/admin', roles: ['admin'] }
  ];

  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(currentRole)
  );

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-cosmic rounded-lg">
    <img
      src="/Orion.png"
      alt="Orion Logo"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span className="text-xl font-bold text-foreground">
    Orion Checkout
  </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {filteredNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-cosmic ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Wallet Connect */}
            <Button 
              variant={isWalletConnected ? "success" : "cosmic"}
              size="sm"
              onClick={handleWalletConnect}
              disabled={isWalletConnected}
              className="flex items-center space-x-2"
            >
              <Wallet className="w-4 h-4" />
              <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {filteredNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-cosmic ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <div className="space-y-3">
                    <Button 
                      variant={isWalletConnected ? "success" : "cosmic"}
                      onClick={handleWalletConnect}
                      disabled={isWalletConnected}
                      className="w-full flex items-center space-x-2"
                    >
                      <Wallet className="w-4 h-4" />
                      <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;