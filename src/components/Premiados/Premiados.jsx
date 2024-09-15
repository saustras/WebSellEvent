import React from "react";
import { Box, Typography } from "@mui/material";

const Premiados = () => {
  const numerosPremiados = [
    "66230", "03587", "17489", "43712", "58193",
    "39296", "82518", "46441", "26839", "75051"
  ];

  return (
    <Box textAlign="center" sx={{ backgroundColor: "#002B36", color: "white"  }}>
      <Typography variant="h5" sx={{ pt:8, fontWeight: "bold", mb: 2 }}>
        Y ADEMÁS <span style={{ color: "red" }}>10 NUMEROS PREMIADOS</span> DE 1 MILLON CADA UNO
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
        {numerosPremiados.map((numero, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#FFBF00",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#000",
              fontWeight: "bold",
              fontSize: "18px",
              mb: 3
            }}
          >
            {numero}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Premiados;
