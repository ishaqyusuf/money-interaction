"use client";

import { cn } from "@/lib/utils";

interface Props {
  children?;
  className?: string;
}
export default function Shell({ children, className }: Props) {
  return (
    <div className={cn("p-4 sm:p-8 min-h-screen", className)}>{children}</div>
  );
}
