import { buildCollection, buildProperty } from "firecms"
import { BlogEntryPreview } from "./blogentrypreview"
import { BlogEntry } from "./types"

export const blogCollection = buildCollection<BlogEntry>({
  name: "Blog entries",
  path: "blog",
  group: "Main",
  views: [
    {
      path: "preview",
      name: "Preview",
      Builder: BlogEntryPreview
    }
  ],
  properties: {
    name: buildProperty({
      name: "Title",
      validation: { required: true },
      dataType: "string"
    }),
    slug: buildProperty({
      name: "slug",
      validation: { required: true },
      dataType: "string"
    }),
    header_image: buildProperty({
      name: "Header image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "images",
        acceptedFiles: ["image/*"],
        metadata: {
          cacheControl: "max-age=1000000"
        }
      }
    }),
    author: buildProperty({
      name: "Author",
      validation: { required: true },
      dataType: "string"
    }),
    summary: buildProperty({
      name: "Summary",
      description:
        "Example of a complex array with multiple properties as children",
      validation: { required: true },
      dataType: "string",
      columnWidth: 400,
      markdown: true
    }),
    content: buildProperty({
      name: "Content",
      description:
        "Example of a complex array with multiple properties as children",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can ommit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          images: buildProperty({
            name: "Images",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                mediaType: "image",
                storagePath: "images",
                acceptedFiles: ["image/*"],
                metadata: {
                  cacheControl: "max-age=1000000"
                }
              }
            }),
            description:
              "This fields allows uploading multiple images at once and reordering"
          }),
          text: buildProperty({
            dataType: "string",
            name: "Text",
            markdown: true
          }),
          products: buildProperty({
            name: "Products",
            dataType: "array",
            of: {
              dataType: "reference",
              path: "products" // you need to define a valid collection in this path
            }
          })
        }
      }
    }),
    status: buildProperty(({ values }) => ({
      name: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "Published",
          disabled: !values.header_image
        },
        draft: "Draft"
      },
      defaultValue: "draft"
    })),
    created_on: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create"
    })
  }
})

export default blogCollection
