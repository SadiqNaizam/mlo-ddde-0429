import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Icons
import { Pencil, Trash2, PlusCircle } from 'lucide-react';

// Mock data for demonstration
const mockOrders = [
  { id: 'CKL-86753', date: '2024-07-15', total: '£45.50', status: 'Delivered' as 'Delivered' | 'Processing' | 'Cancelled' },
  { id: 'CKL-86752', date: '2024-07-02', total: '£28.00', status: 'Delivered' as 'Delivered' | 'Processing' | 'Cancelled' },
  { id: 'CKL-86749', date: '2024-06-21', total: '£52.10', status: 'Cancelled' as 'Delivered' | 'Processing' | 'Cancelled' },
  { id: 'CKL-86745', date: '2024-08-01', total: '£33.75', status: 'Processing' as 'Delivered' | 'Processing' | 'Cancelled' },
];

const mockAddresses = [
    { id: 1, name: 'Home', address: '123 Velvet Lane, London, W1A 1AA' },
    { id: 2, name: 'Work', address: '456 Tech Avenue, London, EC1V 9DD' },
];

const UserAccountPage = () => {
  console.log('UserAccountPage loaded');

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'default'; // default is green-ish in many themes
      case 'Processing':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">My Account</h1>
            <p className="text-muted-foreground mt-2">Manage your orders, addresses, and personal details.</p>
        </header>
        
        <Tabs defaultValue="order-history" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6">
            <TabsTrigger value="order-history">Order History</TabsTrigger>
            <TabsTrigger value="delivery-addresses">Delivery Addresses</TabsTrigger>
            <TabsTrigger value="profile-payment">Profile & Payment</TabsTrigger>
          </TabsList>

          {/* Order History Tab */}
          <TabsContent value="order-history">
            <Card>
              <CardHeader>
                <CardTitle>Your Orders</CardTitle>
                <CardDescription>Review your past orders and quickly re-order your favorites.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell><Badge variant={getStatusVariant(order.status)}>{order.status}</Badge></TableCell>
                        <TableCell className="text-right space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="ghost" size="sm">Re-order</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Delivery Addresses Tab */}
          <TabsContent value="delivery-addresses">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Delivery Addresses</CardTitle>
                    <CardDescription>Manage your saved delivery locations.</CardDescription>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    Add New Address
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                {mockAddresses.map((addr) => (
                    <Card key={addr.id} className="p-4 flex justify-between items-start">
                        <div>
                            <p className="font-semibold">{addr.name}</p>
                            <p className="text-muted-foreground text-sm">{addr.address}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon"><Pencil className="h-4 w-4"/></Button>
                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4"/></Button>
                        </div>
                    </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile & Payment Tab */}
          <TabsContent value="profile-payment">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Keep your personal details up to date.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Alex Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="alex.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+44 7700 900000" />
                  </div>
                  <Button className="mt-2">Save Changes</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your saved payment options.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border rounded-md p-3 flex justify-between items-center">
                        <p className="font-medium">Visa ending in 1234</p>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                    </div>
                    <Button variant="outline" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4"/> Add New Payment Method
                    </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UserAccountPage;