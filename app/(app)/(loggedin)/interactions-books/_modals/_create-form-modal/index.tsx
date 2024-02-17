"use client";

import { _getInteractionBookEditForm } from "@/business/interaction-books/get-interaction-book-edit-form";
import { _saveInteractionBook } from "@/business/interaction-books/save-interaction-book-form";
import { _getInteractionFormEditForm } from "@/business/interaction-forms/get-interaction-form-edit-form";
import {
  InteractionBookEditForm,
  InteractionFormEditForm,
} from "@/business/type";
import ControlledInput from "@/components/controls/controlled-input";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import FormFieldSlot from "../../_components/form-field-slot";

export default function CreateFormModal({ id = null, bookId }) {
  const form = useForm<InteractionFormEditForm>({
    defaultValues: {},
  });
  const { fields: formFields } = useFieldArray({
    control: form.control,
    name: "formSchema.formFields",
    keyName: "_id",
  });
  useEffect(() => {
    (async () => {
      let data = await _getInteractionFormEditForm(id);
      if (data && !data.bookId) data.bookId = bookId;

      form.reset(data as any);
    })();
  }, []);
  async function submit() {
    const data = form.getValues();
    // const resp = await _saveInteractionBook(data);
    // redirect(`/interaction-books/${resp.slug}`);
  }
  return (
    <Modal.Content>
      <Modal.Header
        title="New Interaction"
        subtitle="Create a new Interaction Book"
      />
      <Form {...form}>
        <div className="grid gap-2">
          <ControlledInput
            control={form.control}
            name="formSchema.title"
            label="Interaction title"
            placeholder="e.g; thrift, donation, event management"
          />
          <div className="py-4">
            <Label>Form Fields</Label>
            <div className="grid grid-cols-12 gap-2">
              {formFields.map((field) => (
                <FormFieldSlot key={field._id} formField={field} />
              ))}
            </div>
          </div>
        </div>
        <Modal.Footer onSubmit={submit} submitText="Save" />
      </Form>
    </Modal.Content>
  );
}
