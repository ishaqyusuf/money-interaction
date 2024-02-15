"use server";

import { prisma } from "../db";
import { FieldValueById } from "../type";

export async function _getBookFormSchema(id, interactionId?) {
  const schema = await prisma.interactionBookForms.findUnique({
    where: { id },
    include: {
      formSchema: {
        include: {
          formFields: true,
        },
      },
    },
  });
  const fieldValueById: FieldValueById = {};
  schema?.formSchema.formFields.map((ff) => {
    fieldValueById[ff.id] = {
      fieldId: ff.id,
      meta: {},
    } as any;
  });

  const interaction = await prisma.interactions.findUnique({
    where: {
      id: interactionId,
    },
    include: {
      fieldValues: true,
    },
  });
  type Interaction = NonNullable<typeof interaction>;
  if (interaction?.fieldValues)
    interaction.fieldValues.map((fv) => {
      if (fieldValueById[fv.id]) fieldValueById[fv.id] = fv;
    });

  return {
    ...schema,
    form: {
      fieldValues: interaction?.fieldValues || [],
      fieldValueById,
      id: interactionId,
      bookFormId: id,
    } as Interaction & { fieldValueById: FieldValueById },
  };
}
