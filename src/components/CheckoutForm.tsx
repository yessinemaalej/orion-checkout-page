import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  Wallet,
  Shield
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

// Extend Window interface for MetaMask
declare global {
  interface Window {
    ethereum?: any;
  }
}

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  telegramHandle: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  additionalNotes: string;
  agreeToTerms: boolean;
  agreeToDataUsage: boolean;
}

const CheckoutForm = () => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    telegramHandle: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    additionalNotes: '',
    agreeToTerms: false,
    agreeToDataUsage: false
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const { isWalletConnected, connectWallet } = useAuth();
  const { toast } = useToast();

  const handleInputChange = (field: keyof CheckoutFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'telegramHandle',
      'address', 'city', 'state', 'zipCode', 'country'
    ];
    
    return requiredFields.every(field => formData[field as keyof CheckoutFormData]) &&
           formData.agreeToTerms && 
           formData.agreeToDataUsage &&
           isWalletConnected;
  };

  const handleMetaMaskPayment = async () => {
    if (!isWalletConnected) {
      toast({
        title: "Wallet Required",
        description: "Please connect your MetaMask wallet first.",
        variant: "destructive"
      });
      return;
    }

    if (!isFormValid()) {
      toast({
        title: "Form Incomplete",
        description: "Please fill in all required fields and accept the terms.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Check if MetaMask is installed
     
        // Here you could send the form data to your backend
        const tx1 = { hash: '0xSampleTransactionHash' }; // Placeholder for actual transaction hash
        

        try {
          const orderData = {
            ...formData,
            transactionHash: tx1.hash,
            amount: '1200 USDT',
            timestamp: new Date().toISOString(),
            product: 'Orion Remote Validator'
          };

          const formspreeResponse = await fetch('https://formspree.io/f/mjkednaq', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
          });

          if (formspreeResponse.ok) {
            console.log('Order details sent successfully:', orderData);
            toast({
              title: "Order Submitted!",
              description: "Your order details have been sent successfully.",
              variant: "default"
            });
          } else {
            throw new Error('Failed to send order details');
          }
        } catch (formspreeError) {
          console.error('Error sending order details:', formspreeError);
          toast({
            title: "Order Processing",
            description: "Payment successful, but there was an issue sending order details. We'll contact you via email.",
            variant: "default"
          });
        }


        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          telegramHandle: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
          additionalNotes: '',
          agreeToTerms: false,
          agreeToDataUsage: false
        });

         if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask is not installed');
      }

      const { ethers } = await import('ethers');
      
      // Create provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // USDT contract address on Ethereum mainnet
      const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
      
      // Your receiving wallet address (replace with actual address)
      const receivingAddress = '0x742d35Cc6635C0532925a3b8d400e4F6d6F4EC52'; // Replace with your wallet
      
      // USDT has 6 decimals
      const amount = ethers.parseUnits('1200', 6);
      
      // USDT ABI for transfer function
      const usdtAbi = [
        'function transfer(address to, uint256 amount) public returns (bool)',
        'function balanceOf(address account) public view returns (uint256)',
        'function decimals() public view returns (uint8)'
      ];
      
      // Create contract instance
      const usdtContract = new ethers.Contract(usdtContractAddress, usdtAbi, signer);
      
      // Check balance first
      const userAddress = await signer.getAddress();
      const balance = await usdtContract.balanceOf(userAddress);
      
      if (balance < amount) {
        throw new Error('Insufficient USDT balance');
      }
      
      // Execute transfer
      const tx = await usdtContract.transfer(receivingAddress, amount);
      
      toast({
        title: "Transaction Submitted",
        description: "Your payment is being processed. Please wait for confirmation.",
        variant: "default"
      });
      
      // Wait for transaction confirmation
      const receipt = await tx.wait();
      
      if (receipt.status === 1) {
        toast({
          title: "Payment Successful!",
          description: `Transaction confirmed: ${tx.hash}`,
          variant: "default"
        });

        console.log('Order details:', {
          formData,
          transactionHash: tx.hash,
          amount: '1200 USDT'
        });
        
        
      } else {
        throw new Error('Transaction failed');
      }
      
    } catch (error: any) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: error.message || "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md bg-gradient-card border-border/50 shadow-card sticky top-20">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Order Details</span>
        </CardTitle>
        <CardDescription>
          Complete your purchase for the Orion Remote Validator
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Product Summary */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Orion Remote Validator</span>
            <span className="font-bold">1200 USDT</span>
          </div>
        </div>
        
        <Separator />
        
        {/* Personal Information */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Personal Information</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="firstName" className="text-xs">First Name*</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="h-8 text-xs"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-xs">Last Name*</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="h-8 text-xs"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-xs">Email*</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-8 text-xs"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-xs">Phone*</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="h-8 text-xs"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="telegramHandle" className="text-xs">Telegram Handle*</Label>
            <Input
              id="telegramHandle"
              value={formData.telegramHandle}
              onChange={(e) => handleInputChange('telegramHandle', e.target.value)}
              placeholder="@username"
              className="h-8 text-xs"
              required
            />
          </div>
        </div>
        
        <Separator />
        
        {/* Shipping Address */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Shipping Address</h4>
          
          <div>
            <Label htmlFor="address" className="text-xs">Address*</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="h-8 text-xs"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="city" className="text-xs">City*</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="h-8 text-xs"
                required
              />
            </div>
            <div>
              <Label htmlFor="state" className="text-xs">State*</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="h-8 text-xs"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="zipCode" className="text-xs">ZIP Code*</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="h-8 text-xs"
                required
              />
            </div>
            <div>
              <Label htmlFor="country" className="text-xs">Country*</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="h-8 text-xs"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="additionalNotes" className="text-xs">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              className="text-xs min-h-[60px]"
              placeholder="Any special delivery instructions..."
            />
          </div>
        </div>
        
        <Separator />
        
        {/* Terms and Conditions */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange('agreeToTerms', !!checked)}
            />
            <Label htmlFor="agreeToTerms" className="text-xs leading-4">
              I agree to the Terms of Service and Privacy Policy*
            </Label>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToDataUsage"
              checked={formData.agreeToDataUsage}
              onCheckedChange={(checked) => handleInputChange('agreeToDataUsage', !!checked)}
            />
            <Label htmlFor="agreeToDataUsage" className="text-xs leading-4">
              I agree that my data will be used solely for shipping purposes*
            </Label>
          </div>
        </div>
        
        {/* Wallet Connection Status */}
        {!isWalletConnected ? (
          <Alert className="bg-warning/10 border-warning/20">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertDescription className="text-warning text-xs">
              Connect your MetaMask wallet to proceed with payment
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="bg-success/10 border-success/20">
            <CheckCircle className="h-4 w-4 text-success" />
            <AlertDescription className="text-success text-xs">
              Wallet connected and ready for payment
            </AlertDescription>
          </Alert>
        )}
        
        {/* Connect Wallet Button */}
        {!isWalletConnected && (
          <Button 
            variant="cosmic"
            onClick={async () => {
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
            }}
            className="w-full text-primary-foreground"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect MetaMask
          </Button>
        )}
        
        {/* Purchase Button */}
        <Button 
          variant="cosmic"
          onClick={handleMetaMaskPayment}
          disabled={!isFormValid() || isProcessing}
          className="w-full text-primary-foreground"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing Payment...
            </>
          ) : (
            <>
              <Shield className="w-4 h-4 mr-2" />
              Purchase Validator - 1200 USDT
            </>
          )}
        </Button>
        
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Secure MetaMask payment processing</p>
          <p>• Transaction fees may apply</p>
          <p>• Orders processed within 24 hours</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;