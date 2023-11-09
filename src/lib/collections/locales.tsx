import { buildCollection, buildProperty, buildEnumValues } from "firecms";

const locales = buildEnumValues({
  "en-US": "English (United States)",
  "es-ES": "Spanish (Spain)",
  "de-DE": "German",
});

export const localeCollection = buildCollection({
  path: "locale",
  customId: locales,
  name: "Locales",
  singularName: "Locales",
  properties: {
    name: buildProperty({
      name: "Title",
      validation: { required: true },
      dataType: "string",
    }),
    selectable: buildProperty({
      name: "Selectable",
      description: "Is this locale selectable",
      dataType: "boolean",
    }),
  },
});
