'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { logout } from '@/app/actions/auth';
import { TextShimmer } from '../../../components/motion-primitives/text-shimmer';

import { useAuth } from '@/hooks/useAuth';

const UserSection = () => {
  const { user } = useAuth();

  return (
    <div className="flex gap-0.5">
      <img
        src="https://placehold.co/600x400"
        alt="profileImg"
        className="w-16 aspect-square object-cover border-1 border-red-500"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex border-1 border-red-500 divide-x-1 divide-red-500 ">
          <div className="w-2/3 text-center mt-auto">
            {user?.username || (
              <TextShimmer className="font-mono text-sm" duration={1}>
                Loading...
              </TextShimmer>
            )}
          </div>
          <div className="ml-4">1</div>
          {/* amount of comps created will be here, use static number instead for now */}
        </div>
        <div className="flex gap-0.5 mt-0.5">
          <Button className="flex-1 rounded-xs text-base font-medium transition-all outline-none bg-[var(--accent)] hover:bg-accent/80 text-[var(--background)]">
            My comps
          </Button>
          <Button className="flex-1 rounded-xs text-base font-medium transition-all outline-none">
            Profile
          </Button>
          <Button
            className="flex-1 rounded-xs text-base font-medium transition-all outline-none"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
