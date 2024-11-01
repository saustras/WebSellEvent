import React, { useState } from 'react';
import * as yup from 'yup';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';

const PurchaseModal = ({ open, handleClose, numberCount, lottery }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('El nombre es requerido')
      .min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: yup
      .string()
      .email('Ingresa un correo electrónico válido')
      .required('El correo electrónico es requerido'),
    phone: yup
      .string()
      .required('El teléfono es requerido')
      .matches(/^[0-9]+$/, 'Solo se permiten números')
      .min(10, 'El teléfono debe tener al menos 10 dígitos') 
      .max(15, 'El teléfono no puede tener más de 15 dígitos'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      setLoading(true);
      setError('');
      
      const response = await fetch('http://localhost:4000/api/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          numberCount,
          lottery,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar la compra');
      }

      setSuccess(true); // Primero establecemos success como true
      // Removemos el handleClose() que estaba aquí antes
      
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        setError('Ocurrió un error al procesar tu compra. Por favor, intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseAndReset = () => {
    setSuccess(false);
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    setError('');
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseAndReset}
      aria-labelledby="modal-compra"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        {success ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h6" 
              component="h2" 
              sx={{ 
                mb: 3, 
                color: '#00CC00',
                fontWeight: 'bold' 
              }}
            >
              ¡Su compra ha sido completada con éxito, recibirás un correo con los números!
            </Typography>
            
            <Button
              variant="contained"
              onClick={handleCloseAndReset}
              sx={{
                bgcolor: '#00FF00',
                color: '#003847',
                width: '50%', 
                mx: 'auto', 
                '&:hover': {
                  bgcolor: '#00CC00',
                },
              }}
            >
              Aceptar
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant="h6" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
              Completa tus datos para la compra
            </Typography>
            
            <TextField
              fullWidth
              label="Nombre completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 2 }}
              required
            />
            
            <TextField
              fullWidth
              label="Correo electrónico"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 2 }}
              required
            />
            
            <TextField
              fullWidth
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              sx={{ mb: 3 }}
              required
            />

            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              sx={{
                bgcolor: '#00FF00',
                color: '#003847',
                '&:hover': {
                  bgcolor: '#00CC00',
                },
              }}
            >
              {loading ? <CircularProgress size={24} /> : 'Comprar'}
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PurchaseModal;
