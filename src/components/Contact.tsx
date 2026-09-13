'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Mail, Calendar, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  { href: 'mailto:hello@alexchen.dev', label: 'hello@alexchen.dev', icon: Mail, external: false },
  { href: 'https://calendly.com', label: 'Book a call', icon: Calendar, external: true },
  { href: 'https://github.com', label: 'GitHub', icon: Github, external: true },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin, external: true },
];

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('submitting');
    setStatusMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, replace with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) throw new Error('Failed to send');

      setFormStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch {
      setFormStatus('error');
      setStatusMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Get In Touch</span>
        <h2 id="contact-title" className="section-title">Let&apos;s build something together</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 lg:text-3xl">I&apos;m always open to new opportunities</h3>
          <p className="text-fg-muted text-lg mb-10 leading-relaxed">
            Whether you have a project in mind, want to collaborate on open source, or just want to say hi — I&apos;d love to hear from you.
          </p>

          <div className="space-y-3" role="list" aria-label="Contact methods">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className={cn(
                  'flex items-center gap-4 p-4 rounded-lg glass transition-all duration-300 ease-spring',
                  'hover:border-accent/30 hover:bg-accent-dim hover:-translate-x-1'
                )}
                role="listitem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-dim text-accent flex-shrink-0" aria-hidden="true">
                  <method.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="font-medium">{method.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="default" className="p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="Name"
                  id="name"
                  placeholder="Your name"
                  error={errors.name?.message}
                  {...register('name')}
                  required
                  aria-required="true"
                  autoComplete="name"
                />
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  error={errors.email?.message}
                  {...register('email')}
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>

              <Input
                label="Subject"
                id="subject"
                placeholder="Project inquiry, collaboration, etc."
                error={errors.subject?.message}
                {...register('subject')}
                required
                aria-required="true"
              />

              <Textarea
                label="Message"
                id="message"
                placeholder="Tell me about your project..."
                error={errors.message?.message}
                {...register('message')}
                required
                aria-required="true"
                rows={5}
              />

              <Button type="submit" className="w-full sm:w-auto" isLoading={formStatus === 'submitting'}>
                Send Message
              </Button>

              <AnimatePresence mode="wait">
                {formStatus === 'success' || formStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn(
                      'flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium',
                      formStatus === 'success'
                        ? 'bg-green-500/15 border border-green-500/30 text-green-500'
                        : 'bg-red-500/15 border border-red-500/30 text-red-500'
                    )}
                    role="status"
                    aria-live="polite"
                  >
                    {formStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    )}
                    {statusMessage}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}