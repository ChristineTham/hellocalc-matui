import React from 'react'
import { Provider } from 'react-redux'
// import { Container } from '@material-ui/core'

// eslint-disable-next-line import/no-extraneous-dependencies
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout'
import HelloBar from '../../components/HelloBar'

import createStore from '../../state/createStore'

export default function TopLayout({ children, theme }) {
  const store = createStore()

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>
        <HelloBar />
        {children}
      </ThemeTopLayout>
    </Provider>
  )
}
