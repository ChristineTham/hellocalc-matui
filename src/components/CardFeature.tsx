import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { pink } from '@mui/material/colors'
import { makeStyles } from 'tss-react/mui'
import Grid from '@mui/material/Grid'
import { navigate } from 'gatsby'

const useStyles = makeStyles()((theme) => ({
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
  const { classes } = useStyles()
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
