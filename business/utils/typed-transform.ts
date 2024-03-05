import { InteractionFormFields } from "@prisma/client";
import { FormFieldDataTypes } from "../type";

export type IFormField = ReturnType<typeof transformFormField>;
export function transformFormField(
  data: InteractionFormFields | undefined | null
) {
  if (!data) data = {} as any;

  return {
    ...data,
    dataType: data?.dataType as FormFieldDataTypes,
  };
}
