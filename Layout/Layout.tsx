import { Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";

const Layout = ({ navbarSx, title, children, desc }: ILayout) => {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = (state?: boolean) => {
    setOpen(state !== undefined ? state : !isOpen);
  };

  const defaultDesc =
    "Sebastian Avila | Mexican Web Developer | Web Developer and this is my Portfolio and my blog";
  const pageTitle = title || "Sebastian Avila | Mexican Web Developer";
  const description = desc || defaultDesc;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://nexosdweb.vercel.app/" />
        <meta
          property="og:image"
          content="/images/personal_profile.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta httpEquiv="content-language" content="es" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Developer, React, Next.js, Full Stack" />
        <meta name="author" content="Sebastian Avila" />
      </Head>
      <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx} />
      <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Box className="site-content">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
