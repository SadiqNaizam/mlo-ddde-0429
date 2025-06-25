import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Truffle Risotto',
    price: 28.50,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1595908129742-8781ba8b4286?q=80&w=800',
  },
  {
    id: 2,
    name: 'Seared Scallops',
    price: 34.00,
    quantity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1629633059902-c2c62c2f6d5e?q=80&w=800',
  },
  {
    id: 3,
    name: 'Lava Cake',
    price: 15.00,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1586985289936-e04b4f52e057?q=80&w=800',
  },
];

const CartSummary: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  console.log('CartSummary loaded');

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const taxesAndFees = useMemo(() => {
    return subtotal * 0.08; // Example 8% tax
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + taxesAndFees;
  }, [subtotal, taxesAndFees]);

  return (
    <Card className="w-full max-w-lg mx-auto bg-card/80 backdrop-blur-sm border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">Your Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[400px] overflow-y-auto px-6">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <div className="flex items-center gap-4">
                      <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.id, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input readOnly value={item.quantity} className="w-12 h-8 text-center" />
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => handleRemoveItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
      </CardContent>
      {cartItems.length > 0 && (
        <CardFooter className="flex-col items-stretch p-6 space-y-4">
          <Separator />
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Taxes & Fees</span>
            <span>${taxesAndFees.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold text-foreground">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default CartSummary;