'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '12', label: 'Open Source Contribs' },
];

const skills = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS',
  'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Prisma',
  'Redis', 'Kubernetes',
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">About Me</span>
        <h2 id="about-title" className="section-title">Get to know me better</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 lg:text-3xl">Full-stack developer with a passion for clean code</h3>
          <p className="text-fg-muted text-lg mb-6 leading-relaxed">
            I&apos;m Alex, a software engineer based in San Francisco with 6+ years of experience building web applications. I specialize in React, Node.js, and cloud infrastructure, with a growing interest in AI-powered developer tools.
          </p>
          <p className="text-fg-muted text-lg mb-8 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical articles, or hiking the Bay Area trails. I believe in writing code that&apos;s not just functional, but maintainable and delightful to work with.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-gradient leading-none">{stat.value}</div>
                <div className="text-xs text-fg-muted uppercase tracking-wider mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3" role="list" aria-label="Technologies">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-spring',
                  'bg-glass-bg backdrop-blur-xl backdrop-saturate-180 border border-glass-border',
                  'hover:border-accent/30 hover:text-accent hover:bg-accent-dim cursor-default'
                )}
                role="listitem"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-300 ease-spring',
                    'bg-glass-bg backdrop-blur-xl backdrop-saturate-180 border border-glass-border',
                    'hover:border-accent/30 hover:text-accent hover:bg-accent-dim hover:-translate-y-0.5 cursor-default'
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}