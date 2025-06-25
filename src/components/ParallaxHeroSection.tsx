import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat } from 'lucide-react';

const ParallaxHeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  console.log('ParallaxHeroSection loaded');

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-zinc-900"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop)`, // Placeholder high-res food image
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="flex items-center gap-4">
          <ChefHat className="w-12 h-12 md:w-16 md:h-16 text-amber-400" />
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl font-serif">
            CloudKitchen Luxe
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-200">
          A Symphony of Flavors, Delivered with Elegance.
        </p>
        <Button asChild size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg py-7 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
          <Link to="/menu">
            View Our Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ParallaxHeroSection;