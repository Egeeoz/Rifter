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
  const user = useAuth();

  return (
    <section {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Browse</DropdownMenuItem>
          <DropdownMenuSeparator />
          {!user ? (
            <>
              <DropdownMenuItem>
                <a href="/signup">Create an account</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/login">Login</a>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <a>My comps</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a>Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
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
