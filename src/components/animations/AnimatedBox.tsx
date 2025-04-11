'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface AnimatedBoxProps {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

export default function AnimatedBox({ 
  className = '', 
  delay = 0,
  children 
}: AnimatedBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!boxRef.current) return;
    
    // Initial animation
    gsap.fromTo(
      boxRef.current,
      {
        rotateX: -25,
        rotateY: -15,
        opacity: 0,
        scale: 0.8,
      },
      {
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: delay,
        ease: 'power3.out',
      }
    );
    
    // Mouse move animation
    const handleMouseMove = (e: MouseEvent) => {
      if (!boxRef.current) return;
      
      const box = boxRef.current;
      const boxRect = box.getBoundingClientRect();
      
      const boxCenterX = boxRect.left + boxRect.width / 2;
      const boxCenterY = boxRect.top + boxRect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate rotation angles based on mouse position relative to box center
      const rotateY = (mouseX - boxCenterX) / 20;
      const rotateX = (boxCenterY - mouseY) / 20;
      
      gsap.to(box, {
        rotateX,
        rotateY,
        duration: 0.6,
        ease: 'power2.out',
      });
    };
    
    const handleMouseLeave = () => {
      if (!boxRef.current) return;
      
      gsap.to(boxRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    boxRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (boxRef.current) {
        boxRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [delay]);
  
  return (
    <motion.div
      ref={boxRef}
      className={`box-3d ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children || (
        <div className="box-faces">
          {/* Front face */}
          <div className="box-face box-face-front"></div>
          {/* Other faces if needed */}
        </div>
      )}
    </motion.div>
  );
} 