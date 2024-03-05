"use server";

import { _authId } from "../auth/auth-session";
import { prisma } from "../db";

export async function getCurrentBook(params) {
  const userId = await _authId();
  return await prisma.interactionBookAccess.findFirst({
    where: {
      userId,
      book: {
        slug: params.slug,
      },
    },
  });
}
