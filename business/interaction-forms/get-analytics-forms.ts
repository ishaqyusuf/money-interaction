"use server";

import { prisma } from "../db";
import { _getInteractionEntryForm } from "../interaction-entries/get-entry-form";

export async function _getAnalyticForms(bookId) {
  const fields = await prisma.interactionBookForms.findMany({
    where: {
      bookId,
      formSchema: {
        type: "analytic",
      },
    },
    include: {
      formSchema: {
        include: {
          formFields: true,
        },
      },
    },
  });
  return await Promise.all(
    fields.map(async (f) => {
      const form = await _getInteractionEntryForm({
        bookFormId: f.id,
      });
      return form;
    })
  );
}
