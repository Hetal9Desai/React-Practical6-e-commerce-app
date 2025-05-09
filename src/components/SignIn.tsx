import React from 'react';
import { Container, Paper, TextField, Button, Typography, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export const Signin: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 8,
        }}
      >
        <Paper elevation={4} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign In
          </Typography>

          <Box component="form" noValidate>
            <Stack spacing={2}>
              <TextField label="Email" type="email" fullWidth autoFocus />

              <TextField label="Password" type="password" fullWidth />

              <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 1 }}>
                Sign In
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don’t have an account?{' '}
            <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};
