# Context.md

## ¿Qué es este proyecto?

Es el portafolio profesional de Sebastian Avila. Es un sitio Next.js con Pages Router que combina una página de inicio (Hero, Perks, TechTools, Projects, About, CTA), una página de contacto y un mini-blog.

## ¿Para quién?

- Reclutadores y clientes que quieren ver el trabajo de Sebastian.
- La audiencia general es "Everyone" (metadatos), orientado a Web Development.

## Stack y por qué

| Tecnología | Uso |
| --- | --- |
| Next.js 12 | SSR/SSG, rutas, SEO |
| React 18 | UI declarativa |
| TypeScript 4.7 | Tipado estricto (`strict: true`) |
| Material UI + Emotion | Sistema de componentes y theming (modo oscuro/claro) |
| GSAP | Animaciones (Hero, título, cursor personalizado) |
| Swiper | Sliders/carouseles |
| EmailJS | Envío de correos desde el formulario de contacto (sin backend) |
| Contentful | CMS para proyectos e iconos de tecnologías (GraphQL) |

## Estado actual

- Working tree limpio, rama `main`, sincronizado con `origin/main`.
- El sitio corre con build estático + fallback de contenido local.
- Sin tests automatizados.
- Se usa `reactStrictMode: true` y `swcMinify: false` (por problemas de minificación).

## Entorno / Variables

Se esperan variables de entorno para Contentful:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`

Si no existen o falla la llamada, `getStaticProps` devuelve `DEFAULT_PROJECTS` (fallback local).

## Notas de estilo

- Mezcla de español e inglés en el contenido.
- Tema por defecto: oscuro (`dark`), con toggle a claro.
- Cursor personalizado (`.ball`) visible solo en pantallas md+.

## Deuda técnica conocida

- Archivos `*.css` y `*.css.map` compilados de SCSS versionados en el repo (se generan en build).
- Tipos sueltos con `any` (ej. `Home: NextPage = ({ projectsArray, iconsArray }: any)`, `Hero` ref, `PerkCard`, `ReadMore`, `ThemeHook`).
- Warnings de ESLint existentes: `exhaustive-deps` en `contact.tsx`/`Hero.tsx`/`_app.tsx`; `no-img-element` en `ToolCard`, `SocialMediaIcon` y `ProjectCard` (uso deliberado de `<img>` para URLs remotas sin depender de `images.domains`).
