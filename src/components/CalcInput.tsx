import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
// import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import InputIcon from '@material-ui/icons/Input'
import BackspaceIcon from '@material-ui/icons/Backspace'
import InputAdornment from '@material-ui/core/InputAdornment'

import { RootState } from '../rootReducer'

import { replaceInput, clearInput } from '../features/input/inputSlice'
import { evaluateX } from '../features/calculator/calculatorSlice'

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
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear-input"
                  onClick={() => dispatch(clearInput())}
                  edge="end"
                >
                  <BackspaceIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
      <CardActions>
        <ButtonGroup color="primary" aria-label="expression-actions">
          <Button onClick={() => dispatch(evaluateX(currInput))}>
            Evaluate
          </Button>
          <Button>Simplify</Button>
          <Button>Rationalise</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  )
}

export default CalcInput
