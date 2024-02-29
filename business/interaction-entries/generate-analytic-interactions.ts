"use server";

import { _getAnalyticForms } from "../interaction-forms/get-analytics-forms";
import { SaveEntryForm } from "../type";

export async function _generateAnalyticInteraction({
  reqData,
  interaction,
}: SaveEntryForm) {
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
