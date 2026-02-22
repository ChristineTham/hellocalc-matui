import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  themeName: 'Hello Tham',
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#660099',
    },
    secondary: {
      main: '#cc3366',
    },
  },
})

export default theme
