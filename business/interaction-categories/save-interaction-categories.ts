"use server";

import { prisma } from "../db";
import { InteractionBookEditForm } from "../type";

export async function _saveInteractionCategories(
  categories: InteractionBookEditForm["categories"][0]["bookCategory"][]
) {
  const data = await prisma.bookCategory.createMany({
    skipDuplicates: true,
    data: categories.map((c) => {
      return {
        title: c.title,
      };
    }),
  });
  return (
    await prisma.bookCategory.findMany({
      where: {
        title: {
          in: categories.map((c) => c.title),
        },
      },
    })
  ).map((cat) => cat.id);
}
