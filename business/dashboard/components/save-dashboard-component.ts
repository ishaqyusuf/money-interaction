"use server";

import { prisma } from "@/business/db";
import { DashboardComponents } from "@prisma/client";

export async function saveDashboardComponent(data: DashboardComponents) {
  const { id, interactionBookId, ...rest } = data;

  const resp = id
    ? await prisma.dashboardComponents.update({
        where: {
          id,
        },
        data: {
          ...rest,
          updatedAt: new Date(),
        },
      })
    : await prisma.dashboardComponents.create({
        data: {
          ...rest,
          book: {
            connect: {
              id: interactionBookId,
            },
          },

          //   interactionBookId: 1,
        },
      });
  return resp;
}
