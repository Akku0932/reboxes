'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BentoBox = ({ delay, children }: { delay: number; children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0],
        type: "spring",
        stiffness: 100
      }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-white text-lg font-medium"
    >
      {text}
    </motion.div>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <motion.div
      className="w-full h-2 bg-white/20 rounded-full overflow-hidden"
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowContent(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <BentoBox delay={0.1}>
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-xl font-bold">R</span>
                </motion.div>
                <AnimatedText text="ReBoxes" delay={0.3} />
              </div>
            </BentoBox>
            
            <BentoBox delay={0.2}>
              <AnimatedText text="Innovative Storage Solutions" delay={0.4} />
            </BentoBox>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <BentoBox delay={0.3}>
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.5)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-2xl">📦</span>
                </motion.div>
                <AnimatedText text="Custom Packaging" delay={0.5} />
              </div>
            </BentoBox>
            
            <BentoBox delay={0.4}>
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.5)",
                      "0 0 0 10px rgba(16, 185, 129, 0)",
                      "0 0 0 0 rgba(16, 185, 129, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                >
                  <span className="text-white text-2xl">🌱</span>
                </motion.div>
                <AnimatedText text="Eco-Friendly" delay={0.6} />
              </div>
            </BentoBox>
            
            <BentoBox delay={0.5}>
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(245, 158, 11, 0.5)",
                      "0 0 0 10px rgba(245, 158, 11, 0)",
                      "0 0 0 0 rgba(245, 158, 11, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                >
                  <span className="text-white text-2xl">⚡</span>
                </motion.div>
                <AnimatedText text="Fast Delivery" delay={0.7} />
              </div>
            </BentoBox>
          </div>
          
          <BentoBox delay={0.6}>
            <div className="space-y-4">
              <AnimatedText text={`Loading: ${progress}%`} delay={0.8} />
              <ProgressBar progress={progress} />
            </div>
          </BentoBox>
          
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <AnimatedText text="Welcome to ReBoxes" delay={0.9} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Loader; 