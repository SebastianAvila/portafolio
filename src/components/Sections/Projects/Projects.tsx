import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { centeredStyles } from "../Perks/Perks";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from "gsap";
import { IProjects } from "../../../Types/Types";

const Projects = ({ projectsArray }: any) => {
  console.log("Projects component received:", projectsArray); // Debug log
  useEffect(() => {
    MainTitleAnimation(".title3", ".title4");
    if (!projectsArray) return;
    setTimeout(() => {
      for (let i = 0; i < projectsArray.length; i++) {
        gsap.to(`.p${i}`, {
          duration: 0.8,
          transform: "translateX(0%)",
          ease: "easeIn",
          scrollTrigger: {
            trigger: `.p${i}`,
            start: "top 60%",
          },
        });
      }
    }, 100);
  }, [projectsArray]);

  return (
    <>
      {projectsArray && projectsArray.length > 0 ? (
        projectsArray.map((project: any, index: number) => (
          <ProjectCard
            key={project.title}
            className={`p${index}`}  // Añadido para animación GSAP
            isReversed={index % 2 !== 0} // Alterna izquierda/derecha
            {...project} // Pasa todos los campos (title, description, img, etc.)
          />
        ))
      ) : (
        <Typography sx={{ textAlign: 'center', py: 4, color: 'red' }}>
          No projects available
        </Typography>
      )}
    </>
  );
};

export default Projects;
