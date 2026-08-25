import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
