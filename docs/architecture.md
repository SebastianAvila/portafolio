# Architecture.md

## Visión general

Aplicación Next.js 12 con **Pages Router**. Cada carpeta cumple un rol:

```
portafolio/
├── pages/          → Rutas y páginas de Next.js
├── Layout/         → Layout compartido (Navbar + Drawer + Footer + Head)
├── src/
│   ├── components/ → Componentes UI (Navbar, Footer, Drawer, secciones)
│   ├── gsap/       → Hooks de animaciones GSAP
│   ├── Hooks/      → Hooks de React (ThemeHook)
│   └── Types/      → Definiciones de tipos TypeScript
├── styles/         → SCSS/CSS globales
├── assets/icons/   → SVGs locales
├── public/images/  → Imágenes estáticas
└── docs/           → Documentación del proyecto
```

## Flujo de datos (Home)

1. `pages/index.tsx` ejecuta `getStaticProps` (SSG).
2. Consulta Contentful vía GraphQL (`projectCollection`, `iconsCollection`).
3. Si falla (sin env vars, error de red, respuesta inválida) → usa `DEFAULT_PROJECTS` local y `iconsArray: []`.
4. Los props se pasan a `Experience` (icons) y `Projects` (projects).
5. `Layout` inyecta Head (meta tags SEO/OG), Navbar, Drawer y Footer alrededor del contenido.

## Capas

### 1. Páginas (`pages/`)
- `index.tsx` — Home: Hero, Perks, TechTools, Projects, About, CTA + cursor animado.
- `contact.tsx` — Formulario de contacto con EmailJS.
- `blog/index.tsx` — Listado de posts.
- `blog/[PostName].tsx` — Detalle de un post.
- `_app.tsx` — Providers globales: ThemeProvider (MUI), CssBaseline, ColorModeContext.
- `_document.tsx` — HTML shell.

### 2. Layout (`Layout/Layout.tsx`)
- Componente que envuelve todas las páginas.
- Head con meta tags (title, description, OG, twitter, language).
- Navbar + CustomDrawer (menú móvil) con estado compartido `isOpen`.
- Footer.
- Contenido en `.site-content`.

### 3. Componentes (`src/components/`)
Agrupados por dominio:
- `Navbar/`, `Footer/`, `Logo/` — chrome de la app.
- `Drawer/` — menú lateral móvil.
- `Contact/` — `ContactBox`, `SocialMedia`, `SocialMediaIcon`.
- `Mui/` — componentes personalizados sobre MUI (`CustomLink`, `Input`).
- `Sections/` — secciones de la home:
  - `Hero/`, `Perks/`, `TechTools/`, `Projects/`, `About/`, `CallToAction/`, `ReadMore/`.

### 4. Animaciones (`src/gsap/`)
- `HeroSectionAnimation.tsx` — animaciones de entrada del Hero.
- `MainTitleAnimation.tsx` — animación del título principal.
- `CursorAnimation.tsx` — cursor personalizado (`ball`), usado en Home.

### 5. Temas (`src/Hooks/ThemeHook.tsx`)
- Genera design tokens de MUI según `mode` (`light`/`dark`).
- `_app.tsx` provee `ColorModeContext` para el toggle.

## Configuración de Next (`next.config.js`)

- `reactStrictMode: true`
- `swcMinify: false` — desactivado por problemas de minificación.
- `images.domains` — allowlist de dominios para `next/image` (open.cruip.com, ucarecdn.com, svgrepo, unsplash, cloudinary).
- webpack: soporte para importar `.svg` como componentes vía `@svgr/webpack`.

## Theming

- MUI `createTheme` construido en `_app.tsx` con tokens de `ThemeHook`.
- Emoción como motor de estilos.
- Modo oscuro por defecto, con `ColorModeContext` para alternar.
- SCSS global en `styles/styles.scss` (compilado a `styles.css`).

## Publicación

- Hosting: Netlify (`elvito.netlify.app`).
- Build estático; el contenido puede venir de Contentful en runtime (revalidate 60 en fallback).
