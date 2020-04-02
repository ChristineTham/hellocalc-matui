import { AnyAction } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import calculator, {
  clearX,
  clearStack,
  enterX,
  rollUp,
  rollDown,
  exchangeXY,
  unaryOp,
  binaryOp,
  initialState,

} from '../features/calculator/calculatorSlice'

describe('calculator', () => {
  it('should handle initial state', () => {
    expect(calculator(undefined, {} as AnyAction)).toEqual(initialState)
  })

  const store = configureStore({ reducer: calculator })

  it('should handle enterX', () => {
    store.dispatch(enterX('5'))
    expect(store.getState().stack[0]).toEqual('5')
  })

  it('should handle full stack', () => {
    store.dispatch(enterX('4'))
    store.dispatch(enterX('3'))
    store.dispatch(enterX('2'))
    expect(store.getState().stack).toEqual(['2', '3', '4', '5'])
  })

  it('should handle rollUp', () => {
    store.dispatch(rollUp())
    expect(store.getState().stack).toEqual(['3', '4', '5', '2'])
  })

  it('should handle rollDown', () => {
    store.dispatch(rollDown())
    expect(store.getState().stack).toEqual(['2', '3', '4', '5'])
  })

  it('should handle exchangeXY', () => {
    store.dispatch(exchangeXY())
    expect(store.getState().stack).toEqual(['3', '2', '4', '5'])
  })

  it('should handle unaryOp', () => {
    store.dispatch(unaryOp('square'))
    expect(store.getState().stack).toEqual(['9', '2', '4', '5'])
  })

  it('should handle binaryOp', () => {
    store.dispatch(binaryOp('multiply'))
    expect(store.getState().stack).toEqual(['18', '4', '5', '0'])
  })

  it('should handle clearX', () => {
    store.dispatch(clearX())
    expect(store.getState().stack).toEqual(['4', '5', '0', '0'])
  })

  it('should handle clearStack', () => {
    store.dispatch(enterX('5'))
    store.dispatch(enterX('4'))
    store.dispatch(enterX('3'))
    store.dispatch(enterX('2'))
    store.dispatch(clearStack())
    expect(store.getState().stack).toEqual(['0', '0', '0', '0'])
  })
})
