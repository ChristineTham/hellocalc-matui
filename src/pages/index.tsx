import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Paper from '@material-ui/core/Paper'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="https://www.hellotham.com/">Hello Tham Pty Ltd</Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function Index() {
  return (
    <Container maxWidth="md">
      <Paper>
        <Typography>
          <h1>Hello World</h1>
          <Copyright />
        </Typography>
      </Paper>
    </Container>
  )
}
