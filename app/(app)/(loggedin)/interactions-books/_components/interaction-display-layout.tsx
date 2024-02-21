"use client";

import { GetInteractions, InteractionFormEditForm } from "@/business/type";

interface Props {
  schema: InteractionFormEditForm["bookForm"]["formSchema"];
  fieldValues: GetInteractions["items"][0]["fieldValues"];
}
export default function InteractionDisplayLayout({
  schema,
  fieldValues,
}: Props) {
  // const dv = '';
  return <div></div>;
}
