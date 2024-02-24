"use server";

import { _getAnalyticForms } from "../interaction-forms/get-analytics-forms";
import { SaveEntryForm } from "../type";

export async function _generateAnalyticInteraction({
  reqData,
  interaction,
}: SaveEntryForm) {
  const anaylticForms = await _getAnalyticForms(interaction.bookId);

  await Promise.all(
    anaylticForms.map(async (form) => {
      //
    })
  );
}
