# File Index.md

Índice de archivos del proyecto. Se actualiza cuando se agregan, renombran o eliminan archivos.

## Raíz

| Ruta | Propósito |
| --- | --- |
| `package.json` | Dependencias y scripts (`dev`, `build`, `start`, `lint`) |
| `package-lock.json` | Lockfile de npm |
| `next.config.js` | Configuración de Next.js (swcMinify, imágenes, webpack/svgr) |
| `tsconfig.json` | Configuración de TypeScript (strict, `noEmit`) |
| `.eslintrc.json` | Configuración de ESLint (Next) |
| `.gitignore` | Archivos ignorados por git |
| `LICENSE.md` | Licencia |
| `README.md` | README del proyecto |
| `next-env.d.ts` | Tipos de entorno de Next |

## Config

## Páginas (`pages/`)

| Ruta | Propósito |
| --- | --- |
| `pages/_app.tsx` | Providers globales (ThemeProvider, CssBaseline, ColorModeContext) |
| `pages/_document.tsx` | Documento HTML raíz |
| `pages/index.tsx` | Home (Hero, Perks, TechTools, Projects, About, CTA) + `getStaticProps` (Contentful) |
| `pages/contact.tsx` | Formulario de contacto (EmailJS) |
| `pages/blog/index.tsx` | Listado de posts del blog |
| `pages/blog/[PostName].tsx` | Detalle de post |
| `pages/blog/blog.scss` | SCSS del blog |
| `pages/blog/blog.css` / `.map` | CSS compilado del blog (generado) |

## Layout

| Ruta | Propósito |
| --- | --- |
| `Layout/Layout.tsx` | Layout compartido: Head, Navbar, Drawer, Footer, contenido |

## `src/`

### Componentes generales
| Ruta | Propósito |
| --- | --- |
| `src/components/Navbar/Navbar.tsx` | Barra de navegación |
| `src/components/Logo/Logo.tsx` | Logo |
| `src/components/Footer/Footer.tsx` | Pie de página |
| `src/components/Drawer/Drawer.tsx` | Menú lateral móvil |
| `src/components/Drawer/DrawerItem.tsx` | Ítem del drawer |
| `src/components/Contact/ContactBox.tsx` | Contenedor de contacto |
| `src/components/Contact/SocialMedia.tsx` | Redes sociales |
| `src/components/Contact/SocialMediaIcon.tsx` | Ícono de red social |
| `src/components/Mui/CustomLink.tsx` | Link MUI personalizado |
| `src/components/Mui/Input.tsx` | Input MUI personalizado |

### Secciones de la Home (`src/components/Sections/`)
| Ruta | Propósito |
| --- | --- |
| `Sections/Hero/Hero.tsx` | Sección principal / hero |
| `Sections/Perks/Perks.tsx` | Ventajas/beneficios |
| `Sections/Perks/PerkCard.tsx` | Tarjeta de perk |
| `Sections/TechTools/TechTools.tsx` | Habilidades técnicas (usa `iconsArray`) |
| `Sections/TechTools/ToolCard.tsx` | Tarjeta de herramienta |
| `Sections/Projects/Projects.tsx` | Proyectos (usa `projectsArray`) |
| `Sections/Projects/ProjectCard.tsx` | Tarjeta de proyecto |
| `Sections/About/About.tsx` | Sobre mí |
| `Sections/CallToAction/CTA.tsx` | Llamada a la acción |
| `Sections/ReadMore/ReadMore.tsx` | Componente "leer más" |

### Animaciones y utilidades
| Ruta | Propósito |
| --- | --- |
| `src/gsap/CursorAnimation.tsx` | Animación del cursor personalizado (`ball`) |
| `src/gsap/HeroSectionAnimation.tsx` | Animación del hero |
| `src/gsap/MainTitleAnimation.tsx` | Animación del título |
| `src/Hooks/ThemeHook.tsx` | Design tokens de tema MUI (light/dark) |
| `src/Types/Types.ts` | Tipos TypeScript compartidos (`ILayout`, etc.) |

## Estilos y assets

| Ruta | Propósito |
| --- | --- |
| `styles/styles.scss` | SCSS global |
| `styles/styles.css` / `.map` | CSS compilado global (generado) |
| `assets/icons/react.svg` | Icono React |
| `assets/icons/nextjs.svg` | Icono Next.js |
| `public/images/personal_profile.png` | Foto de perfil |

## Documentación (`docs/`)

| Ruta | Propósito |
| --- | --- |
| `docs/project.md` | Ficha del proyecto |
| `docs/context.md` | Contexto y deuda técnica |
| `docs/architecture.md` | Arquitectura |
| `docs/decisions.md` | Registro de decisiones (ADRs) |
| `docs/changelog.md` | Historial de cambios |
| `docs/file_index.md` | Este archivo |
| `docs/memory.md` | Memoria persistente |
| `docs/roadmap.md` | Próximos pasos |
| `docs/snapshot_2026-07-31.md` | Volcado completo del estado actual (respaldo pre-cambios, inmutable) |
