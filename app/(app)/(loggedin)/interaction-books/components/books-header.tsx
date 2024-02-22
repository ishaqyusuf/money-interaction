"use client";

import { useModal } from "@/components/templates/modal/provider";

export function BooksHeader() {
  const modal = useModal();
  return (
    <div className="px-4 sm:px-10 py-2 sm:py-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Interaction Books</h1>
        </div>
        <div>
          {/* <Button
          onClick={() => {
            modal.openModal(<CreateInteractionBookModal />);
          }}
        >
          New
        </Button> */}
        </div>
      </div>
    </div>
  );
}
