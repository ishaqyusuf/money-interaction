"use client";

import { InteractionFormEditForm } from "@/business/type";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

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
interface Props {
  formField: InteractionFormEditForm["formSchema"]["formFields"][0];
}
export default function FormFieldSlot({ formField }: Props) {
  return (
    <div
      className={cn(
        "grid gap-2",
        style({
          span: (formField.span as any) || 12,
        })
      )}
    >
      <Label>{formField.label}</Label>
    </div>
  );
}
