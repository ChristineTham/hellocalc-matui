import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Grid from '@mui/material/Grid'

import rootReducer from '../rootReducer'
import CalcBasicKeyboard from '../components/CalcBasicKeyboard'

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
  },
})

const meta: Meta<typeof CalcBasicKeyboard> = {
  component: CalcBasicKeyboard,
  decorators: [
    (story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>,
    (story) => <Provider store={store}>{story()}</Provider>,
  ],
}

export default meta
type Story = StoryObj<typeof CalcBasicKeyboard>

export const Default: Story = {
  render: () => (
    <Grid item xs={12} md={6} spacing={1}>
      <CalcBasicKeyboard />
    </Grid>
  ),
}
