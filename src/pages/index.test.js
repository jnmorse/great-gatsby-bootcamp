/*
 * import React from 'react'
 * import renderer from 'react-test-renderer'
 */

import React from 'react'
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

import App from './index'
import { AboutMe } from '../components/home-sections'

test('renders correct', () => {
  const testRenderer = renderer.create(<App />)
  const instance = testRenderer.root

  expect(instance.findByType(AboutMe).type).toBe(AboutMe)

  testRenderer.unmount()
})

test('contains <AboutMe/>', () => {
  const shallow = new ShallowRenderer()
  shallow.render(<App />)
  const result = shallow.getRenderOutput()

  expect(result.props.children).toContainEqual(<AboutMe />)
})
