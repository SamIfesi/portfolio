import { Section } from '@/components/ui/section';
import Image from '@/components/ui/image';
import { profile } from '@/data/profile';

export function About() {
  return (
    <Section id="about">
      <h2 className="mb-6 text-2xl font-semibold">About</h2>

      <div>
        <Image
          src={profile.myImg}
          alt="Profile picture"
          width={96}
          height={96}
          className="
        float-left
        mr-[0.9rem]
        mt-[0.2rem]
        mb-[0.35rem]
        rounded-full
        object-cover
        [shape-outside:circle(50%)]
      "
        />

        <p className="text-neutral-600 dark:text-neutral-400 text-justify">
          Driven by curiosity and a focus on clean engineering, I build scalable
          web solutions across fintech, e-commerce, and interactive media.
          Working primarily with{' '}
          <b>React.js, PHP, JavaScript, and Tailwind CSS</b> and actively
          building with <b>Next.js and TypeScript</b>, I specialize in shipping
          complete feature sets: from Gemini API-powered feedback tools and
          Cloudinary asset pipelines to containerized Docker workflows and
          automated cron scheduling.
        </p>

        <p className="mt-2 text-neutral-600 dark:text-neutral-400 md:text-justify">
          Beyond code, my experience as a former University Faculty President
          has given me a strong foundation in community leadership,
          communication, and project coordination. Whether collaborating with
          designers or configuring search engine indexing on Google Search
          Console, I bridge design intuition with solid technical execution.
        </p>

        <p className="mt-2 text-neutral-600 dark:text-neutral-400 md:text-justify">
          When I&apos;m offline, you&apos;ll find me exploring epic fantasy universes,
          tinkering with mobile emulator settings, or following European
          football line-ups.
        </p>

        <div className="clear-both" />
      </div>
    </Section>
  );
}
