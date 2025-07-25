import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          label: "Page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", label: "Title", required: true },
            { name: "slug", type: "string", label: "Slug", required: true },
            { name: "body", type: "markdown", label: "Body" }
          ]
        },
        {
          name: "Project",
          type: "page",
          label: "Project",
          urlPath: "/project/{slug}",
          filePath: "content/projects/{slug}.json",
          fields: [
            { name: "title", type: "string", label: "Project Title", required: true },
            { name: "slug", type: "string", label: "Slug", required: true },
            { name: "description", type: "markdown", label: "Description" },
            { name: "image", type: "image", label: "Project Image" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents }) => {
    return documents
      .filter((doc) => doc.modelName === "Page" || doc.modelName === "Project")
      .map((doc) => {
        let urlPath = "";
        if (doc.modelName === "Page") {
          urlPath = `/${doc.fields.slug}`;
        } else if (doc.modelName === "Project") {
          urlPath = `/project/${doc.fields.slug}`;
        }
        return {
          stableId: doc.id,
          urlPath,
          document: doc,
          isHomePage: doc.fields.slug === "home"
        };
      });
  }
}); 