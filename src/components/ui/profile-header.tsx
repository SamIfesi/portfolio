// src/components/ui/profile-header.tsx
'use client';

import Image from '@/components/ui/image';
import { Pencil } from 'lucide-react';
import { profile } from '@/data/profile';

interface ProfileHeaderProps {
  githubUsername: string;
  onEditCover?: () => void;
  onEditAvatar?: () => void;
}

export function ProfileHeader({
  githubUsername,
  onEditCover,
  onEditAvatar,
}: ProfileHeaderProps) {
  const coverSrc = `https://ghchart.rshah.org/${githubUsername}`;

  return (
    <div className="relative mx-auto w-full max-w-3xl px-6">
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-neutral-900 sm:h-56">
        <div className="absolute inset-0 left-[-48px] w-[calc(100%+48px)] scale-110 origin-left">
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

        <button
          onClick={onEditCover}
          className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/80"
        >
          <Pencil className="h-3.5 w-3.5" />
          Enhance cover image
        </button>
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
          <button
            onClick={onEditAvatar}
            className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white shadow"
          >
            <Pencil className="h-3.5 w-3.5 text-neutral-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
