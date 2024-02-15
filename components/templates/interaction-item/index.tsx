"use client";

import { IteractionListItem } from "@/business/type";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface Props {
  item: IteractionListItem;
}
export default function InteractionItem({ item }: Props) {
  return (
    <div>
      {item.name}
      <div className="grid grid-cols-12 gap-2">
        {item.display.map((d) => (
          <DisplaySlot key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
}
interface DisplaySlotProps {
  data: IteractionListItem["display"][0];
}
const style = cva("", {
  variants: {
    align: {
      left: "",
      right: "text-right",
      center: "text-center",
    },
    span: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
    },
  },
});
function DisplaySlot({ data }: DisplaySlotProps) {
  return (
    <div
      className={cn(
        "p-1",
        style({
          align: (data.align as any) || "left",
          span: (data.span as any) || 12,
        })
      )}
    >
      {data.value}
    </div>
  );
}
