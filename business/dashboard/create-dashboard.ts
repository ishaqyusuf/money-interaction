"use server";

import { prisma } from "../db";
import { getCurrentBook } from "../interaction-books/get-current-book";
import { _slug } from "../utils/server-utils";

export async function createDashboard(data) {
  const book = await getCurrentBook(data);
  if (!book) throw new Error("");
  const db = await prisma.dashboardTab.create({
    data: {
      title: data.title,
      slug: await _slug(data.title, null, prisma.dashboardTab),
      permissions: {
        create: {
          create: true,
          edit: true,
          delete: true,
          bookAccessId: book?.bookId,
        },
      },
    },
    include: {
      permissions: true,
    },
  });
  return db;
}
