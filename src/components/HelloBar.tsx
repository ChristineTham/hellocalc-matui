import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import SvgIcon from '@material-ui/core/SvgIcon'
import {
  mdiCalculator,
  mdiCalculatorVariant,
  mdiChartBellCurve,
  mdiTextBox,
} from '@mdi/js'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, navigate } from 'gatsby'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar'

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
)

export default function HelloBar() {
  const classes = useStyles()

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
            Hello Tham
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
