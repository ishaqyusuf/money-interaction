"use client";

import { GetInteractions } from "@/business/type";
import React from "react";
import { InteractionItem } from "./interaction-item";

interface Props {
  promise;
}
export default function InteractionList({ promise }: Props) {
  const data: GetInteractions = React.use(promise);

  return (
    <div className="flex min-h-[90vh] px-4 sm:px-10   justify-center flex-col">
      <div className="text-4xl mb-10">Interactions ({data.items.length})</div>
      {data.items.map((item) => (
        <InteractionItem item={item} key={item.id} />
      ))}
    </div>
  );
}
