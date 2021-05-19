import React from 'react'
import { render } from '@testing-library/react'
import Select from '../../../compenents/Select'


describe('Select input tests', () => {
  const props = {
    placeholder: 'placeholder',
    options: ['hello', 'world', 'of', 'cars'],
    name: 'test',
    onChange: jest.fn()
  }
  const { container, getByText, ...utils } = render(<Select {...props} />)
  test('renders the right placeholder', () => {
    expect(getByText(props.placeholder)).toBeInTheDocument()
  })
  test('Match snapshot', () => {
    expect(container).toMatchSnapshot()
  })
  // fire events and more
})
