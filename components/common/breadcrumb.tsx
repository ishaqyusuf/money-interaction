"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Icons } from "./icons";

interface Props {
  children?;
}
function BreadCrumb({ children }: Props) {
  const BreadcrumbElement = document?.getElementById("bread-crumb");
  if (!BreadcrumbElement) return null;
  return createPortal(
    <nav
      aria-label="breadcrumbs"
      className="items-center text-sm font-medium text-muted-foreground hidden lg:flex"
    >
      {children}
    </nav>,
    BreadcrumbElement
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
