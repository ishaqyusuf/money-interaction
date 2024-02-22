"use server";

import { prisma } from "@/business/db";

export async function getAutoFields(bookId) {
  const book = await prisma.interactionBooks.findUnique({
    where: {
      id: bookId,
    },
    include: {
      forms: {
        select: {
          formSchema: {
            select: {
              title: true,
              formFields: true,
            },
          },
        },
      },
    },
  });
  if (!book) throw new Error("Book not found");
  let autoCompleteFields: {
    label;
    value;
  }[] = [];
  book.forms.map((f) => {
    f.formSchema.formFields.map((ff) => {
      autoCompleteFields.push({
        label: `${f.formSchema.title} -> ${ff.label}`,
        value: ff.id,
      });
    });
  });
  return autoCompleteFields;
}
