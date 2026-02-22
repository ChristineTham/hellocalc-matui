import * as React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Tooltip from '@mui/material/Tooltip'
import SvgIcon from '@mui/material/SvgIcon'
import { makeStyles } from 'tss-react/mui'
import ClearIcon from '@mui/icons-material/HighlightOff'
import StackIcon from '@mui/icons-material/Reorder'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom'
import BackspaceIcon from '@mui/icons-material/Backspace'
import { mdiAlphaXBox, mdiArrowRightBox } from '@mdi/js'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../rootReducer'

import {
  insertInput,
  deleteInput,
  clearInput,
  // cursorLeft,
  // cursorRight,
  // cursorBegin,
  // cursorEnd,
  changeSign,
} from '../features/input/inputSlice'

import {
  clearX,
  clearStack,
  enterX,
  rollUp,
  rollDown,
  exchangeXY,
  binaryOp,
} from '../features/calculator/calculatorSlice'

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  },
  calcKey: {
    height: 40,
    width: 60,
    minWidth: 60,
  },
  enterKey: {
    height: 40,
    width: 128,
    minWidth: 128,
  },
}))

type InputKeyProps = {
  op: string
  tooltip: string
  children: React.ReactNode
}

const InputKey: React.FC<InputKeyProps> = ({
  op,
  tooltip,
  children,
}: InputKeyProps) => {
  const { classes } = useStyles()
  const dispatch = useDispatch()

  return (
    <Tooltip title={tooltip} arrow>
      <Grid item>
        <Button
          className={classes.calcKey}
          variant="contained"
          onClick={() => dispatch(insertInput(op))}
        >
          {children}
        </Button>
      </Grid>
    </Tooltip>
  )
}

import { AnyAction } from 'redux'

type OpKeyProps = {
  op: () => AnyAction
  tooltip: string
  children: React.ReactNode
}

const OpKey: React.FC<OpKeyProps> = ({ op, tooltip, children }: OpKeyProps) => {
  const { classes } = useStyles()
  const dispatch = useDispatch()

  return (
    <Tooltip title={tooltip} arrow>
      <Grid item>
        <Button
          className={classes.calcKey}
          variant="contained"
          onClick={() => dispatch(op())}
          color="secondary"
          size="small"
        >
          {children}
        </Button>
      </Grid>
    </Tooltip>
  )
}


type BinaryOpProps = {
  op: math.MathJsFunctionName
  tooltip: string
  children: React.ReactNode
}

const BinaryOpKey: React.FC<BinaryOpProps> = ({
  op,
  tooltip,
  children,
}: BinaryOpProps) => {
  const { classes } = useStyles()
  const dispatch = useDispatch()
  const currInput = useSelector((state: RootState) => state.input.current)

  return (
    <Tooltip title={tooltip} arrow>
      <Grid item>
        <Button
          className={classes.calcKey}
          variant="contained"
          onClick={() => {
            if (currInput) {
              dispatch(enterX(currInput))
              dispatch(clearInput())
            }
            dispatch(binaryOp(op))
          }}
          color="primary"
          size="large"
        >
          {children}
        </Button>
      </Grid>
    </Tooltip>
  )
}

const EnterKey: React.FC = () => {
  const { classes } = useStyles()
  const dispatch = useDispatch()
  const currInput = useSelector((state: RootState) => state.input.current)

  return (
    <Tooltip title="Enter current input into Results Stack" arrow>
      <Grid item>
        <Button
          className={classes.enterKey}
          variant="contained"
          onClick={() => {
            if (currInput) {
              dispatch(enterX(currInput))
              dispatch(clearInput())
            }
          }}
          color="primary"
        >
          Enter
          <VerticalAlignBottomIcon />
        </Button>
      </Grid>
    </Tooltip>
  )
}

const CalcBasicKeyboard = () => {
  return (
    <Card>
      <CardHeader title="Basic Functions" />
      <CardContent>
        <Grid container spacing={1} xs={12}>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={clearX} tooltip="Remove X from Results">
                <ClearIcon />
                <SvgIcon>
                  <path d={mdiAlphaXBox} />
                </SvgIcon>
              </OpKey>
              <InputKey op="7" tooltip="Add digit 7 to input">
                7
              </InputKey>
              <InputKey op="8" tooltip="Add digit 8 to input">
                8
              </InputKey>
              <InputKey op="9" tooltip="Add digit 9 to input">
                9
              </InputKey>
              <BinaryOpKey op="divide" tooltip="Divide Y by X">
                &divide;
              </BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={clearStack} tooltip="Clear all Results">
                <ClearIcon />
                <StackIcon />
              </OpKey>
              <InputKey op="4" tooltip="Add digit 4 to input">
                4
              </InputKey>
              <InputKey op="5" tooltip="Add digit 5 to input">
                5
              </InputKey>
              <InputKey op="6" tooltip="Add digit 6 to input">
                6
              </InputKey>
              <BinaryOpKey op="multiply" tooltip="Multiply Y by X">
                &times;
              </BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={rollUp} tooltip="Roll results up">
                <StackIcon />
                <ArrowUpwardIcon />
              </OpKey>
              <InputKey op="1" tooltip="Add digit 1 to input">
                1
              </InputKey>
              <InputKey op="2" tooltip="Add digit 2 to input">
                2
              </InputKey>
              <InputKey op="3" tooltip="Add digit 3 to input">
                3
              </InputKey>
              <BinaryOpKey op="subtract" tooltip="Subtract X from Y">
                &minus;
              </BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={rollDown} tooltip="Roll results down">
                <StackIcon />
                <ArrowDownwardIcon />
              </OpKey>
              <InputKey op="0" tooltip="Add digit 0 to input">
                0
              </InputKey>
              <InputKey op="." tooltip="Add decimal point to input">
                .
              </InputKey>
              <OpKey op={changeSign} tooltip="Change sign of input">
                &plusmn;
              </OpKey>
              <BinaryOpKey op="add" tooltip="Add X to Y">
                +
              </BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={exchangeXY} tooltip="Exchange X and Y">
                x&harr;y
              </OpKey>
              <OpKey
                op={deleteInput}
                tooltip="Backspace - delete last character from input"
              >
                <BackspaceIcon />
              </OpKey>
              <OpKey op={clearInput} tooltip="Clear input">
                <ClearIcon />
                <SvgIcon>
                  <path d={mdiArrowRightBox} />
                </SvgIcon>
              </OpKey>
              <EnterKey />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CalcBasicKeyboard
