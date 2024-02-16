"use client";

import Modal from "@/components/templates/modal";
import { useForm } from "react-hook-form";

export default function CreateInteractionBookModal() {
  const form = useForm({
    defaultValues: {},
  });
  return (
    <Modal.Content>
      <Modal.Header
        title="New Interaction"
        subtitle="Create a new Interaction Book"
      />
    </Modal.Content>
  );
}
