import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, Building2, Truck, Church, Heart, 
  CreditCard, Settings, LogOut, CheckCircle, 
  AlertCircle, Calendar, DollarSign 
} from "lucide-react";

const ClientDashboard = () => {
  // Mock client data
  const clientData = {
    company: "Acme Corporation",
    subscriptionPlan: "Premium",
    subscriptionStatus: "Active",
    nextBilling: "2024-02-15",
    products: [
      {
        name: "TimeX",
        description: "Attendance Management System",
        icon: Clock,
        status: "Active",
        usage: 85,
        lastAccessed: "2024-01-15",
      },
      {
        name: "CoreX", 
        description: "ERP Solution",
        icon: Building2,
        status: "Active",
        usage: 67,
        lastAccessed: "2024-01-14",
      },
    ],
    billing: {
      currentPlan: "Premium",
      monthlyAmount: 299,
      nextPayment: "2024-02-15",
      paymentMethod: "**** **** **** 4532",
    },
    b2bCredits: 1200, // Mock B2B credits
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "default";
      case "expired":
        return "destructive";
      case "pending":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {clientData.company}</h1>
            <p className="text-primary-foreground/80">Manage your ENYARD products and subscription</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <Card className="glass border-0 shadow-enyard">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Subscription</p>
                  <p className="text-2xl font-bold">{clientData.subscriptionPlan}</p>
                </div>
                <Badge variant={getStatusColor(clientData.subscriptionStatus)}>
                  {clientData.subscriptionStatus}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 shadow-enyard">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Products</p>
                  <p className="text-2xl font-bold">{clientData.products.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 shadow-enyard">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Next Billing</p>
                  <p className="text-lg font-semibold">{clientData.nextBilling}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 shadow-enyard">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Cost</p>
                  <p className="text-2xl font-bold">${clientData.billing.monthlyAmount}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="glass border-0 shadow-enyard">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">B2B Credits</p>
                  <p className="text-2xl font-bold">{clientData.b2bCredits}</p>
                </div>
                <Badge variant="secondary">Credits</Badge>
              </div>
              <Button size="sm" className="mt-4 w-full">Load Credits</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="glass">
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="billing">Billing & Payments</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Active Products</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {clientData.products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <Card key={index} className="glass border-0 shadow-enyard hover-lift">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle>{product.name}</CardTitle>
                              <CardDescription>{product.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant={getStatusColor(product.status)}>
                            {product.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Usage this month</span>
                              <span>{product.usage}%</span>
                            </div>
                            <Progress value={product.usage} className="h-2" />
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Last accessed:</span>
                            <span>{product.lastAccessed}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">
                              Launch App
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass border-0 shadow-enyard">
                <CardHeader>
                  <CardTitle>Current Subscription</CardTitle>
                  <CardDescription>Your active plan and billing information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Plan</span>
                    <Badge>{clientData.billing.currentPlan}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Amount</span>
                    <span className="font-semibold">${clientData.billing.monthlyAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Next Payment</span>
                    <span>{clientData.billing.nextPayment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Payment Method</span>
                    <span className="text-muted-foreground">{clientData.billing.paymentMethod}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-0 shadow-enyard">
                <CardHeader>
                  <CardTitle>B2B Credits</CardTitle>
                  <CardDescription>Manage and load credits for B2B transactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Current Credits</span>
                    <span className="font-semibold">{clientData.b2bCredits}</span>
                  </div>
                  <Button className="w-full">Load More Credits</Button>
                  <p className="text-xs text-muted-foreground">Credits can be used for B2B services and are non-refundable once used.</p>
                </CardContent>
              </Card>
            </div>

            {/* Payment History */}
            <Card className="glass border-0 shadow-enyard">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "2024-01-15", amount: 299, status: "Paid", invoice: "INV-001" },
                    { date: "2023-12-15", amount: 299, status: "Paid", invoice: "INV-002" },
                    { date: "2023-11-15", amount: 299, status: "Paid", invoice: "INV-003" },
                  ].map((payment, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <div>
                        <p className="font-medium">{payment.invoice}</p>
                        <p className="text-sm text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${payment.amount}</p>
                        <Badge variant="default" className="text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="glass border-0 shadow-enyard">
              <CardHeader>
                <CardTitle>Support & Help</CardTitle>
                <CardDescription>Get assistance with your ENYARD products</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-2">Contact Support</span>
                    <span className="text-sm text-muted-foreground">Get help from our team</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-2">Documentation</span>
                    <span className="text-sm text-muted-foreground">Browse our knowledge base</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-2">Video Tutorials</span>
                    <span className="text-sm text-muted-foreground">Learn with guided videos</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-2">Schedule Demo</span>
                    <span className="text-sm text-muted-foreground">Book a personalized session</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientDashboard;