"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Icons } from "./icons";
import { useEffect, useState } from "react";

interface Props {
  children?;
}
function BreadCrumb({ children }: Props) {
  const [container, setContainer] = useState<any>(null);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    if (!container) {
      const c = document?.getElementById("bread-crumb");
      setContainer(c);
    }
  }, []);
  if (!container) return <></>;
  return createPortal(
    <nav
      aria-label="breadcrumbs"
      className="items-center text-sm font-medium  hidden lg:flex"
    >
      {children}
    </nav>,
    container
  );
}

interface ItemProps {
  children?;
  isFirst?: boolean;
  isLast?: boolean;
  href?: string;
  title?: string;
}
function Item({ children, isFirst, isLast, href, title }: ItemProps) {
  return (
    <>
      <Link
        aria-current={isLast ? "page" : undefined}
        href={href || "/"}
        className={cn(
          "truncate transition-colors hover:text-muted-foreground",
          isLast || !href
            ? "pointer-events-none text-muted-foreground"
            : "text-foreground"
        )}
      >
        {title || children}
      </Link>
      {!isLast && (
        <Icons.chevronDown className="mx-2 h-4 w-4" aria-hidden="true" />
      )}
    </>
  );
}
export default Object.assign(BreadCrumb, {
  Item,
});
