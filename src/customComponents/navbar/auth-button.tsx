import { useAuth } from '@/hooks/useAuth';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import UserSection from './user-section';
import { LogIn, UserPlus } from 'lucide-react';

export function AuthButtons() {
  const { user } = useAuth();

  // User is logged in - show logout and username
  if (user) {
    return (
      <>
        <UserSection />
      </>
    );
  }

  // User is not logged in - show login/signup buttons
  return (
    <>
      <NavigationMenuItem className="">
        <NavigationMenuLink
          href="/login"
          className="font-normal px-4 py-1.5 border-1 text-foreground/80 hover:text-foreground/100 flex flex-row items-center border-border"
        >
          <LogIn className="mt-0.5" />
          Log in
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/signup"
          className="font-normal px-4 py-1.5 border-1 text-background/80 hover:text-background/100 bg-foreground flex flex-row items-center"
        >
          <UserPlus />
          Create account
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}
