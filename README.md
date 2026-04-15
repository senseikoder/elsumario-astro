# El Sumario - Astro Blog

Migración de WordPress a Astro SSG + SSR.

## Estructura

```
src/
├── content/blog/     # Posts MD/MDX (organizado por año/mes)
├── components/       # Componentes reutilizables
├── layouts/         # Plantillas (BaseLayout, BlogPost)
├── pages/           # Rutas del sitio
│   ├── blog/[...slug].astro  # Posts individuales
│   └── buscar.astro          # Página con Pagefind
└── styles/          # CSS global
```

## Shortcodes

El script `scripts/parse-wp-shortcodes.ts` convierte shortcodes de WP:

- `[caption]` → `<figure><img/><figcaption></figcaption></figure>`
- `[gallery]` → `<div class="wp-gallery">`
- `[video]` → `<video>`
- `[embed]` → `<iframe>`

## Búsqueda

Pagefind indexa automáticamente los HTML en `/dist` después del build. No necesita JSON externo.

## Comandos

```bash
npm install
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview del build
```

## Imágenes

Las imágenes se sirven desde Cloudflare R2. Actualiza las URLs en `astro.config.mjs`.
