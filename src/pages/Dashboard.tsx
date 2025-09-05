import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  DollarSign, 
  Users, 
  Settings,
  TrendingUp,
  Server,
  Zap,
  Shield
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { mockOrders } from '@/data/mockData';

const Dashboard = () => {
  const { currentUser, currentRole } = useAuth();

  const userOrders = mockOrders.filter(order => 
    currentRole === 'admin' || order.userId === currentUser?.id
  );

  const stats = {
    totalOrders: currentRole === 'admin' ? mockOrders.length : userOrders.length,
    totalRevenue: currentRole === 'admin' ? 2400 : 1200,
    activeValidators: currentRole === 'admin' ? 8 : 1,
    uptime: 99.9
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              {currentRole === 'admin' ? 'Admin Dashboard' : 
               currentRole === 'manufacturer' ? 'Manufacturer Portal' : 
               'My Dashboard'}
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {currentUser?.name}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {currentRole === 'admin' ? 'Total Orders' : 'My Orders'}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Validators</CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeValidators}</div>
                <p className="text-xs text-muted-foreground">
                  {currentRole === 'admin' ? 'Across network' : 'Your validators'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Network Uptime</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.uptime}%</div>
                <p className="text-xs text-muted-foreground">
                  SLA target: 99.9%
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="validators">Validators</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    {currentRole === 'admin' ? 'All system orders' : 'Your purchase history'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium">{order.productName}</p>
                          <p className="text-sm text-muted-foreground">
                            Order ID: {order.id}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {order.createdAt.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right space-y-2">
                          <p className="font-medium">
                            {order.amount} {order.currency}
                          </p>
                          <Badge 
                            className={
                              order.status === 'confirmed' 
                                ? 'bg-success/10 text-success border-success/20'
                                : order.status === 'pending'
                                ? 'bg-warning/10 text-warning border-warning/20'
                                : 'bg-destructive/10 text-destructive border-destructive/20'
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="validators" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Validator Status
                      <Badge className="bg-success/10 text-success border-success/20">
                        Online
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Validator ID:</span>
                        <span className="font-mono text-sm">0x1234...5678</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Network:</span>
                        <span>Ethereum 2.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Uptime:</span>
                        <span>99.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>APY:</span>
                        <span className="text-success">5.2%</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Validator
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Earnings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>This Month:</span>
                        <span className="font-medium">2.4 ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Earned:</span>
                        <span className="font-medium">28.7 ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span>USD Value:</span>
                        <span className="font-medium text-success">$68,428</span>
                      </div>
                    </div>
                    <Button variant="cosmic" size="sm" className="w-full">
                      <Zap className="w-4 h-4 mr-2" />
                      Withdraw Rewards
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>
                    Detailed insights into your validator performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <Activity className="w-12 h-12 mx-auto mb-4" />
                    <p>Analytics dashboard coming soon</p>
                    <p className="text-sm">Track performance, earnings, and network statistics</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Display Name</label>
                      <input 
                        type="text" 
                        value={currentUser?.name || ''} 
                        className="w-full p-2 bg-muted rounded border border-border"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        value={currentUser?.email || ''} 
                        className="w-full p-2 bg-muted rounded border border-border"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Role</label>
                      <input 
                        type="text" 
                        value={currentUser?.role || ''} 
                        className="w-full p-2 bg-muted rounded border border-border capitalize"
                        readOnly
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Email notifications</span>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SMS alerts</span>
                      <input type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Performance alerts</span>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;