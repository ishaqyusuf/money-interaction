"use client";

import { GetInteractionForms } from "@/business/type";
import { useModal } from "@/components/templates/modal/provider";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import CreateFormModal from "../_modals/_create-form-modal";

interface Props {
  promise: any;
}
export default function PageClient({ promise }: Props) {
  const data = React.use<GetInteractionForms>(promise);

  return (
    <div>
      <GridItem bookId={data.id} />
    </div>
  );
}

interface GridItemProps {
  item?: GetInteractionForms["permissions"][0];
  bookId;
}
function GridItem({ item, bookId }: GridItemProps) {
  const modal = useModal();
  if (!item)
    return (
      <button
        onClick={() => {
          modal.openModal(<CreateFormModal bookId={bookId} />);
        }}
        className="border rounded p-4 flex flex-col justify-center items-center"
      >
        <PlusIcon />
      </button>
    );
}
