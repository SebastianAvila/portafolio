# Roadmap.md

Próximos pasos y mejoras planificadas para el portafolio. Ordenadas por prioridad.

## Corto plazo (calidad / deuda técnica)

- [ ] **Limpieza de metadatos** en `Layout/Layout.tsx`: hay tags `og:*` duplicados y hardcodeados con URLs de ejemplo (`http://example.com`). Consolidar en un solo bloque correcto.
- [ ] **Quitar `console.log` de depuración** en `getStaticProps` de `pages/index.tsx`.
- [ ] **Reducir `any`**: tipar props de páginas y componentes (`Home: NextPage`, `removeEmpty`, etc.) usando `src/Types/Types.ts`.
- [ ] **Añadir script de typecheck** (`tsc --noEmit`) y de prettier/format para estandarizar formato.
- [ ] **No versionar archivos generados** (`styles/styles.css`, `*.map`, `pages/blog/blog.css`): mover a `.gitignore` o al build.
- [ ] **Persistir el tema** (claro/oscuro) en `localStorage` para mantener la preferencia entre visitas.

## Medio plazo (contenido y features)

- [ ] Poblar Contentful con más proyectos e iconos (el fallback local actual tiene 2 proyectos).
- [ ] Revisar la página de **blog**: conectar a fuente de datos (actualmente es plantilla de ejemplo) o deshabilitarla.
- [ ] Actualizar imagen de perfil y assets del hero si hace falta.
- [ ] Completar secciones con contenido actualizado (perfil, experiencia, contacto).
- [ ] Revisar accesibilidad (contraste, focus, alt text).

## Largo plazo (técnica)

- [ ] Evaluar migración a App Router de Next.js 13+ (Next 12 está en EOL).
- [ ] Migrar estilos mezclados (MUI `sx` + SCSS) a un enfoque único.
- [ ] Añadir tests (unitarios con vitest/jest + testing-library).
- [ ] CI/CD: lint + typecheck + build en cada push (GitHub Actions).
- [ ] Optimizar bundle (MUI tree-shaking, code splitting, lazy loading de Swiper/GSAP).
- [ ] i18n completo (es/en) con `next-i18next` o similar.

---

## Completado

- [x] Creación de `docs/` con documentación del proyecto (2026-07-31).
- [x] Fix de build: instalar nvm-windows + Node 18.20.8 para Next.js 12 (2026-07-31).
- [x] Snapshot completo del estado del proyecto (`docs/snapshot_2026-07-31.md`).
