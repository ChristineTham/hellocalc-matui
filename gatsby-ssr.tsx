import React from 'react'
import { GatsbySSR } from 'gatsby'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from './src/theme'
import createStore from './src/state/createStore'
import HelloBar from './src/components/HelloBar'
import createEmotionCache from './src/createEmotionCache'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  const store = createStore(undefined)
  const cache = createEmotionCache()

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
