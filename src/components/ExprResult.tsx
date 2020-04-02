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
import { mdiApproximatelyEqualBox, mdiMathIntegralBox, mdiEqualBox, mdiAbTesting, mdiAlphaSBox } from '@mdi/js';
import InputIcon from '@material-ui/icons/Input';

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

interface ExprResultT {
  resulttype: string
  input: string
  output: string
}

const ExprResult: React.FC<ExprResultT> = ({
  resulttype,
  input,
  output,
}: ExprResultT) => {
  // const classes = useStyles()
  const avatar = (
    <Avatar>
      <SvgIcon>
        <path d={mdiApproximatelyEqualBox} />
      </SvgIcon>
    </Avatar>
  )

  return (
    <Card>
      <CardHeader title={resulttype} subheader={input} avatar={avatar} />
      <CardContent>
        <Typography variant="h5" align="right" display="block" noWrap>
          {output}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          endIcon={<InputIcon />}
        >
          Input
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          endIcon={<InputIcon />}
        >
          Output
        </Button>
      </CardActions>
    </Card>
  )
}

export default ExprResult
