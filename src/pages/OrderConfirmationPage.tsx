import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Package, UtensilsCrossed } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  console.log('OrderConfirmationPage loaded');

  // Mock data for display
  const orderDetails = {
    id: 'CKL-2024-8A3D4',
    estimatedDelivery: '30-45 minutes',
    items: [
      { name: 'Truffle Risotto', quantity: 1, price: 28.00 },
      { name: 'Pan-Seared Scallops', quantity: 1, price: 32.50 },
      { name: 'Artisan Sourdough', quantity: 2, price: 5.00 },
    ],
    total: 70.50,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black">
      <Header />
      <main className="flex-grow flex items-center justify-center container px-4 py-12 sm:py-16">
        <Card className="w-full max-w-2xl shadow-lg animate-in fade-in-50 zoom-in-95">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Package size={48} className="text-green-500" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold">Thank You For Your Order!</CardTitle>
            <CardDescription>Your premium dining experience is being prepared.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="font-semibold text-green-800 dark:text-green-300">Order Confirmed</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-400">
                A confirmation has been sent to your email address.
              </AlertDescription>
            </Alert>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Order Number</span>
                <span className="font-mono font-semibold">{orderDetails.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Estimated Delivery</span>
                <span className="font-semibold">{orderDetails.estimatedDelivery}</span>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                Order Summary
              </h3>
              <ul className="space-y-2 text-sm">
                {orderDetails.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-3"/>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" size="lg">
              <Link to="/menu">Continue Browsing Menu</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;