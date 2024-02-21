"use client";

import { GetInteractions } from "@/business/type";
import { Label } from "@/components/ui/label";
import { transformDisplay } from "../../utils/transform-display";
import Tiptap from "@/components/common/tip-tap";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

interface Props {
  item: GetInteractions["items"][0];
}
export function InteractionItem({ item }: Props) {
  const layouts = item.bookForm.formSchema.displayLayouts.map((l) => {
    l.text = transformDisplay(l.text as any, item.fieldValues);

    return l;
  });
  return (
    <div className="border-b mb-2">
      <div className="flex justify-between">
        <Badge>{item.bookForm.formSchema.title}</Badge>
        <div className="">
          <div className="text-sm">
            {dayjs(item.createdAt).format("DD MM YYYY")}
          </div>
        </div>
      </div>
      {layouts.map((v) => (
        <div className="flex flex-col" key={v.id}>
          <Tiptap value={v.text} readOnly />
        </div>
      ))}
    </div>
  );
}
