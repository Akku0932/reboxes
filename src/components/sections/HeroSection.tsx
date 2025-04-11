'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AnimatedBox from '../animations/AnimatedBox';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      subheadingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
    
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPos = window.scrollY;
      const parallaxSpeed = 0.5;
      
      gsap.to(sectionRef.current.querySelector('.parallax-bg'), {
        y: scrollPos * parallaxSpeed,
        duration: 0.5,
        ease: 'none',
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-light-green)] via-transparent to-[var(--background)] opacity-10 z-0"></div>
        
        {/* Abstract shapes in the background */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--color-aqua)] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-[var(--color-green)] opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/5 w-72 h-72 rounded-full bg-[var(--color-yellow)] opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <span className="text-[var(--color-dark-green)]">Transform</span> Your 
            <br />
            Packaging Vision
            <br />
            Into Reality
          </motion.h1>
          
          <motion.p
            ref={subheadingRef}
            className="text-lg md:text-xl text-[var(--color-gray)] mb-8 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.17, 0.55, 0.55, 1] }}
          >
            Innovative, eco-conscious printing and packaging solutions
            designed to elevate your brand and reduce environmental impact.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.button>
            
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Main 3D Box */}
            <AnimatedBox 
              className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden"
              delay={0.8}
            >
              <div className="w-full h-full p-6 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-3 w-32 bg-[var(--color-light-green)] rounded-full"></div>
                  <div className="h-8 w-8 rounded-lg bg-[var(--color-coral)]"></div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-24 bg-[var(--color-light-gray)] rounded-lg"></div>
                  <div className="h-12 bg-[var(--color-sand)] rounded-lg w-3/4"></div>
                  <div className="flex gap-2 mt-auto">
                    <div className="h-10 flex-1 bg-[var(--color-green)] rounded-lg"></div>
                    <div className="h-10 flex-1 bg-[var(--color-aqua)] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </AnimatedBox>
            
            {/* Smaller decorative boxes */}
            <AnimatedBox 
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--color-yellow)] rounded-lg shadow-lg"
              delay={1.2}
            />
            
            <AnimatedBox 
              className="absolute -top-8 -left-8 w-24 h-24 bg-[var(--color-aqua)] rounded-lg shadow-lg"
              delay={1.4}
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.8,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
      >
        <div className="w-6 h-10 border-2 border-[var(--color-dark-green)] rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-[var(--color-dark-green)] rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
} 