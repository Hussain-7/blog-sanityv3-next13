import { defineField, defineType } from "sanity";

export default defineType({
  name: "termsAndCondition",
  title: "Terms And Condition",
  type: "document",
  fields: [
    // define Tilte
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
  // this is only one object
});
