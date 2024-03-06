"use client";

import { getDashboardNodes } from "@/business/dashboard/get-dashboard-nodes";
import {
  DashboardComponentType,
  DashboardData,
  FormFieldDataTypes,
} from "@/business/type";
import ControlledSelect from "@/components/controls/controlled-select";
import Modal from "@/components/templates/modal";
import { Form } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { analyticTypes } from "../../data/analytic-types";
import ControlledInput from "@/components/controls/controlled-input";
import { saveDashboardComponent } from "@/business/dashboard/save-dashboard-component";
import { useModal } from "@/components/templates/modal/provider";
import { _revalidatePath } from "@/business/utils/revalidate-path";
import dashboardData from "../../data/dashboard-data";
import { toast } from "sonner";

interface Props {
  type: DashboardComponentType;
  data: DashboardData;
}
export type ComponentNodes = { id; label; type?: FormFieldDataTypes };
export default function ComponentTabModal({ type, data }: Props) {
  const form = useForm({
    defaultValues: {
      analyticNode: "",
      analyticType: "",
      title: "",
      subTitle: "",
      formFieldId: null,
      type,
      ...data.componentForm,
    },
  });
  // console.log(data);
  const [nodes, setNodes] = useState<ComponentNodes[]>([]);
  useEffect(() => {
    getDashboardNodes(data.bookSlug).then((resp) => {
      // console.log(resp);
      setNodes(resp.nodes);
    });
  }, []);
  const modal = useModal();
  async function submit() {
    const data = form.getValues();
    const formFieldId = nodes.find((n) => n.label === data.analyticNode)?.id;
    form.setValue("formFieldId", formFieldId);
    data.formFieldId = formFieldId;

    if (!formFieldId) toast.message("Invalid Analytic Field");
    const resp = await saveDashboardComponent(data as any);
    if (resp.id) {
      toast.success("Success!");
      modal.close();
      await _revalidatePath("dashboard");
    }
  }
  return (
    <Form {...form}>
      <Modal.Content>
        <Modal.Header title="Dashboard Component" />
        <div className="grid sm:grid-cols-2 gap-4">
          <ControlledInput
            className="sm:col-span-2"
            control={form.control}
            name="title"
            label="Title"
          />
          <ControlledSelect
            control={form.control}
            options={dashboardData.componentTypes as any}
            name="type"
            label="Component Type"
          />
          <ControlledSelect
            control={form.control}
            options={nodes}
            name="analyticNode"
            label="Field Node"
            titleKey="label"
            valueKey="label"
          />
          <ControlledInput
            control={form.control}
            name="subTitle"
            label="Unit Label"
          />
          <ControlledSelect
            control={form.control}
            options={analyticTypes}
            name="analyticType"
            label="Analytic type"
          />
        </div>
        <Modal.Footer onSubmit={submit} submitText="save" />
      </Modal.Content>
    </Form>
  );
}
