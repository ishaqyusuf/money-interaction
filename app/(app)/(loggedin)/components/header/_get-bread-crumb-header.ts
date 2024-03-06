"use server";

import { _authId } from "@/business/auth/auth-session";
import { prisma } from "@/business/db";
import { FormType } from "@/business/type";

export async function getBreadcrumbHeaderAction(bookSlug, formSchemaId) {
  const userId = await _authId();
  const booksAccess = await prisma.interactionBookAccess.findMany({
    where: {
      userId: userId,
      deletedAt: null,
    },
    include: {
      book: true,
      permissions: {
        where: {
          deletedAt: null,
        },
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
    const data = {
      slug: access.book.slug,
      title: access.book.name,
      forms: {
        canCreate: access.createForm,
        list: access.permissions.map((permission) => {
          return {
            formSchemaId: permission.bookForm.formSchema.id,
            title: permission.bookForm.formSchema.title,
            type: permission.bookForm.formSchema.type as FormType,
            isCurrent: formSchemaId == permission.bookForm.formSchemaId,
          };
        }),
      },
      isCurrent: bookSlug == access.book.slug,
    };
    if (data.forms.list.length)
      data.forms.list.unshift({
        title: "All Form Entries",
      } as any);
    return data;
  });
  const booksBySlug: { [slug in string]: (typeof books)[0] } = {};
  books.map((b) => {
    booksBySlug[b.slug] = b;
  });
  const currentBook = books.find((b) => b.isCurrent);
  const currentBookForm = currentBook?.forms?.list?.find(
    (l) => l.formSchemaId == formSchemaId
  );
  let response = {
    books,
    booksBySlug,
    currentSlug: currentBook?.slug,
    currentBook: currentBook
      ? { title: currentBook.title, icon: null }
      : { title: "Interactions", icon: null },
    currentBookForm: currentBookForm
      ? { title: currentBookForm.title, icon: null }
      : currentBook
      ? currentBook?.forms?.list?.length
        ? {
            title: "All Forms",
            icon: null,
          }
        : { title: "No Forms", icon: null }
      : null,
  };
  return response;
}
