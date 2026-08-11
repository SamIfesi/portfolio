'use client';
import { Section } from '@/components/ui/section';
import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="mb-8 text-2xl font-semibold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="group flex flex-col justify-between rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <div>
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{project.name}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
