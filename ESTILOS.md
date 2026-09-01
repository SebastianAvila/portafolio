# ESTILOS DE NEXO SD — Guía de diseño

Referencia completa de los estilos utilizados para construir la landing page de NEXO SD.
Revisado a partir del código fuente (`app/globals.css`, `app/layout.tsx`, `components/*` y `docs/`).

---

## 1. Tema base — `app/globals.css`

- Tailwind CSS **v4** (`@import "tailwindcss"`)
- Estilos base de **HeroUI** (`@import "@heroui/react/styles"`)
- Theme declarado con `@theme inline`

```css
@theme inline {
  /* Colores NEXO SD */
  --color-background: #071423;
  --color-foreground: #FFFFFF;
  --color-primary: #0B2A5B;
  --color-secondary: #1477F8;
  --color-accent: #25C6DA;
  --color-success: #10B981;
  --color-text-muted: #A0AEC0;

  /* Tipografía */
  --font-sans: var(--font-inter);
  --font-heading: var(--font-poppins);
}
```

Base global:

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background-color: #071423;
  color: #FFFFFF;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
```

---

## 2. Paleta de colores

| Rol | Hex | Uso |
|-----|-----|-----|
| background | `#071423` | Fondo principal (azul marino oscuro) |
| primary | `#0B2A5B` | Fondos secundarios, gradientes, nodos, mockup |
| secondary | `#1477F8` | Botones, acentos, bordes, glows azules |
| accent | `#25C6DA` | Highlights, tags, textos de énfasis, underline de links |
| success | `#10B981` | Estados de éxito, indicadores, dot del footer |
| text-muted | `#A0AEC0` | Todo texto secundario/terciario |
| foreground | `#FFFFFF` | Texto principal |

### Reglas de uso

- Colores **hardcoded inline** en los componentes (ej. `bg-[#1477F8]`, `text-[#25C6DA]`), no vía theme de Tailwind (decisión en `docs/DECISIONS.md`).
- Variaciones por opacidad usadas: `/90`, `/30`, `/25`, `/20`, `/15`, `/12`, `/10`, `/8`, `/6`, `/5`, `/4`, `/3`, `/2`.
- Gradiente de marca: `from-[#1477F8] to-[#25C6DA]` (logo, submit form, líneas de proceso).
- Glows: `shadow-[0_0_20px_rgba(20,119,248,0.4)]` y `shadow-[0_0_30px_rgba(37,198,218,0.5)]`.

---

## 3. Tipografía

| Rol | Fuente | Clase |
|-----|--------|-------|
| Body / texto | Inter | `font-inter` (`--font-sans`) |
| Headings | Poppins | `font-poppins` (`--font-heading`) |
| Mono | Geist Mono | `--font-geist-mono` |

### Pesos usados

- `font-black` — h1/h2 y números grandes
- `font-bold` — títulos de card
- `font-semibold` — subtítulos y botones de CTA
- `font-medium` — links, botones, tags
- `font-normal` — cuerpo

### Tamaños

- **h1 (Hero):** `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight`
- **h2 (secciones):** `text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight` (o `text-4xl lg:text-5xl` en Demos/Software)
- **Eyebrow / label de sección:** `font-inter text-xs text-[#25C6DA] tracking-[0.2em] uppercase font-medium` (Demos/Software usan `tracking-[0.25em]`)
- **Cuerpo:** `text-base lg:text-lg leading-relaxed text-[#A0AEC0]`
- **Texto pequeño:** `text-sm`, `text-xs`, `text-[11px]`, `text-[10px]`

### Patrón de encabezado de sección

```tsx
<span className="font-inter text-xs text-[#25C6DA] tracking-[0.2em] uppercase font-medium mb-4 block">
  Label
</span>
<h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-5">
  Título
  <br />
  <span className="text-[#A0AEC0] font-medium">subtítulo.</span>
</h2>
<p className="font-inter text-[#A0AEC0] text-base leading-relaxed">...</p>
```

---

## 4. Botones

### Primario

```tsx
className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1477F8] hover:bg-[#1477F8]/90 text-white font-inter font-medium text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(20,119,248,0.45)] hover:-translate-y-0.5"
```

- CTA grande (CTA.tsx): `px-8 py-4 rounded-xl font-poppins font-semibold text-base hover:shadow-[0_0_40px_rgba(20,119,248,0.5)]` + `whileHover={{scale:1.02}} whileTap={{scale:0.98}}`
- Navbar CTA: `px-5 py-2.5 rounded-lg`

### Secundario

```tsx
className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/12 hover:border-white/25 text-[#A0AEC0] hover:text-white font-inter font-medium text-sm transition-all duration-200 bg-white/3 hover:bg-white/6"
```

### Submit del formulario

```tsx
className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#1477F8] to-[#25C6DA] text-white font-inter font-semibold transition-all duration-300 hover:shadow-[0_0_35px_rgba(20,119,248,0.35)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
```

### Iconos en botones

- Flecha: `group-hover:translate-x-1 transition-transform` (con ArrowRight/ArrowUpRight)
- ArrowUpRight: `group-hover:translate-x-1 group-hover:-translate-y-1`

---

## 5. Cards y superficies

### glass-card

Clase usada en Services, Contact y TechBadges (referenciada pero **NO definida** en `globals.css`). Estilo equivalente:

```tsx
className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm ..."
```

### Card de contenido (Demos, Software, Clients)

```tsx
className="group block rounded-3xl border border-white/6 bg-white/[0.03] overflow-hidden hover:border-[#1477F8]/30 transition-all duration-500"
```

- Hover: `group-hover:scale-105 transition duration-700` en imágenes
- Clients: `rounded-2xl border border-white/6 bg-white/[0.03] hover:border-[#1477F8]/20 hover:bg-white/[0.05]`

### Contenedor de ícono

```tsx
className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
style={{ background: `${color}15`, border: `1px solid ${color}25` }}
```

- Íconos: `<Icon size={20} strokeWidth={1.5} />`
- Variante pequeña (WhyUs): `w-8 h-8 rounded-lg bg-[#1477F8]/12 border border-[#1477F8]/20`

---

## 6. Elementos decorativos custom

> ⚠️ Estas clases se usan en los componentes pero **NO están definidas en `globals.css`**:
> `.glass-card`, `.gradient-text`, `.accent-line`, `.dot-grid`, `.animate-float`, `font-poppins`, `font-inter`

| Clase | Uso |
|-------|-----|
| `.gradient-text` | Texto con gradiente (Hero) |
| `.accent-line` | Línea superior de acento (Hero, Contact) |
| `.dot-grid` | Fondo de puntos (Hero) |
| `.animate-float` | Flotación del mockup (Hero) |

### Definidas en globals.css

```css
@layer utilities {
  @keyframes slide-right {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .animate-slide-right {
    animation: slide-right 25s linear infinite;
    will-change: transform;
  }
}

@utility section-padding {
  padding-block: 2.5rem;
}
@media (min-width: 1024px) {
  .section-padding { padding-block: 3.25rem; }
}
```

- `.section-padding` se definió con `@utility` de Tailwind v4 porque dentro de `@layer utilities` se purgaba en build.
- `.animate-slide-right` se usa en el marquee de tecnologías (fila 2 con `animationDirection: "reverse"`).

---

## 7. Animaciones (Framer Motion)

### Patrón de entrada

```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

- Delays escalonados: `transition={{ delay: i * 0.08 }}`
- Variante horizontal: `x: -24` (WhyUs, Contact izq), `x: 24` (Contact der), `x: 40` (mockup Hero)
- Viewport margins: `viewport={{ once: true, margin: "-50px" }}` o `"-30px"`

### Hover / interactividad

- Cards: `hover:-translate-y-1 transition-all duration-300`
- Íconos: `group-hover:scale-105`
- Líneas de proceso: `initial={{scaleX:0}} whileInView={{scaleX:1}} origin-left` con gradiente `from-[#1477F8] via-[#25C6DA] to-[#1477F8]`
- Timeline móvil: `scaleY` con `origin-top` y gradiente `to-transparent`

### Navbar

- `fixed top-0 left-0 right-0 z-50 transition-all duration-300`
- Al scrollear (>40px): `bg-[#071423]/90 backdrop-blur-md border-b border-white/5`
- Entrada: `initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,ease:"easeOut"}}`
- Mobile menu: overlay `bg-[#071423]/95 backdrop-blur-lg`, links `font-poppins text-2xl font-semibold hover:text-[#25C6DA]`
- Underline en links: `absolute -bottom-0.5 left-0 w-0 h-px bg-[#25C6DA] group-hover:w-full transition-all duration-300`

---

## 8. Formulario (Contact.tsx)

### Inputs

```tsx
className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm font-inter text-white placeholder:text-[#A0AEC0]/40 focus:outline-none focus:border-[#1477F8] transition-all"
```

- Labels: `font-inter text-xs text-[#A0AEC0] font-medium`
- Textarea: igual + `resize-none`
- Select: igual, con options `text-black`
- Spinner: `w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin`

### Success state

```tsx
className="w-14 h-14 rounded-full bg-[#10B981]/15 border border-[#10B981]/25 flex items-center justify-center mx-auto"
```
Icono: `<CheckCircle size={28} className="text-[#10B981]" strokeWidth={1.5} />`

---

## 9. Layout y responsive

- Contenedor global: `max-w-7xl mx-auto px-6 lg:px-8`
- Secciones: `section-padding relative overflow-hidden`
- Fondo body: `min-h-full flex flex-col`
- Breakpoints: `sm:` (640px) y `lg:` (1024px)
- Grids: `sm:grid-cols-2 lg:grid-cols-3`, `lg:grid-cols-2`, `lg:grid-cols-[3fr_2fr]`
- Gaps: `gap-4 lg:gap-5` (grids), `gap-12 lg:gap-20` (Hero)
- Hero: `min-h-screen`, contenido `pt-24 pb-16`, grid `min-h-[80vh]`

### Fondos decorativos de sección

```tsx
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B2A5B]/10 to-transparent pointer-events-none" />
<div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-[#1477F8]/4 rounded-full blur-3xl pointer-events-none" />
```

---

## 10. Estructura de componentes

Todos los componentes son `"use client"` (por Framer Motion e interactividad). Patrón:

1. Definición de datos (const arrays con `icon`, `title`, `description`, `color`)
2. Componentes internos auxiliares
3. Componente principal `export default`
4. Animaciones `whileInView` + `viewport={{ once: true }}`
5. Estilos Tailwind con colores hex inline

---

## 11. Dependencias de estilos/UI

| Paquete | Uso |
|---------|-----|
| Tailwind CSS v4 | Sistema de estilos |
| `@heroui/react` | Estilos base importados en globals.css |
| Framer Motion | Animaciones |
| `lucide-react` | Iconos (`strokeWidth={1.5}`) |
| `clsx` + `tailwind-merge` | Helper `cn()` en `lib/utils.ts` (shadcn, configurado pero sin usar) |

---

## Notas / pendientes

- Poppins está declarada en el theme (`--font-heading`) pero **no cargada** en `layout.tsx` (solo Geist y Geist Mono). Documentado en `docs/CONTEXT.md` y `docs/ARCHITECTURE.md`.
- `layout.tsx` usa `className` con `font-geist-sans`, `font-geist-mono`, `h-full antialiased`.
- No hay componentes UI de shadcn en uso (`components/ui/` vacío).
