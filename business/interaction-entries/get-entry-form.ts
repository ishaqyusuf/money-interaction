"use server";

import { prisma } from "../db";

interface Props {
  bookFormId;
  interactionEntryId?;
}
export async function _getInteractionEntryForm({
  bookFormId,
  interactionEntryId,
}: Props) {
  const p = await prisma.interactionBookForms.findUnique({
    where: {
      id: bookFormId,
    },
    include: {
      formSchema: {
        include: {
          formFields: true,
        },
      },
      interactions: {
        where: {
          id: interactionEntryId || -1,
        },
        include: {
          fieldValues: true,
        },
      },
    },
  });
  if (!p) throw new Error();
  const entries: { [id in number]: { id?; value } } = {};
  const fValues = p?.interactions?.[0]?.fieldValues;
  function fieldData(fieldId) {
    let fValue = fValues?.find((f) => f.fieldId == fieldId);
    if (!fValue) return { value: null };
    return {
      value: fValue.value,
      id: fValue.id,
    };
  }
  p.formSchema.formFields.map((field) => {
    entries[field.id] = fieldData(field.id);
  });
  const form = {
    interactionEntryId,
    bookId: p.bookId,
    bookFormId: p.id,
    ...p.formSchema,
    fields: p.formSchema.formFields,
    entries,
  };
  return form;
}
