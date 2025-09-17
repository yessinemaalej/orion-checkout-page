import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, ShieldX, Wallet, Users, Package, Edit3 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ADMIN_TOKEN = "jhf44765HuY2398e655wH@$";
const SHIPMENT_TOKEN = "ship99432MnP8765qR#@!";

// Mock data
const mockContractBalance = "0 DIONE";
const mockOrionUsers = [
  { id: "1", name: "John Doe", email: "john@example.com", purchaseDate: "2024-01-15", orionUnits: 2, status: "Active" },
  { id: "2", name: "Alice Smith", email: "alice@example.com", purchaseDate: "2024-01-20", orionUnits: 1, status: "Pending" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", purchaseDate: "2024-02-01", orionUnits: 3, status: "Active" },
];

const mockShipments = [
  { 
    id: "ORD-001", 
    customer: "John Doe", 
    product: "ORION Validator", 
    status: "shipped", 
    trackingNumber: "TRK123456",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    phone: "+1-555-0123",
    txHash: "0xabc123def456789012345678901234567890abcdef123456789012345678901234"
  },
  { 
    id: "ORD-002", 
    customer: "Alice Smith", 
    product: "ORION Validator", 
    status: "preparing", 
    trackingNumber: null,
    address: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
      country: "USA"
    },
    phone: "+1-555-0456",
    txHash: "0xdef456abc789012345678901234567890123abcdef456789012345678901234"
  },
  { 
    id: "ORD-003", 
    customer: "Bob Johnson", 
    product: "ORION Validator", 
    status: "delivered", 
    trackingNumber: "TRK789012",
    address: {
      street: "789 Pine Rd",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA"
    },
    phone: "+1-555-0789",
    txHash: "0x123456789abcdef012345678901234567890123456789abcdef0123456789012"
  },
];

const ProtectedContent = () => {
  const [token, setToken] = useState("");
  const [enteredToken, setEnteredToken] = useState("");
  
  const isAdminAuthorized = enteredToken === ADMIN_TOKEN;
  const isShipmentAuthorized = enteredToken === SHIPMENT_TOKEN;
  const isAuthorized = isAdminAuthorized || isShipmentAuthorized;

  const handleTokenSubmit = () => {
    setEnteredToken(token.trim());
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Enter Access Token</CardTitle>
            <CardDescription>
              Please provide a valid token to access the protected content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter your access token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleTokenSubmit()}
              />
              <Button onClick={handleTokenSubmit} className="w-full">
                Access Protected Content
              </Button>
            </div>
            {enteredToken && !isAuthorized && (
              <div className="text-center text-sm text-destructive">
                Invalid token. Please try again.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {isAdminAuthorized ? <Shield className="w-8 h-8 text-primary" /> : <Package className="w-8 h-8 text-primary" />}
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {isAdminAuthorized ? "Admin Panel" : "Shipment Management"}
          </h1>
          <Badge variant="secondary" className="mb-4">
            {isAdminAuthorized ? "Admin Access" : "Shipment Access"}
          </Badge>
          <p className="text-muted-foreground">
            {isAdminAuthorized 
              ? "Monitor smart contract balance and user purchase data" 
              : "Manage and update shipment statuses"}
          </p>
        </div>

        {/* Admin Panel Content */}
        {isAdminAuthorized && (
          <div className="space-y-6">
            {/* Smart Contract Balance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  Smart Contract Balance
                </CardTitle>
                <CardDescription>Current ETH balance in the ORION smart contract</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{mockContractBalance}</div>
                <p className="text-sm text-muted-foreground mt-2">Last updated: {new Date().toLocaleString()}</p>
              </CardContent>
            </Card>

            {/* ORION Users Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  ORION Purchasers
                </CardTitle>
                <CardDescription>Users who have purchased ORION validators</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Purchase Date</TableHead>
                      <TableHead>Units</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrionUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.purchaseDate}</TableCell>
                        <TableCell>{user.orionUnits}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Shipment Management Content */}
        {isShipmentAuthorized && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Shipment Status Management
                </CardTitle>
                <CardDescription>Update and manage ORION validator shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tracking</TableHead>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockShipments.map((shipment) => (
                      <TableRow key={shipment.id}>
                        <TableCell className="font-medium">{shipment.id}</TableCell>
                        <TableCell>{shipment.customer}</TableCell>
                        <TableCell>{shipment.product}</TableCell>
                        <TableCell className="min-w-[200px]">
                          <div className="text-sm">
                            <div>{shipment.address.street}</div>
                            <div>{shipment.address.city}, {shipment.address.state} {shipment.address.zipCode}</div>
                            <div>{shipment.address.country}</div>
                          </div>
                        </TableCell>
                        <TableCell>{shipment.phone}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              shipment.status === 'delivered' ? 'default' : 
                              shipment.status === 'shipped' ? 'secondary' : 
                              'outline'
                            }
                          >
                            {shipment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{shipment.trackingNumber || 'N/A'}</TableCell>
                        <TableCell>
                          <a 
                            href={`https://odysseyscan.com/tx/${shipment.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm"
                          >
                            {shipment.txHash.slice(0, 10)}...{shipment.txHash.slice(-8)}
                          </a>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Edit3 className="w-4 h-4 mr-1" />
                            Update
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProtectedContent;