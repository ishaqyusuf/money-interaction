"use client";

import { Icons } from "@/components/common/icons";

interface Props {
  children?;
}
export function Header({ children }: Props) {
  return (
    <header className="h-12 border-b flex items-center px-4 sm:px-12">
      <div className="">
        <div className="flex items-center ">
          <Icons.logoSquare className="w-8 h-8" />
          {/* <div className="mx-3 text-muted-foreground text-opacity-25">/</div> */}
        </div>
        <div className="" id="bread-crumb"></div>
      </div>
      <div className="flex-1"></div>
    </header>
  );
}
