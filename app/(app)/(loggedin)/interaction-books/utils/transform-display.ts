import { GetInteractions } from "@/business/type";

export function transformDisplay(
  text: string,
  values: GetInteractions["items"][0]["fieldValues"]
) {
  values.map((value) => {
    let label = value.field?.label;

    text = text.replaceAll(`@${label}`, value.value);
  });

  return text;
}
