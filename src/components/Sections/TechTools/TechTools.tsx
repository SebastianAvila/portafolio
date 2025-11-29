//Controla el titulo y la descripcion de la seccion de Tech Tools asi como los items a mostrar de frontend y backend

// === IMPORTS ===
// Importa componentes de Material-UI (MUI) para la interfaz
import { Container, Typography, Grid, Divider } from "@mui/material";
// Importa hooks de React: useContext para acceder al contexto de tema, useEffect para ejecutar código al montar
import { useContext, useEffect } from "react";
// Contexto global que controla si el modo es light o dark
import { ColorModeContext } from "../../../../pages/_app";
// Función GSAP para animar los títulos (entrada dinámica)
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
// Estilos reutilizables (centrado, flex, etc.)
import { centeredStyles } from "../Perks/Perks";
// Componente que renderiza cada tarjeta de tecnología
import ToolCard from "./ToolCard";
// Librería de animaciones GSAP
import gsap from "gsap";

// === ARRAY LOCAL DE TECNOLOGÍAS (FALLBACK) ===
// Si Contentful no devuelve datos, se usa este array por defecto
// Cada objeto tiene: title (nombre), svg (URL o código SVG), isBackend (tipo), filter (efecto visual)
const DEFAULT_ICONS = [
  // FRONTEND TECHNOLOGIES

  {
    title: "Vue.js",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  {
    title: "Vuetify",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  {
    title: "JavaScript",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  {
    title: "TypeScript",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  // {
  //   title: "React",
  //   svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  //   isBackend: false,
  //   OtherTech: false,
  //   filter: false,
  // },
  {
    title: "HTML5",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  {
    title: "CSS3",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  {
    title: "Material UI",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  {
    title: "Next.js",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    isBackend: false,
    OtherTech: false,
    filter: false,
  },
  // {
  //   title: "Sass",
  //   svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  //   isBackend: false,
  //   OtherTech: false,
  //   filter: false,
  // },
  // BACKEND TECHNOLOGIES
  {
    title: "Node.js",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    isBackend: true,
    OtherTech: false,
    filter: false,
  },
  {
    title: "Express",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    isBackend: true,
    OtherTech: false,
    filter: false,
  },
  {
    title: "MongoDB",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    isBackend: true,
    OtherTech: false,
    filter: false,
  },
  {
    title: "PostgreSQL",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    isBackend: true,
    OtherTech: false,
    filter: false,
  },
  {
    title: "Git",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    OtherTech: true,
    filter: false,
  },
    {
    title: "GitHub",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    OtherTech: true,
    filter: false,
  },
   {
    title: "Firebase",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    isBackend: true,
    OtherTech: false,
    filter: false,
  },
  {
    title: "Laravel",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    isBackend: true,
    OtherTech: false,
    filter: false,
  },
   {
    title: "Go",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    OtherTech: true,
    filter: false,
  },
    {
    title: "Figma",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    OtherTech: true,
    filter: false,
  },
  {
    title: "Postman",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    OtherTech: true,
    filter: false,
  },
];

// === COMPONENTE PRINCIPAL ===
const TechTools = ({}: any) => {
  // usa DEFAULT_ICONS
  const icons = DEFAULT_ICONS;

  // Filtra solo las tecnologías frontend (isBackend = false)
  // Excluir ítems marcados como OtherTech para que no aparezcan en Frontend
  let FrontendTools = icons && icons.filter((icon: any) => !icon.isBackend && !icon.OtherTech);

  // Filtra solo las tecnologías backend (isBackend = true)
  let BackendTools = icons && icons.filter((icon: any) => icon.isBackend);

  // Filtra solo las otras technologies (OtherTech = true)
  // Esta sección agrupa ítems que no pertenecen ni al frontend ni al backend
  let OtherTech = icons && icons.filter((icon: any) => icon.OtherTech);

  // Obtiene el modo de color actual (light/dark) del contexto global
  const colorMode = useContext(ColorModeContext);

  // Función que decide si aplicar efecto "filter" al icono
  // En modo light: sin filtro (false)
  // En modo dark: aplica filtro si el item lo tiene definido
  const isfilterMode = (item: any) =>
    colorMode?.mode === "light" ? false : item?.filter;

  // === EFFECT: Ejecuta animaciones al montar el componente ===
  useEffect(() => {
    // Log de debug: muestra los primeros 5 iconos en consola

    // Anima los títulos principales (entrada con movimiento y opacidad)
    MainTitleAnimation(".title1", ".title2");

    // Anima el título secundario "Other technologies" cuando entra en pantalla
    gsap.to(".secondTitle", {
      opacity: 1, // Aumenta opacidad a 1 (visible)
      y: 0, // Mueve desde su posición original (sin desplazamiento)
      scrollTrigger: {
        trigger: ".secondTitle", // Se activa cuando este elemento es visible
        start: "top 70%", // Inicia cuando el top del elemento llega al 70% de la pantalla
      },
    });
  }, []);

  // === RENDER ===
  return (
    <>
      {/* Contenedor principal con ancho máximo */}
      <Container
        maxWidth="lg"
        sx={{
          margin: "0 auto", // Centra horizontalmente
          py: {
            xs: "6em", // Padding vertical: 6em en móvil
          },
        }}
      >
        <Grid container>
          {/* === SECCIÓN DE TÍTULOS === */}
          <Grid item sx={centeredStyles}>
            {/* Título principal */}
            <Typography
              className=" title1 t25o0" // Clases para animación GSAP
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.2em", // Móvil
                  sm: "2.5em", // Tablet
                  md: "3em", // Escritorio
                },
              }}
              fontWeight="600"
            >
              Skills & Technologies
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h2"
              className="secondary title2 t25o0" // Clases para animación
              sx={{
                pt: "1.5em", // Padding top
                maxWidth: "570px", // Ancho máximo
                fontSize: {
                  xs: ".8em", // Móvil
                  sm: "1em", // Desktop
                },
              }}
            >
              Frontend technologies que utilizo
            </Typography>
          </Grid>

          {/* === GRID DE HERRAMIENTAS FRONTEND === */}
          <Grid
            sx={{
              ...centeredStyles, // Extiende estilos de centrado
              flexDirection: "row", // Alinea en fila
              justifyContent: {
                xs: "center", // Centra en móvil
              },
              mt: "3em", // Margin top
              flexWrap: "wrap", // Permite saltos de línea
            }}
            xs={12} // Ancho 100% en todos los tamaños
            item
          >
            {/* MAP: Recorre FrontendTools y crea un ToolCard por cada tecnología */}
            {FrontendTools &&
              FrontendTools.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1" // Clase para animación GSAP
                    filter={isfilterMode(item)} // Aplica filtro si en modo dark
                    svg={item.svg} // URL o código SVG del icono
                    title={item.title} // Nombre de la tecnología
                    key={item.title} // Key única (React)
                  />
                );
              })}
          </Grid>

          {/* === SECCIÓN BACKEND (Condicional) === */}
          {BackendTools ? (
            <>
              {/* Título de la sección backend */}
              <Grid item sx={centeredStyles}>
                <Typography
                  variant="h2"
                  className="secondary secondTitle t25o0" // Clase para animación GSAP
                  sx={{
                    pt: "3.5em", // Padding top
                    opacity: 0, // Inicialmente invisible (GSAP lo anima)
                    fontSize: {
                      xs: ".8em",
                      sm: "1em",
                    },
                  }}
                >
                  Tecnologias de backend y otras herramientas
                </Typography>
              </Grid>

              {/* GRID: Herramientas backend */}
              <Grid
                sx={{
                  ...centeredStyles,
                  flexDirection: "row",
                  justifyContent: {
                    xs: "center",
                  },
                  mt: "3em",
                  flexWrap: "wrap",
                }}
                xs={12}
                item
              >
                {/* MAP: Recorre BackendTools (backend) y crea un ToolCard por cada una */}
                {BackendTools.map((tool: any) => {
                  return (
                    <ToolCard
                      className="toolCard2" // Clase para animación GSAP
                      filter={isfilterMode(tool)} // Aplica filtro si en modo dark
                      svg={tool.svg} // URL o código SVG
                      title={tool.title} // Nombre de la tecnología
                      key={tool.title} // Key única
                    />
                  );
                })}
              </Grid>
              {/* Seccion de otras tech que tengo */}
              <Grid item sx={centeredStyles}>
                <Typography
                  variant="h2"
                  className="secondary secondTitle t25o0" // Clase para animación GSAP
                  sx={{
                    pt: "3.5em", // Padding top
                    opacity: 0, // Inicialmente invisible (GSAP lo anima)
                    fontSize: {
                      xs: ".8em",
                      sm: "1em",
                    },
                  }}
                >
                  Mis otros conocimientos tecnológicos
                </Typography>
              </Grid>

              <Grid
                sx={{
                  ...centeredStyles,
                  flexDirection: "row",
                  justifyContent: {
                    xs: "center",
                  },
                  mt: "3em",
                  flexWrap: "wrap",
                }}
                xs={12}
                item
              >
                {/* MAP: Recorre OtherTech  y crea un ToolCard por cada una */}
                {OtherTech.map((tool: any) => {
                  return (
                    <ToolCard
                      className="toolCard2" // Clase para animación GSAP
                      filter={isfilterMode(tool)} // Aplica filtro si en modo dark
                      svg={tool.svg} // URL o código SVG
                      title={tool.title} // Nombre de la tecnología
                      key={tool.title} // Key única
                    />
                  );
                })}
              </Grid>
            </>
          ) : (
            // Si no hay backend tools, muestra error (esto no debería ocurrir con DEFAULT_ICONS)
            <Typography
              sx={{
                margin: "0 auto",
                fontSize: "1em",
                fontWeight: "500",
                color: "red",
              }}
              variant="h1"
            >
              There was an error loading the items.
            </Typography>
          )}
        </Grid>
      </Container>

      {/* Línea divisoria entre secciones */}
      <Divider />
      <Divider />
    </>
  );
};

// Exporta el componente para que otros archivos lo usen
export default TechTools;
