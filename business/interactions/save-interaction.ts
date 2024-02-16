"use server";

import { prisma } from "../db";
import { GetBookFormSchema } from "../type";

export async function _saveInteraction(data: GetBookFormSchema) {
  if (data.form.id) {
    return await prisma.interactions.update({
      where: {
        id: data.form.id,
      },
      data: {
        fieldValues: {
          createMany: {
            data: Object.values(data.form.fieldValues).map((data) => {
              return {
                ...data,
                meta: data.meta as any,
              };
            }),
            skipDuplicates: true,
          },
        },
      },
      include: {
        fieldValues: true,
      },
    });
  } else {
    let lastId =
      (
        await prisma.interactions.findFirst({
          orderBy: {
            createdAt: "desc",
          },
          where: {
            bookFormId: data.form.bookFormId,
          },
        })
      )?.interactionId || 0;
    return await prisma.interactions.create({
      data: {
        ...data.form,
        interactionId: ++lastId,
        fieldValues: {
          createMany: {
            data: Object.values(data.form.fieldValues).map((data) => {
              return {
                ...data,
                meta: data.meta as any,
              };
            }),
            skipDuplicates: true,
          },
        },
      },
      include: {
        fieldValues: true,
      },
    });
  }
}
