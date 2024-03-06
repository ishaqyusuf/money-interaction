"use server";

import { _authId } from "../auth/auth-session";
import { prisma } from "../db";

export async function getDashboards(bookSlug) {
  const hasFormFields = await prisma.interactionFormFields.findMany({
    where: {
      deletedAt: null,
      formSchema: {
        bookForms: {
          some: {
            interactionBook: {
              slug: bookSlug,
            },
          },
        },
      },
    },
  });
  const userId = await _authId();
  const bookAccess = await prisma.interactionBookAccess.findFirst({
    where: {
      book: {
        slug: bookSlug,
      },
      userId,
    },
    include: {
      book: true,
      dashboardTabPermissions: {
        include: {
          dashboardTab: true,
        },
      },
    },
  });
  return {
    bookAccess,
    hasFormFields,
  };
}
