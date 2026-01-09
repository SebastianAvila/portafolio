import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from "../../../gsap/HeroSectionAnimation";
import Image from "next/image";

export const btnStyles = {
  padding: ".77em 1.5em",
  borderRadius: "3px",
};

const Hero = () => {
  const ref = useRef();
  const q = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    HeroSectionAnimation(q);
  }, []);

  return (
    <Container
      id="hero"
      maxWidth="lg"
      sx={{
        margin: "0 auto",
        py: {
          xs: "7.5em",
          sm: "8.5em",
        },
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Box ref={ref}>
            <Typography
              className="t1"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.4em",
                  sm: "3.4em",
                  md: "3.8em",
                },
                textAlign: "left",
                transform: "translateY(40px)",
                opacity: 0,
                pt: "1em",
                fontWeight: "600",
              }}
            >
              Mi trabajo es como un F1: Rápido, Eficiente y Emocionante.
            </Typography>
            <Typography
              variant="h2"
              className="secondary t2 t25o0"
              sx={{
                textAlign: "left",
                pt: "1.5em",
                fontSize: {
                  xs: ".9em",
                  sm: "1em",
                },
                maxWidth: "570px",
                fontWeight: "300",
              }}
            >
              ¡Hola! Soy Sebastián Ávila, un desarrollador web apasionado por
              crear experiencias digitales únicas y personalizadas. Con un
              enfoque en la eficiencia y la innovación, me esfuerzo por llevar
              cada proyecto al siguiente nivel.
            </Typography>

            <Box
              sx={{
                my: "2.5em",
                gap: ".8em",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button
                className="  b1 explore offset "
                sx={{
                  opacity: 0,
                  borderRadius: 0,
                  padding: ".75em 2.5em",
                  color: "white",
                  flex: { xs: 1, sm: "inherit" },
                }}
                onClick={() =>
                  gsap.to(window, {
                    duration: 2,
                    scrollTo: `#ProjectSection`,
                  })
                }
              >
                View Projects
              </Button>
              <a
                href={`https://drive.google.com/drive/u/0/my-drive`}
                rel="noreferrer"
                target="_blank"
              >
                <Button
                  className="b2 resumeBtn"
                  sx={{
                    ...btnStyles,
                    opacity: 0,
                    height: "max-content",
                    padding: "1em 1.5em",
                    color: "white",
                    hover: { backgroundColor: "#360a5c" },
                    width: { xs: "100%", sm: "auto" },
                    ":hover": {
                      color: "#ffffffff",
                    },
                  }}
                  variant="text"
                >
                  <Typography fontSize="14px">View Resume</Typography>
                </Button>
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            mb: {
              xs: "3.5em",
              sm: "4em",
              lg: "1em",
            },
            mr: {
              sm: "1em",
              md: "2em",
              lg: "0em",
            },
            display: "flex",
            alignItems: "baseline",
            justifyContent: "flex-end",
          }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={5}
        >
          <Box
            sx={{
              borderRadius: "6px",
              width: {
                xs: "100%",
                sm: "350px",
                md: "400px",
              },
            }}
          >
            <Box
              className="mainBox"
              sx={{
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                height: "460px",
                boxShadow: {
                  xs: ".5em 3em 0 #313131 ",
                  sm: "2em 3em 0px #313131",
                },
              }}
            >
              <Image
                layout="fill"
                style={{
                  opacity: 0,
                  borderRadius: "6px",
                  zIndex: "2",
                }}
                className="img1"
                src={`https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/540364872_24253901477637265_2137569645738526925_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFyGcTP-quZOW5vhxsYPwBPsZ8T72-6wjuxnxPvb7rCO_Xn35H0sr4QQrhVNujMF2omKLj6z7s_cricBvIh1PYU&_nc_ohc=8B8LKXBHfmgQ7kNvwGqRdZ2&_nc_oc=Adlm-gH6rzyyvgzI4t3JJNjls58lgEJu96O2yOscN2iX0vwEb386OtIWZ8qKpmegKeY&_nc_zt=23&_nc_ht=scontent.fcjs3-1.fna&_nc_gid=iweThAZJqDkfQvIoaVqC9g&oh=00_AfrjD3G6ePmcC_hFaWM8ltQnBpsEwmsnGO9U6DCXSTEbwg&oe=696743F9`}
                alt="Personal Image"
              />
              <Box
                className="gradientBg"
                sx={{
                  width: "100px",
                  height: "100px",
                  zIndex: "0",
                  position: "absolute",
                  right: {
                    xs: "-1%",
                    sm: "-5%",
                  },
                  opacity: 0,
                  bottom: "-5%",
                  background: "transparent",
                  backgroundImage: "radial-gradient(white 2px, transparent 0)",
                  backgroundSize: "15px 13px",
                }}
              ></Box>
              <Box
                className="quoteBox"
                sx={{
                  zIndex: "2",
                  position: "absolute",
                  bottom: {
                    xs: "0%",
                    lg: "-5%",
                  },
                  width: "100%",
                  right: {
                    sm: "25%",
                  },
                  top: "105%",
                  overflow: "hidden",
                  opacity: 0,
                  background: "#360a5c", //Controla el color de fondo de la caja de la cita
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontSize: ".85em",
                    padding: "1em",
                  }}
                >
                  {`"El secreto está en frenar un segundo después de lo que indica el sentido común y acelerar un segundo antes de lo que impera la lógica"

– Walter Röhrl`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
