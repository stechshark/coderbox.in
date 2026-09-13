'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('#about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -60% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-6 py-3 rounded-xl glass',
          'transition-all duration-300 ease-spring',
          isScrolled && 'top-4 shadow-glow',
          'lg:top-6 lg:px-8 lg:py-4'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="font-mono text-lg font-semibold text-accent tracking-tight"
          aria-label="Alex Chen - Home"
        >
          AC
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-spring',
                activeSection === item.href
                  ? 'text-fg bg-accent-dim'
                  : 'text-fg-muted hover:text-fg hover:bg-accent-dim'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:inline-flex">
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="btn btn-primary"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-accent-dim transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-4 right-4 lg:hidden z-40 glass overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="py-4 px-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    'block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ease-spring',
                    activeSection === item.href
                      ? 'text-fg bg-accent-dim'
                      : 'text-fg-muted hover:text-fg hover:bg-accent-dim'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="btn btn-primary w-full mt-4 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}