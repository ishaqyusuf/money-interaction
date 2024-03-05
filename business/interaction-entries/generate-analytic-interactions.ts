"use server";

import { InteractionAnalytics } from "@prisma/client";
import { _getAnalyticForms } from "../interaction-forms/get-analytics-forms";
import { FormFieldDataTypes, SaveEntryForm } from "../type";
import { prisma } from "../db";

export async function _generateAnalyticInteraction({
  reqData,
  interaction,
}: SaveEntryForm) {
  // save form analytic data
  let analytics: Partial<InteractionAnalytics>[] = [];
  interaction.fieldValues.map((f) => {
    if ((f.field.dataType as FormFieldDataTypes) == "number") {
      let value = parseFloat(f.value) || 0;
      analytics.push({
        value,
        bookId: interaction.bookId,
        interactionId: interaction.id,
        fieldId: f.fieldId,
        title: `${interaction.bookForm.formSchema.title} -> ${f.field.label}`,
        createdAt: interaction.createdAt,
      });
      interaction.fieldValues.map((ff) => {
        if (ff.id != f.id && ff.field.primaryField) {
          analytics.push({
            value,
            bookId: interaction.bookId,
            interactionId: interaction.id,
            fieldId: f.fieldId,
            title: `${interaction.bookForm.formSchema.title} -> ${ff.value} -> ${f.field.label}`,
            createdAt: interaction.createdAt,
          });
        }
      });
    }
  });
  await prisma.interactionAnalytics.createMany({
    data: analytics as any,
  });
  const anaylticForms = await _getAnalyticForms(interaction.bookId);
  anaylticForms.map((f) => {
    f.formFields.map((ff) => {
      let meta = ff.meta || {};
    });
  });
  await Promise.all(
    anaylticForms.map(async (form) => {
      // form.entries
      //
    })
  );
}
