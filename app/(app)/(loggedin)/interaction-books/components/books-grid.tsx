"use client";

import { GetInteractionBooks } from "@/business/type";
import { Icons } from "@/components/common/icons";
import { useModal } from "@/components/templates/modal/provider";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import CreateInteractionBookModal from "../_modals/book-modal";

interface Props {
  promise: any;
}
export function BooksGrid({ promise }: Props) {
  const data: GetInteractionBooks = React.use(promise);
  const modal = useModal();
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <button
        onClick={() => {
          modal.openModal(<CreateInteractionBookModal />);
        }}
        className="border hover:border-teal-500 hover:bg-teal-100  min-h-[20vh] w-full flex flex-col items-center justify-center rounded-xl group p-2 py-4 space-y-4"
      >
        <Icons.plus />
        <Label className="group-hover:underline">New Thrift</Label>
      </button>
      {data.map((item) => (
        <Link
          className="border hover:border-teal-500 hover:bg-teal-100 rounded-xl flex flex-col justify-between group p-2 py-4"
          href={`/interaction-books/${item.slug}`}
          key={item.id}
        >
          <div>
            <Label className="group-hover:underline">{item.name}</Label>
          </div>
          <div className="flex space-x-4">
            <div>
              <Label>{item._count.interactions}</Label>
              <p className="text-sm">Interactions</p>
            </div>
            <div>
              <Label>{item._count.forms}</Label>
              <p className="text-sm">Forms</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
