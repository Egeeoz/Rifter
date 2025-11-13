import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Dropdown from './dropdown';
import { AuthButtons } from './auth-button';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] border-b-2 border-b-[--foreground] py-3 items-center min-h-20">
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
            <NavigationMenuLink className="p-0">
              <Button className="font-medium text-2xl py-6 px-7 text-[var(--background)]">
                Browse
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="justify-self-end md:pr-10 md:col-start-3 min-w-0 flex items-center">
        <NavigationMenu viewport={false} className="dark hidden md:flex">
          <NavigationMenuList>
            <AuthButtons />
          </NavigationMenuList>
        </NavigationMenu>
        <Dropdown className="md:hidden flex items-center pr-5" />
      </div>
    </nav>
  );
};

export default Navbar;
