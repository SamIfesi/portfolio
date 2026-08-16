// src/components/ui/contribution-grid.tsx
'use client';
// Needed: this component uses useState/useEffect (fetches data in the browser).

import { useEffect, useState } from 'react';
import type { ContributionCalendar } from '@/types/github';

export function ContributionGrid() {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(setCalendar)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-neutral-500">
        Couldn&apos;t load contribution data
      </div>
    );
  }

  if (!calendar) {
    // simple loading skeleton — same grid shape, pulsing gray
    return (
      <div className="flex animate-pulse items-center gap-0.75 px-2">
        {Array.from({ length: 52 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-0.75">
            {Array.from({ length: 7 }).map((_, j) => (
              <div
                key={j}
                className="h-2.5 w-2.5 rounded-xs bg-neutral-800"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.75 overflow-x-auto px-1">
      {calendar.weeks.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-0.75">
          {week.contributionDays.map((day) => (
            <div
              key={day.date}
              title={`${day.contributionCount} contributions on ${day.date}`}
              className="h-3 w-3 rounded-xs"
              style={{ backgroundColor: day.color }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
