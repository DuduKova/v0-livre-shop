export const lead = {
  name: "lead",
  title: "Lead",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
