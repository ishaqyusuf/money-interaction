"use server";

import { prisma } from "../db";

export async function _authId() {
  if (!(await prisma.users.count()))
    await prisma.users.create({
      data: {
        name: "Ishaq Yusuf",
        username: "ishaqYusuf",
      },
    });
  return 1;
}
