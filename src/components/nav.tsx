"use client";

import Link from "next/link";
import { Home, User, FolderKanban, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Nav() {
  return (
    <>
      {/* Top nav — md and up */}
      <nav className="fixed top-4 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-neutral-200 bg-background/80 backdrop-blur md:block dark:border-neutral-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-8 px-6 py-3">
          <Link href="/" className="text-sm font-medium">
            Samrose
          </Link>
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Bottom icon dock — mobile only */}
      <nav className="fixed bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-neutral-200 bg-background/80 backdrop-blur md:hidden dark:border-neutral-800">
        <div className="flex items-center gap-1 px-3 py-2">
          <Link href="/" aria-label="Home" className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-foreground">
            <Home className="h-5 w-5" />
          </Link>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}