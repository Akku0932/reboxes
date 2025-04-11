'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };
  
  // Input animation variants
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
    tap: { scale: 0.98 },
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal 
          className="text-center max-w-3xl mx-auto mb-16" 
          width="100%"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-[var(--color-dark-green)]">Connect</span>
          </h2>
          <p className="text-[var(--color-gray)] text-lg">
            Ready to transform your packaging solutions? Reach out to our team for a consultation 
            or request a custom quote for your project.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal 
            direction="left"
            className="w-full"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-light-gray)] focus:outline-none focus:border-[var(--color-dark-green)]"
                        variants={inputVariants}
                        whileFocus="focus"
                        whileTap="tap"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-light-gray)] focus:outline-none focus:border-[var(--color-dark-green)]"
                        variants={inputVariants}
                        whileFocus="focus"
                        whileTap="tap"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <motion.select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-light-gray)] focus:outline-none focus:border-[var(--color-dark-green)]"
                      variants={inputVariants}
                      whileFocus="focus"
                      whileTap="tap"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <option value="">Select a subject</option>
                      <option value="Custom Packaging">Custom Packaging</option>
                      <option value="Eco-Friendly Solutions">Eco-Friendly Solutions</option>
                      <option value="Large Scale Printing">Large Scale Printing</option>
                      <option value="Branding Services">Branding Services</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </motion.select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-light-gray)] focus:outline-none focus:border-[var(--color-dark-green)]"
                      variants={inputVariants}
                      whileFocus="focus"
                      whileTap="tap"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-auto w-16 h-16 bg-[var(--color-light-green)] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[var(--color-dark-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-[var(--color-gray)]">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </ScrollReveal>
          
          {/* Contact Info */}
          <ScrollReveal 
            direction="right"
            className="w-full"
          >
            <div className="h-full bg-[var(--color-dark-green)] rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="mt-1 opacity-90">info@reboxes.com</p>
                    <p className="opacity-90">support@reboxes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="mt-1 opacity-90">+1 (555) 123-4567</p>
                    <p className="opacity-90">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="mt-1 opacity-90">
                      123 Eco Street, Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center"
                      whileHover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <motion.div
                  className="w-20 h-20 opacity-10"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear"
                  }}
                >
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M100 0L120 60.251L180.252 80.0004L120 99.7498L100 160.001L80.0003 99.7498L19.7487 80.0004L80.0003 60.251L100 0Z" fill="white"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 