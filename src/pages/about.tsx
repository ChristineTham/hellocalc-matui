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
          <p>
            This app was intended to be a project for me to learn how to write a
            React app, and initially all I wanted to do was to write a small
            app. The app was initially intended to be nothing more than a
            simple-front end to the mathjs library, but evolved to a quest to
            write the calculator I have always wanted.
          </p>
          <p>Technologies used</p>
          <ul>
            <li>Material-UI</li>
            <li>Gatsby</li>
            <li>React (Hooks)</li>
            <li>Typescript</li>
            <li>MathJS</li>
          </ul>
        </Typography>
      </Paper>
    </Container>
  )
}
