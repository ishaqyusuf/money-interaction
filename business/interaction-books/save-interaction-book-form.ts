"use server";

import { prisma } from "../db";
import { InteractionBookEditForm } from "../type";
import { _saveInteractionCategories } from "../interaction-categories/save-interaction-categories";
import { _authId } from "../auth/auth-session";
import { _slug } from "../utils/server-utils";

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
          slug: await _slug(rest.title, id, prisma.interactionBooks),
          user: {
            connect: {
              id: authId,
            },
          },
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
