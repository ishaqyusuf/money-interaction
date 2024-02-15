"use server";

import { prisma } from "../db";
import { InteractionFormEditForm } from "../type";

export async function _saveInteractionForm(data: InteractionFormEditForm) {
  const {
    formSchema: { formFields, ...formSchemaData },
  } = data;
  if (!data.id) {
    const schem = await prisma.interactionFormSchemas.create({
      data: {
        ...formSchemaData,
        meta: formSchemaData.meta as any,
        formFields: {
          createMany: {
            data: formFields,
          },
        },
      },
    });
    await prisma.interactionBookForms.create({
      data: {
        bookId: data.bookId,
        formSchemaId: schem.id,
      },
    });
  } else {
    await prisma.interactionFormSchemas.update({
      where: {
        id: data.formSchemaId,
      },
      data: {
        ...data.formSchema,
        meta: formSchemaData.meta as any,
        formFields: {
          createMany: {
            data: data.formSchema.formFields,
            skipDuplicates: true,
          },
        },
      },
    });
  }
}
