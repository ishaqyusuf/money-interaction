"use server";

import { prisma } from "../db";

export async function _getInteractionBookEditForm(slug: string | undefined) {
  const form = await prisma.interactionBooks.findUnique({
    where: {
      slug: slug,
    },
    include: {
      categories: {
        include: {
          bookCategory: true,
        },
      },
    },
  });
  return form;
}
