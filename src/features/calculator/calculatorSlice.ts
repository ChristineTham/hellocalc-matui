/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as math from 'mathjs'
import {
  ConfigOptions,
  FormatOptions,
  MathType,
  MathJsFunctionName,
} from 'mathjs'

import {
  NumberType,
  OutputFormat,
  AngleMeasure,
  CoordinateSystem,
  NumberBase,
} from './calculatorTypes'

function numeric(value: MathType): number {
  return math.number(value as number | math.BigNumber | math.Fraction) as number
}

type ScopeType = {
  [index: string]: MathType
}

export type CalculatorState = {
  numberType: NumberType
  outputFormat: OutputFormat
  angleMeasure: AngleMeasure
  coordinateSystem: CoordinateSystem
  numberBase: NumberBase
  precision: number
  stackLength: number
  stack: string[]
  stackOp: string[]
  scope: object
}

const config: ConfigOptions = {
  epsilon: 1e-12,
  matrix: 'Matrix',
  number: 'number',
  precision: 64,
  randomSeed: undefined,
}

const format: FormatOptions = {
  notation: 'auto',
  precision: 16,
  lowerExp: -3,
  upperExp: 5,
  fraction: 'ratio',
}

let stack = [0, 0, 0, 0] as MathType[]

export const initialState: CalculatorState = {
  numberType: NumberType.number,
  outputFormat: OutputFormat.Standard,
  angleMeasure: AngleMeasure.Degree,
  coordinateSystem: CoordinateSystem.Rectangular,
  numberBase: NumberBase.Decimal,
  precision: 64,
  stackLength: 4,
  stack: ['0', '0', '0', '0'],
  stackOp: ['', '', '', ''],
  scope: {},
}

// Gets property of object
// from https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript
// function prop<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }

// Format value to string based on current calculator state
function toDisplay(s: CalculatorState, value: MathType): string {
  if (
    math.typeOf(value) === 'Complex' &&
    s.coordinateSystem === CoordinateSystem.Polar
  ) {
    const polar = (value as math.Complex).toPolar()
    // eslint-disable-next-line prettier/prettier
    return `r=${math.format(polar.r, format)},&#625;=${math.format(polar.phi, format)}`
  }
  return math.format(value, format)
}

function toStack(s: CalculatorState, value: string): MathType {
  let r: MathType

  switch (s.numberType) {
    case NumberType.BigNumber:
      r = math.bignumber(value)
      break
    case NumberType.Fraction:
      r = math.fraction(value)
      break
    case NumberType.number:
    default:
      r = math.number(value)
      break
  }

  return r
}

const calculator = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    clearX: (state): void => {
      const zero = math.bignumber(0)
      stack.shift()
      stack.push(zero)

      state.stack.shift()
      state.stack.push(toDisplay(state, zero))

      state.stackOp.shift()
      state.stackOp.push('clearX')
    },
    clearStack: (state): void => {
      const zero = math.bignumber(0)
      const zeroDisplay = toDisplay(state, zero)
      stack = Array(state.stackLength).fill(zero)
      state.stack = Array(state.stackLength).fill(zeroDisplay)
      state.stackOp = Array(state.stackLength).fill('')
    },
    enterX: (state, action: PayloadAction<string>): void => {
      const value = toStack(state, action.payload)
      const valueDisplay = toDisplay(state, value)

      stack.pop()
      stack.unshift(value)

      state.stack.pop()
      state.stack.unshift(valueDisplay)

      state.stackOp.pop()
      state.stackOp.unshift('enterX')
    },
    storeX: (state, action: PayloadAction<string>): void => {
      // eslint-disable-next-line prefer-destructuring
      ;(state.scope as ScopeType)[action.payload] = stack[0]
    },
    recallX: (state, action: PayloadAction<string>): void => {
      const value = (state.scope as ScopeType)[action.payload]
      const valueDisplay = toDisplay(state, value)

      stack.pop()
      stack.unshift(value)

      state.stack.pop()
      state.stack.unshift(valueDisplay)

      state.stackOp.pop()
      state.stackOp.unshift(`recall[${action.payload}]`)
    },
    deleteVar: (state, action: PayloadAction<string>): void => {
      // eslint-disable-next-line prefer-destructuring
      delete (state.scope as ScopeType)[action.payload]
    },
    clearVar: (state): void => {
      // eslint-disable-next-line prefer-destructuring
      state.scope = {} as ScopeType
    },
    rollUp: (state): void => {
      const temp = stack.shift() as MathType
      stack.push(temp)

      const temp2 = state.stack.shift() as string
      state.stack.push(temp2)
    },
    rollDown: (state): void => {
      const temp = stack.pop() as MathType
      stack.unshift(temp)

      const temp2 = state.stack.pop() as string
      state.stack.unshift(temp2)
    },
    exchangeXY: (state): void => {
      const temp = stack[1]
      // eslint-disable-next-line prefer-destructuring
      stack[1] = stack[0]
      stack[0] = temp

      const temp2 = state.stack[1]
      // eslint-disable-next-line prefer-destructuring
      state.stack[1] = state.stack[0]
      state.stack[0] = temp2
    },
    unaryOp: (state, action: PayloadAction<MathJsFunctionName>): void => {
      const operator = math[action.payload]
      const result = operator(stack[0])
      stack[0] = result
      state.stack[0] = toDisplay(state as CalculatorState, result)
    },
    binaryOp: (state, action: PayloadAction<MathJsFunctionName>): void => {
      const operator = math[action.payload]
      const result = operator(stack[1], stack[0])
      const zero = math.bignumber(0)
      const zeroDisplay = toDisplay(state, zero)
      stack.shift()
      stack[0] = result
      stack.push(zero)
      state.stack.shift()
      state.stack[0] = toDisplay(state as CalculatorState, result)
      state.stack.push(zeroDisplay)
    },
    trigOp: (state, action: PayloadAction<MathJsFunctionName>): void => {
      let value = stack[0]
      switch (state.angleMeasure) {
        case AngleMeasure.Degree:
          value = math.evaluate('x / 360 * 2 * pi', { x: stack[0] })
          break
        case AngleMeasure.Grad:
          value = math.evaluate('x / 400 * 2 * pi', { x: stack[0] })
          break
        default:
        case AngleMeasure.Radian:
      }
      const operator = math[action.payload]
      const result = operator(value)
      stack[0] = result
      state.stack[0] = toDisplay(state as CalculatorState, result)
    },
    invTrigOp: (state, action: PayloadAction<MathJsFunctionName>): void => {
      const operator = math[action.payload]
      let result = operator(stack[0])
      switch (state.angleMeasure) {
        case AngleMeasure.Degree:
          result = math.evaluate('x  / 2 / pi * 360', { x: result })
          break
        case AngleMeasure.Grad:
          result = math.evaluate('x  / 2 / pi * 400', { x: result })
          break
        default:
        case AngleMeasure.Radian:
        // do nothing
      }
      stack[0] = result
      state.stack[0] = toDisplay(state as CalculatorState, result)
    },
    toComplex: (state): void => {
      let result
      switch (state.coordinateSystem) {
        default:
        case CoordinateSystem.Rectangular:
          result = math.complex(numeric(stack[1]), numeric(stack[0]))
          break
        case CoordinateSystem.Polar:
          result = math
            .complex(0, 0)
            .fromPolar(numeric(stack[1]), numeric(stack[0]))
          break
      }

      const zero = math.bignumber(0)
      const zeroDisplay = toDisplay(state, zero)

      stack.shift()
      stack[0] = result
      stack.push(zero)
      state.stack.shift()
      state.stack[0] = toDisplay(state, result)
      state.stack.push(zeroDisplay)
    },
    setNumberType: (state, action: PayloadAction<NumberType>): void => {
      state.numberType = action.payload
      switch (action.payload) {
        default:
          // change NumberTypes we can't handle yet to number
          state.numberType = NumberType.number
        // eslint-disable-next-line no-fallthrough
        case NumberType.number:
          config.number = 'number'
          break
        case NumberType.BigNumber:
          config.number = 'BigNumber'
          break
        case NumberType.Fraction:
          config.number = 'Fraction'
          break
      }
      math.config(config)
    },
    setPrecision: (state, action: PayloadAction<number>): void => {
      let p = action.payload

      if (p < 0) {
        p = 0
      } else if (p > 16) {
        p = 16
      }

      config.precision = p
      math.config(config)
      format.precision = p
      state.precision = p
    },
    setOutputFormat: (state, action: PayloadAction<OutputFormat>): void => {
      state.outputFormat = action.payload
      switch (action.payload) {
        default:
          // change OutputFormats we can't handle yet to Standard
          state.outputFormat = OutputFormat.Standard
        // eslint-disable-next-line no-fallthrough
        case OutputFormat.Standard:
          format.notation = 'auto'
          break
        case OutputFormat.Fixed:
          format.notation = 'fixed'
          break
        case OutputFormat.Scientific:
          format.notation = 'exponential'
          break
        case OutputFormat.Engineering:
          format.notation = 'engineering'
          break
      }
    },
    setCoordinateSystem: (
      state,
      action: PayloadAction<CoordinateSystem>
    ): void => {
      state.coordinateSystem = action.payload
    },
    setAngleMeasure: (state, action: PayloadAction<AngleMeasure>): void => {
      state.angleMeasure = action.payload
    },
    evaluateX: (state, action: PayloadAction<string>): void => {
      const value = math.evaluate(action.payload)
      const valueDisplay = toDisplay(state, value)

      stack.pop()
      stack.unshift(value)

      state.stack.pop()
      state.stack.unshift(valueDisplay)
    },
  },
})

export const {
  clearX,
  clearStack,
  enterX,
  storeX,
  recallX,
  deleteVar,
  clearVar,
  rollUp,
  rollDown,
  exchangeXY,
  unaryOp,
  binaryOp,
  trigOp,
  invTrigOp,
  toComplex,
  setNumberType,
  setPrecision,
  setOutputFormat,
  setCoordinateSystem,
  setAngleMeasure,
  evaluateX,
} = calculator.actions

export default calculator.reducer
