"use client";

import { Button } from "@/components/ui/button";
import { useInteractionEditForm } from ".";
import { Icons } from "@/components/common/icons";
import { useFieldArray } from "react-hook-form";
import { InteractionFormEditForm } from "@/business/type";
import ContentEditable from "react-contenteditable";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { styles } from "../../data/styles";
import Tiptap from "@/components/common/tip-tap";
export default function DisplayLayout() {
  const form = useInteractionEditForm();
  const { fields, append, remove, replace, insert } = useFieldArray({
    control: form.control,
    name: "bookForm.formSchema.displayLayouts",
    keyName: "_id",
  });
  function newField() {
    append({
      layoutIndex: fields.length,
      align: "left",
      span: 12,
      text: "",
    } as any);
  }
  return (
    <div>
      <div className="grid grid-cols-12">
        {fields.map((field, index) => (
          <Slot index={index} editMode field={field} key={field._id} />
        ))}
      </div>
      <Button
        onClick={newField}
        className="w-full"
        variant={"outline"}
        size={"sm"}
      >
        <Icons.plus className="w-4 h-4 mr-2" />
        <span>Layout Slot</span>
      </Button>
    </div>
  );
}
interface SlotProps {
  editMode?: boolean;
  index;
  field: InteractionFormEditForm["bookForm"]["formSchema"]["displayLayouts"][0];
}
const style = cva("", {
  variants: {
    span: styles.span,
    align: styles.align,
  },
});
function Slot({ field, index }: SlotProps) {
  const form = useInteractionEditForm();
  const mentions = form
    .getValues("bookForm.formSchema.formFields")
    .map((f) => f.label);
  return (
    <div
      className={cn(
        style({
          ...(field as any),
        }),
        "border-dashed border"
      )}
    >
      <Tiptap
        mentions={mentions}
        value={field.text}
        onChange={(value) => {
          form.setValue(
            `bookForm.formSchema.displayLayouts.${index}.text`,
            value
          );
        }}
      />
    </div>
  );
  return (
    <>
      <ContentEditable
        className={cn(
          style({
            ...(field as any),
          }),
          "border-dashed border"
        )}
        html={field.text || ""}
        aria-placeholder="....."
        onChange={(e) => {
          form.setValue(
            `bookForm.formSchema.displayLayouts.${index}.text`,
            e.target.value
          );
        }}
      />
    </>
  );
}
