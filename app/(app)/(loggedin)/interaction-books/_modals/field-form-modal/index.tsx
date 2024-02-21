"use client";

import { InteractionFormEditForm } from "@/business/type";
import ControlledInput from "@/components/controls/controlled-input";
import ControlledSelect from "@/components/controls/controlled-select";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import interactionData from "../../interaction-data";
import { cn } from "@/lib/utils";
import ControlledCheckbox from "@/components/controls/controlled-checkbox";
import { useModal } from "@/components/templates/modal/provider";
import CreateFormModal from "../form-modal";
import { _saveFormField } from "@/business/interaction-forms/save-form-field";

interface Props {
  formData: InteractionFormEditForm;
  fieldData?;
  fieldIndex?: number;
}
export default function FieldFormModal({
  formData,
  fieldData,
  fieldIndex,
}: Props) {
  const { _id, ...defaultValues } = fieldData || {
    span: 12,
    dataType: "default",
    meta: {},
    formSchemaId: formData.bookForm.formSchemaId,
  };
  defaultValues.span = String(defaultValues.span);

  const form = useForm<
    InteractionFormEditForm["bookForm"]["formSchema"]["formFields"][0]
  >({
    defaultValues,
  });
  const layout = form.watch("span");
  useEffect(() => {}, []);
  function updateForm(field) {
    if (fieldIndex != undefined && fieldIndex > -1) {
      formData.bookForm.formSchema.formFields[fieldIndex] = field;
    } else formData.bookForm.formSchema.formFields.push(field);
    onCancel();
  }
  async function onSubmit() {
    const { ...fieldData } = form.getValues();
    fieldData.span = Number(fieldData.span);

    if (!formData.id) {
      updateForm(fieldData);
    } else {
      const resp = await _saveFormField(fieldData);
      updateForm(resp);
    }
  }
  const modal = useModal();
  function onCancel() {
    modal?.close(() => {
      modal?.openModal(<CreateFormModal defaultValues={formData} />);
    });
  }
  return (
    <Modal.Content>
      <Modal.Header
        title="Form Field"
        subtitle="Edit Interaction Interaction Field"
      />
      <Form {...form}>
        <div className="grid gap-4 grid-cols-2">
          <ControlledInput
            className="col-span-2"
            control={form.control}
            name="label"
            label="Label"
            placeholder="e.g; name, username"
          />
          <ControlledSelect
            options={interactionData.dataTypes}
            control={form.control}
            name="dataType"
            label="Input Type"
          />
          <ControlledInput
            control={form.control}
            name="unit"
            label="Unit"
            placeholder="e.g; USD, LB, Kg, NGN"
          />
          <ControlledInput
            className=""
            control={form.control}
            name="defaultValue"
            label="Default Value"
            placeholder=""
          />
          <div className="col-span-2 grid gap-4 grid-cols-2">
            <ControlledCheckbox
              control={form.control}
              name="currency"
              label="Currency"
              description="If this value is a currency"
            />
            <ControlledCheckbox
              control={form.control}
              name="primaryField"
              label="Primary Field"
              description="If field is a primary field"
            />
            <ControlledCheckbox
              control={form.control}
              name="required"
              label="Is required"
              description=""
            />
          </div>
          <div className="col-span-2 grid grid-cols-12">
            <ControlledSelect
              options={interactionData.spans}
              control={form.control}
              name="span"
              label="Input Layout"
              className={cn(
                Number(layout || 0) == 12 ? "col-span-12" : "col-span-6"
              )}
            />
          </div>
        </div>
        <Modal.Footer
          onSubmit={onSubmit}
          submitText="Save"
          cancelBtn
          onCancel={onCancel}
          cancelText="Cancel"
        />
      </Form>
    </Modal.Content>
  );
}
