import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import {
  mdiApproximatelyEqualBox,
} from '@mdi/js'
import InputIcon from '@mui/icons-material/Input'

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
