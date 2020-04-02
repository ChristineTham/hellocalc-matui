import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
// import Avatar from '@material-ui/core/Avatar'
import InputIcon from '@material-ui/icons/Input'
import InputAdornment from '@material-ui/core/InputAdornment'

import { RootState } from '../rootReducer'

import { replaceInput } from '../features/input/inputSlice'

const CalcInput: React.FC = () => {
  const currInput = useSelector((state: RootState) => state.input.current)
  const dispatch = useDispatch()
  // const avatar = (
  //   <Avatar>
  //     <InputIcon />
  //   </Avatar>
  // )

  return (
    <Card>
      <CardHeader title="Input" />
      <CardContent>
        <TextField
          autoFocus
          fullWidth
          id="calc-nput"
          name="calc-input"
          label="Enter math expression"
          placeholder="1+2"
          variant="outlined"
          value={currInput}
          onChange={(e) => dispatch(replaceInput(e.target.value))}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InputIcon />
              </InputAdornment>
            ),
          }}
        />
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

export default CalcInput
