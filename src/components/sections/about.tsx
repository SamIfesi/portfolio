"use client";

import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <h2 className="mb-6 text-2xl font-semibold">About</h2>
      <p className="max-w-xl text-neutral-600 dark:text-neutral-400">
        {profile.about}
      </p>
    </Section>
  );
}
