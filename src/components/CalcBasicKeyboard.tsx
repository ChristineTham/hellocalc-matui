import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/HighlightOff'
import StackIcon from '@material-ui/icons/Reorder'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
// import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom'
import BackspaceIcon from '@material-ui/icons/Backspace'
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
  unaryOp,
  binaryOp,
} from '../features/calculator/calculatorSlice'

const useStyles = makeStyles(() => ({
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
  children: React.ReactNode
}

const InputKey: React.FC<InputKeyProps> = ({ op, children }: InputKeyProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Grid item>
      <Button
        className={classes.calcKey}
        variant="contained"
        onClick={() => dispatch(insertInput(op))}
      >
        {children}
      </Button>
    </Grid>
  )
}

type OpKeyProps = {
  op: () => void
  children: React.ReactNode
}

const OpKey: React.FC<OpKeyProps> = ({ op, children }: OpKeyProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
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
  )
}

type UnaryOpProps = {
  op: math.MathJsFunctionName
  children: React.ReactNode
}

const UnaryOpKey: React.FC<UnaryOpProps> = ({ op, children }: UnaryOpProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currInput = useSelector((state: RootState) => state.input.current)

  return (
    <Grid item>
      <Button
        className={classes.calcKey}
        variant="contained"
        onClick={() => {
          if (currInput) {
            dispatch(enterX(currInput))
            dispatch(clearInput())
          }
          dispatch(unaryOp(op))
        }}
        color="primary"
      >
        {children}
      </Button>
    </Grid>
  )
}

type BinaryOpProps = {
  op: math.MathJsFunctionName
  children: React.ReactNode
}

const BinaryOpKey: React.FC<BinaryOpProps> = ({
  op,
  children,
}: BinaryOpProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currInput = useSelector((state: RootState) => state.input.current)

  return (
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
  )
}

const EnterKey: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currInput = useSelector((state: RootState) => state.input.current)

  return (
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
              <OpKey op={clearX}>
                <ClearIcon />
                <SvgIcon>
                  <path d={mdiAlphaXBox} />
                </SvgIcon>
              </OpKey>
              <InputKey op="7">7</InputKey>
              <InputKey op="8">8</InputKey>
              <InputKey op="9">9</InputKey>
              <BinaryOpKey op="divide">&divide;</BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={clearStack}>
                <ClearIcon />
                <StackIcon />
              </OpKey>
              <InputKey op="4">4</InputKey>
              <InputKey op="5">5</InputKey>
              <InputKey op="6">6</InputKey>
              <BinaryOpKey op="multiply">&times;</BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={rollUp}>
                <StackIcon />
                <ArrowUpwardIcon />
              </OpKey>
              <InputKey op="1">1</InputKey>
              <InputKey op="2">2</InputKey>
              <InputKey op="3">3</InputKey>
              <BinaryOpKey op="subtract">&minus;</BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={rollDown}>
                <StackIcon />
                <ArrowDownwardIcon />
              </OpKey>
              <InputKey op="0">0</InputKey>
              <InputKey op=".">.</InputKey>
              <OpKey op={changeSign}>&plusmn;</OpKey>
              <BinaryOpKey op="add">+</BinaryOpKey>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} xs>
              <OpKey op={exchangeXY}>x&harr;y</OpKey>
              <OpKey op={deleteInput}>
                <BackspaceIcon />
              </OpKey>
              <OpKey op={clearInput}>
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
