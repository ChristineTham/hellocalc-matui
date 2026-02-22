import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { storiesOf } from '@storybook/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import HelloBar from '../components/HelloBar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#660099',
    },
    secondary: {
      main: '#cc3366',
    },
    // background: {
    //   default: '#ff99cc',
    // },
    // background: {
    //   default: '#ffccff',
    // },
  },
})

storiesOf('HelloBar', module)
  .addDecorator((story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>)
  .add('Default', () => <HelloBar />)
