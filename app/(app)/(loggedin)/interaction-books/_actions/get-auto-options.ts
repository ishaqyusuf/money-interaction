"use server";

import { prisma } from "@/business/db";

export async function getAutoOptions(fieldId) {
  const options = await prisma.interactionFormValue.findMany({
    where: {
      fieldId,
    },
  });
  const o = options.map((o) => {
    return {
      label: o.value,
      value: o.value,
    };
  });

  return o;
}
