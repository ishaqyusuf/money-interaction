"use server";

import { _authId } from "../auth/auth-session";
import { prisma } from "../db";

export async function getDashboardNodes(bookSlug) {
  const p = await prisma.interactionBookAccess.findMany({
    where: {
      userId: await _authId(),
      book: {
        slug: bookSlug,
      },
    },
    include: {
      book: true,
      permissions: {
        include: {
          bookForm: {
            include: {
              formSchema: {
                include: {
                  formFields: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return p;
}
