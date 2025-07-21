import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Users, CreditCard, Settings, BarChart3 } from "lucide-react";

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const clients = [
    {
      id: 1,
      name: "Acme Corporation",
      email: "admin@acme.com",
      products: ["TimeX", "CoreX"],
      status: "Active",
      subscription: "Premium",
      lastLogin: "2024-01-15",
    },
    {
      id: 2,
      name: "TechStart Inc",
      email: "info@techstart.com",
      products: ["FleetX", "MedzorX"],
      status: "Active",
      subscription: "Standard",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Global Enterprises",
      email: "contact@global.com",
      products: ["CoreX", "TimeX", "ChurchX"],
      status: "Pending",
      subscription: "Enterprise",
      lastLogin: "2024-01-10",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">ENYARD Admin Panel</h1>
          <p className="text-primary-foreground/80">Manage clients and monitor system performance</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="glass">
            <TabsTrigger value="clients" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Clients</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clients" className="space-y-6">
            {/* Client Management Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div>
                <h2 className="text-2xl font-bold">Client Management</h2>
                <p className="text-muted-foreground">Add new clients and manage existing accounts</p>
              </div>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add New Client</span>
              </Button>
            </div>

            {/* Add New Client Form */}
            <Card className="glass border-0 shadow-enyard">
              <CardHeader>
                <CardTitle>Add New Client</CardTitle>
                <CardDescription>Create a new client account with product access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Enter company name" className="glass" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" placeholder="admin@company.com" className="glass" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subscription">Subscription Plan</Label>
                    <Select>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder="Select plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="products">Products</Label>
                    <Select>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder="Select products" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="timex">TimeX</SelectItem>
                        <SelectItem value="corex">CoreX</SelectItem>
                        <SelectItem value="fleetx">FleetX</SelectItem>
                        <SelectItem value="churchx">ChurchX</SelectItem>
                        <SelectItem value="medzorx">MedzorX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Button>Create Client Account</Button>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass"
                />
              </div>
            </div>

            {/* Clients List */}
            <div className="grid gap-4">
              {clients.map((client) => (
                <Card key={client.id} className="glass border-0 shadow-enyard hover-lift">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{client.name}</h3>
                        <p className="text-muted-foreground">{client.email}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">Products:</span>
                          {client.products.map((product, idx) => (
                            <Badge key={idx} variant="secondary">{product}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant={client.status === "Active" ? "default" : "secondary"}>
                          {client.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          Subscription: {client.subscription}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Last Login: {client.lastLogin}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Billing
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="glass border-0 shadow-enyard">
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
                <CardDescription>Monitor platform performance and usage metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-card/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">127</div>
                    <div className="text-sm text-muted-foreground">Total Clients</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                    <div className="text-sm text-muted-foreground">System Uptime</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">$47K</div>
                    <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="glass border-0 shadow-enyard">
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure platform-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">System configuration options will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;