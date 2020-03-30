import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
// import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from '../rootReducer'

// preloadedState will be passed in by the plugin
export default (preloadedState: RootState): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
