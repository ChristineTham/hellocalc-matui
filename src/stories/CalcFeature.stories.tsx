import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { createMuiTheme } from '@material-ui/core/styles'
import { mdiCalculator } from '@mdi/js'

import CalcFeature from '../components/CardFeature'

const theme = createMuiTheme({
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

storiesOf('CalcFeautre', module)
  .addDecorator(muiTheme([theme]))
  .add('Example', () => (
    <CalcFeature
      title="Sample Title"
      icon={mdiCalculator}
      description={['line1', 'line 2', 'line 3']}
      buttonTitle="button"
      target="/"
    />
  ))
