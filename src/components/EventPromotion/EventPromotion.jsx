import React from 'react';
import { Box, Typography, LinearProgress, styled } from '@mui/material';

// Componentes estilizados con styled()
const PromotionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#005566',
  color: 'white',
  width: '100%',
  overflow: 'hidden',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
  width: '100%', // Asegura que el contenedor ocupe todo el ancho
}));

const ImageContainer = styled(Box)({
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
}));

const EventPromotion = () => {
  return (
    <PromotionContainer>
      <ContentWrapper>
        <ImageContainer>
          <img
            src="../../../public/PrizeImage.jpg"
            alt="Yamaha NMAX 2025"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageContainer>
        <ContentContainer>
          <Typography
            variant="body1"
            sx={{
              backgroundColor: '#00ccff',
              color: 'black',
              padding: 1,
              borderRadius: 1,
              marginBottom: 2,
              fontWeight: 'bold',
            }}
          >
            EL EVENTO SE REALIZARÁ CUANDO SE COMPLETE EL 100% DE BOLETAS
          </Typography>
          <LinearProgress variant="determinate" value={10.6} sx={{ marginBottom: 2 }} />
          <Typography variant="h2" sx={{ fontSize: '2.5rem', marginBottom: 2 }}>
            Yamaha NMAX 2025
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', marginBottom: 2, color: '#00ccff' }}>
            GRAN OPORTUNIDAD
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: 1 }}>
            ¡GRAN RIFA Yamaha NMAX modelo 2025!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: 1 }}>
            Event Power 2T 4T, te trae esta oportunidad única para ganar esta increíble moto por solo 3000 pesos por boleto.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: 1 }}>
            Mínimo para participar 2 boletas.
          </Typography>
        </ContentContainer>
      </ContentWrapper>
    </PromotionContainer>
  );
};

export default EventPromotion;
