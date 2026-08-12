import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <Section className="flex min-h-[60vh] flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 text-xl text-neutral-500 dark:text-neutral-400">
          Hello, I&apos;m
        </p>
        <h1 className="text-7xl font-bold tracking-tight sm:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
          {profile.title}
        </p>
        <p className="mt-2 max-w-xl text-neutral-500 dark:text-neutral-400">
          {profile.tagline}
        </p>
      </motion.div>
    </Section>
  );
}
