"use server";

import { prisma } from "../db";
import { InteractionFormEditForm } from "../type";

export async function _saveFormField(
  data: InteractionFormEditForm["bookForm"]["formSchema"]["formFields"][0]
) {
  const { id, formSchemaId, ...formData } = data;
  const formField = !id
    ? await prisma.interactionFormFields.create({
        data: {
          ...formData,
          formSchemaId,
        } as any,
      })
    : await prisma.interactionFormFields.update({
        where: { id },
        data: {
          ...formData,
        } as any,
      });
  return formField;
  //   const schem = await prisma.interactionFormSchemas.update({
  //     where: {
  //       id: data.formSchemaId,
  //     },
  //     data: {
  //       formFields: {
  //         create: id
  //           ? undefined
  //           : ({
  //               ...formData,
  //             } as any),
  //         update: !id
  //           ? undefined
  //           : {
  //               data: formData as any,
  //               where: {
  //                 id,
  //               },
  //             },
  //       },
  //     },
  //   });
}
