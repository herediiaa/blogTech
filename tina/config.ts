import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d5b23269-6b8e-4642-8917-705f901620da", // Get this from tina.io
  token: "1f562bea0e3fbd65765ad4d1d3c23ac548d073d0", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
    
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
    
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "postSlug",
            label: "Post Slug"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publication Date",
            required: false,
            ui: {
              component: 'date',
              timeFormat: "HH:mm"
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
             
          },
          {
            label:"Tags",
            name: "tags",
            type:"string",
            list:true,
          },
          {
            type: "string",
            name: "ogImage",
            label: "Open Graph Image"
          },
          {
            type: 'rich-text',
            label: 'Body of post',
            name: 'body',
            isBody: true,
          },
     

        ]
      }
    ],
    
  },
});
