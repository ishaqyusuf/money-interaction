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
    <div className="pt-8">
      {data.items.map((item) => (
        <InteractionItem item={item} key={item.id} />
      ))}
    </div>
  );
}
