import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { createMuiTheme } from '@material-ui/core/styles'

import ExprResult from '../components/ExprResult'

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

storiesOf('CalcResult', module)
  .addDecorator(muiTheme([theme]))
  .add('Example', () => (
    <ExprResult resulttype="Evaluate" input="1+2" output="3" />
  ))
