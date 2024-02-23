"use server";

import { prisma } from "../db";
import { _getAnalyticForms } from "../interaction-forms/get-analytics-forms";

export async function _generateAnalyticInteraction(bookId) {
  const anaylticForms = await _getAnalyticForms(bookId);
  anaylticForms.map((form) => {});
}
