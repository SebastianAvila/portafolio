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
        }}
      >
        <Hero />
        <Perks />
        <Experience icons={iconsArray} />
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
// type: "agency" (destacado, va primero) | "client" (proyectos reales) | "demo" (demostraciones)
const DEFAULT_PROJECTS = [
  {
    title: "NEXO SD - Soluciones Digitales",
    tagline: "Mi agencia de desarrollo de software",
    description:
      "NEXO SD es el estudio de desarrollo que fundé en Yucatán. Diseñamos y construimos sitios web, software a la medida y aplicaciones para negocios reales, cubriendo todo el proceso: descubrimiento, arquitectura, desarrollo, pruebas e implementación, con soporte continuo después del lanzamiento.",
    features: [
      "Desarrollo Web",
      "Software a Medida",
      "Progressive Web Apps",
      "Infraestructura",
      "Automatización",
    ],
    img: "/images/nexo-sd.png",
    siteUrl: "https://www.nexosd.com",
    type: "agency",
  },
  {
    title: "CESP - Centro de Estudios Superiores Peninsular",
    tagline: "Cliente real, vía NEXO SD",
    description:
      "Sitio institucional para CESP: presentación de la institución, carreras y licenciaturas, proceso de admisión y formulario de contacto. Next.js, React, Tailwind, SEO.",
    img: "/images/cesp.png",
    siteUrl: "https://cesp-pied.vercel.app/",
    type: "client",
  },
  {
    title: "MFA App - Soft Administrativo",
    description:
      "App web para la gestion de personal contable, organizacion de eventos y facilitación de procesos administrativos. Construida con Vue.js, Node.js y Firebase. ",
    img: "/images/mfa-app.png",
    siteUrl: "https://e-compliance.web.app/",
    type: "client",
  },
  {
    title: "Hotel Boutique Valladolid",
    description:
      "Landing premium para hotel boutique: diseño moderno y experiencia enfocada en conversión. Next.js, React, SEO.",
    img: "/images/demo-hotel.jpg",
    siteUrl: "https://hotel.nexosd.com",
    type: "demo",
  },
  {
    title: "Clínica Dental Premium",
    description:
      "Página corporativa para clínica dental, responsive y enfocada en UI/UX. Next.js, Responsive, UI/UX.",
    img: "/images/demo-dental.jpg",
    siteUrl: "https://clinica.dental.nexosd.com",
    type: "demo",
  },
  {
    title: "Eventos Café",
    description:
      "Landing comercial con animaciones y enfoque SEO para negocio de eventos y café. React, Animations, SEO.",
    img: "/images/demo-cafe.jpg",
    siteUrl: "https://coffe.nexosd.com/",
    type: "demo",
  },
  {
    title: "PC Builder",
    description:
      "Aplicación a medida para configurar y cotizar PCs: API, base de datos y experiencia de usuario cuidada. Next.js, API, Database, UI/UX.",
    img: "/images/pc-builder.jpg",
    siteUrl: "https://pc-configurator.nexosd.com",
    type: "demo",
  },
];

export async function getStaticProps() {
  function removeEmpty(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null && v != false),
    );
  }
  try {
    // first, grab our Contentful keys from the .env file
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      throw new Error(
        "Missing Contentful environment variables (NEXT_PUBLIC_CONTENTFUL_SPACE_ID or NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN)",
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
      },
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
        "Contentful response missing expected fields (iconsCollection or projectCollection)",
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

    return {
      props: {
        projectsArray:
          data?.projectCollection.items?.length > 0
            ? data.projectCollection.items
            : DEFAULT_PROJECTS,
        iconsArray,
      },
    };
  } catch (err) {
    console.error(
      "❌ getStaticProps error:",
      err instanceof Error ? err.message : String(err),
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
