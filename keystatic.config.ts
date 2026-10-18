import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // Cambiar a 'github' en producción
  },
  collections: {
    noticias: collection({
      label: 'Noticias',
      slugField: 'title',
      path: 'src/content/noticias/**/*', // Estructura anidada
      format: { data: 'frontmatter' },
      schema: {
        title: fields.text({ label: 'Título' }),
        pubDate: fields.date({ label: 'Fecha de Publicación', validation: { isRequired: true } }),
        categoria: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Nacionales', value: 'nacionales' },
            { label: 'Deportes', value: 'deportes' }
          ],
          defaultValue: 'nacionales'
        }),
        content: fields.document({ 
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/uploads', // Modificaremos esto luego para R2
            publicPath: '/uploads/'
          }
        })
      }
    })
  }
});