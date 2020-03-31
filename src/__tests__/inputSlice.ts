import { AnyAction } from 'redux'

import input, {
  insertInput,
  deleteInput,
  clearInput,
  cursorLeft,
  cursorRight,
  cursorBegin,
  cursorEnd,
  changeSign,
  InputState,
} from '../features/input/inputSlice'

const initialState: InputState = {
  current: '',
  cursor: 0,
  lenLast: 0,
}

const cursorLast: InputState = {
  current: '12345',
  cursor: 6,
  lenLast: 1,
}

const cursorMiddle: InputState = {
  current: '12345',
  cursor: 3,
  lenLast: 1,
}

describe('input', () => {
  it('should handle initial state', () => {
    expect(input(undefined, {} as AnyAction)).toEqual(initialState)
  })

  it('should handle insertInput', () => {
    expect(
      input(initialState, {
        type: insertInput.type,
        payload: '6',
      })
    ).toEqual({
      current: '6',
      cursor: 1,
      lenLast: 1,
    })

    expect(
      input(cursorLast, {
        type: insertInput.type,
        payload: '6',
      })
    ).toEqual({
      current: '123456',
      cursor: 6,
      lenLast: 1,
    })

    expect(
      input(cursorMiddle, {
        type: insertInput.type,
        payload: '6',
      })
    ).toEqual({
      current: '123645',
      cursor: 4,
      lenLast: 1,
    })
  })

  it('should handle deleteInput', () => {
    expect(
      input(initialState, {
        type: deleteInput.type,
      })
    ).toEqual(initialState)

    expect(
      input(cursorLast, {
        type: deleteInput.type,
      })
    ).toEqual({
      current: '1234',
      cursor: 4,
      lenLast: 1,
    })

    expect(
      input(cursorMiddle, {
        type: deleteInput.type,
      })
    ).toEqual({
      current: '1245',
      cursor: 2,
      lenLast: 1,
    })
  })

  it('should handle clearInput', () => {
    expect(
      input(initialState, {
        type: clearInput.type,
      })
    ).toEqual(initialState)

    expect(
      input(cursorLast, {
        type: clearInput.type,
      })
    ).toEqual(initialState)

    expect(
      input(cursorMiddle, {
        type: clearInput.type,
      })
    ).toEqual(initialState)
  })

  it('should handle changeSign', () => {
    expect(
      input(initialState, {
        type: changeSign.type,
      })
    ).toEqual(initialState)

    expect(
      input(cursorLast, {
        type: changeSign.type,
      })
    ).toEqual({
      current: '-12345',
      cursor: 7,
      lenLast: 1,
    })

    expect(
      input(cursorMiddle, {
        type: changeSign.type,
      })
    ).toEqual({
      current: '-12345',
      cursor: 4,
      lenLast: 1,
    })
  })
})
