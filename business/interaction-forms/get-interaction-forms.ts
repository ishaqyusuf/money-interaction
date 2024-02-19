"use server";

import { _authId } from "../auth/auth-session";
import { prisma } from "../db";

export async function _getInteractionForms(bookSlug) {
  const userId = await _authId();
  const bookAccess = await prisma.interactionBookAccess.findFirst({
    where: {
      book: {
        slug: bookSlug,
      },
      userId,
      deletedAt: null,
    },
    include: {
      book: true,
      permissions: {
        include: {
          bookForm: {
            include: {
              formSchema: true,
            },
            // where: {
            //   deletedAt: null,
            // },
          },
        },
        where: {
          deletedAt: null,
        },
      },
    },
  });
  if (!bookAccess) throw Error();
  return bookAccess;
}
