import { Box } from "@mui/material";
import type { NextPage } from "next";
import Experience from "../src/components/Sections/TechTools/TechTools";
import Hero from "../src/components/Sections/Hero/Hero";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";
import CTA from "../src/components/Sections/CallToAction/CTA";
import { useEffect, useRef } from "react";
import CursorAnimation from "../src/gsap/CursorAnimation";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";

const Home: NextPage = ({ projectsArray, iconsArray }: any) => {
  const ball = useRef();

  useEffect(() => {
    if (ball && ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);
  return (
    <Layout
      desc={`Soy un programador web con gusto por la construcción de sitios web a tu medida :)`}
      title={"Sebastian Avila - Software Engineer & Web Developer"}
    >
      <Box
        sx={{
          margin: "0 auto",
          color: "white",
        }}
      >
        <Hero />
        <Perks />
        <Experience iconsArray={iconsArray} />
        <Projects projectsArray={projectsArray} />
        <About />
        <CTA />

        <Box
          ref={ball}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;

// Array local de proyectos (fallback si Contentful está vacío)
const DEFAULT_PROJECTS = [
  {
    title: "MFA App - Soft Administrativo",
    description:
      "App web para la gestion de personal contable, organizacion de eventos y facilitación de procesos administrativos. Construida con Vue.js, Node.js y Firebase. ",
    img: "https://via.placeholder.com/500x300?text=E+Commerce",
    siteUrl: "https://e-compliance.web.app/",
    repoUrl: "https://github.com/SebastianAvila/mfa_app.git",
    isReversed: false,
  },
  {
    title: "Este Es Mi Portfolio",
    description:
      "Mi portafolio personal construido con Next.js, Material-UI y GSAP para animaciones. Presenta mis proyectos, habilidades y experiencia profesional.",
    img: "https://via.placeholder.com/500x300?text=Task+Manager",
    siteUrl: "https://example-tasks.com",
    repoUrl: "https://github.com/SebastianAvila/portafolio.git",
    isReversed: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard using React, D3.js, and Express backend. Display real-time metrics and generate custom reports.",
    img: "https://via.placeholder.com/500x300?text=Analytics",
    siteUrl: "https://example-analytics.com",
    repoUrl: "https://github.com/yourusername/analytics-dashboard",
    isReversed: false,
  },
];

export async function getStaticProps() {
  function removeEmpty(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null && v != false)
    );
  }
  try {
    // first, grab our Contentful keys from the .env file
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      throw new Error(
        "Missing Contentful environment variables (NEXT_PUBLIC_CONTENTFUL_SPACE_ID or NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN)"
      );
    }

    // then, send a request to Contentful (using the same URL from GraphiQL)
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST", // GraphQL *always* uses POST requests!
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`, // add our access token header
        },
        // send the query we wrote in GraphiQL as a string
        body: JSON.stringify({
          // all requests start with "query: ", so we'll stringify that for convenience
          query: `
                {
                  projectCollection {
                    items {
                      title
                      repoUrl
                      siteUrl
                      description
                      img
                    }
                  }
                  iconsCollection {
                    items {
                      filter
                      svg
                      title
                      isBackend
                    }
                  }
                }
                
                  `,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Contentful API error: ${res.status} ${res.statusText}`);
    }

    // grab the data from our response
    const jsonResponse = await res.json();

    if (jsonResponse.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(jsonResponse.errors)}`);
    }

    const { data } = jsonResponse;

    if (!data || !data.iconsCollection || !data.projectCollection) {
      throw new Error(
        "Contentful response missing expected fields (iconsCollection or projectCollection)"
      );
    }

    let iconsArray = [];
    if (
      data?.iconsCollection?.items &&
      Array.isArray(data.iconsCollection.items)
    ) {
      for (let i = 0; i < data.iconsCollection.items.length; i++) {
        let clearedIcon = removeEmpty(data.iconsCollection.items[i]);
        iconsArray.push(clearedIcon);
      }
    }

    console.log(
      `✓ Contentful data loaded: ${
        data.projectCollection.items?.length || 0
      } projects, ${iconsArray.length} icons`
    );
    console.log("Projects from Contentful:", data?.projectCollection.items);
    return {
      props: {
        projectsArray: data?.projectCollection.items?.length > 0 ? data.projectCollection.items : DEFAULT_PROJECTS,
        iconsArray,
      },
    };
  } catch (err) {
    console.error(
      "❌ getStaticProps error:",
      err instanceof Error ? err.message : String(err)
    );
    return {
      props: {
        projectsArray: DEFAULT_PROJECTS, // ← Usa fallback
        iconsArray: [],
      },
      revalidate: 60,
    };
  }
}
