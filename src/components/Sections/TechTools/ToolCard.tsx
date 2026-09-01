import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// usamos <img> o inline SVG en lugar de next/image para aceptar markup SVG y URLs dinámicas
import { IToolCard } from "../../../Types/Types";
import { centeredStyles } from "../Perks/Perks";
const ToolCard = ({ title, svg, filter, className }: IToolCard) => {
  return (
    <Box
      className={className}
      sx={{
        my: "1em",
        opacity: 0,
        maxWidth: "250px",
        transition: ".2s ease",
        width: {
          xs: "50%",
          sm: "33%",
        },
      }}
    >
      <Box
        sx={{
          ...centeredStyles,
          width: {
            xs: "35px",
            sm: "60px",
          },
          height: {
            xs: "40px",
            sm: "60px",
          },
        }}
      >
        {svg && String(svg).trim().startsWith("<svg") ? (
          <Box
            component="span"
            className={`${filter ? "filter " : ""} icon`}
            sx={{ display: "inline-block", width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <img
            alt="Icon"
            className={`${filter ? "filter " : ""} icon`}
            src={svg || ""}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </Box>

      <Typography
        variant="h3"
        sx={{
          mt: "1em",
          fontSize: {
            xs: ".86em",
            sm: "1em",
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ToolCard;
