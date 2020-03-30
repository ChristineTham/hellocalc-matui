import { combineReducers } from '@reduxjs/toolkit'

import calculatorReducer from './features/calculator/calculatorSlice'
import inputReducer from './features/input/inputSlice'
//import variablesReducer from 'features/variables/variablesDisplaySlice'
//import historyReducer from 'features/history/variablesDisplaySlice'
//import libraryReducer from 'features/library/variablesDisplaySlice'

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  input: inputReducer,
  //  variables: variablesReducer,
  //  history: historyReducer,
  //  library: libraryReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
