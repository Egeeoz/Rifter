import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Dropdown from './dropdown';
import { AuthButtons } from './auth-button';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] py-3 items-center min-h-15 top-0 sticky w-full backdrop-blur-md border-b-1 border-[#28282B] z-50">
      <div className="md:hidden"></div>

      <h1
        className="md:justify-self-start md:pl-10 text-5xl text-center md:col-start-1 text-[#FF7518]"
        style={{
          WebkitTextStroke: '1px #222', // thick border
          fontFamily: '"Yellowtail"',
          letterSpacing: '-0.05em',
          textShadow: '2px 2px 0 #fff, 4px 4px 0 #222', // highlight and shadow
        }}
      >
        Rifter
      </h1>

      <NavigationMenu
        viewport={false}
        className="hidden md:flex backdrop-blur-3xl"
      >
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink className="font-light text-lg bg-transparent text-foreground/80 hover:text-foreground/100 hover:bg-inherit/80">
              Browse
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="font-light text-lg bg-transparent text-foreground/80 hover:text-foreground/100 hover:bg-inherit/80">
              Get Started
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="justify-self-end md:pr-10 md:col-start-3 min-w-0 flex items-center">
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList className="gap-3">
            <AuthButtons />
          </NavigationMenuList>
        </NavigationMenu>
        <Dropdown className="md:hidden flex items-center pr-5" />
      </div>
    </nav>
  );
};

export default Navbar;
