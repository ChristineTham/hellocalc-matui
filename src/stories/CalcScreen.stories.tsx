import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { storiesOf } from '@storybook/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Grid from '@mui/material/Grid'

import rootReducer from '../rootReducer'
import CalcScreen from '../components/CalcScreen'

const store = configureStore({
  reducer: rootReducer,
})

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

storiesOf('CalcScreen', module)
  .addDecorator((story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => (
    <Grid item xs={12} md={6} spacing={1}>
      <CalcScreen />
    </Grid>
  ))
