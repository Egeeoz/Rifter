import { useAuth } from '@/hooks/useAuth';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import UserSection from './user-section';
import { Button } from '@/components/ui/button';

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
          className="animated-outline font-medium "
        >
          <Button className="text-[var(--background)]">
            Create an account
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/login"
          className="animated-outline font-medium"
        >
          <Button className="text-[var(--background)]">Login</Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}
