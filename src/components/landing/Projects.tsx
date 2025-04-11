'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  RevealOnScroll, 
  ParallaxSection, 
  TiltCard 
} from '@/components/animations';

const projects = [
  {
    id: 1,
    title: 'Eco-Friendly Packaging',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Sustainable packaging solutions that reduce environmental impact while maintaining product integrity.'
  },
  {
    id: 2,
    title: 'Luxury Gift Boxes',
    category: 'Custom Design',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Elegant and personalized gift packaging that enhances the unboxing experience for premium products.'
  },
  {
    id: 3,
    title: 'Industrial Storage',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Efficient storage solutions for industrial applications, maximizing space utilization and accessibility.'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900" />
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
              Our Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our portfolio of successful projects and see how we've helped clients transform their packaging and storage needs.
            </motion.p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ParallaxSection offset={30}>
            <TiltCard>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-blue-300 rounded-full text-sm mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {activeProject.category}
                      </motion.span>
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {activeProject.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {activeProject.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </ParallaxSection>
          
          <div className="space-y-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeProject.id === project.id 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveProject(project)}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 