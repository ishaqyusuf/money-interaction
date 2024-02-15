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
    return await prisma.interactions.create({
      data: {
        ...data.form,
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
