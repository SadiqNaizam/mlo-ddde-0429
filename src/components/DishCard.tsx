import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface DishCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const DishCard: React.FC<DishCardProps> = ({ id, name, price, imageUrl, description }) => {
  console.log('DishCard loaded for:', name);

  const handleAddToCart = (e: React.MouseEvent) => {
    // Prevent event bubbling up to a potential parent link/element
    e.stopPropagation(); 
    console.log(`Adding ${name} (ID: ${id}) to cart. Description: ${description}`);
    toast.success(`${name} has been added to your cart.`);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-neutral-900 border border-neutral-700/50 text-white h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      
      <div className="relative">
        <AspectRatio ratio={4 / 3}>
          <img 
            src={imageUrl || 'https://via.placeholder.com/400x300'} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105" 
          />
        </AspectRatio>
        
        {/* Darkening overlay for the button to pop */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      {/* Content overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
        <h3 className="text-xl font-bold tracking-tight truncate">{name}</h3>
        <p className="text-lg font-semibold text-amber-400">${price.toFixed(2)}</p>
      </div>

      {/* 'Add to Cart' Button - animates in from the center */}
      <div className="absolute top-1/2 left-1/2 w-full px-4 flex justify-center items-center">
         <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transform: 'translate(-50%, -50%)' }}
         >
            <Button
              onClick={handleAddToCart}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold shadow-lg transform-gpu transition-transform group-hover:scale-110"
              size="lg"
              aria-label={`Add ${name} to cart`}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
         </motion.div>
      </div>
    </motion.div>
  );
};

export default DishCard;