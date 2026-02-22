import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { storiesOf } from '@storybook/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { mdiCalculator } from '@mdi/js'

import CalcFeature from '../components/CardFeature'

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

storiesOf('CalcFeature', module)
  .addDecorator((story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>)
  .add('Example', () => (
    <CalcFeature
      title="Sample Title"
      icon={mdiCalculator}
      description={['line1', 'line 2', 'line 3']}
      buttonTitle="button"
      target="/"
    />
  ))
