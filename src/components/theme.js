// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#9c27b0', // Purple shade
    },
    secondary: {
      main: '#f50057', // Pink shade
    },
  },
});

export default theme;
