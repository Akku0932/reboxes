'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Custom Packaging', href: '#services' },
        { name: 'Storage Solutions', href: '#services' },
        { name: 'Logistics', href: '#services' },
        { name: 'Consulting', href: '#services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#projects' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Support', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold">
              ReBoxes
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Transforming spaces with innovative packaging and storage solutions that combine style, functionality, and sustainability.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} ReBoxes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            <a
              href="mailto:newsletter@reboxes.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Subscribe to our newsletter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 