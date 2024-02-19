"use client";

import { GetInteractionForms } from "@/business/type";
import { useModal } from "@/components/templates/modal/provider";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import CreateFormModal from "../_modals/form-modal";

interface Props {
  promise: any;
}
export default function PageClient({ promise }: Props) {
  const data = React.use<GetInteractionForms>(promise);

  return (
    <div>
      <GridItem data={data} />
    </div>
  );
}

interface GridItemProps {
  item?: GetInteractionForms["permissions"][0];
  data: GetInteractionForms;
}
function GridItem({ item, data }: GridItemProps) {
  const modal = useModal();
  if (!item)
    return (
      <button
        onClick={() => {
          modal.openModal(
            <CreateFormModal bookId={data.bookId} bookAccessId={data.id} />
          );
        }}
        className="border rounded p-4 flex flex-col justify-center items-center"
      >
        <PlusIcon />
      </button>
    );
}
