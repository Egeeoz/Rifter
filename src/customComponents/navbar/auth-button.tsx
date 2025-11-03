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
          className="animated-outline font-medium "
        >
          <span className="animated-outline__label">Create an account</span>
          <span className="animated-outline__side bottom" />
          <span className="animated-outline__side left" />
          <span className="animated-outline__side top" />
          <span className="animated-outline__side right" />
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/login"
          className="animated-outline font-medium"
        >
          <span className="animated-outline__label">Login</span>
          <span className="animated-outline__side bottom" />
          <span className="animated-outline__side left" />
          <span className="animated-outline__side top" />
          <span className="animated-outline__side right" />
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}
