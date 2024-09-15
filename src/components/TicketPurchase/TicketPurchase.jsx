import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import BankIcon from "@mui/icons-material/AccountBalance";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TicketPurchase = () => {
  return (
    <Box
      sx={{
        maxWidth: "700px",
        margin: "auto",
        mt: 4,
        p: 4,
        border: "2px solid #d3d3d3",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Datos Personales */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        <AccountCircleIcon sx={{ mr: 1 }} />
        DATOS PERSONALES
      </Typography>
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Nombres y Apellidos"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Celular"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">co +57</InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Modos de Pago */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        <BankIcon sx={{ mr: 1 }} />
        MODOS DE PAGO
      </Typography>
      <Typography variant="body2" mb={1}>
        Transferencia o depósito
      </Typography>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Box
          component="img"
          alt="Bancolombia"
          sx={{ width: "60px", height: "60px", borderRadius: "8px" }}
        />
        <Box
          component="img"
          alt="Nequi"
          sx={{ width: "60px", height: "60px", borderRadius: "8px" }}
        />
        <CheckCircleOutlineIcon color="primary" sx={{ fontSize: "35px" }} />
      </Box>
      <Typography variant="body2" sx={{ mb: 1 }}>
        BANCOLOMBIA AHORROS
      </Typography>
      <Box display="flex" alignItems="center" gap={2} sx={{ mb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          31149818891
        </Typography>
        <IconButton>
          <FileCopyIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Titular: DIEGO LEON SANCHEZ CALDERON
      </Typography>

      {/* Comprobante de Pago */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        <AttachFileIcon sx={{ mr: 1 }} />
        COMPROBANTE DE PAGO
      </Typography>
      <Typography variant="body2" mb={2}>
        Foto o Captura de Pantalla
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Foto/Captura de Pantalla"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachFileIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 2,
          border: "1px dashed #d3d3d3",
          borderRadius: "10px",
        }}
      />
      <Typography variant="body2" sx={{ mb: 3 }}>
        BANCOLOMBIA: $6,000.00 (2 boletas)
      </Typography>

      {/* Botón Confirmar */}
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        CONFIRMAR
      </Button>

      <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
        Al confirmar autorizo el uso de{" "}
        <a href="/datos-personales" style={{ color: "#007bff" }}>
          Mis Datos Personales
        </a>
      </Typography>
    </Box>
  );
};

export default TicketPurchase;