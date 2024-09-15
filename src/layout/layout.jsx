import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        width: "100vw",
      }}
    >
      <AppBar sx={{ backgroundColor: "#0088B2" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Event Power
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Layout;
