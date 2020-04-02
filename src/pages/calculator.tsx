import * as React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import CalcInput from '../components/CalcInput'
import CalcScreen from '../components/CalcScreen'
import CalcBasicKeyboard from '../components/CalcBasicKeyboard'

const Calculator: React.FC = () => (
  <Box p={2} bgcolor="#ffccff">
    <CssBaseline />
    <Container maxWidth={false} disableGutters={false}>
      <Grid container spacing={2}>
        <Grid container spacing={2} xs={12} md={6}>
          <Grid item xs={12}>
            <CalcInput />
          </Grid>
          <Grid item xs={12}>
            <CalcScreen />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <CalcBasicKeyboard />
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Calculator
