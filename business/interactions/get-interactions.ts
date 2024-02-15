"use server";

import { prisma } from "../db";
import { GetInteractionsQuery } from "../type";

export async function _getInteractions(bookId, query: GetInteractionsQuery) {
  const interactions = await prisma.interactions.findMany({
    where: {
      deletedAt: null,
      bookId,
    },
  });
  return interactions;
}
