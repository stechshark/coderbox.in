import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className="block text-xs font-medium text-fg-muted uppercase tracking-wider mb-2">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3.5 bg-glass-bg backdrop-blur-xl backdrop-saturate-180 border border-glass-border rounded-lg text-fg placeholder-fg-muted/50 transition-all duration-300 ease-spring resize-y min-h-[140px]',
            'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';