import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParallaxHeroSection from '@/components/ParallaxHeroSection';
import DishCard from '@/components/DishCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredDishes = [
  {
    id: 'dish-1',
    name: 'Seared Scallops & Saffron Risotto',
    price: 32.50,
    imageUrl: 'https://images.unsplash.com/photo-1621852004132-613955353c4d?q=80&w=1974&auto=format&fit=crop',
    description: 'Perfectly seared sea scallops served on a bed of creamy saffron risotto with a hint of parmesan.',
  },
  {
    id: 'dish-2',
    name: 'Wagyu Beef Burger',
    price: 28.00,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop',
    description: 'Juicy A5 Wagyu beef patty with truffle aioli, aged cheddar, and arugula on a brioche bun.',
  },
  {
    id: 'dish-3',
    name: 'Truffle & Mushroom Pappardelle',
    price: 25.00,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326e20f545c?q=80&w=2080&auto=format&fit=crop',
    description: 'Handmade pappardelle pasta tossed in a rich black truffle and wild mushroom cream sauce.',
  },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ParallaxHeroSection />

        {/* Featured Dishes Section */}
        <section className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-white">
                Curated Weekly Highlights
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experience the pinnacle of our culinary artistry with these featured selections, crafted from the finest seasonal ingredients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  price={dish.price}
                  imageUrl={dish.imageUrl}
                  description={dish.description}
                />
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg py-7 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                <Link to="/menu"> {/* Path from App.tsx */}
                  Explore The Full Menu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;