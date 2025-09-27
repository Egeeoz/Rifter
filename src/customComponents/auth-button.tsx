'use client';
import { useAuth } from '@/hooks/useAuth';
import { logout } from '@/app/actions/auth';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

export function AuthButtons() {
  const { user, loading } = useAuth();
  // console.log(user, loading);

  // Show loading state or nothing while checking auth
  if (loading) {
    return (
      <>
        <NavigationMenuItem>
          <div className="w-20 h-6 bg-gray-200 animate-pulse rounded"></div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div className="w-12 h-6 bg-gray-200 animate-pulse rounded"></div>
        </NavigationMenuItem>
      </>
    );
  }

  // User is logged in - show logout and username
  if (user) {
    return (
      <>
        <NavigationMenuItem>
          <NavigationMenuLink>
            Welcome, {user.email?.split('@')[0] || 'User'}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <form action={logout}>
            <Button type="submit">Logout</Button>
          </form>
        </NavigationMenuItem>
      </>
    );
  }

  // User is not logged in - show login/signup buttons
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink href="/signup">
          Create an account
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/login">Login</NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}
