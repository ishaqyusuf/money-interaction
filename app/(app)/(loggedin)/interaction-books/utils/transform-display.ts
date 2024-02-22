import { FormFieldDataTypes, GetInteractions } from "@/business/type";
import { formatDate } from "@/lib/use-day";
import { formatCurrency } from "@/lib/utils";

export function transformDisplay(
  text: string,
  values: GetInteractions["items"][0]["fieldValues"]
) {
  values.map((value) => {
    let label = value.field?.label;
    let val = value.value;
    const dataType: FormFieldDataTypes = value.field.dataType as any;

    if (val) {
      switch (dataType) {
        case "date":
          val = formatDate(val);
          break;
        case "number":
          if (value.field.currency) {
            val = formatCurrency(val, value.field.unit);
          }
          break;
      }
    }

    text = text.replaceAll(
      `@${label}`,
      [val, value.field.currency ? null : value.field.unit]
        .filter(Boolean)
        .join(" ")
    );
  });

  return text;
}
