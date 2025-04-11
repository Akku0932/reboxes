'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();

  // Set the initial and animate values based on the direction
  let initial = {};
  switch (direction) {
    case 'up':
      initial = { y: 50, opacity: 0 };
      break;
    case 'down':
      initial = { y: -50, opacity: 0 };
      break;
    case 'left':
      initial = { x: 50, opacity: 0 };
      break;
    case 'right':
      initial = { x: -50, opacity: 0 };
      break;
    case 'none':
      initial = { opacity: 0 };
      break;
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.17, 0.55, 0.55, 1],
        },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ width }}
      initial={initial}
      animate={controls}
    >
      {children}
    </motion.div>
  );
} 