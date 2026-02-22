import * as React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import CalcInput from '../components/CalcInput'
import CalcScreen from '../components/CalcScreen'
import CalcBasicKeyboard from '../components/CalcBasicKeyboard'

const Calculator: React.FC = () => (
  <Box p={2} bgcolor="#ffccff">
    <CssBaseline />
    <Container maxWidth={false} disableGutters={false}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={12}>
              <CalcInput />
            </Grid>
            <Grid item xs={12}>
              <CalcScreen />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={12}>
              <CalcBasicKeyboard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Calculator
