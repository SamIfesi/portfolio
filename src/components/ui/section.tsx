'use client';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto max-w-3xl px-6 mb-12', className)}>
      {children}
    </section>
  );
}
