"use server";

import { prisma } from "../db";
import { InteractionFormEditForm } from "../type";

export async function _saveInteractionForm(data: InteractionFormEditForm) {
  const {
    bookForm: {
      bookId,
      formSchema: { formFields, displayLayouts, ...formSchemaData },
    },
    bookFormId,
    bookAccessId,
    ...formPermissionData
  } = data;
  if (!data.id) {
    const schem = await prisma.interactionFormSchemas.create({
      data: {
        ...formSchemaData,
        meta: (formSchemaData.meta || {}) as any,
        formFields: {
          createMany: {
            data: formFields.map((field) => {
              field.span = Number(field.span);

              return field;
            }) as any,
          },
        },
        displayLayouts: {
          createMany: {
            data: displayLayouts,
          },
        },
      },
    });
    await prisma.interactionBookAccess.update({
      where: {
        id: bookAccessId,
      },
      data: {
        permissions: {
          create: {
            ...formPermissionData,

            bookForm: {
              create: {
                bookId,
                formSchemaId: schem.id,
              },
            },
          },
        },
      },
    });

    // const p = await prisma.interactionFormPermission.create({
    //   data: {
    //     createInteraction: true,
    //     editForm: true,
    //     deleteForm: true,
    //     // bookAccessId
    //     bookForm: {
    //       create: {
    //         bookId: data.bookId,
    //         formSchemaId: schem.id
    //       },
    //     },
    //   },
    // });

    // await prisma.interactionBookForms.create({
    //   data: {
    //     bookId: data.bookId,
    //     formSchemaId: schem.id,
    //   },
    // });
  } else {
    const layouts = data.bookForm.formSchema.displayLayouts;
    const newLayouts = layouts.filter((l) => !l.id);
    const updateLayouts = layouts.filter((l) => l.id);
    await prisma.interactionFormSchemas.update({
      where: {
        id: data.bookForm.formSchemaId,
      },
      data: {
        description: data.bookForm.formSchema.description,
        title: data.bookForm.formSchema.title,
        displayLayouts: {
          createMany: newLayouts.length
            ? {
                data: newLayouts,
              }
            : undefined,
        },
      },
    });
    if (updateLayouts)
      await Promise.all(
        updateLayouts.map(async (layout) => {
          await prisma.interactionFormSchemaDisplayLayouts.update({
            where: { id: layout.id },
            data: {
              ...layout,
            },
          });
        })
      );
  }
}
