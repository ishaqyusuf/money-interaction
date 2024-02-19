"use client";

import { InteractionFormEditForm } from "@/business/type";
import { Icons } from "@/components/common/icons";
import ControlledInput from "@/components/controls/controlled-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useFormContext } from "react-hook-form";

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
  schema?: boolean;
  edit?;
  onDelete?;
  formField: InteractionFormEditForm["bookForm"]["formSchema"]["formFields"][0];
}
export default function FormFieldSlot({
  formField,
  schema,
  edit,
  onDelete,
}: Props) {
  const form = useFormContext();
  return (
    <div
      className={cn(
        "grid gap-2",
        style({
          span: (formField.span as any) || 12,
        }),
        schema &&
          "relative p-2 border-dashed border rounded border-slate-400 group"
      )}
    >
      {schema && (
        <div className="absolute flex justify-end px-2 top-0 right-0 inset-0 space-x-4 group-hover:opacity-100 opacity-0">
          <Button
            onClick={() => {
              edit();
            }}
            size={"icon"}
            className="w-8 h-8"
            variant={"outline"}
          >
            <Icons.edit className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => {
              onDelete();
            }}
            size={"icon"}
            className="w-8 h-8"
            variant={"destructive"}
          >
            <Icons.delete className="w-4 h-4" />
          </Button>
        </div>
      )}
      {/* <Label>{formField.label}</Label> */}
      <ControlledInput
        label={formField.label}
        control={form.control}
        name={formField.label}
      />
    </div>
  );
}
