"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function NavTab({ children }) {
  const [container, setContainer] = useState<any>(null);
  useEffect(() => {
    if (!container) {
      const c = document?.getElementById("tabs");
      setContainer(c);
    }
  }, []);
  if (!container) return <></>;
  return createPortal(
    <NavigationMenu>
      <NavigationMenuList>{children}</NavigationMenuList>
    </NavigationMenu>,
    container
  );
}

interface ItemProps {
  children?;
  href?;
  title?: string;
  active?: boolean;
}
export function NavItem({ children, href, title, active }: ItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle({
            className: cn(
              active && "border-b-2 border-primary rounded-none",
              "min-w-[120px]"
            ),
          })}
        >
          {title || children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
// export default Object.assign(NavTab, {
//   NavItem,
// });
