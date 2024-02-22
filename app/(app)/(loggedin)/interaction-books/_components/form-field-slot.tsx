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
import { useEffect, useState } from "react";
import ControlledSelect from "@/components/controls/controlled-select";
import { getAutoOptions } from "../_actions/get-auto-options";
import ControlledDate from "@/components/controls/controlled-date";

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
  const isAutoComplete = formField.dataType == "auto-complete";
  const isDate = formField.dataType == "date";
  const [options, setOptions] = useState<{ label; value }[]>();
  useEffect(() => {
    if (isAutoComplete && !schema) {
      getAutoOptions(formField.autoCompleteFromFieldId).then((d) =>
        setOptions(d)
      );
    }
  }, []);
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
      {isAutoComplete ? (
        <ControlledSelect
          label={formField.label}
          control={form.control}
          options={options}
          name={schema ? "" : `entries.${formField.id}.value`}
        />
      ) : isDate ? (
        <ControlledDate
          label={formField.label}
          control={form.control}
          name={schema ? "" : `entries.${formField.id}.value`}
        />
      ) : (
        <ControlledInput
          label={formField.label}
          control={form.control}
          type={formField.dataType}
          name={schema ? "" : `entries.${formField.id}.value`}
        />
      )}
    </div>
  );
}
