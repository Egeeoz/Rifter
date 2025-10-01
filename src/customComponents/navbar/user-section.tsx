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
        className="w-1/6 aspect-square object-cover border-1 border-red-500"
      />
      <div className="w-full">
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
          <Button className="flex-1 rounded-xs bg-[#FF7518] text-white text-base font-medium transition-all hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none">
            My comps
          </Button>
          <Button className="flex-1 rounded-xs bg-[#FF7518] text-white text-base font-medium transition-all hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none">
            Profile
          </Button>
          <Button
            className="flex-1 rounded-xs bg-[#FF7518] text-white text-base font-medium transition-all hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
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
