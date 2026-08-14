'use client';

import Image from '@/components/ui/image';
import { profile } from '@/data/profile';

interface ProfileHeaderProps {
  githubUsername: string;
}

export function ProfileHeader({ githubUsername }: ProfileHeaderProps) {
  const coverSrc = `https://ghchart.rshah.org/${githubUsername}`;

  return (
    <div className="relative mx-auto w-full max-w-3xl px-6">
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-neutral-900 sm:h-56">
        <div className="absolute inset-0 -left-12 w-[calc(100%+48px)] scale-110 origin-left">
          <Image
            src={coverSrc}
            alt={`${githubUsername}'s GitHub contribution chart`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* --- Avatar --- */}
      <div className="relative h-16">
        <div className="absolute -top-16 left-0 h-32 w-32 rounded-full border-4 border-white bg-white shadow-md dark:border-neutral-950">
          <Image
            src={profile.myImg}
            alt="Profile picture"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
