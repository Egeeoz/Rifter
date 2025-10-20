import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

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
              <DropdownMenuItem>Create an account</DropdownMenuItem>
              <DropdownMenuItem>Login</DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>My comps</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default Dropdown;
