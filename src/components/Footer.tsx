import Link from 'next/link';
import { cn } from '@/lib/utils';

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition-colors duration-200',
                'text-fg-muted hover:text-accent'
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', link.href);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-fg-muted">
          &copy; {new Date().getFullYear()} Alex Chen. Built with care and curiosity.
        </p>
      </div>
    </footer>
  );
}