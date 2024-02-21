"use client";

import { GetInteractionForms } from "@/business/type";
import { useModal } from "@/components/templates/modal/provider";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import CreateFormModal from "../_modals/form-modal";
import { Icons } from "@/components/common/icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Props {
  promise: any;
}
export default function PageClient({ promise }: Props) {
  const data = React.use<GetInteractionForms>(promise);

  return (
    <div className="grid grid-cols-3 gap-4">
      <GridItem data={data} />
      {data.permissions.map((p) => (
        <GridItem key={p.id} data={data} item={p} />
      ))}
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
        <Icons.plus />
      </button>
    );

  return (
    <div className="border shadow rounded-lg p-4 relative">
      <Label>{item.bookForm.formSchema.title}</Label>

      <div className="absolute top-0 right-0 m-2 flex space-x-2">
        <Button
          onClick={() => {
            modal.openModal(
              <CreateFormModal
                bookAccessId={data.id}
                formPermissionId={item.id}
              />
            );
          }}
          size="icon"
          className=""
          variant={"ghost"}
        >
          <Icons.edit className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
