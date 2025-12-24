'use client';
import { Button } from '@/components/ui/button';
import { logout } from '@/app/actions/auth';
import { TextShimmer } from '../../../components/motion-primitives/text-shimmer';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

import { useAuth } from '@/hooks/useAuth';
import { useData } from '@/hooks/useData';

const UserSection = () => {
  const { user } = useAuth();
  const { getChampionImageUrl } = useData();

  return (
    <div className="flex gap-2">
      <Avatar className="w-20 aspect-square overflow-hidden rounded-full border-2 border-ring">
        <AvatarImage
          src={
            (user && getChampionImageUrl(user?.favorite_champ)) ||
            'https://placehold.co/600x400'
          }
          className="w-full h-full object-cover object-center transform scale-115"
        />
      </Avatar>
      <div className="w-full flex flex-col justify-between">
        <div className="text-left border-b-2 border-ring">
          {user?.username || (
            <TextShimmer className="font-mono text-sm" duration={1}>
              Loading...
            </TextShimmer>
          )}
        </div>
        <div className="flex gap-1 mt-0.5">
          <Button className="flex-1 rounded-xs text-base font-medium transition-all outline-none bg-[var(--accent)] hover:bg-accent/80 text-[var(--background)]">
            My comps
          </Button>
          <Button className="flex-1 rounded-xs text-base font-medium transition-all bg-inherit border-1 border-border/60 hover:bg-background hover:text-foreground/80">
            Profile
          </Button>
          <Button
            className="flex-1 rounded-xs text-base font-medium transition-all bg-inherit border-1 border-border/60 hover:bg-background hover:text-foreground/80"
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
