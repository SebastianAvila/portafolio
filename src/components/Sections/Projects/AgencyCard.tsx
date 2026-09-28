import { Box, Typography, Button, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IAgencyCard } from "../../../Types/Types";
import { btnStyles } from "../Hero/Hero";

const AgencyCard = ({
  className,
  img,
  title,
  tagline,
  description,
  features,
  siteUrl,
}: IAgencyCard) => {
  const theme = useTheme();
  const accent = theme.palette.primary.main;
  const accentShadow =
    theme.palette.mode === "light"
      ? "rgba(54, 10, 92, 0.15)"
      : "rgba(0, 146, 255, 0.15)";
  return (
    <Box
      className={className}
      sx={{
        maxWidth: "1150px",
        margin: {
          xs: "0 auto 3em",
          md: "0 auto 4em",
        },
        borderRadius: "10px",
        border: `1px solid ${accent}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "white",
        color: "black",
        boxShadow: `${accentShadow} 0px 8px 30px 0px`,
      }}
    >
      {img && (
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1917 / 902",
            background: "#f4f6f8",
          }}
        >
          <img
            src={img}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>
      )}
      <Box sx={{ p: { xs: "1.5em", sm: "2em", md: "2.5em" } }}>
        <Chip
          label="Agencia de software con clientes reales"
          size="small"
          sx={{
            bgcolor: accent,
            color: "white",
            fontWeight: 600,
            mb: 1.5,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "1.5em", sm: "1.8em" },
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {title}
        </Typography>

        {tagline && (
          <Typography
            sx={{
              fontSize: ".95em",
              fontWeight: 500,
              opacity: 0.65,
              mt: 0.5,
            }}
          >
            {tagline}
          </Typography>
        )}

        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: ".85em", sm: ".92em" },
            lineHeight: 1.65,
          }}
        >
          {description}
        </Typography>

        {features && features.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                size="small"
                variant="outlined"
                sx={{ borderColor: accent, color: accent }}
              />
            ))}
          </Box>
        )}

        <Box sx={{ gap: ".5em", display: "flex", flexWrap: "wrap", mt: "2em" }}>
          {siteUrl && (
            <a href={siteUrl} rel="noreferrer" target="_blank">
              <Button
                variant="contained"
                sx={{
                  ...btnStyles,
                  padding: ".5em .8em",
                  color: "white",
                }}
              >
                <Typography fontSize="12px">Visitar sitio</Typography>
              </Button>
            </a>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AgencyCard;
