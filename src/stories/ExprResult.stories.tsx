import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { storiesOf } from '@storybook/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import ExprResult from '../components/ExprResult'

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

storiesOf('CalcResult', module)
  .addDecorator((story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>)
  .add('Example', () => (
    <ExprResult resulttype="Evaluate" input="1+2" output="3" />
  ))
