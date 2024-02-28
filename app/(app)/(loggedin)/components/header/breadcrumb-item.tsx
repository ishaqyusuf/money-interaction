"use client";

import InteractionSelector from "./interaction-selector";

export default function BreadcrumbItem() {
  return (
    <div className="flex space-x-4 items-center">
      <div className="flex text-muted-foreground">/</div>
      <span className="font-normal text-lg">Interactions</span>
      <InteractionSelector />
    </div>
  );
}
