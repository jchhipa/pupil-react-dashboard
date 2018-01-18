import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HeaderUI from './HeaderUI.jsx'

test('Header component should render as expected', () => {
  const component = shallow(<HeaderUI />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
});
