"use server";

import { _authId } from "@/business/auth/auth-session";
import { prisma } from "@/business/db";
import { FormType } from "@/business/type";

export async function getBreadcrumbHeaderAction(bookSlug, formSlug) {
  const userId = await _authId();
  const booksAccess = await prisma.interactionBookAccess.findMany({
    where: {
      userId: userId,
    },
    include: {
      book: true,
      permissions: {
        include: {
          bookForm: {
            include: {
              formSchema: true,
            },
          },
        },
      },
    },
  });
  const books = booksAccess.map((access) => {
    return {
      slug: access.book.slug,
      title: access.book.name,
      forms: {
        canCreate: access.createForm,
        list: access.permissions.map((permission) => {
          return {
            title: permission.bookForm.formSchema.title,
            type: permission.bookForm.formSchema.type as FormType,
          };
        }),
      },
    };
  });
  const booksBySlug: { [slug in string]: (typeof books)[0] } = {};
  books.map((b) => {
    booksBySlug[b.slug] = b;
  });
  let response = {
    books,
    booksBySlug,
  };
  return response;
}
