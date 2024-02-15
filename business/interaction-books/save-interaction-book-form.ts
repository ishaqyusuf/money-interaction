"use server";

import { prisma } from "../db";
import { InteractionBookEditForm } from "../type";
import { _saveInteractionCategories } from "../interaction-categories/save-interaction-categories";
import { _authId } from "../auth/auth-session";

export async function _saveInteractionBook(data: InteractionBookEditForm) {
  let { id, slug, categories, userId, ...rest } = data;
  const categoryIds = await _saveInteractionCategories(
    categories.map((c) => c.bookCategory)
  );
  const authId = await _authId();
  const bookEdit = id
    ? await prisma.interactionBooks.create({
        data: {
          ...rest,
          user: {
            connect: {
              id: authId,
            },
          },
          slug,
          categories: {
            createMany: {
              data: categoryIds.map((bookCategoryId) => ({
                bookCategoryId,
              })),
            },
          },
        },
      })
    : await prisma.interactionBooks.update({
        where: { id },
        data: {
          ...rest,
          user: {
            connect: {
              id: authId,
            },
          },
          slug,
        },
      });
  return bookEdit;
}
