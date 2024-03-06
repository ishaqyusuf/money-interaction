"use server";

import { prisma } from "@/business/db";
import { DashboardComponents } from "@prisma/client";

export async function saveDashboardComponent(data: DashboardComponents) {
  const { id, interactionBookId, dashboardTabId, formFieldId, ...rest } = data;

  const resp = id
    ? await prisma.dashboardComponents.update({
        where: {
          id,
        },
        data: {
          ...rest,
          updatedAt: new Date(),
          formField: {
            connect: {
              id: formFieldId,
            },
          },
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
          dashboardTab: {
            connect: {
              id: dashboardTabId,
            },
          },
          formField: {
            connect: {
              id: formFieldId,
            },
          },
          //   interactionBookId: 1,
        },
      });
  return resp;
}
