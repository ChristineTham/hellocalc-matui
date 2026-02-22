import * as React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {
  mdiCalculator,
  mdiCalculatorVariant,
  mdiChartBellCurve,
  mdiTextBox,
} from '@mdi/js'
import { Link } from 'gatsby'

import MainFeaturedPost from '../components/MainFeaturedPost'
import CalcFeature from '../components/CardFeature'
import splash from '../images/splash.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="https://www.hellotham.com/">Hello Tham Pty Ltd</Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

const mainFeaturedPost = {
  title: 'The Calculator ... Reimagined',
  description:
    'What would the humble pocket calculator look like if it was reimagined as a modern serverless web app?',
  image: splash,
  imageText: 'Calculator',
}

const features = [
  {
    title: 'Calculator',
    icon: mdiCalculator,
    description: ['RPN logic', 'Calculator Keyboard', 'Stack History'],
    buttonTitle: 'Calculator',
    target: 'calculator',
  },
  {
    title: 'Expression',
    icon: mdiCalculatorVariant,
    description: ['Evaluate formula', 'History', 'Variables'],
    buttonTitle: 'Expression',
    target: 'expression',
  },
  {
    title: 'Graph',
    icon: mdiChartBellCurve,
    description: ['Graph functions', 'Flexible', 'Cute'],
    buttonTitle: 'Graph',
    target: 'graph',
  },
  {
    title: 'Block',
    icon: mdiTextBox,
    description: ['Evaluate Block', 'Scope', 'List'],
    buttonTitle: 'Graph',
    target: 'block',
  },
]

const Index = () => (
  <>
    <CssBaseline />
    <MainFeaturedPost post={mainFeaturedPost} />
    <Container maxWidth="lg">
      <Box p={2}>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="center">
            {features.map((feature) => (
              <CalcFeature
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                buttonTitle={feature.buttonTitle}
                target={feature.target}
                key={feature.title}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      <Copyright />
    </Container>
  </>
)

export default Index
