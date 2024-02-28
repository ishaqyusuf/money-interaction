"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

export default function FeedBack() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>Feedback</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <Textarea className="h-24" placeholder="Your feedback..." />
        <div className="p-2 mt-2 flex items-center">
          <div className="flex-1"></div>
          <div>
            <Button>Send</Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
