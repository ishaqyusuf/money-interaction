"use server";

import { prisma } from "../db";

export async function _getInteractionBookEditForm(slug?: string | undefined) {
  const form = await prisma.interactionBooks.findUnique({
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
  type T = NonNullable<typeof form>;
  if (!form)
    return {
      categories: [],
    } as any as T;
  return form;
}
