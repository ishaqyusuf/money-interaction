"use client";

import { redirect } from "next/navigation";

export default function InteractionBooksPage({ params, searchParams }) {
  redirect(`/interaction-books/${params.slug}/interactions`);
}
