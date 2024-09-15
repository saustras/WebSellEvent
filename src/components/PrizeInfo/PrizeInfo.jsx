import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const PrizeInfo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#002B36",
        color: "white",
        padding: 4,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, md: 0 },
            mr: { md: 4 },
          }}
        >
          <img
            src="/PrizeImage.jpg"
            alt="Premio"
            style={{
              borderRadius: "30px",
              maxWidth: "100%",
              height: "auto",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" },
              marginBottom: 2,
            }}
          >
            Yamaha NMAX 2025
          </Typography>

          <LinearProgress
            variant="determinate"
            value={10.6}
            sx={{
              height: "10px",
              borderRadius: "5px",
              backgroundColor: "#0A3D62",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#28A2F7",
              },
              marginBottom: 1,
            }}
          />
          <Typography sx={{ marginBottom: 2 }} variant="body2">
            10.6%
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", md: "1.8rem" },
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            El evento se realizará cuando se complete el 100% de boletas
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "1.2rem" }}>
            Event Power te trae esta oportunidad única para ganar esta increíble
            moto por solo 5000 pesos por boleto.
            <br />
            Mínimo para participar: 2 boletos.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PrizeInfo;
