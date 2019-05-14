import { createMuiTheme } from '@material-ui/core/'

const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiDialog: {
      container: {
        alignItems: 'flex-end',
      },
    },
    MuiBackdrop: {
      root: {
        top: 64,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#252627',
      main: '#181818',
      dark: '#070707',
    },
    secondary: {
      main: '#42dbff',
    },
  },
})

export default Theme
