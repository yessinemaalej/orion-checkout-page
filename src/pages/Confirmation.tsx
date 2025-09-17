import { useLocation, useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle, 
  Download, 
  Calendar, 
  MapPin,
  Rocket,
  ArrowRight
} from 'lucide-react';

const Confirmation = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Order Not Found</CardTitle>
            <CardDescription>
              We couldn't find the details for this order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 14);

  return (
    <div className="space-y-12">
      {/* Success Header */}
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold">Order Confirmed!</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Thank you for your purchase. Your Orion validator is being prepared.
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Order Details
                  <Badge className="bg-success/10 text-success border-success/20">
                    Confirmed
                  </Badge>
                </CardTitle>
                <CardDescription>Order ID: {orderId}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">{orderData.productName}</span>
                  <span>Quantity: {orderData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit Price:</span>
                  <span>{orderData.totalPrice / orderData.quantity} {orderData.currency}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Paid:</span>
                  <span>{orderData.totalPrice} {orderData.currency}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
                <CardDescription>
                  Here's what happens with your order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Payment Received</h4>
                      <p className="text-sm text-muted-foreground">
                        Your USDT payment has been confirmed on the blockchain
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Completed just now</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-warning-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Manufacturing & Configuration</h4>
                      <p className="text-sm text-muted-foreground">
                        Your validator is being assembled and pre-configured
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Est. 7-10 business days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Deployment Location Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        Site survey and infrastructure preparation
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Est. 10-14 business days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Validator Activation</h4>
                      <p className="text-sm text-muted-foreground">
                        Remote deployment and blockchain network activation
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Est. {estimatedDelivery.toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions & Support */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/dashboard">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Our support team is here to assist
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Email Support</p>
                  <p className="text-muted-foreground">support@orion.dev</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Phone Support</p>
                  <p className="text-muted-foreground">+1 (555) 123-ORION</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Join the Community</CardTitle>
                <CardDescription>
                  Connect with other validator operators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full">
                  Discord Community
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Telegram Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
  );
};

export default Confirmation;