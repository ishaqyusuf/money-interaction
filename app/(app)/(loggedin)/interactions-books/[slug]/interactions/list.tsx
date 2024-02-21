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
    <div className="flex min-h-[90vh]   justify-center items-center">
      <>Interactions ({data.items.length})</>
      {data.items.map((item) => (
        <InteractionItem item={item} key={item.id} />
      ))}
    </div>
  );
}
