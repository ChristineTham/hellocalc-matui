import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CssBaseline from '@mui/material/CssBaseline'
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
  },
})

const meta: Meta<typeof HelloBar> = {
  component: HelloBar,
  decorators: [
    (story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>,
  ],
}

export default meta
type Story = StoryObj<typeof HelloBar>

export const Default: Story = {
  render: () => <HelloBar />,
}
