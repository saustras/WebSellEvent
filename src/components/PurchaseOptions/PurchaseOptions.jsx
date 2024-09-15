import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const PriceCard = ({ multiplier, price, isPopular, isUltimate }) => (
  <Card
    sx={{
      position: 'relative',
      backgroundColor: isPopular ? '#00435A' : '#003847',
      borderRadius: 4,
      overflow: 'hidden',
      transform: isPopular ? 'scale(1.05)' : 'none',
      transition: 'all 0.3s ease-in-out',
      zIndex: isPopular ? 1 : 0,
      boxShadow: isPopular 
        ? '0 10px 20px rgba(0,255,255,0.2)' 
        : '0 5px 15px rgba(0,0,0,0.3)',
      '&:hover': {
        transform: isPopular ? 'scale(1.08)' : 'scale(1.03)',
        boxShadow: '0 12px 24px rgba(0,255,255,0.3)',
      },
    }}
  >
    {isPopular && (
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: -30,
          bgcolor: '#00FF00',
          color: '#003847',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          py: 0.5,
          px: 3,
          transform: 'rotate(45deg)',
        }}
      >
        POPULAR
      </Box>
    )}
    <CardContent sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
        x{multiplier}
      </Typography>
      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', mt: 1, display: 'block', letterSpacing: 1 }}>
        {isUltimate ? 'ULTIMATE' : 'OPORTUNIDAD'}
      </Typography>
      <Box sx={{ mt: 3, mb: 2 }}>
        <Typography variant="h2" component="p" sx={{ color: isPopular ? '#FFD700' : 'white', fontWeight: 'bold' }}>
          ${price.toLocaleString()}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1, display: 'block', fontSize: '0.7rem' }}>
        PRECIO REFERENCIA
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          borderRadius: "25px",
          bgcolor: isPopular ? '#00FF00' : 'rgba(255,255,255,0.1)',
          color: isPopular ? '#003847' : 'white',
          fontWeight: 'bold',
          py: 1.5,
          '&:hover': {
            bgcolor: isPopular ? '#00CC00' : 'rgba(255,255,255,0.2)',
          },
        }}
      >
        COMPRAR BOLETAS
      </Button>
    </CardContent>
  </Card>
);

const PurchaseOptions = () => {
  const options = [
    { multiplier: 2, price: 10000 },
    { multiplier: 5, price: 25000, isPopular: true },
    { multiplier: 10, price: 50000, isUltimate: true },
  ];

  return (
    <Box sx={{ bgcolor: "#002B36", color: 'white', py: 8, px: 4 }}>
      <Typography variant="h2" component="h2" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
        ADQUIERE TUS NÚMEROS
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 4,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {options.map((option, index) => (
          <PriceCard key={index} {...option} />
        ))}
      </Box>
    </Box>
  );
};

export default PurchaseOptions;