import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Wallet, 
  CheckCircle, 
  Loader2,
  Zap,
  Leaf,
  Wifi,
  Globe
} from 'lucide-react';
import { orionValidators } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { currentUser, isWalletConnected, connectWallet } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const validator = orionValidators[0];
  const totalPrice = validator.price * quantity;

  const handlePurchase = async () => {
    if (!isWalletConnected) {
      toast({
        title: "Wallet Required",
        description: "Please connect your wallet to complete the purchase.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const orderId = `ord-${Date.now()}`;
      
      toast({
        title: "Purchase Successful!",
        description: `Order ${orderId} confirmed. Redirecting to confirmation...`,
        variant: "default"
      });
      
      setTimeout(() => {
        navigate(`/confirmation/${orderId}`, {
          state: {
            orderId,
            productName: validator.name,
            quantity,
            totalPrice,
            currency: validator.currency
          }
        });
      }, 1500);
      
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please log in to access the checkout page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold">Purchase Validator</h1>
        <p className="text-muted-foreground mt-2">
          Complete your order for the Orion Remote Validator
        </p>
      </div>

      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{validator.name}</CardTitle>
              <CardDescription className="text-lg mt-2">
                {validator.description}
              </CardDescription>
            </div>
            <Badge className="bg-success/10 text-success border-success/20">
              In Stock
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm">
              <Leaf className="w-4 h-4 text-success" />
              <span>Renewable Energy</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Wifi className="w-4 h-4 text-success" />
              <span>Starlink Ready</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Globe className="w-4 h-4 text-success" />
              <span>Global Deploy</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-success" />
              <span>99.9% Uptime SLA</span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-1 gap-2">
              {validator.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center space-x-3 mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center"
                  min="1"
                />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="text-lg font-semibold">
            Total: {totalPrice} {validator.currency}
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">1</div>
                  <div>
                    <p className="font-medium">Payment Confirmation</p>
                    <p className="text-muted-foreground">Your blockchain transaction will be verified</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">2</div>
                  <div>
                    <p className="font-medium">Manufacturing & Setup</p>
                    <p className="text-muted-foreground">Your validator will be configured and tested</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">3</div>
                  <div>
                    <p className="font-medium">Deployment & Activation</p>
                    <p className="text-muted-foreground">Remote deployment and validator activation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;