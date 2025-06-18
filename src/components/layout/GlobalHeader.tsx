import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Search, FlaskConical, School } from 'lucide-react';
import { cn } from "@/lib/utils"; // Assuming cn is available from shadcn setup
// import MegaMenuItem from '@/components/MegaMenuItem'; // Assuming this would be imported

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const GlobalHeader: React.FC = () => {
  console.log('GlobalHeader loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary font-semibold' : 'text-foreground/70'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium hover:bg-accent ${
      isActive ? 'bg-accent text-primary font-semibold' : 'text-foreground/80'
    }`;

  const academicsMegaMenuItems = [
    {
      title: "Computer Science",
      href: "/academics-hub?discipline=cs", // Example specific link
      description: "Explore AI, ML, Cybersecurity, and more.",
    },
    {
      title: "Electrical Engineering",
      href: "/academics-hub?discipline=ee",
      description: "Innovate in power systems, electronics, and signal processing.",
    },
    {
      title: "Mechanical Engineering",
      href: "/academics-hub?discipline=me",
      description: "Design and build the future of robotics and automation.",
    },
    {
      title: "Bioengineering",
      href: "/academics-hub?discipline=bioe",
      description: "Merge biology and engineering for health and environmental solutions.",
    },
  ];


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <School className="h-8 w-8 text-primary" /> {/* Using School as a generic university icon */}
          <span className="font-bold text-xl tracking-tight">Innovatech University</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {/* Here you would map over your disciplines and use MegaMenuItem components */}
                  {/* For example: <MegaMenuItem title="AI" description="Cutting-edge research..." icon={<Cpu />} /> */}
                  {academicsMegaMenuItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                      {/* This ListItem is a simplified placeholder for what MegaMenuItem might render */}
                    </ListItem>
                  ))}
                   <ListItem title="All Programs" href="/academics-hub" className="md:col-span-2 bg-secondary hover:bg-secondary/90">
                      View all our prestigious academic programs and research areas.
                    </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavLink to="/admissions" className={navigationMenuTriggerStyle()}>
                Admissions
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/faculty-directory" className={navigationMenuTriggerStyle()}>
                Faculty
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/research-and-innovation" className={navigationMenuTriggerStyle()}>
                Research
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm">
              <div className="p-4">
                <div className="mb-6 flex items-center gap-2">
                   <School className="h-7 w-7 text-primary" />
                   <span className="font-bold text-lg">Innovatech University</span>
                </div>
                <nav className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <NavLink to="/" className={mobileNavLinkClasses}>Home</NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink to="/academics-hub" className={mobileNavLinkClasses}>Academics</NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink to="/admissions" className={mobileNavLinkClasses}>Admissions</NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink to="/faculty-directory" className={mobileNavLinkClasses}>Faculty</NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink to="/research-and-innovation" className={mobileNavLinkClasses}>Research</NavLink>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;