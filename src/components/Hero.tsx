'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  { href: 'mailto:hello@alexchen.dev', label: 'Email', icon: Mail },
];

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32" role="banner">
      <div className="absolute inset-0 bg-hero-pattern z-[-2]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid z-[-1]" aria-hidden="true" />
      
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ filter: 'blur(100px)' }}
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <div className="max-w-3xl w-full text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-accent"
            animate={{ scale: [1, 0.9, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <span className="text-sm text-fg-muted">Available for freelance & full-time</span>
        </motion.div>

        <motion.h1
          className="font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Building{' '}
          <span className="text-gradient">digital experiences</span>{' '}
          that matter
        </motion.h1>

        <motion.p
          className="text-lg text-fg-muted max-w-2xl mx-auto mb-10"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Full-stack developer crafting scalable web applications with modern technologies. Currently exploring the intersection of AI and developer tooling.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="btn btn-primary w-full sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', '#projects');
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn btn-secondary w-full sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', '#contact');
            }}
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          role="list"
          aria-label="Social links"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={cn(
                'flex items-center justify-center w-11 h-11 rounded-full glass transition-all duration-300 ease-spring',
                'hover:text-accent hover:border-accent/30 hover:bg-accent-dim hover:-translate-y-1'
              )}
              aria-label={label}
              role="listitem"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <motion.svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </div>
    </header>
  );
}