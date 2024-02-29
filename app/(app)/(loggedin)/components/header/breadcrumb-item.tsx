"use client";

import { useContext } from "react";
import InteractionSelector from "./interaction-selector";
import { useBreadCrumbProvider } from "@/components/common/breadcurmb/provider";

export default function BreadcrumbItem() {
  const data = useBreadCrumbProvider();
  return (
    <div className="flex space-x-4 items-center">
      <div className="flex text-muted-foreground">/</div>
      <span className="font-normal text-lg">Interactions</span>
      <InteractionSelector />
    </div>
  );
}
