"use client";

import { useModal } from "@/components/templates/modal/provider";
import { Button } from "@/components/ui/button";
import CreateInteractionBookModal from "../_create-modal";

export function BooksHeader() {
  const modal = useModal();
  return (
    <div className="flex justify-between">
      <div></div>
      <div>
        <Button
          onClick={() => {
            modal.openModal(<CreateInteractionBookModal />);
          }}
        >
          New
        </Button>
      </div>
    </div>
  );
}
