import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
