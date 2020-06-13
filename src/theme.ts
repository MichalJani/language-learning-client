import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#36F1CD',
      main: '#028090',
      dark: '#037971',
    },
    secondary: {
      main: '#7B2D26',
    },
    error: {
      main: '#e91e63',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#00000',
      secondary: '#635D5C',
    },
  },
});
