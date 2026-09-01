import {
  Box,
  Typography,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { IProjects } from "../../../Types/Types";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projectsArray }: any) => {
  useEffect(() => {
    if (!projectsArray) return;
    projectsArray.forEach((_: any, i: number) => {
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
  }, [projectsArray]);

  return (
    <Box id="ProjectSection" sx={{ width: "100%" }}>
      {projectsArray && projectsArray.length > 0 ? (
        projectsArray.map((project: IProjects, index: number) => (
          <Box
            key={project.title}
            sx={{
              overflowX: 'hidden',
              width: '100%',
            }}
          >
            <ProjectCard
              className={`p${index}`}
              isReversed={index % 2 !== 0}
              {...project}
            />
          </Box>
        ))
      ) : (
        <Typography sx={{ textAlign: 'center', py: 4, color: 'red' }}>
          No projects available
        </Typography>
      )}
    </Box>
  );
};

export default Projects;
