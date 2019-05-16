import { createMuiTheme } from '@material-ui/core/'

const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiBackdrop: {
      root: {
        top: 64,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#252627',
      main: '#181818',
      kindaDark: '#242424',
      subheader: '#2d2d2d',
      dark: '#070707',
    },
    secondary: {
      main: '#42dbff',
      contrastText: '#3D3D3D',
    },
    text: {
      primary: '#fff',
      secondary: '#c8c6c8',
    },
  },
})

export default Theme
