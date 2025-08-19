"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle"; // optional, if you created it
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserButton } from '@clerk/nextjs';

export function AppHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href="/" className="font-semibold">
          DevTinder
        </Link>

        {/* Center: Navigation */}
        <NavigationMenu viewport>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={isActive("/")}>
                <Link
                  href="/"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm",
                    isActive("/") && "bg-accent text-accent-foreground"
                  )}
                >
                  Discovery
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Community</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid min-w-[280px] gap-1 p-2">
                  <NavigationMenuLink asChild>
                    <Link href="/posts" className="rounded-sm p-2 hover:bg-accent">
                      Posts
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/events" className="rounded-sm p-2 hover:bg-accent">
                      Events
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
              <NavigationMenuIndicator />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild active={isActive("/matches")}>
                <Link
                  href="/matches"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm",
                    isActive("/matches") && "bg-accent text-accent-foreground"
                  )}
                >
                  Matches
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild active={isActive("/messages")}>
                <Link
                  href="/messages"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm",
                    isActive("/messages") && "bg-accent text-accent-foreground"
                  )}
                >
                  Messages
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* <Link href="/settings">
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </Link> */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
