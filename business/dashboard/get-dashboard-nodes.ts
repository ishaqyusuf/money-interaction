"use server";

import { InteractionFormFields } from "@prisma/client";
import { _authId } from "../auth/auth-session";
import { prisma } from "../db";
import { IFormField, transformFormField } from "../utils/typed-transform";
import { FormFieldDataTypes } from "../type";
import { ComponentNodes } from "@/app/(app)/(loggedin)/interaction-books/_modals/component-tab-modal";

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

  const nodes: ComponentNodes[] = [];
  p.map((a) => {
    a.permissions.map((pe) => {
      function registerValues(field: IFormField, schemaTitle) {
        const subNodes = [
          {
            id: field.id,
            type: field.dataType,
            label: `${schemaTitle} -> ${field.label}`,
          },
        ];
        nodes.push(...subNodes);
        // pe.bookForm?.formSchema?.formFields?.map((ff) => {
        //   if (ff.id != field.id) {
        //     subNodes.push({
        //       id: field.id,
        //       label: `${a.book.name} -> ${ff.label} -> ${field.label}`,
        //     });
        //   }
        // });
      }
      pe.bookForm?.formSchema?.formFields?.map((c) => {
        let _c = transformFormField(c);
        // if (_c.dataType == "number") {
        registerValues(_c, pe.bookForm?.formSchema.title);
        // }
      });
    });
  });
  return {
    nodes,
  };
}
