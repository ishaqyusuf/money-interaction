"use client";

import { _getInteractionBookEditForm } from "@/business/interaction-books/get-interaction-book-edit-form";
import { _saveInteractionBook } from "@/business/interaction-books/save-interaction-book-form";
import { _getInteractionFormEditForm } from "@/business/interaction-forms/get-interaction-form-edit-form";
import {
  GetInteractionEntryForm,
  GetInteractionForms,
  InteractionFormEditForm,
} from "@/business/type";
import ControlledInput from "@/components/controls/controlled-input";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import FormFieldSlot from "../../_components/form-field-slot";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { useModal } from "@/components/templates/modal/provider";
import FieldFormModal from "../field-form-modal";
import { saveInteractionFormAction } from "../../_actions/save-interaction-form-action";
import { ServerResponse } from "@/type";
import { _getInteractionEntryForm } from "@/business/interaction-entries/get-entry-form";
import { _saveEntryForm } from "@/business/interaction-entries/save-entry-form";

interface Props {
  data: GetInteractionEntryForm;
}
interface FormProps {
  defaultValues: GetInteractionEntryForm;
}
export default function InteractionEntryModal({ data }: Props) {
  const form = useForm<Props["data"]>({
    defaultValues: {
      ...data,
    },
  });

  async function submit() {
    const data = form.getValues();
    console.log(data);
    const resp = await _saveEntryForm(data);
    modal.close();
    // const resp = await _saveInteractionBook(data);
    // redirect(`/interaction-books/${resp.slug}`);
  }
  const modal = useModal();
  function editFieldForm(fieldData?, index?) {
    modal.close(() => {
      // setTimeout(() => {
      // }, 1000);
    });
  }

  return (
    <Modal.Content>
      <Modal.Header title={data.title} subtitle={data.description} />
      <Form {...form}>
        <div className="grid gap-2">
          <div className="py-4">
            <div className="grid grid-cols-12 gap-2">
              {data.fields.map((field, index) => (
                <FormFieldSlot key={field.id} formField={field as any} />
              ))}
            </div>
          </div>
        </div>
        <Modal.Footer onSubmit={submit} submitText="Save" />
      </Form>
    </Modal.Content>
  );
}
