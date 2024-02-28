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
      <DropdownMenuContent>
        <Textarea className="w-" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
