'use client';

import { motion } from 'framer-motion';
import { 
  Package, 
  Box, 
  Truck, 
  Leaf, 
  Shield, 
  Clock 
} from 'lucide-react';
import { 
  RevealOnScroll, 
  TiltCard, 
  GradientBorder 
} from '@/components/animations';

const services = [
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Tailored packaging solutions designed to perfectly fit your products and brand identity.'
  },
  {
    icon: Box,
    title: 'Storage Solutions',
    description: 'Innovative storage systems that maximize space efficiency and organization.'
  },
  {
    icon: Truck,
    title: 'Logistics & Delivery',
    description: 'Seamless delivery services with real-time tracking and secure handling.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Sustainable materials and processes that minimize environmental impact.'
  },
  {
    icon: Shield,
    title: 'Secure Packaging',
    description: 'Protective packaging that ensures your items arrive safely at their destination.'
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Fast production and delivery times to meet your urgent needs.'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  return (
    <RevealOnScroll delay={index * 0.1}>
      <TiltCard>
        <GradientBorder>
          <div className="p-6 h-full flex flex-col items-center text-center">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        </GradientBorder>
      </TiltCard>
    </RevealOnScroll>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our comprehensive range of packaging and storage solutions designed to meet your unique needs.
            </motion.p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 