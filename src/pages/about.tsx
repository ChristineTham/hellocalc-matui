import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function About() {
  return (
    <Container maxWidth="md">
      <Paper>
        <Typography>
          <h1>About</h1>
        </Typography>
      </Paper>
    </Container>
  )
}
