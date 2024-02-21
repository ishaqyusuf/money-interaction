"use server";

import { _saveInteractionForm } from "@/business/interaction-forms/save-interaction-form";
import { InteractionFormEditForm } from "@/business/type";
import { revalidatePath } from "next/cache";

export async function saveInteractionFormAction(data: InteractionFormEditForm) {
  await _saveInteractionForm(data);
  revalidatePath("/interaction-books/[slug]");
}
