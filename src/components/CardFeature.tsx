import * as React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { pink } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { navigate } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor: '#ffccff',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

interface CardFeature {
  title: string
  icon: string
  description: string[]
  buttonTitle: string
  target: string
}

const CardFeature: React.FC<CardFeature> = ({
  title,
  icon: iconpath,
  description,
  buttonTitle,
  target,
}: CardFeature) => {
  const classes = useStyles()
  return (
    <Grid item key={title} xs={12} sm={6} md={3}>
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Avatar className={classes.pink}>
              <SvgIcon style={{ fontSize: 64 }}>
                <path d={iconpath} />
              </SvgIcon>
            </Avatar>
          </div>
          <ul>
            {description.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate(target)}
          >
            {buttonTitle}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardFeature
