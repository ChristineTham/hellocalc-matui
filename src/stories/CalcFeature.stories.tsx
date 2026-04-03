import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CssBaseline from '@mui/material/CssBaseline'
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
  },
})

const meta: Meta<typeof CalcFeature> = {
  component: CalcFeature,
  decorators: [
    (story) => <ThemeProvider theme={theme}><CssBaseline />{story()}</ThemeProvider>,
  ],
}

export default meta
type Story = StoryObj<typeof CalcFeature>

export const Example: Story = {
  render: () => (
    <CalcFeature
      title="Sample Title"
      icon={mdiCalculator}
      description={['line1', 'line 2', 'line 3']}
      buttonTitle="button"
      target="/"
    />
  ),
}
