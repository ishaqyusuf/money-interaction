"use client";

import { Icons } from "@/components/common/icons";
import FeedBack from "./feedback";

interface Props {
  children?;
}
export default function Header({ children }: Props) {
  return (
    <header className="py-2 border-b flex items-center px-4 sm:px-12 space-x-4 sm:space-x-6">
      <div className="">
        <div className="flex items-center ">
          <Icons.logoSquare className="w-8 h-8" />
          {/* <div className="mx-3 text-muted-foreground text-opacity-25">/</div> */}
        </div>
        <div className="" id="bread-crumb"></div>
      </div>
      <div className="flex-1"></div>
      <div className="hidden lg:flex space-x-6">
        <FeedBack />
      </div>
    </header>
  );
}
