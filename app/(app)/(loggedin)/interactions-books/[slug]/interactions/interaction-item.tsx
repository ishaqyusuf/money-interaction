"use client";

import { GetInteractions } from "@/business/type";
import { Label } from "@/components/ui/label";

interface Props {
  item: GetInteractions["items"][0];
}
export function InteractionItem({ item }: Props) {
  return (
    <div>
      {item.fieldValues.map((v) => (
        <div className="flex flex-col" key={v.id}>
          <Label>{v.field?.label}</Label>
          <Label>{v.value}</Label>
        </div>
      ))}
    </div>
  );
}
