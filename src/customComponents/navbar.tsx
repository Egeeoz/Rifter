import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] border-b-2 border-b-[--foreground] py-3 justify-center items-center">
      <h1 className="yellowtail-regular justify-self-start pl-10 text-4xl">
        Rifter
      </h1>
      <NavigationMenu viewport={false} className="dark">
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
      <NavigationMenu viewport={false} className="dark justify-self-end pr-10">
        <NavigationMenuList className="gap-1.5">
          <NavigationMenuItem>
            <NavigationMenuLink>Create an account</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Login</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
