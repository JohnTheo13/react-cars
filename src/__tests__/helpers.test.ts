import { data } from '../service/data'
import { Car, getData } from '../utils/helpers'

describe('Test helper function:', () => {
  test('getData returns color and types array', () => {
    const expectedTypes = ['car', 'airplane', 'train']
    const expectedColors = 'redblackwhitegreenyellowbluebrowngrey'
    const [colors, types] = getData(data as Car[])
    expect((types as string[]).join('')).toBe(expectedTypes.join(''))
    expect((colors as string[]).join('')).toBe(expectedColors)
  })
})

// rest  of the tests