// src/components/ui/profile-header.tsx
'use client';

import Image from '@/components/ui/image';
import { profile } from '@/data/profile';
import { ContributionGrid } from '@/components/ui/contribution-grid';

export function ProfileHeader() {
  return (
    <div className="relative mx-auto w-full max-w-3xl md:pt-32">
      <div className="relative w-full overflow-hidden rounded-t-2xl bg-neutral-900">
        <ContributionGrid />
      </div>

      <div className="relative h-16">
        <div className="absolute -top-12 left-0 h-20 w-20 rounded-full border-3 border-white bg-white shadow-md dark:border-neutral-950">
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
