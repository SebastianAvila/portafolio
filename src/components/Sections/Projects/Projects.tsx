import {
  Box,
  Typography,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import AgencyCard from "./AgencyCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { IProjects } from "../../../Types/Types";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projectsArray }: any) => {
  const agencyProjects: IProjects[] =
    projectsArray?.filter((p: IProjects) => p.type === "agency") ?? [];
  const clientProjects: IProjects[] =
    projectsArray?.filter((p: IProjects) => p.type !== "agency" && p.type !== "demo") ?? [];
  const demoProjects: IProjects[] =
    projectsArray?.filter((p: IProjects) => p.type === "demo") ?? [];

  // Orden visual: agencia -> proyectos de cliente -> demos.
  // Las clases p0, p1... deben seguir este mismo orden para que la animación GSAP apunte al elemento correcto.
  const orderedProjects = [...agencyProjects, ...clientProjects, ...demoProjects];

  useEffect(() => {
    if (!orderedProjects.length) return;
    orderedProjects.forEach((_, i) => {
      gsap.fromTo(
        `.p${i}`,
        { xPercent: i % 2 === 0 ? 100 : -100 },
        {
          xPercent: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.p${i}`,
            start: "top 60%",
          },
        }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsArray]);

  if (!projectsArray || projectsArray.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", py: 4, color: "red" }}>
        No projects available
      </Typography>
    );
  }

  let cardIndex = 0;

  return (
    <Box id="ProjectSection" sx={{ width: "100%" }}>
      {agencyProjects.map((project: IProjects) => {
        const index = cardIndex++;
        return (
          <Box key={project.title} sx={{ overflowX: "hidden", width: "100%" }}>
            <AgencyCard className={`p${index}`} {...project} />
          </Box>
        );
      })}

      {clientProjects.map((project: IProjects, i: number) => {
        const index = cardIndex++;
        return (
          <Box key={project.title} sx={{ overflowX: "hidden", width: "100%" }}>
            <ProjectCard
              className={`p${index}`}
              isReversed={i % 2 !== 0}
              {...project}
            />
          </Box>
        );
      })}

      {demoProjects.length > 0 && (
        <Box
          sx={{
            maxWidth: "680px",
            margin: {
              xs: "3em auto 2em",
              md: "4em auto 2.5em",
            },
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.6em", sm: "2em" },
              fontWeight: 600,
            }}
          >
            Proyectos Demo
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: 1.5,
              opacity: 0.7,
              fontSize: { xs: ".85em", sm: ".95em" },
              lineHeight: 1.6,
            }}
          >
            Estos son demos que construí para mostrar lo que puedo hacer en
            futuros proyectos: no son trabajos entregados a un cliente real,
            sino ejemplos de diseño, desarrollo y experiencia de usuario.
          </Typography>
        </Box>
      )}

      {demoProjects.map((project: IProjects, i: number) => {
        const index = cardIndex++;
        return (
          <Box key={project.title} sx={{ overflowX: "hidden", width: "100%" }}>
            <ProjectCard
              className={`p${index}`}
              isReversed={i % 2 !== 0}
              {...project}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Projects;
