"use server";

import { _getInteractions } from "@/business/interactions/get-interactions";

export async function getInteractions(slug) {
  const interactions = await _getInteractions(slug, {});
  return interactions;
}
