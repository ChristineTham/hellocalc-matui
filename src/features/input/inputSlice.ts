/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InputState = {
  current: string
  cursor: number
  lenLast: number
}

const initialState: InputState = {
  current: '',
  cursor: 0,
  lenLast: 0,
}

const input = createSlice({
  name: 'input',
  initialState,
  reducers: {
    insertInput: (state, action: PayloadAction<string>): void => {
      if (state.current && state.cursor < state.current.length) {
        state.current =
          state.current.slice(0, state.cursor) +
          action.payload +
          state.current.slice(state.cursor)
        state.cursor += action.payload.length
      } else {
        state.current += action.payload
        state.lenLast = action.payload.length
        state.cursor = state.current.length
      }
    },
    deleteInput: (state): void => {
      if (state.current && state.cursor < state.current.length) {
        state.current =
          state.current.slice(0, state.cursor - state.lenLast) +
          state.current.slice(state.cursor)
        state.cursor -= state.lenLast
      } else if (state.lenLast) {
        state.current = state.current.slice(0, -state.lenLast)
        state.lenLast = 1
        state.cursor = state.current.length
      }
    },
    clearInput: (state): void => {
      state.current = ''
      state.lenLast = 0
      state.cursor = 0
    },
    cursorLeft: (state): void => {
      if (state.cursor) {
        state.cursor -= 1
        state.lenLast = 1
      }
    },
    cursorRight: (state): void => {
      if (state.cursor < state.current.length) {
        state.cursor += 1
        state.lenLast = 1
      }
    },
    cursorBegin: (state): void => {
      state.cursor = 0
      state.lenLast = 1
    },
    cursorEnd: (state): void => {
      state.cursor = state.current.length
      state.lenLast = 1
    },
    changeSign: (state): void => {
      if (state.current) {
        if (state.current[0] === '-') {
          state.current = state.current.slice(1)
          state.cursor -= 1
        } else {
          state.current = `-${state.current}`
          state.cursor += 1
        }
      }
    },
  },
})

export const {
  insertInput,
  deleteInput,
  clearInput,
  cursorLeft,
  cursorRight,
  cursorBegin,
  cursorEnd,
  changeSign,
} = input.actions

export default input.reducer
