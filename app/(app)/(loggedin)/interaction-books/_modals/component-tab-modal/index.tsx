"use client";

import { getDashboardNodes } from "@/business/dashboard/get-dashboard-nodes";
import { DashboardComponentType, DashboardData } from "@/business/type";
import Modal from "@/components/templates/modal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  type: DashboardComponentType;
  data: DashboardData;
}
export default function ComponentTabModal({ type, data }: Props) {
  const form = useForm({
    defaultValues: {
      analyticNode: "",
      title: "",
      type,
      ...data.componentForm,
    },
  });
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    getDashboardNodes(data.bookSlug).then((resp) => {
      //   console.log(resp);
    });
  }, []);
  async function submit() {}
  return (
    <Modal.Content>
      <Modal.Header title="Dashboard Component" />
      <div className="grid gap-4">
        {/* <ControlledSelect control={form.control} */}
      </div>
      <Modal.Footer onSubmit={submit} submitText="save" />
    </Modal.Content>
  );
}
