import { defineConfig } from 'tinacms';
import { EnlaceFrontend } from "./components/EnlaceFrontend"; // 1. Importar el componente

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || 'master';

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    loadCustomStore: async () => {
      const pack = await import('./r2-media-store');
      return pack.R2MediaStore;
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Noticias",
        path: "src/content",
        format: "md",
        match: {
          include: "**/*", // Permite a Tina buscar en subcarpetas (año/mes)
        },
        fields: [
          {
            type: "string",
            name: "enlaceDirecto",
            label: "Acceso Rápido",
            ui: {
              component: EnlaceFrontend,
            },
          },
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Fecha de publicación",
            ui: {
              dateFormat: "DD/MM/YYYY",
            },
          },
          {
            type: "string",
            name: "categories",
            label: "Categorías",
            list: true,
            options: [
              { value: "dinero", label: "Dinero" },
              { value: "placeres", label: "Placeres" },
              { value: "destacadas", label: "Destacadas" },
              { value: "opinion", label: "Opinión" },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Etiquetas",
            list: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
          },
          {
            type: "image",
            name: "coverImage",
            label: "Imagen de portada",
          },
          
        ],
        ui: {
          // router: ({ document }) => {
          //   // Retornamos la ruta final exacta que usa Astro
          //   return `/${document._sys.filename}`;
          // },
          filename: {
            slugify: (values) => {
              const date = new Date();
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const slug =
                values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
                "sin-titulo";
              // Guarda las nuevas entradas en el formato actual: año/mes/slug
              return `${year}/${month}/${slug}`;
            },
          },
        },
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "4e985c53db78887888cccafe7fa771b5884abbd8",
      stopwordLanguages: ["spa"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
