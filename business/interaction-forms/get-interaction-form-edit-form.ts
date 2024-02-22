"use server";

import { prisma } from "../db";
import { FormFieldDataTypes } from "../type";

export async function _getInteractionFormEditForm(
  formPermissionId,
  bookAccessId,
  bookId
) {
  let form2 = await prisma.interactionFormPermission.findUnique({
    where: {
      id: formPermissionId || -1,
      // bookAccessId: bookAccessId,
      // bookFormId,
    },
    include: {
      bookForm: {
        include: {
          formSchema: {
            include: {
              formFields: true,
              displayLayouts: true,
            },
          },
        },
      },
    },
  });
  if (!form2)
    form2 = {
      bookAccessId,
      // bookFormId,
      deleteForm: true,
      editForm: true,
      createInteraction: true,

      bookForm: {
        bookId,
        formSchema: {
          type: "default",
          meta: {},
          displayLayouts: [],
          formFields: [],
        },
      },
    } as any;
  // form.formSchema = form?.formSchema?.formFields?.map(
  //   (field) => {
  //     return {
  //       ...field,
  //       dataType: field.dataType as FormFieldDataTypes,
  //     };
  //   }
  // );
  if (!form2 || !form2.bookForm) throw Error();
  return {
    ...form2,
    bookForm: {
      ...form2?.bookForm,
      formSchema: {
        ...form2.bookForm?.formSchema,
        formFields: form2.bookForm.formSchema.formFields.map((field) => {
          return {
            ...field,
            dataType: field.dataType as FormFieldDataTypes,
          };
        }),
      },
    },
  };
}
