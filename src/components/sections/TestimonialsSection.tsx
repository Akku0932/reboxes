'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Reboxes transformed our product packaging with sustainable solutions that not only look amazing but also align with our environmental values. Our customers constantly praise the quality and design.",
    author: "Emily Chen",
    position: "CEO, GreenLife Foods",
    avatar: "/testimonials/avatar1.jpg", // These will need to be added to public folder
  },
  {
    id: 2,
    quote: "Working with Reboxes has been incredible. They understood our luxury brand vision and created packaging that enhances the unboxing experience for our customers. The attention to detail is unmatched.",
    author: "Marcus Johnson",
    position: "Creative Director, Luxe Cosmetics",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    quote: "The team at Reboxes helped us reduce our packaging waste by 40% while maintaining premium quality and design. They're true partners in our sustainability journey and invaluable to our business.",
    author: "Sarah Williams",
    position: "Sustainability Officer, EcoPack",
    avatar: "/testimonials/avatar3.jpg",
  },
  {
    id: 4,
    quote: "As an e-commerce business, our packaging needs are unique. Reboxes created a custom solution that's durable for shipping, beautiful for our customers, and easy to assemble for our fulfillment team.",
    author: "David Rodriguez",
    position: "Operations Manager, ShopDirect",
    avatar: "/testimonials/avatar4.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };
  
  // Placeholder for avatar images
  const renderAvatarPlaceholder = (id: number) => (
    <div 
      className="w-14 h-14 rounded-full bg-[var(--color-green)] flex items-center justify-center text-white font-bold"
    >
      {id}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--color-light-green)] bg-opacity-10">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal 
          className="text-center max-w-3xl mx-auto mb-16" 
          width="100%"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-[var(--color-dark-green)]">Clients</span> Say
          </h2>
          <p className="text-[var(--color-gray)] text-lg">
            We've partnered with businesses across industries to transform their 
            packaging. Here's what they have to say about working with us.
          </p>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto relative pt-10 pb-16">
          {/* Testimonial slider */}
          <div className="relative h-80 sm:h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex flex-col items-center text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="mb-6">
                  <svg 
                    className="w-12 h-12 mx-auto mb-4 text-[var(--color-aqua)]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                
                <blockquote className="text-lg md:text-xl font-medium mb-6 px-4 max-w-3xl">
                  {testimonials[currentIndex].quote}
                </blockquote>
                
                <div className="flex items-center mt-4">
                  {renderAvatarPlaceholder(testimonials[currentIndex].id)}
                  <div className="ml-4 text-left">
                    <p className="font-bold">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-[var(--color-gray)]">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--color-dark-green)] w-10'
                    : 'bg-[var(--color-green)] bg-opacity-40'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
            <motion.button
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--color-dark-green)]"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--color-dark-green)]"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
} 