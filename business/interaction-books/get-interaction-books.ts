"use server";

import { prisma } from "../db";

export interface GetInteractionBooksQuery {
  userId: number;
}

export async function _getInteractionBooks(query: GetInteractionBooksQuery) {
  return await prisma.interactionBooks.findMany({
    where: {
      deletedAt: null,
      userId: query.userId,
    },
    include: {
      _count: {
        select: {
          forms: true,
          interactions: true,
        },
      },
    },
  });
}
