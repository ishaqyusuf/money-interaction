"use client";

import { GetInteractionBooks } from "@/business/type";
import React from "react";

interface Props {
  promise: any;
}
export function BooksGrid({ promise }: Props) {
  const data: GetInteractionBooks = React.use(promise);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
