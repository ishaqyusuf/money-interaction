"use client";

import { GetInteractionForms } from "@/business/type";
import { Icons } from "@/components/common/icons";
import { useModal } from "@/components/templates/modal/provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ServerResponse } from "@/type";
import React from "react";
import InteractionEntryModal from "../../_modals/interaction-entry-modal";
import { _getInteractionEntryForm } from "@/business/interaction-entries/get-entry-form";

interface Props {
  promise;
}
export default function InteractionHeader({ promise }: Props) {
  const bookForm: GetInteractionForms = React.use(promise);
  const modal = useModal();
  return (
    <div className="flex">
      <div className="flex-1"></div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Icons.plus className="w-4 h-4" />
              <span>Add</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {bookForm.permissions?.map((p) => (
              <DropdownMenuItem
                onClick={async () => {
                  const formData = await _getInteractionEntryForm({
                    bookFormId: p.bookFormId,
                  });
                  modal.openModal(<InteractionEntryModal data={formData} />);
                }}
                key={p.id}
              >
                {p.bookForm.formSchema.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
