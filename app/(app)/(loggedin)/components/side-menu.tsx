"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Props {
  children?;
  isInner?: boolean;
}
export async function SideMenu({ children, isInner }: Props) {
  return (
    <ScrollArea
      className={cn(
        "hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r",
        isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72"
      )}
    >
      {children}
    </ScrollArea>
  );
}
