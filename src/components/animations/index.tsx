'use client';

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

// Parallax scroll effect
export const ParallaxSection = ({ children, offset = 50 }: { children: ReactNode; offset?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Reveal on scroll
export const RevealOnScroll = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button effect
export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x * 0.3,
        y: position.y * 0.3
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// 3D tilt effect
export const TiltCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 10;
    const y = (clientY - (top + height / 2)) / 10;
    
    setRotation({ x: -y, y: x });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`perspective-1000 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal effect
export const TextReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const words = text.split(" ");
  
  return (
    <span className="inline-flex flex-wrap">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.05 }}
          viewport={{ once: true }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Floating animation
export const FloatingElement = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Gradient border animation
export const GradientBorder = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative p-[1px] rounded-lg overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "linear" 
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="relative bg-gray-900 rounded-lg">
        {children}
      </div>
    </div>
  );
};

// Scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Page transition
export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Cursor follower
export const CursorFollower = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY + scrollY.get() });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [scrollY]);
  
  return (
    <motion.div
      className="fixed w-8 h-8 bg-primary/20 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

// Bento grid container
export const BentoGrid = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};

// Bento item
export const BentoItem = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Animated background
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
};

export { default as PackagingEnvironment } from './PackagingEnvironment'; 