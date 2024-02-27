import { GetInteractions } from "../type";

export function transformInteractions(interactions: GetInteractions["items"]) {
  let transform = interactions.map((interaction) => {
    let transformedData: any = {};
    interaction.fieldValues.map(({ field, ...value }) => {
      if (field?.dataType == "string")
        transformedData[field.label] = value.value;
      // if(field?.dataType)
    });
    return {
      interactions,
      name: interaction.bookForm.formSchema.title,
      display: interaction.bookForm.formSchema.displayLayouts.map((l) => {
        return {
          ...l,
          value: transformText(l.text as any, transformedData),
        };
      }),
    };
  });
  return transform;
}
function transformText(display: string, data) {
  Object.entries(data).map(([k, v]) => {
    display.replace(`@${k}`, v as any);
  });
  return display;
}
