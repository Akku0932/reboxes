'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Package, Truck, Users } from 'lucide-react';
import { MagneticButton } from '@/components/animations';
import PackagingEnvironment from '@/components/animations/PackagingEnvironment';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ opacity, y }}
        className="absolute inset-0 z-0"
      >
        <PackagingEnvironment className="opacity-30" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Packaging
            <br />
            <span className="text-primary">With ReBoxes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sustainable, custom packaging solutions for businesses of all sizes.
            Elevate your brand with our innovative designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <button className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="border-2 border-gray-300 px-8 py-3 rounded-full flex items-center gap-2 hover:border-primary hover:text-primary transition-colors">
                Learn More
              </button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Package className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-600">Packages Delivered</p>
          </div>
          <div className="text-center">
            <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-600">Cities Covered</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold">1K+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 