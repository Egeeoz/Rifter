import { useAuth } from '@/hooks/useAuth';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import UserSection from './user-section';

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
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/signup"
          className="bg-[var(--accent)] hover:bg-accent/80 text-[var(--background)]"
        >
          Create an account
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/login"
          className="bg-[var(--accent)] hover:bg-accent/80 text-[var(--background)]"
        >
          Login
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}
