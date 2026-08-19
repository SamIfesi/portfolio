'use client';
// Needed: this component uses useState for form values + submission status,
// which only exist in the browser. A plain Server Component can't hold state.

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Input from '@/components/ui/input';
import { profile } from '@/data/profile';

type Status = 'idle' | 'submitting' | 'sent';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate() {
    const next: typeof errors = {};

    if (!name.trim()) next.name = 'Please enter your name.';

    if (!email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'That email doesn\u2019t look right.';
    }

    if (!message.trim()) next.message = 'Say a little about what you need.';

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // No email-sending backend is wired up yet, so this opens the user's
    // mail client pre-filled with the message. Swap this block out once
    // you add a real API route (e.g. src/app/api/contact/route.ts posting
    // through Resend, Postmark, etc.) — the validation above stays the same.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div className="flex items-center gap-2 rounded-card border border-gray-300 px-4 py-3 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
        Your email app should be open with the message ready to send.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Name"
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          placeholder="Your name"
        />
        <Input
          label="Email"
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          placeholder="you@example.com"
        />
      </div>

      <Input
        as="textarea"
        label="Message"
        id="contact-message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
        placeholder="What are you reaching out about?"
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {status === 'submitting' ? 'Opening your mail app…' : 'Send message'}
      </button>
    </form>
  );
}