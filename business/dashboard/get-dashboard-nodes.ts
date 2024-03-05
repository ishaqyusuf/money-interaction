"use server";

import { InteractionFormFields } from "@prisma/client";
import { _authId } from "../auth/auth-session";
import { prisma } from "../db";
import { transformFormField } from "../utils/typed-transform";

export async function getDashboardNodes(bookSlug) {
  const p = await prisma.interactionBookAccess.findMany({
    where: {
      userId: await _authId(),
      book: {
        slug: bookSlug,
      },
    },
    include: {
      book: true,
      permissions: {
        include: {
          bookForm: {
            include: {
              formSchema: {
                include: {
                  formFields: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const nodes = [];
  p.map((a) => {
    a.permissions.map((pe) => {
      function registerValues(field: InteractionFormFields) {
        const subNodes = [
          {
            id: field.id,
            label: `${a.book.name} -> ${field.label}`,
          },
        ];
        pe.bookForm?.formSchema?.formFields?.map((ff) => {
          if (ff.id != field.id) {
            subNodes.push({
              id: field.id,
              label: `${a.book.name} -> ${ff.label} -> ${field.label}`,
            });
          }
        });
      }
      pe.bookForm?.formSchema?.formFields?.map((c) => {
        let _c = transformFormField(c);
        if (_c.dataType == "number") {
        }
      });
    });
  });
  return p;
}
