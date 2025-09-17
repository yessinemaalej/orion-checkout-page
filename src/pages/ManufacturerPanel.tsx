import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Factory, 
  Package, 
  Truck, 
  CheckCircle,
  AlertTriangle,
  Plus,
  Edit,
  Settings
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { mockOrders } from '@/data/mockData';

const ManufacturerPanel = () => {
  const { currentRole } = useAuth();
  const [totalProduced, setTotalProduced] = useState(47);
  const [inProduction, setInProduction] = useState(8);
  const [readyToShip, setReadyToShip] = useState(3);

  if (currentRole !== 'manufacturer' && currentRole !== 'admin') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Alert className="max-w-md">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Access denied. Manufacturer privileges required to view this page.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const updateShipmentStatus = (orderId: string, newStatus: string) => {
    // Mock function - in real app this would update the database
    console.log(`Updated order ${orderId} status to ${newStatus}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center">
          <Factory className="w-8 h-8 mr-3 text-primary" />
          Manufacturer Panel
        </h1>
        <p className="text-muted-foreground">
          Manage production, inventory, and shipments
        </p>
      </div>

      {/* Production Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Produced</CardTitle>
            <Factory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProduced}</div>
            <p className="text-xs text-muted-foreground">
              Orion validators manufactured
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Production</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProduction}</div>
            <p className="text-xs text-muted-foreground">
              Currently being assembled
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready to Ship</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{readyToShip}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting shipment
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Production Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Units per week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orders">Order Management</TabsTrigger>
          <TabsTrigger value="production">Production Control</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Status</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-6">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Orders & Shipment Status</CardTitle>
              <CardDescription>
                Update order status and manage shipments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockOrders.filter(order => order.status === 'confirmed').map((order) => (
                  <Card key={order.id} className="p-4 bg-muted/50 border-border/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Order Info */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{order.productName}</h3>
                            <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                          </div>
                          <Badge className="bg-success/10 text-success border-success/20">
                            {order.amount} {order.currency}
                          </Badge>
                        </div>
                        {order.clientDetails && (
                          <div className="space-y-1 text-sm">
                            <p><span className="font-medium">Client:</span> {order.clientDetails.name}</p>
                            <p><span className="font-medium">Contact:</span> {order.clientDetails.telegramHandle}</p>
                            <p><span className="font-medium">Ship to:</span> {order.clientDetails.shippingAddress.city}, {order.clientDetails.shippingAddress.country}</p>
                          </div>
                        )}
                      </div>

                      {/* Status & Actions */}
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor={`status-${order.id}`}>Shipment Status</Label>
                          <Select 
                            defaultValue={order.shipmentStatus || 'order-received'}
                            onValueChange={(value) => updateShipmentStatus(order.id, value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="order-received">Order Received</SelectItem>
                              <SelectItem value="preparing">Preparing</SelectItem>
                              <SelectItem value="shipped">Shipped</SelectItem>
                              <SelectItem value="delivered">Delivered</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {order.trackingNumber && (
                          <div className="space-y-2">
                            <Label>Tracking Number</Label>
                            <Input value={order.trackingNumber} readOnly />
                          </div>
                        )}

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="w-4 h-4 mr-2" />
                            Update
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Truck className="w-4 h-4 mr-2" />
                            Ship
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

        <TabsContent value="production" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Production Metrics</CardTitle>
                <CardDescription>
                  Update production numbers and status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="total-produced">Total Units Produced</Label>
                  <Input
                    id="total-produced"
                    type="number"
                    value={totalProduced}
                    onChange={(e) => setTotalProduced(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="in-production">Units in Production</Label>
                  <Input
                    id="in-production"
                    type="number"
                    value={inProduction}
                    onChange={(e) => setInProduction(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ready-ship">Ready to Ship</Label>
                  <Input
                    id="ready-ship"
                    type="number"
                    value={readyToShip}
                    onChange={(e) => setReadyToShip(Number(e.target.value))}
                  />
                </div>
                <Button className="w-full" variant="cosmic">
                  Update Production Status
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Production Queue</CardTitle>
                <CardDescription>
                  Upcoming production schedule
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { batch: 'Batch #15', units: 5, status: 'In Progress', eta: '2 days' },
                    { batch: 'Batch #16', units: 7, status: 'Queued', eta: '1 week' },
                    { batch: 'Batch #17', units: 3, status: 'Planned', eta: '2 weeks' }
                  ].map((batch, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{batch.batch}</p>
                        <p className="text-sm text-muted-foreground">{batch.units} units</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          className={
                            batch.status === 'In Progress'
                              ? 'bg-info/10 text-info border-info/20'
                              : batch.status === 'Queued'
                              ? 'bg-warning/10 text-warning border-warning/20'
                              : 'bg-muted/10 text-muted-foreground border-muted/20'
                          }
                        >
                          {batch.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">ETA: {batch.eta}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Production Batch
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-6">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Inventory Overview</CardTitle>
              <CardDescription>
                Component availability and stock levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { component: 'Starlink Terminals', stock: 15, required: 8, status: 'good' },
                  { component: 'Solar Panels', stock: 12, required: 8, status: 'good' },
                  { component: 'Battery Systems', stock: 3, required: 8, status: 'low' },
                  { component: 'Computing Units', stock: 20, required: 8, status: 'good' },
                  { component: 'Enclosures', stock: 8, required: 8, status: 'moderate' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">{item.component}</p>
                      <p className="text-sm text-muted-foreground">
                        Required for production: {item.required}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{item.stock}</p>
                      <Badge 
                        className={
                          item.status === 'good'
                            ? 'bg-success/10 text-success border-success/20'
                            : item.status === 'moderate'
                            ? 'bg-warning/10 text-warning border-warning/20'
                            : 'bg-destructive/10 text-destructive border-destructive/20'
                        }
                      >
                        {item.status === 'good' ? 'In Stock' : item.status === 'moderate' ? 'Moderate' : 'Low Stock'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManufacturerPanel;