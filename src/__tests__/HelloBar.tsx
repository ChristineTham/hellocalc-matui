import React from 'react'
import { render } from '@testing-library/react'

import HelloBar from '../components/HelloBar'

test('Displays the correct title', () => {
  const { getByTestId } = render(<HelloBar />)
  // Assertion
  expect(getByTestId('app-title')).toHaveTextContent('Hello Calculator')
  // --> Test will pass
})
