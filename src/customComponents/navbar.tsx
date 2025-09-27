import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Dropdown from './dropdown';
import { AuthButtons } from './auth-button';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] border-b-2 border-b-[--foreground] py-3 items-center">
      <div className="md:hidden"></div>

      <h1 className="yellowtail-regular md:justify-self-start md:pl-10 text-4xl text-center md:col-start-1">
        Rifter
      </h1>

      <NavigationMenu viewport={false} className="dark hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Comp generator</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-normal">
              Info
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px]">
                <li>
                  <NavigationMenuLink>How it works</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>About us</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Pricing & Free usage</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="justify-self-end pr-10 md:col-start-3">
        <NavigationMenu viewport={false} className="dark hidden md:flex">
          <NavigationMenuList className="gap-1.5">
            <AuthButtons />
          </NavigationMenuList>
        </NavigationMenu>
        <Dropdown className="md:hidden flex items-center" />
      </div>
    </nav>
  );
};

export default Navbar;
