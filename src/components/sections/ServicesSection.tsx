'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package2, Recycle, Printer, PenTool, TrendingUp, HeartHandshake } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const services = [
  {
    icon: Package2,
    title: 'Custom Packaging',
    description: 'Bespoke packaging solutions designed to perfectly showcase your product and brand identity.',
    color: 'var(--color-dark-green)',
    bgColor: 'var(--color-off-white)',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Materials',
    description: 'Sustainable packaging options using recycled, biodegradable, and compostable materials.',
    color: 'var(--color-green)',
    bgColor: 'var(--color-off-white)',
  },
  {
    icon: Printer,
    title: 'Large Scale Printing',
    description: 'High-volume, high-quality printing for boxes, labels, marketing materials, and more.',
    color: 'var(--color-aqua)',
    bgColor: 'var(--color-off-white)',
  },
  {
    icon: PenTool,
    title: 'Package Design',
    description: 'Creative design services to craft eye-catching packaging that stands out on the shelf.',
    color: 'var(--color-coral)',
    bgColor: 'var(--color-off-white)',
  },
  {
    icon: TrendingUp,
    title: 'Branding Solutions',
    description: 'Comprehensive branding strategy and implementation across all packaging and print materials.',
    color: 'var(--color-yellow)',
    bgColor: 'var(--color-off-white)',
  },
  {
    icon: HeartHandshake,
    title: 'Consultation Services',
    description: 'Expert advice on materials, design, logistics, and sustainability for all your packaging needs.',
    color: 'var(--color-clay)',
    bgColor: 'var(--color-off-white)',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--color-light-gray)] bg-opacity-30">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal 
          className="text-center max-w-3xl mx-auto mb-16" 
          width="100%"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-[var(--color-dark-green)]">Innovative</span> Services
          </h2>
          <p className="text-[var(--color-gray)] text-lg">
            We offer a comprehensive range of printing and packaging solutions 
            with a focus on sustainability, innovation, and quality craftsmanship.
          </p>
        </ScrollReveal>
        
        <motion.div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="p-8 flex flex-col h-full">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" 
                  style={{ backgroundColor: `color-mix(in srgb, ${service.color} 15%, white)` }}
                >
                  <service.icon 
                    size={32} 
                    className="transform transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: service.color }}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[var(--color-gray)] flex-grow mb-4">{service.description}</p>
                
                <motion.button
                  className="text-[var(--color-dark-green)] font-medium flex items-center mt-auto"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Learn more
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 