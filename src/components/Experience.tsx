'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const experiences = [
  {
    date: '2022 - Present',
    title: 'Senior Software Engineer',
    company: 'Vercel',
    achievements: [
      'Led the development of Edge Functions runtime, improving cold start performance by 40%',
      'Architected the next-gen preview deployment infrastructure serving 2M+ deployments/day',
      'Mentored 5 engineers and established coding standards across 3 teams',
    ],
  },
  {
    date: '2020 - 2022',
    title: 'Full Stack Engineer',
    company: 'Stripe',
    achievements: [
      'Built and maintained the Connect onboarding platform for 100K+ merchants',
      'Designed API v2 for bank account verification, reducing fraud by 60%',
      'Championed TypeScript adoption across the organization',
    ],
  },
  {
    date: '2018 - 2020',
    title: 'Software Engineer',
    company: 'Airbnb',
    achievements: [
      'Developed the host onboarding flow, increasing activation rate by 25%',
      'Migrated legacy Rails services to a modern React/GraphQL architecture',
      'Built internal developer tools improving team velocity by 30%',
    ],
  },
  {
    date: '2017 - 2018',
    title: 'Frontend Engineer',
    company: 'Digital Agency',
    achievements: [
      'Delivered 15+ client projects using React, Vue, and Node.js',
      'Established component library and design system used across all projects',
      'Implemented CI/CD pipelines reducing deployment time from hours to minutes',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Journey</span>
        <h2 id="experience-title" className="section-title">Where I&apos;ve been</h2>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent" aria-hidden="true" />
        
        <div className="space-y-8 pl-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute left-[-22px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-bg shadow-[0_0_0_2px_rgb(34,211,238)]" aria-hidden="true" />
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{exp.date}</div>
              
              <Card variant="default" className="p-6">
                <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                <p className="text-fg-muted mb-4">{exp.company}</p>
                <ul className="space-y-3" role="list">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className={cn(
                        'relative pl-5 text-fg-muted text-base leading-relaxed',
                        'before:content-["▸"] before:absolute before:left-0 before:text-accent before:text-sm'
                      )}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}