'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Projects from '@/components/landing/Projects';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import Loader from '@/components/landing/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <Loader />
        ) : (
          <main className="relative min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
