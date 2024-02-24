"use server";

import { _generateAnalyticInteraction } from "@/business/interaction-entries/generate-analytic-interactions";
import { _saveEntryForm } from "@/business/interaction-entries/save-entry-form";
import { GetInteractionEntryForm } from "@/business/type";
import { _revalidatePath } from "@/business/utils/revalidate-path";

export async function saveInteractionEntry(data: GetInteractionEntryForm) {
  const resp = await _saveEntryForm(data);
  if (resp) {
    const interaction = await _generateAnalyticInteraction(resp);
  }
  _revalidatePath("interactions");
}
