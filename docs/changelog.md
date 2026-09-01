# Changelog.md

Formato basado en [Keep a Changelog](https://keepachangelog.com/). Las entradas se agregan de la más reciente a la más antigua.

## [Sin versión] — 2026-07-31

### Corregido
- **Contenido de la plantilla original reemplazado por datos de Sebastian**: links de redes sociales (LinkedIn/GitHub), copyright y `og:url` del footer ahora apuntan a Sebastian (`https://nexosdweb.vercel.app/`), se quitó el enlace de Facebook.
- **Metadatos en `Layout.tsx`**: se consolidó el bloque de metas, se eliminaron tags `og:*` duplicados y con URLs de ejemplo (`http://example.com`) y se quitó el dominio de la plantilla (`elvito.netlify.app`).
- **Botón "View Resume" eliminado del Hero** (apuntaba a un Drive privado).
- **Overflow horizontal en Proyectos**: se eliminó el `transform: translateX(±150%)` inicial del CSS; ahora GSAP anima con `xPercent` vía `gsap.fromTo` solo al entrar en pantalla.
- **Rotación 3D de `ProjectCard`**: `onMouseMove` ahora usa coordenadas relativas al elemento (`getBoundingClientRect`) en vez de `screenX/screenY`.
- **Race condition en scroll**: `Logo`, `DrawerItem`, `Footer` y `Hero` hacen `router.push` + scroll de forma segura (scroll solo tras navegar o si ya estás en `/`).
- **Tweens GSAP duplicados**: la animación de `.perkCard`, `.toolCard1` y `.toolCard2` se movió al componente padre (Perks/TechTools); cada tarjeta ya no anima a todas.
- **`onMouseMove`/`useEffect`**: `gsap.registerPlugin` se movió a nivel de módulo en `Drawer`, `Footer`, `Logo` y `CTA` (ahora CTA registra ScrollTrigger y Footer ScrollToPlugin explícitamente).
- **`SocialMediaIcon`**: se reemplazó `next/image` por `<img>` (ancho/alto eran strings y SVG remoto no pasaba por los dominios configurados).
- **Footer en modo claro**: el texto ya no es blanco sobre blanco; usa el color del tema.
- **Proyecto "Este Es Mi Portfolio"**: `siteUrl` real en vez de `example-tasks.com`.
- **`ContactBox`**: `textAlign: 'revert'` inválido → `'left'`.
- **`ReadMore`**: slice robusto para textos cortos y espacio antes de "... read more".
- **`contact.tsx`**: `wa.me` ahora incluye el código de país (`529861737766`); se quitaron saltos de línea en `mailto:` y el email.
- **`Hero.tsx`**: key MUI inválida `hover:` → `":hover"`.
- **`ToolCard`**: `mt: '5em'` → `'1em'`; `Input`: filas solo para multiline y redundancias eliminadas.
- **Console.logs de debug eliminados** en `index.tsx`, `Projects.tsx` y `Logo.tsx`.
- **`About.tsx`**: clase `img1` renombrada a `aboutImg` para no colisionar con el selector global de GSAP del Hero.

### Agregado
- **Preparación de la sección Proyectos para más proyectos**: `ProjectCard` renderiza la imagen condicionalmente si existe `img`, y los botones Live Site / Check Code son opcionales (guardan si falta `siteUrl`/`repoUrl`).
- **Blog en el drawer** (`Links` en Navbar) con icono `Article`.
- Dominio `images.ctfassets.net` agregado a `images.domains` en `next.config.js` (para imágenes de proyectos desde Contentful).
- **TechTools ahora usa la prop `icons`** (Contentful) con fallback a `DEFAULT_ICONS`. Se descomentó React en el array local.

### Cambiado
- `pages/index.tsx`: `<Experience iconsArray={...} />` → `<Experience icons={...} />`.

## [Sin versión] — 2026-07-31 (previo)

### Corregido
- **Build y dev server rotos por incompatibilidad de Node**: Next.js 12.2.2 (a través de `jsonwebtoken` → `buffer-equal-constant-time`) crasheaba con Node 26 (`Buffer.SlowBuffer` eliminado). Se instaló **nvm-windows**, se instaló y activó **Node 18.20.8**, y se reemplazó el symlink viejo de `C:\nvm4w\nodejs` (apuntaba a v26.4.0).
- Verificado: `npm run build` compila OK (solo warnings de ESLint) y `npm run dev` responde HTTP 200.

### Agregado
- `docs/snapshot_2026-07-31.md` — volcado completo del estado del proyecto (respaldo inmutable pre-cambios).

## [0.1.0] — 2022

### Corregido
- Errores menores de layout y tamaños; se actualizó la foto de perfil.
- Imagen del footer.
- Imagen de perfil (varias iteraciones: `imagenv2`, `IMAGEN`).
- `fixedv1`: fixes visuales varios.

### Agregado / Cambiado
- Deploy con variables de entorno configuradas (`deploy env`).
- Funcionalidad de EmailJS en el formulario de contacto (`Funnciona Email`).
- Sección Footer.
- Sección "Sobre mí" (About).
- Sección de Proyectos.
- Sección de habilidades/tools (TechTools) lista.
- Proyecto iniciado y corriendo en edición.

---

## Registro de git (historial completo)

```
c20db8a se corrijieron errores menores layout y tamaños, se actualizo foto
69edbc1 fix : imagen foother
e45f885 fix: Imagen
375d05a imagenv2
d80b7a0 IMAGEN
e4c0bdd fixedv1
4cdcaac deploy env
2d44420 Funnciona Email
79fba07 Footer
7d117ea Sobre mi
276dbbe Proyectos
ef2a562 tech listos
ab769b9 Proyecto iniciado y corriendo pero en edicion.
```

---

## Cómo agregar cambios futuros

1. Crea una sección `## [Versión] — Fecha` al inicio.
2. Clasifica los cambios en: `Agregado`, `Cambiado`, `Corregido`, `Eliminado`.
3. Referencia decisiones en `decisions.md` cuando aplique.
