"use server";

import { prisma } from "../db";

export async function _getInteractionFormsList(bookId) {
  const list = await prisma.interactionBookForms.findMany({
    where: {
      bookId,
      deletedAt: null,
    },
    include: {
      formSchema: {
        select: {
          title: true,
          description: true,
        },
      },
    },
  });
  return list;
}
