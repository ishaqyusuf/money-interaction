"use server";

import { prisma } from "../db";

export async function _deleteInteractionCategory(id, categoryId) {
  await prisma.interactionBookCategory.delete({
    where: {
      id: categoryId,
    },
  });
}
