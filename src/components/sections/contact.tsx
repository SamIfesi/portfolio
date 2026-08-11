import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-foreground dark:text-neutral-400"
      >
        <Mail className="h-4 w-4" />
        {profile.email}
      </a>
      <div className="mt-6 flex gap-4">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {social.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
