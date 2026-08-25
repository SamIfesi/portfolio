import { Code2, Server, Database, Wrench, Cloud, Webhook } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { profile } from '@/data/profile';

const categoryIcons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tooling: Wrench,
  'Integration API': Webhook,
  Deployment: Cloud,
};

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="mb-6 text-2xl font-semibold">Skills &amp; Tools</h2>
      <div className="space-y-5">
        {profile.skills.map((group) => {
          const Icon = categoryIcons[group.category] ?? Wrench;
          return (
            <div key={group.category}>
              <div className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
                <Icon className="h-3.5 w-3.5" />
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 hover:border-border hover:dark:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
