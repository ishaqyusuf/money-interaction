"use server";

import { prisma } from "../db";

export async function _getInteractionBookEditForm(slug?: string | undefined) {
  let form = await prisma.interactionBooks.findUnique({
    where: {
      slug: slug || "-1",
    },
    include: {
      categories: {
        include: {
          bookCategory: true,
        },
      },
    },
  });
  if (!form)
    form = {
      categories: [],
    } as any;
  return form;
}
