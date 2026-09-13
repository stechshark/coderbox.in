import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const variants = {
      default: 'bg-card-bg backdrop-blur-xl backdrop-saturate-180 border border-card-border rounded-xl shadow-glow-sm',
      glass: 'bg-glass-bg backdrop-blur-xl backdrop-saturate-180 border border-glass-border rounded-xl shadow-glow',
      elevated: 'bg-bg-elevated border border-card-border rounded-xl shadow-glow',
    };

    const hoverStyles = hover
      ? 'transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-glow hover:border-accent/20'
      : '';

    return (
      <div
        ref={ref}
        className={cn(variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';