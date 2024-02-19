"use server";

import {
  GetInteractionBooksQuery,
  _getInteractionBooks,
} from "@/business/interaction-books/get-interaction-books";

export async function getInteractionAction(query: GetInteractionBooksQuery) {
  return await _getInteractionBooks(query);
}
