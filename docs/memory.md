# Memory.md

## ¿Qué es este archivo?

Es la **memoria persistente** del proyecto para mí (el asistente de IA) y para futuros colaboradores. Aquí registro lo que sé, lo que hacemos, lo que cambiamos y lo que eliminamos, para no depender solo del historial de chat.

**Regla:** actualizar este archivo al final de cada sesión de trabajo.

---

## Memoria de sesión inicial — 2026-07-31

### Lo que aprendí del proyecto
- Es un portafolio personal de **Sebastian Avila** basado en una plantilla open source.
- Stack: Next.js 12 (Pages Router) + React 18 + TypeScript 4.7 + MUI 5 + Emotion + GSAP + Swiper + EmailJS + Contentful.
- `getStaticProps` en Home consulta Contentful con fallback local (`DEFAULT_PROJECTS`).
- `swcMinify: false` por problemas de minificación.
- Modo oscuro por defecto, toggle vía `ColorModeContext`.
- Hosting: Netlify. Rama `main`. Working tree limpio al inicio.
- NO hay tests automatizados ni script de typecheck. Lint = `next lint`.

### Estado de documentación creada en esta sesión
Se creó la carpeta `docs/` con:
- `architecture.md` — estructura y flujo de datos.
- `changelog.md` — historial de cambios (desde git log).
- `context.md` — contexto del proyecto y deuda técnica.
- `decisions.md` — ADRs (Contentful fallback, swcMinify, svgr, MUI/Emotion, GSAP, EmailJS, dark mode).
- `file_index.md` — índice de archivos.
- `project.md` — ficha del proyecto.
- `memory.md` — este archivo.
- `roadmap.md` — próximos pasos.
- `snapshot_2026-07-31.md` — **volcado completo del código y estado actual** (respaldo pre-cambios, inmutable).

### Snapshot creado
Se volcó TODO el estado actual del proyecto (código fuente completo, config, git, secretos, deuda técnica) en `docs/snapshot_2026-07-31.md`. Este archivo es un backup inmutable para comparar cuando hagamos cambios.

### Fix de Node (build/ dev rotos)
- **Problema:** build y dev crasheaban con `TypeError: Cannot read properties of undefined (reading 'prototype')` en `next/dist/compiled/jsonwebtoken`. Causa: Node 26 eliminó `Buffer.SlowBuffer` y Next.js 12.2.2 lo necesita.
- **Solución aplicada:**
  - Instalado **nvm-windows** vía `winget` (CoreyButler.NVMforWindows 1.2.2). Se instaló en `C:\Users\sebas\AppData\Local\nvm`.
  - `nvm install 18` → Node **18.20.8**.
  - `nvm use 18.20.8`; hubo que setear `NVM_HOME` y `NVM_SYMLINK` en la sesión y eliminar el symlink viejo `C:\nvm4w\nodejs` (apuntaba a v26.4.0). Tras eso apunta a v18.20.8.
  - `npm run build` OK (solo warnings ESLint), `npm run dev` OK (HTTP 200).
- **Config:** `NVM_HOME=C:\Users\sebas\AppData\Local\nvm`, `NVM_SYMLINK=C:\nvm4w\nodejs`, `settings.txt` con `root` y `path`.
- **IMPORTANTE:** Para que `nvm` y Node 18 queden activos en la terminal, hay que **reiniciar la terminal/opencode** (el PATH del proceso actual está desactualizado).

---

## Registro de cambios de memoria

| Fecha | Cambio |
| --- | --- |
| 2026-07-31 | Sesión inicial: análisis del proyecto y creación de `docs/`. |
| 2026-07-31 | Volcado completo del estado del proyecto en `docs/snapshot_2026-07-31.md` (backup pre-cambios). |
| 2026-07-31 | Fix de build: instalado nvm-windows + Node 18.20.8 (Next 12 no soporta Node 26). Build y dev verificados. |
| 2026-07-31 | Limpieza de contenido de la plantilla + fixes de componentes (ver `changelog.md`). Dominio real: `https://nexosdweb.vercel.app/`. Se quitó Facebook y el botón "View Resume" (sin URL). |

---

## Reglas para futuras sesiones

1. Después de cualquier cambio en el código, actualiza `changelog.md`.
2. Si una decisión es relevante, añade un ADR en `decisions.md`.
3. Si se agrega/elimina/renombra un archivo, actualiza `file_index.md`.
4. Si cambia la estructura o el stack, actualiza `architecture.md`.
5. Registra en esta tabla cualquier trabajo realizado en la sesión.
