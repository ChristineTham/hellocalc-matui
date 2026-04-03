import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CssBaseline from '@mui/material/CssBaseline'
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
  },
})

const meta: Meta<typeof ExprResult> = {
  component: ExprResult,
  decorators: [
    (story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>,
  ],
}

export default meta
type Story = StoryObj<typeof ExprResult>

export const Example: Story = {
  render: () => (
    <ExprResult resulttype="Evaluate" input="1+2" output="3" />
  ),
}
