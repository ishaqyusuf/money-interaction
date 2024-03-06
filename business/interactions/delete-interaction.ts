"use server";

import { prisma } from "../db";

export async function deleteInteractionBac(id) {
  const childUpdate = {
    updateMany: {
      where: {},
      data: {
        deletedAt: new Date(),
      },
    },
  };
  await prisma.interactions.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
      fieldValues: childUpdate,
      analytics: childUpdate,
    },
  });
  return { msg: "Deleted" };
}
