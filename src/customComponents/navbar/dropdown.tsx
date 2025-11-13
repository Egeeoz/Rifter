import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { logout } from '@/app/actions/auth';

const Dropdown = ({ ...props }) => {
  const { user } = useAuth();

  return (
    <section {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[var(--background)]">
          <DropdownMenuItem className="focus:bg-inherit">
            Browse
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {!user ? (
            <>
              <DropdownMenuItem className="focus:bg-inherit">
                <a href="/signup">Create an account</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-inherit">
                <a href="/login">Login</a>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem className="focus:bg-inherit">
                <a>My comps</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-inherit">
                <a>Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-inherit">
                <a onClick={logout}>Logout</a>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default Dropdown;
