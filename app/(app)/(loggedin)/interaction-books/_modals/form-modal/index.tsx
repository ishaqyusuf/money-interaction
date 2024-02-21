"use client";

import { _getInteractionBookEditForm } from "@/business/interaction-books/get-interaction-book-edit-form";
import { _saveInteractionBook } from "@/business/interaction-books/save-interaction-book-form";
import { _getInteractionFormEditForm } from "@/business/interaction-forms/get-interaction-form-edit-form";
import { InteractionFormEditForm } from "@/business/type";
import ControlledInput from "@/components/controls/controlled-input";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import FormFieldSlot from "../../_components/form-field-slot";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { useModal } from "@/components/templates/modal/provider";
import FieldFormModal from "../field-form-modal";
import { saveInteractionFormAction } from "../../_actions/save-interaction-form-action";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import DisplayLayout from "./display-layout";

interface Props {
  id?;
  bookId?;
  defaultValues?;
  bookAccessId?;
  formPermissionId?;
}

export const useInteractionEditForm = () =>
  useFormContext<InteractionFormEditForm>();
export default function CreateFormModal({
  formPermissionId = null,
  bookAccessId,
  bookId,
  defaultValues = null,
}: Props) {
  const form = useForm<InteractionFormEditForm>({
    defaultValues: defaultValues ? defaultValues : {},
  });
  const { fields: formFields, remove } = useFieldArray({
    control: form.control,
    name: "bookForm.formSchema.formFields",
    keyName: "_id",
  });
  useEffect(() => {
    if (!defaultValues)
      (async () => {
        let data = await _getInteractionFormEditForm(
          formPermissionId,
          bookAccessId,
          bookId
        );
        form.reset(data as any);
      })();
  }, []);
  async function submit() {
    const data = form.getValues();
    console.log(data);
    const resp = await saveInteractionFormAction(data);
    modal.close();

    // const resp = await _saveInteractionBook(data);
    // redirect(`/interaction-books/${resp.slug}`);
  }
  const modal = useModal();
  function editFieldForm(fieldData?, index?) {
    modal.close(() => {
      // setTimeout(() => {
      modal.openModal(
        <FieldFormModal
          fieldIndex={index}
          formData={form.getValues()}
          fieldData={fieldData}
        />
      );
      // }, 1000);
    });
  }
  async function deleteField(index, fieldData) {
    remove(index);
  }
  return (
    <Modal.Content>
      <Modal.Header
        title="New Form"
        subtitle="Create a new Interaction Formdoc"
      />
      <Form {...form}>
        <ScrollArea className="grid gap-2 min-h-max max-h-[50vh]">
          <ControlledInput
            control={form.control}
            name="bookForm.formSchema.title"
            label="Interaction title"
            placeholder="e.g; thrift, donation, event management"
          />
          <ControlledInput
            control={form.control}
            name="bookForm.formSchema.description"
            label="Description"
            type="textarea"
            placeholder="brief about form"
          />
          <div className="py-4">
            <Tabs defaultValue="fields">
              <TabsList>
                <TabsTrigger value="fields">Form Fields</TabsTrigger>
                <TabsTrigger value="layout">Display Layout</TabsTrigger>
              </TabsList>
              <TabsContent value="fields">
                <Label className="mb-4 block py-2 border-b">Form Fields</Label>
                <div className="grid grid-cols-12 gap-2">
                  {formFields.map((field, index) => (
                    <FormFieldSlot
                      edit={() => {
                        editFieldForm(field, index);
                      }}
                      onDelete={() => {
                        deleteField(index, field);
                      }}
                      schema
                      key={field._id}
                      formField={field}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => {
                    editFieldForm();
                  }}
                  className="w-full"
                  variant={"outline"}
                  size={"sm"}
                >
                  <Icons.plus className="w-4 h-4" />
                  <span>New Field</span>
                </Button>
              </TabsContent>
              <TabsContent value="layout">
                <DisplayLayout />
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
        <Modal.Footer onSubmit={submit} submitText="Save" />
      </Form>
    </Modal.Content>
  );
}
