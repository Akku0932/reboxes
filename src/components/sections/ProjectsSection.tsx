'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '../animations/ScrollReveal';

// Mock projects data
const projects = [
  {
    id: 1,
    title: 'Eco-Friendly Food Container',
    category: 'Sustainable Packaging',
    description: 'Biodegradable food containers for an organic food delivery brand, reducing plastic waste by 85%.',
    image: '/projects/project1.jpg', // These images will need to be added to the public folder
    color: 'var(--color-green)',
  },
  {
    id: 2,
    title: 'Luxury Gift Box Collection',
    category: 'Premium Packaging',
    description: 'Custom-designed gift boxes with embossed logo and magnetic closure for a high-end jewelry brand.',
    image: '/projects/project2.jpg',
    color: 'var(--color-clay)',
  },
  {
    id: 3,
    title: 'Minimalist Product Line',
    category: 'Brand Identity',
    description: 'Complete packaging redesign for a skincare brand focused on simplicity and sustainable materials.',
    image: '/projects/project3.jpg',
    color: 'var(--color-aqua)',
  },
  {
    id: 4,
    title: 'E-commerce Shipping Solution',
    category: 'Custom Boxes',
    description: 'Branded shipping boxes with tear strips and custom inserts designed for secure product delivery.',
    image: '/projects/project4.jpg',
    color: 'var(--color-coral)',
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Sample placeholder for images before they're added
  const renderPlaceholderImage = (color: string) => (
    <div 
      className="w-full h-full rounded-xl" 
      style={{ 
        background: `linear-gradient(135deg, ${color} 0%, color-mix(in srgb, ${color} 50%, white) 100%)`,
      }}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="p-4 rounded-lg bg-white bg-opacity-20">
          <span className="text-white font-bold text-lg">Project Image</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal 
          className="text-center max-w-3xl mx-auto mb-16" 
          width="100%"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-[var(--color-dark-green)]">Projects</span>
          </h2>
          <p className="text-[var(--color-gray)] text-lg">
            Discover how we've helped brands transform their packaging with innovative,
            eco-conscious solutions that stand out in the market.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20" ref={projectsRef}>
          {/* Project navigation */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction="left"
                  delay={index * 0.1}
                  className="w-full"
                >
                  <motion.div
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-[var(--color-light-gray)] shadow-md scale-105' 
                        : 'hover:bg-[var(--color-light-gray)] hover:bg-opacity-50'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ x: activeIndex === index ? 0 : 5 }}
                    initial={{ opacity: 0.7, x: -10 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0.7, 
                      x: activeIndex === index ? 0 : -10,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="flex flex-col space-y-2">
                      <span 
                        className="text-sm font-medium" 
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-[var(--color-gray)]">{project.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          {/* Project image showcase */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-32 w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 0.9,
                    rotateY: activeIndex === index ? 0 : -15,
                    transition: { 
                      duration: 0.5, 
                      ease: [0.17, 0.55, 0.55, 1] 
                    }
                  }}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  <div className="w-full h-full relative">
                    {renderPlaceholderImage(project.color)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ScrollReveal>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 