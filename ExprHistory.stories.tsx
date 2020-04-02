import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Grid from '@material-ui/core/Grid'

import rootReducer from '../rootReducer'
import ExprHistory from '../components/ExprHistory'

const store = configureStore({
  reducer: rootReducer,
})

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

storiesOf('ExprHistory', module)
  .addDecorator(muiTheme([theme]))
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => (
    <Grid item xs={12} md={6} spacing={1}>
      <ExprHistory />
    </Grid>
  ))
