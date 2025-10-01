import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';

const Dropdown = ({ ...props }) => {
  return (
    <section {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Comp Generator</DropdownMenuItem>
          <DropdownMenuItem>How it works</DropdownMenuItem>
          <DropdownMenuItem>About us</DropdownMenuItem>
          <DropdownMenuItem>Pricing & Free usage</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Create an account</DropdownMenuItem>
          <DropdownMenuItem>Login</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default Dropdown;
