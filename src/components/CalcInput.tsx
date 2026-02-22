import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
// import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import InputIcon from '@mui/icons-material/Input'
import BackspaceIcon from '@mui/icons-material/Backspace'
import InputAdornment from '@mui/material/InputAdornment'

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
