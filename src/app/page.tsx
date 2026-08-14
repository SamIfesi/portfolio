import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ProfileHeader } from '@/components/ui/profile-header';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <ProfileHeader githubUsername="SamIfesi" />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
