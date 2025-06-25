import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageTransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Start slightly below
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20, // Exit by moving slightly up
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.75,
};

const AnimatedPageTransitionWrapper: React.FC<AnimatedPageTransitionWrapperProps> = ({ children, className }) => {
  console.log('AnimatedPageTransitionWrapper loaded');
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageTransitionWrapper;