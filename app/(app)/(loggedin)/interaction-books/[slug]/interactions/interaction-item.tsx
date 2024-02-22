"use client";

import { GetInteractions } from "@/business/type";
import { transformDisplay } from "../../utils/transform-display";
import Tiptap from "@/components/common/tip-tap";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/use-day";

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
        <div className="flex mb-2 space-x-2">
          <Badge variant={"outline"}>{item.bookForm.formSchema.title}</Badge>
          {item.fieldValues
            .filter((fv) => fv.field.primaryField)
            .map((f) => (
              <Badge variant={"outline"} key={f.id}>
                {f.value}
              </Badge>
            ))}
        </div>
        <div className="">
          <div className="text-sm">{formatDate(item.createdAt)}</div>
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
