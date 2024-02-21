"use server";

import { prisma } from "../db";
import { GetInteractionsQuery } from "../type";

export async function _getInteractions(bookSlug, query: GetInteractionsQuery) {
  const interactions = await prisma.interactions.findMany({
    where: {
      deletedAt: null,
      book: {
        slug: bookSlug,
      },
    },
    include: {
      bookForm: {
        include: {
          formSchema: {
            include: {
              displayLayouts: true,
            },
          },
        },
      },
      fieldValues: {
        include: {
          field: true,
        },
      },
    },
  });
  return {
    items: interactions,
  };
}
