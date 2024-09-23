// src/utils/theme.js or src/utils/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4960',
    },
    secondary: {
      main: '#468DB5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
