"use client";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { BreadCrumHeader } from "./bread-crumb-server";
import { useBreadCrumbProvider } from "@/components/common/breadcurmb/provider";

export default function InteractionSelector() {
  const data = useBreadCrumbProvider();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Icons.upDownChevron className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid min-w-[400px] grid-cols-2">
        <div className="border-r">
          <div className="p-2">
            <Label>Interactions</Label>
            <div className="flex flex-col">
              {data.books.map((item) => (
                <div className="flex" key={item.slug}>
                  <Button
                    className="justify-start  flex flex-1 space-x-2"
                    variant={"ghost"}
                  >
                    <Icons.plus className="w-4 h-4" />
                    <p>{item.title}</p>
                  </Button>
                </div>
              ))}
              <Button
                variant={"ghost"}
                className="flex flex-1 justify-start space-x-2"
              >
                <Icons.plus className="w-4 h-4" />
                <p>Add New</p>
              </Button>
            </div>
          </div>
        </div>
        <div className=""></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
