# Decisions.md

Registro de decisiones de arquitectura y diseño. Formato ADR simplificado. Entradas de la más reciente a la más antigua.

---

## DEC-001 — Usar Contentful como CMS con fallback local

**Estado:** Adoptada
**Fecha:** 2022

**Contexto:** Se quería gestionar proyectos y tecnologías sin hardcodear todo en el código.

**Decisión:** En `pages/index.tsx`, `getStaticProps` consulta Contentful vía GraphQL (`projectCollection`, `iconsCollection`). Si faltan variables de entorno o falla la petición, se usa `DEFAULT_PROJECTS` local y `iconsArray: []`.

**Consecuencias:**
- (+) Contenido editable sin redeploy.
- (+) Resiliencia: si el CMS falla el sitio sigue mostrando proyectos de respaldo.
- (−) Mantener doble fuente de datos (CMS + fallback) puede divergir.
- (−) Sin env vars el sitio funciona con contenido de ejemplo.

---

## DEC-002 — Desactivar SWC minify (`swcMinify: false`)

**Estado:** Adoptada
**Fecha:** 2022

**Contexto:** La minificación por defecto de SWC rompía el build.

**Decisión:** Desactivar `swcMinify` en `next.config.js`.

**Consecuencias:**
- (+) Build estable.
- (−) Bundles de producción algo más grandes.

---

## DEC-003 — Cargar SVGs como componentes React vía `@svgr/webpack`

**Estado:** Adoptada

**Contexto:** Se necesitan iconos SVG importables como componentes para temas y estilos.

**Decisión:** Añadir regla de webpack en `next.config.js` para procesar `.svg` con `@svgr/webpack`.

**Consecuencias:**
- (+) Iconos tipables y estilizables vía props.
- (+) Compatible con la carpeta `assets/icons/`.

---

## DEC-004 — Material UI + Emotion como sistema de UI y theming

**Estado:** Adoptada

**Contexto:** La plantilla base usaba MUI; se mantuvo para consistencia.

**Decisión:** Usar MUI 5 con Emotion, `createTheme` en `_app.tsx`, tokens desde `ThemeHook`, y `ColorModeContext` para modo claro/oscuro.

**Consecuencias:**
- (+) Tema centralizado y toggle de modo.
- (−) Bundle grande (MUI es pesado).
- (−) Estilos mixtos (MUI `sx`, `styled` y SCSS global).

---

## DEC-005 — Animaciones con GSAP (hooks dedicados)

**Estado:** Adoptada

**Contexto:** Se requieren animaciones de scroll/entrada y un cursor personalizado.

**Decisión:** Aislar la lógica GSAP en `src/gsap/` (`CursorAnimation`, `HeroSectionAnimation`, `MainTitleAnimation`).

**Consecuencias:**
- (+) Animaciones reutilizables y separadas del render.
- (−) GSAP trabaja sobre el DOM real, requiere cuidado con SSR/hidratación.

---

## DEC-006 — Contacto con EmailJS (sin backend)

**Estado:** Adoptada

**Contexto:** Se necesita un formulario de contacto funcional sin levantar servidores.

**Decisión:** Integrar EmailJS (`@emailjs/browser`) en `pages/contact.tsx`.

**Consecuencias:**
- (+) Cero infraestructura backend.
- (−) Las credenciales del servicio quedan expuestas en el cliente.

---

## DEC-007 — Modo oscuro por defecto

**Estado:** Adoptada

**Contexto:** Estética deseada del portafolio.

**Decisión:** `_app.tsx` inicializa `mode` en `'dark'`.

**Consecuencias:**
- (+) Look consistente con el diseño de la plantilla.
- (−) El modo no persiste entre sesiones (sin localStorage).

---

## DEC-008 — Usar `<img>` (no `next/image`) para imágenes de proyectos, redes y tools remotas

**Estado:** Adoptada
**Fecha:** 2026-07-31

**Contexto:** Las imágenes de proyectos pueden venir de Contentful (`images.ctfassets.net`) o de URLs arbitrarias que el dueño del portafolio agregue, y los iconos de tecnologías/redes vienen de CDNs (jsdelivr, svgrepo). `next/image` requiere listar cada dominio en `next.config.js` y, en Next 12, falla con strings en `width`/`height`.

**Decisión:** En `ProjectCard`, `SocialMediaIcon` y `ToolCard` se usa `<img>` con estilos `width/height 100%` + `objectFit`. En `ProjectCard` la imagen se renderiza solo si existe la prop `img`.

**Consecuencias:**
- (+) Sin restricciones de dominios; cualquier URL funciona.
- (+) Consistente con el patrón ya existente en `ToolCard`.
- (−) Warnings de ESLint `@next/next/no-img-element` (aceptados).
- (−) Se pierde la optimización automática de `next/image`.

---

## DEC-009 — Animación de entrada de proyectos con `gsap.fromTo` + `xPercent`

**Estado:** Adoptada
**Fecha:** 2026-07-31

**Contexto:** La tarjeta de proyecto usaba `transform: translateX(±150%)` en CSS, lo que causaba overflow horizontal al cargar la página.

**Decisión:** Eliminar el transform del CSS. `Projects.tsx` anima con `gsap.fromTo('.p<i>', { xPercent: ±100 }, { xPercent: 0 })` disparado por ScrollTrigger, así el desplazamiento solo ocurre al entrar en pantalla.

**Consecuencias:**
- (+) Sin overflow al cargar.
- (+) Animación dirigida por scroll, no aplicada al montar.
- (−) Requiere que el wrapper de cada tarjeta conserve `overflowX: hidden` mientras se anima.
