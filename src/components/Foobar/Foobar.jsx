import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const FooterBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0088B2",
        color: "white",
        py: 3,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mx: -1,
            marginLeft: 20,
          }}
        >
          {["Event Power","Contacto", "Síguenos"].map(
            (title, index) => (
              <Box
                key={title}
                sx={{
                  flexBasis: { xs: "100%", sm: "45%", md: "22%" },
                  mb: 2,
                  px: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2">
                  {index === 0 && "Pasión por las motos"}
                  {index === 1 && (
                    <>
                      Monteria, Cordoba, Colombia
                      <br />
                      +57 3004291490
                    </>
                  )}
                  {index === 2 && (
                    <>
                      Facebook
                      <br />
                      Instagram
                    </>
                  )}
                </Typography>
              </Box>
            )
          )}
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © 2024. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterBar;
