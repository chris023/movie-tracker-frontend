import { createMuiTheme } from '@material-ui/core/'

const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
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
