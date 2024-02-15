"use server";

import { prisma } from "../db";

export async function _getInteractionFormEditForm(id) {
  const form = await prisma.interactionBookForms.findUnique({
    where: {
      id: id || undefined,
    },
    include: {
      formSchema: {
        include: {
          formFields: true,
        },
      },
    },
  });
  return form;
}
