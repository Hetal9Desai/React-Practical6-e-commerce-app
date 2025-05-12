import React from 'react';
import { AppBar, Toolbar, TextField, Box } from '@mui/material';

export const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src="/NovaMart1.svg"
          alt="NovaMart"
          sx={{
            height: 40,
            width: 'auto',
            mr: 2,
          }}
        />
      </Box>

      <TextField
        placeholder="Search products..."
        variant="outlined"
        size="small"
        onChange={() => {}}
        sx={{
          backgroundColor: 'white',
          borderRadius: 1,
          width: { xs: 200, sm: 300, md: 400 },
        }}
      />
    </Toolbar>
  </AppBar>
);
