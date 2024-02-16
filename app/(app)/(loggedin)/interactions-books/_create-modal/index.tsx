"use client";

import { _getInteractionBookEditForm } from "@/business/interaction-books/get-interaction-book-edit-form";
import { _saveInteractionBook } from "@/business/interaction-books/save-interaction-book-form";
import { InteractionBookEditForm } from "@/business/type";
import ControlledInput from "@/components/controls/controlled-input";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CreateInteractionBookModal() {
  const form = useForm<InteractionBookEditForm>({
    defaultValues: {},
  });
  useEffect(() => {
    (async () => {
      let data = await _getInteractionBookEditForm();
      if (!data)
        data = {
          categories: [],
        } as any;

      form.reset(data as any);
    })();
  }, []);
  async function submit() {
    const data = form.getValues();
    const resp = await _saveInteractionBook(data);
    redirect(`/interaction-books/${resp.slug}`);
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
            name="name"
            label="Interaction title"
            placeholder="e.g; thrift, donation, event management"
          />
        </div>
        <Modal.Footer onSubmit={submit} submitText="Save" />
      </Form>
    </Modal.Content>
  );
}
