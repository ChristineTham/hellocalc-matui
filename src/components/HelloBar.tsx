import React from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Hidden from '@mui/material/Hidden'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import SvgIcon from '@mui/material/SvgIcon'
import {
  mdiCalculator,
  mdiCalculatorVariant,
  mdiChartBellCurve,
  mdiTextBox,
} from '@mdi/js'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, navigate } from 'gatsby'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'

import logo from '../images/logo-square.svg'
import profile from '../images/profile.jpg'

type FeatureIconProp = {
  icon: string
}

const FeatureIcon = ({ icon }: FeatureIconProp) => (
  <SvgIcon>
    <path d={icon} />
  </SvgIcon>
)

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default function HelloBar() {
  const { classes } = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="main-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Button
                color="primary"
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
              >
                Home
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                startIcon={<InfoIcon />}
                onClick={() => navigate('about')}
              >
                About
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                startIcon={<FeatureIcon icon={mdiCalculator} />}
                onClick={() => navigate('calculator')}
              >
                Calculator
              </Button>
            </MenuItem>
          </Menu>
          <Link to="/" className={classes.menuButton}>
            <Avatar alt="Logo" variant="square" src={logo} />
          </Link>{' '}
          <Typography
            variant="h6"
            className={classes.title}
            data-testid="app-title"
          >
            Hello Calculator
          </Typography>
          <Hidden smDown>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              startIcon={<FeatureIcon icon={mdiCalculator} />}
              onClick={() => navigate('calculator')}
            >
              Calculator
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              startIcon={<FeatureIcon icon={mdiCalculatorVariant} />}
              onClick={() => navigate('/')}
            >
              Expression
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              startIcon={<FeatureIcon icon={mdiChartBellCurve} />}
              onClick={() => navigate('/')}
            >
              Graph
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              startIcon={<FeatureIcon icon={mdiTextBox} />}
              onClick={() => navigate('/')}
            >
              Block
            </Button>
          </Hidden>
          <Avatar alt="Profile" src={profile} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}
