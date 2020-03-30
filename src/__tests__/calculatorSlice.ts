import { AnyAction } from 'redux'

import {
  NumberType,
  OutputFormat,
  AngleMeasure,
  CoordinateSystem,
  NumberBase,
  CalculatorState,
} from '../features/calculator/calculatorTypes'

import calculator, {
  clearX,
  clearStack,
  enterX,
  rollUp,
  rollDown,
  exchangeXY,
  unaryOp,
  binaryOp,
} from '../features/calculator/calculatorSlice'

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

const testStack: CalculatorState = {
  numberType: NumberType.BigNumber,
  outputFormat: OutputFormat.Standard,
  angleMeasure: AngleMeasure.Degree,
  coordinateSystem: CoordinateSystem.Rectangular,
  numberBase: NumberBase.Decimal,
  precision: 64,
  stack: {
    x: '2',
    y: '3',
    z: '4',
    t: '5',
  },
}

describe('calculator', () => {
  it('should handle initial state', () => {
    expect(calculator(undefined, {} as AnyAction)).toEqual(initialState)
  })

  it('should handle clearX', () => {
    expect(
      calculator(testStack, {
        type: clearX.type,
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '3',
        y: '4',
        z: '5',
        t: '0',
      },
    })
  })

  it('should handle clearStack', () => {
    expect(
      calculator(testStack, {
        type: clearStack.type,
      })
    ).toEqual(initialState)
  })

  it('should handle enterX', () => {
    expect(
      calculator(testStack, {
        type: enterX.type,
        payload: '1',
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '1',
        y: '2',
        z: '3',
        t: '4',
      },
    })
  })

  it('should handle rollUp', () => {
    expect(
      calculator(testStack, {
        type: rollUp.type,
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '5',
        y: '2',
        z: '3',
        t: '4',
      },
    })
  })

  it('should handle rollDown', () => {
    expect(
      calculator(testStack, {
        type: rollDown.type,
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '3',
        y: '4',
        z: '5',
        t: '2',
      },
    })
  })

  it('should handle exchangeXY', () => {
    expect(
      calculator(testStack, {
        type: exchangeXY.type,
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '3',
        y: '2',
        z: '4',
        t: '5',
      },
    })
  })

  it('should handle unaryOp', () => {
    expect(
      calculator(testStack, {
        type: unaryOp.type,
        payload: 'square',
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '4',
        y: '3',
        z: '4',
        t: '5',
      },
    })

    expect(
      calculator(testStack, {
        type: unaryOp.type,
        payload: 'cube',
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '8',
        y: '3',
        z: '4',
        t: '5',
      },
    })
  })

  it('should handle binaryOp', () => {
    expect(
      calculator(testStack, {
        type: binaryOp.type,
        payload: 'multiply',
      })
    ).toEqual({
      numberType: NumberType.BigNumber,
      outputFormat: OutputFormat.Standard,
      angleMeasure: AngleMeasure.Degree,
      coordinateSystem: CoordinateSystem.Rectangular,
      numberBase: NumberBase.Decimal,
      precision: 64,
      stack: {
        x: '6',
        y: '4',
        z: '5',
        t: '5',
      },
    })
  })
})
