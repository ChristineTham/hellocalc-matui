import React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from './src/theme'
import createStore from './src/state/createStore'
import HelloBar from './src/components/HelloBar'
import createEmotionCache from './src/createEmotionCache'

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

// Ensure window is defined (it should be in browser)
const preloadedState = typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined
if (typeof window !== 'undefined') {
  delete window.__PRELOADED_STATE__
}
const store = createStore(preloadedState)

const cache = createEmotionCache()

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HelloBar />
          {element}
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  )
}
