"use client";

import { InteractionFormEditForm } from "@/business/type";
import { Icons } from "@/components/common/icons";
import ControlledInput from "@/components/controls/controlled-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useFormContext } from "react-hook-form";
import { styles } from "../data/styles";

const style = cva("", {
  variants: {
    align: styles.align,
    span: styles.span,
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
      <ControlledInput
        label={formField.label}
        control={form.control}
        type={formField.dataType}
        name={schema ? "" : `entries.${formField.id}.value`}
      />
    </div>
  );
}
