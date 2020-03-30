/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as math from 'mathjs'

import {
  NumberType,
  OutputFormat,
  AngleMeasure,
  CoordinateSystem,
  NumberBase,
  CalculatorState,
} from './calculatorTypes'

const initialState: CalculatorState = {
  numberType: NumberType.BigNumber,
  outputFormat: OutputFormat.Standard,
  angleMeasure: AngleMeasure.Degree,
  coordinateSystem: CoordinateSystem.Rectangular,
  numberBase: NumberBase.Decimal,
  precision: 64,
  stack: {
    x: '0',
    y: '0',
    z: '0',
    t: '0',
  },
}

const calculator = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    clearX: (state): void => {
      state.stack.x = state.stack.y
      state.stack.y = state.stack.z
      state.stack.z = state.stack.t
      state.stack.t = 0
    },
    clearStack: (state): void => {
      // need to push stack up first
      state.stack.t = '0'
      state.stack.z = '0'
      state.stack.y = '0'
      state.stack.x = '0'
    },
    enterX: (state, action: PayloadAction<string>): void => {
      // need to push stack up first
      state.stack.t = state.stack.z
      state.stack.z = state.stack.y
      state.stack.y = state.stack.x
      state.stack.x = action.payload
    },
    rollUp: (state): void => {
      // need to push stack up first
      const temp = state.stack.t
      state.stack.t = state.stack.z
      state.stack.z = state.stack.y
      state.stack.y = state.stack.x
      state.stack.x = temp
    },
    rollDown: (state): void => {
      // need to push stack up first
      const temp = state.stack.x
      state.stack.x = state.stack.y
      state.stack.y = state.stack.z
      state.stack.z = state.stack.t
      state.stack.t = temp
    },
    exchangeXY: (state): void => {
      const temp = state.stack.x
      state.stack.x = state.stack.y
      state.stack.y = temp
    },
    unaryOp: (state, action: PayloadAction<string>): void => {
      const x = math.bignumber(state.stack.x)
      const operator = math[action.payload]
      state.stack.x = operator(x).toString()
    },
    binaryOp: (state, action: PayloadAction<string>): void => {
      const x = math.bignumber(state.stack.x)
      const y = math.bignumber(state.stack.y)
      const operator = math[action.payload]
      state.stack.x = operator(y, x).toString()
      state.stack.y = state.stack.z
      state.stack.z = state.stack.t
    },
  },
})

export const {
  clearX,
  clearStack,
  enterX,
  rollUp,
  rollDown,
  exchangeXY,
  unaryOp,
  binaryOp,
} = calculator.actions

export default calculator.reducer
