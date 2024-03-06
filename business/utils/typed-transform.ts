import { InteractionFormFields } from "@prisma/client";
import { DashboardComponentType, FormFieldDataTypes } from "../type";

export type IFormField = ReturnType<
  typeof transformFormField<InteractionFormFields>
>;
export function transformFormField<T>(data: T) {
  if (!data) data = {} as any;
  return {
    ...data,

    dataType: (data as any)?.dataType as FormFieldDataTypes,
  };
}
const transformer = {
  dashboardComponent(data) {
    return {
      ...data,
      type: data.type as DashboardComponentType,

      // formField: transformFormField(data.formField),
    };
  },
};
// export function transformData<T>(data:T, key: )
// {

// }
