'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { profile } from '@/data/profile';
import { ProfileHeader } from '@/components/ui/profile-header';

export function Hero() {
  const [firstName, ...rest] = profile.name.split(' ');
  const lastName = rest.join(' ');

  const nameRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!nameRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w) setWidth(w);
    });

    observer.observe(nameRef.current);
    return () => observer.disconnect();
  }, []);

  // Build a curve whose control points scale with the real text width
  const pad = 2;
  const curveHeight = 6;
  const path =
    width > 0
      ? `M ${pad} ${curveHeight} C ${width * 0.25} ${curveHeight - 5}, ${
          width * 0.75
        } ${curveHeight - 5}, ${width - pad} ${curveHeight}`
      : '';

  return (
    <Section className="flex min-h-[70vh] flex-col justify-center">
      <ProfileHeader />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 text-xl text-neutral-500 dark:text-neutral-400">
          Hello, I&apos;m
        </p>

        <h1 className="text-7xl font-bold tracking-tight sm:text-8xl">
          <span ref={nameRef} className="relative inline-block mb-3 md:mb-0">
            {firstName}
            {width > 0 && (
              <svg
                className="absolute left-0 top-full z-3"
                width={width}
                height={curveHeight + 4}
                viewBox={`0 0 ${width} ${curveHeight + 4}`}
                fill="none"
              >
                <motion.path
                  d={path}
                  stroke="#3b82f6"
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                />
              </svg>
            )}
          </span>{' '}
          {lastName}
        </h1>

        <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
          {profile.title}
        </p>
        <p className="mt-2 max-w-xl text-neutral-500 dark:text-neutral-400">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/Ifesinachi Eke - CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-border px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground dark:border-neutral-700"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
