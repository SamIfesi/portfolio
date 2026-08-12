import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 border-b border-neutral-200 bg-background/80 backdrop-blur dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium">
          Samrose
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </nav>
  );
}
