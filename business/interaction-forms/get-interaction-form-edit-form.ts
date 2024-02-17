"use server";

import { prisma } from "../db";

export async function _getInteractionFormEditForm(id?) {
  let form = await prisma.interactionBookForms.findUnique({
    where: {
      id: id || undefined,
    },
    include: {
      formSchema: {
        include: {
          formFields: true,
          displayLayouts: true,
        },
      },
    },
  });

  if (!form)
    form = {
      formSchema: {
        displayLayouts: [],
        formFields: [],
      },
    } as any;
  return form;
}
