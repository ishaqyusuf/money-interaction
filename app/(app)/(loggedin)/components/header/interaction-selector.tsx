"use client";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";

export default function InteractionSelector() {
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
          </div>
        </div>
        <div className=""></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
