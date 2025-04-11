'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface LoaderProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export default function Loader({ isLoading, onLoadingComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isLoading || !loaderRef.current) return;
    
    const tl = gsap.timeline({
      onComplete: () => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }
    });
    
    // Initial animation
    tl.fromTo(
      '.loader-box',
      { 
        rotateX: 0, 
        rotateY: 0, 
        rotateZ: 0,
        scale: 0
      },
      { 
        rotateX: 0, 
        rotateY: 0, 
        rotateZ: 0,
        scale: 1,
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1
      }
    )
    .fromTo(
      '.loader-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .to(
      '.loader-box',
      { 
        rotateX: 360, 
        rotateY: 180, 
        duration: 2, 
        ease: 'power1.inOut',
        stagger: 0.1
      },
      '-=0.2'
    )
    .to(
      '.loader-container',
      { opacity: 0, duration: 0.5, ease: 'power2.in' },
      '+=0.5'
    );
    
    return () => {
      tl.kill();
    };
  }, [isLoading, onLoadingComplete]);
  
  if (!isLoading) return null;
  
  return (
    <motion.div
      className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
      ref={loaderRef}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center mb-8">
          <div className="loader-box absolute w-20 h-20 bg-[var(--color-dark-green)] rounded-lg shadow-xl" style={{ transform: 'translateZ(-10px)' }} />
          <div className="loader-box absolute w-16 h-16 bg-[var(--color-green)] rounded-lg shadow-xl rotate-12" style={{ transform: 'translateZ(0px)' }} />
          <div className="loader-box absolute w-12 h-12 bg-[var(--color-light-green)] rounded-lg shadow-xl -rotate-12" style={{ transform: 'translateZ(10px)' }} />
          <div className="loader-box absolute w-8 h-8 bg-[var(--color-aqua)] rounded-lg shadow-xl" style={{ transform: 'translateZ(20px)' }} />
        </div>
        
        <motion.h2 
          className="loader-text text-2xl font-bold flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-[var(--color-dark-green)]">Re</span>
          <span>boxes</span>
        </motion.h2>
      </div>
    </motion.div>
  );
} 