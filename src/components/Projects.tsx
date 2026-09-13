'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'DevFlow',
    description: 'Real-time collaboration platform for distributed teams. Features live code editing, integrated CI/CD pipelines, and AI-powered code reviews.',
    tags: ['React', 'TypeScript', 'Node.js'],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'from-cyan-500/10 via-transparent to-purple-500/10',
  },
  {
    title: 'MetricHub',
    description: 'Analytics dashboard for SaaS businesses. Real-time metrics, cohort analysis, and automated reporting with 99.9% uptime SLA.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'from-emerald-500/10 via-transparent to-teal-500/10',
  },
  {
    title: 'CloudSync',
    description: 'Multi-cloud file synchronization service. End-to-end encryption, conflict resolution, and cross-platform support for 50k+ users.',
    tags: ['Go', 'GraphQL', 'Kubernetes'],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'from-orange-500/10 via-transparent to-red-500/10',
  },
  {
    title: 'TaskMaster',
    description: 'Cross-platform productivity app with offline-first architecture. Smart scheduling, habit tracking, and team workspaces.',
    tags: ['React Native', 'Expo', 'Firebase'],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'from-purple-500/10 via-transparent to-pink-500/10',
  },
  {
    title: 'CodeLens',
    description: 'AI-powered code review assistant. Automated security scanning, style enforcement, and intelligent refactoring suggestions.',
    tags: ['Python', 'FastAPI', 'ML'],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'from-blue-500/10 via-transparent to-indigo-500/10',
  },
  {
    title: 'DesignSystem Pro',
    description: 'Component library and design tokens platform. Visual regression testing, auto-generated docs, and Figma sync integration.',
    tags: ['Vue.js', 'Nuxt', 'Tailwind'],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'from-green-500/10 via-transparent to-emerald-500/10',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Featured Work</span>
        <h2 id="projects-title" className="section-title">Projects I&apos;m proud of</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="default" hover className="flex flex-col h-full overflow-hidden">
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-fg-muted rounded-full glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-fg-muted text-base mb-6 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="primary" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      Source Code
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
}