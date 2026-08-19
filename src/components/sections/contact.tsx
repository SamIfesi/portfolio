import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/ui/contact-form";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Have a project in mind, or just want to say hi? Send a message and
        I&apos;ll get back to you.
      </p>

      <ContactForm />

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gray-200 pt-6 dark:border-neutral-800">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-foreground dark:text-neutral-400"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>
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
