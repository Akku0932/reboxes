'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Custom Packaging', href: '#' },
        { name: 'Eco-Friendly Materials', href: '#' },
        { name: 'Printing Solutions', href: '#' },
        { name: 'Branding', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-dark-gray)]">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="#" className="inline-block mb-6">
              <motion.div
                className="text-2xl font-bold text-white flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-[var(--color-light-green)]">Re</span>
                <span>boxes</span>
              </motion.div>
            </Link>
            
            <p className="text-[var(--color-light-gray)] mb-6 max-w-md">
              Innovative, sustainable packaging and printing solutions that help brands 
              stand out while reducing environmental impact.
            </p>
            
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--color-dark-green)] flex items-center justify-center text-white"
                  whileHover={{ 
                    backgroundColor: 'var(--color-light-green)', 
                    y: -3,
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
          
          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[var(--color-light-gray)] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-[var(--color-gray)] text-[var(--color-light-gray)] flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Reboxes. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-[var(--color-dark-gray)]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 