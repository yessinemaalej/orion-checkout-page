import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Users, 
  Package, 
  DollarSign, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Shield,
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { mockOrders, orionValidators } from '@/data/mockData';

const AdminPanel = () => {
  const { currentRole } = useAuth();
  const [newValidatorName, setNewValidatorName] = useState('');
  const [newValidatorPrice, setNewValidatorPrice] = useState('');

  if (currentRole !== 'admin') {
    return (
      <div className="flex items-center justify-center">
        <Alert className="max-w-md">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Access denied. Admin privileges required to view this page.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const totalUsers = 156;
  const totalOrders = mockOrders.length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.amount, 0);
  const activeValidators = 8;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center">
          <Shield className="w-8 h-8 mr-3 text-primary" />
          Admin Panel
        </h1>
        <p className="text-muted-foreground">
          Manage users, orders, and validator inventory
        </p>
      </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalUsers}</div>
                <p className="text-xs text-muted-foreground">
                  +12 new this month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalOrders}</div>
                <p className="text-xs text-muted-foreground">
                  2 pending review
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Validators</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeValidators}</div>
                <p className="text-xs text-muted-foreground">
                  Across all networks
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Orders Management</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="system">System Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle>All Orders & Shipments</CardTitle>
                  <CardDescription>
                    Manage orders, client details, and shipment tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockOrders.map((order) => (
                      <Card key={order.id} className="p-6 bg-muted/50 border-border/50">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Order Information */}
                          <div className="space-y-3">
                            <h3 className="font-semibold text-lg">Order Details</h3>
                            <div className="space-y-2 text-sm">
                              <p><span className="font-medium">Order ID:</span> {order.id}</p>
                              <p><span className="font-medium">Product:</span> {order.productName}</p>
                              <p><span className="font-medium">Amount:</span> {order.amount} {order.currency}</p>
                              <p><span className="font-medium">Date:</span> {order.createdAt.toLocaleDateString()}</p>
                              {order.txHash && (
                                <p><span className="font-medium">Tx Hash:</span> 
                                  <span className="font-mono text-xs ml-2">{order.txHash}</span>
                                </p>
                              )}
                              <div className="flex space-x-2">
                                <Badge 
                                  className={
                                    order.status === 'confirmed' 
                                      ? 'bg-success/10 text-success border-success/20'
                                      : order.status === 'pending'
                                      ? 'bg-warning/10 text-warning border-warning/20'
                                      : 'bg-destructive/10 text-destructive border-destructive/20'
                                  }
                                >
                                  Payment: {order.status}
                                </Badge>
                                {order.shipmentStatus && (
                                  <Badge 
                                    className={
                                      order.shipmentStatus === 'delivered'
                                        ? 'bg-success/10 text-success border-success/20'
                                        : order.shipmentStatus === 'shipped'
                                        ? 'bg-info/10 text-info border-info/20'
                                        : 'bg-warning/10 text-warning border-warning/20'
                                    }
                                  >
                                    Ship: {order.shipmentStatus}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Client Information */}
                          <div className="space-y-3">
                            <h3 className="font-semibold text-lg">Client Details</h3>
                            {order.clientDetails ? (
                              <div className="space-y-2 text-sm">
                                <p><span className="font-medium">Name:</span> {order.clientDetails.name}</p>
                                <p><span className="font-medium">Email:</span> {order.clientDetails.email}</p>
                                <p><span className="font-medium">Phone:</span> {order.clientDetails.phone}</p>
                                <p><span className="font-medium">Telegram:</span> {order.clientDetails.telegramHandle}</p>
                                <div className="pt-2">
                                  <p className="font-medium mb-1">Shipping Address:</p>
                                  <div className="text-xs space-y-1 text-muted-foreground">
                                    <p>{order.clientDetails.shippingAddress.street}</p>
                                    <p>{order.clientDetails.shippingAddress.city}, {order.clientDetails.shippingAddress.state}</p>
                                    <p>{order.clientDetails.shippingAddress.zipCode}, {order.clientDetails.shippingAddress.country}</p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <p className="text-sm text-muted-foreground">No client details available</p>
                            )}
                          </div>

                          {/* Shipment & Actions */}
                          <div className="space-y-3">
                            <h3 className="font-semibold text-lg">Shipment & Actions</h3>
                            <div className="space-y-2 text-sm">
                              {order.trackingNumber && (
                                <p><span className="font-medium">Tracking:</span> {order.trackingNumber}</p>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Button size="sm" variant="outline" className="w-full">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Order
                              </Button>
                              <Button size="sm" variant="outline" className="w-full">
                                View Transaction
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    View and manage all registered users
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center py-8 text-muted-foreground">
                      <Users className="w-12 h-12 mx-auto mb-4" />
                      <p>User management interface</p>
                      <p className="text-sm">View, edit, and manage user accounts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Current Inventory</CardTitle>
                    <CardDescription>
                      Available validators for sale
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orionValidators.map((validator) => (
                      <div key={validator.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{validator.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {validator.price} {validator.currency}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-success/10 text-success border-success/20">
                            In Stock
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Add New Validator</CardTitle>
                    <CardDescription>
                      Create a new validator product
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="validator-name">Validator Name</Label>
                      <Input
                        id="validator-name"
                        placeholder="Enter validator name"
                        value={newValidatorName}
                        onChange={(e) => setNewValidatorName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="validator-price">Price (USDT)</Label>
                      <Input
                        id="validator-price"
                        type="number"
                        placeholder="Enter price"
                        value={newValidatorPrice}
                        onChange={(e) => setNewValidatorPrice(e.target.value)}
                      />
                    </div>
                    <Button className="w-full" variant="cosmic">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Validator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="system" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>System Configuration</CardTitle>
                    <CardDescription>
                      Global system settings and configurations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Default Validator Price</Label>
                      <Input type="number" defaultValue="1200" />
                    </div>
                    <div className="space-y-2">
                      <Label>Transaction Fee (%)</Label>
                      <Input type="number" defaultValue="2.5" />
                    </div>
                    <div className="space-y-2">
                      <Label>Support Email</Label>
                      <Input type="email" defaultValue="support@orion.dev" />
                    </div>
                    <Button variant="outline" className="w-full">
                      Save Configuration
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage security and access controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Two-Factor Authentication</span>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Require Wallet Verification</span>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Admin Notifications</span>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <Button variant="outline" className="w-full">
                      Update Security Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
        </Tabs>
      </div>
  );
};

export default AdminPanel;