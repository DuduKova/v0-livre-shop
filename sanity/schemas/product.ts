export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Bombones y trufas", value: "Bombones y trufas" },
          { title: "Chocotejas peruanas", value: "Chocotejas peruanas" },
          { title: "Barras y tabletas", value: "Barras y tabletas" },
          { title: "Grageas y bañados", value: "Grageas y bañados" },
          { title: "Vegano", value: "Vegano" },
          { title: "Delicattesen", value: "Delicattesen" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
