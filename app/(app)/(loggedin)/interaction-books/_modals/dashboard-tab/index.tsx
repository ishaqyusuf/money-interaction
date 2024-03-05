"use client";

import { createDashboard } from "@/business/dashboard/create-dashboard";
import ControlledInput from "@/components/controls/controlled-input";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { redirect, useParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function DashboardTabModal() {
  const params = useParams();
  const form = useForm({
    defaultValues: {
      title: "",
    },
  });
  async function onSubmit() {
    const data = form.getValues();
    const resp = await createDashboard({
      ...data,
      slug: params.slug,
    });
    redirect(`/interaction-books/${params.slug}/${resp.slug}`);
  }
  return (
    <Modal.Content>
      <Modal.Header title="Dashboard" />
      <Form {...form}>
        <ScrollArea className="min-h-max max-h-[50vh] p-2">
          <div className="grid gap-2">
            <ControlledInput
              control={form.control}
              name="title"
              label="Dashboard Title"
              placeholder="e.g; default"
            />
          </div>
        </ScrollArea>
        <Modal.Footer submitText="Submit" onSubmit={onSubmit}>
          <div className="flex justify-end"></div>
        </Modal.Footer>
      </Form>
    </Modal.Content>
  );
}
