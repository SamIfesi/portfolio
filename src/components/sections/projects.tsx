'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import Image from '@/components/ui/image';
import { Modal } from '@/components/ui/modal';
import { profile } from '@/data/profile';
import { ExternalLink  } from 'lucide-react';

type Project = (typeof profile.projects)[number];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <h2 className="mb-8 text-2xl font-semibold">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setSelected(project)}
            className="group flex flex-col justify-between rounded-lg border border-gray-300 p-5 text-left transition-colors hover:border-border dark:border-neutral-800"
          >
            <div className="relative h-32 w-full overflow-hidden rounded-lg">
              <Image
                src={project.img}
                alt={project.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-5">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{project.name}</h3>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 bg-gray-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-blue-500">
              {selected.type}
            </p>
            <h3 className="mt-1 text-2xl font-semibold">{selected.name}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              {selected.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {}
              <a
                href={selected.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a
                href={selected.codeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                {/* <Github className="h-4 w-4" />  */}
                View Code
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
              <div>
                <p className="text-xs uppercase text-neutral-500">Role</p>
                <p className="mt-1">{selected.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-neutral-500">Stack</p>
                <p className="mt-1">{selected.tags.join(' · ')}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}