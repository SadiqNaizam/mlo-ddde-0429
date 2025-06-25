import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DishCard from '@/components/DishCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Placeholder menu data with a premium feel
const menuData = {
  starters: [
    { id: 's1', name: 'Truffle-Infused Burrata', price: 22.00, description: 'Creamy burrata with black truffle, heirloom tomatoes, and aged balsamic glaze.', imageUrl: 'https://images.unsplash.com/photo-1579309823528-2e3c358607aa?q=80&w=987&auto=format&fit=crop' },
    { id: 's2', name: 'Wagyu Beef Carpaccio', price: 28.00, description: 'Thinly sliced A5 Wagyu, arugula, shaved parmesan, and lemon-caper vinaigrette.', imageUrl: 'https://images.unsplash.com/photo-1546824623-8d4b24e6414a?q=80&w=987&auto=format&fit=crop' },
    { id: 's3', name: 'Oysters on the Half Shell', price: 24.00, description: 'Half a dozen fresh oysters served with a classic mignonette sauce.', imageUrl: 'https://images.unsplash.com/photo-1599933388126-3d56a4c288b8?q=80&w=987&auto=format&fit=crop' },
  ],
  mains: [
    { id: 'm1', name: 'Pan-Seared Scallops', price: 45.00, description: 'Served with saffron risotto, asparagus, and a citrus beurre blanc.', imageUrl: 'https://images.unsplash.com/photo-1625944001159-c495878d6e75?q=80&w=987&auto=format&fit=crop' },
    { id: 'm2', name: 'Duck Confit', price: 42.00, description: 'Slow-cooked duck leg with potato gratin, haricots verts, and a cherry reduction sauce.', imageUrl: 'https://images.unsplash.com/photo-1598511829630-2357593c6e4e?q=80&w=987&auto=format&fit=crop' },
    { id: 'm3', name: 'Filet Mignon', price: 55.00, description: '8oz center-cut filet with truffle mashed potatoes and a red wine demi-glace.', imageUrl: 'https://images.unsplash.com/photo-1594041682976-24a358253a69?q=80&w=987&auto=format&fit=crop' },
    { id: 'm4', name: 'Lobster Thermidor', price: 75.00, description: 'A classic preparation with a rich, creamy brandy and mustard sauce.', imageUrl: 'https://images.unsplash.com/photo-1625398485573-23cfac01a2d5?q=80&w=987&auto=format&fit=crop' },
  ],
  desserts: [
    { id: 'd1', name: 'Deconstructed Tiramisu', price: 18.00, description: 'Espresso-soaked ladyfingers, mascarpone cream, and cocoa powder presented in a modern style.', imageUrl: 'https://images.unsplash.com/photo-1571115332103-7ac9533b8a39?q=80&w=987&auto=format&fit=crop' },
    { id: 'd2', name: 'Molten Chocolate Lava Cake', price: 16.00, description: 'Served with a raspberry coulis and vanilla bean ice cream.', imageUrl: 'https://images.unsplash.com/photo-1586985289936-76a08a28187e?q=80&w=987&auto=format&fit=crop' },
  ]
};

const MenuPage = () => {
  console.log('MenuPage loaded');

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Exquisite Menu</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of dishes crafted with passion, using only the finest ingredients.
            </p>
          </motion.div>

          <Tabs defaultValue="mains" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-lg mx-auto mb-10">
              <TabsTrigger value="starters">Starters</TabsTrigger>
              <TabsTrigger value="mains">Main Courses</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
            </TabsList>

            <TabsContent value="starters">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.starters.map(dish => (
                  <DishCard key={dish.id} {...dish} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mains">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {menuData.mains.map(dish => (
                  <DishCard key={dish.id} {...dish} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.desserts.map(dish => (
                  <DishCard key={dish.id} {...dish} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Ready to complete your experience?</p>
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold shadow-lg transition-transform hover:scale-105">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;