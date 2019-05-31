import React from 'react'
import renderer from 'react-test-renderer'

import App from './index'

test('renders correct', () => {
  const tree = renderer.create(<App />).toJSON()

  expect(tree.children).toContain('Joseph Morse')
})
