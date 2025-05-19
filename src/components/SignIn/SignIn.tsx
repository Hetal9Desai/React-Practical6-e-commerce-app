import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography, Box, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/storageUtils';
import { useAuth } from '../auth/AuthContext';
import type { User } from '../../types/User/types';

interface UserLoginFormFields {
  email: string;
  password: string;
}

export const Signin: React.FC = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserLoginFormFields>();

  const onSubmit = async (data: UserLoginFormFields) => {
    try {
      const users = getFromLocalStorage<User[]>('users') || [];
      const found = users.find(
        user => user.email === data.email && user.password === data.password,
      );
      if (!found) throw new Error('Invalid email or password');

      setToLocalStorage('currentUser', found);
      setUser(found);

      alert('SignIn Successful!');
      navigate('/product');
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <Paper elevation={4} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
              <TextField label="Email" type="email" fullWidth autoFocus {...register('email')} />
              <TextField label="Password" type="password" fullWidth {...register('password')} />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isSubmitting}
                sx={{ mt: 1 }}
              >
                Sign In
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};
