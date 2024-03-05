"use server";

import { prisma } from "../db";
import { GetInteractionEntryForm } from "../type";
import { nextId } from "../utils/server-utils";

export async function _saveEntryForm(data: GetInteractionEntryForm) {
  if (!data.interactionEntryId) {
    const bookFormInteractionId = await nextId(
      prisma.interactions,
      {
        bookFormId: data.bookFormId,
      },
      0,
      "bookFormInteractionId"
    );
    const bookInteractionId = await nextId(
      prisma.interactions,
      {
        bookId: data.bookId,
      },
      0,
      "bookInteractionId"
    );
    const i = await prisma.interactions.create({
      data: {
        bookId: data.bookId,
        bookFormId: data.bookFormId,
        details: ``,
        bookFormInteractionId,
        bookInteractionId,
        fieldValues: {
          createMany: {
            data: Object.entries(data.entries).map(([k, d]) => {
              return {
                meta: {},
                value: d.value?.toString(),
                fieldId: Number(k),
              };
            }),
          },
        },
      },
      include: {
        bookForm: {
          include: {
            formSchema: true,
          },
        },
        fieldValues: {
          include: {
            field: true,
          },
        },
      },
    });
    return {
      reqData: data,
      interaction: i,
    };
  }
}
