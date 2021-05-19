export type Color =
  | 'red'
  | 'black'
  | 'white'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'brown'
  | 'grey'

export type Type = 'car' | 'airplaine' | 'train'

export interface Car {
  brand: string
  colors: Color[]
  id: number
  img: string
  type: string
}

export const getData = (
  items: Car[],
  variant?: 'color' | 'type'
): Record<string, string[]> => {
  const activeColors: string[] = []
  const activeTypes: string[] = []
  items.forEach(({ colors, type }): void => {
    if (variant !== 'type') {
      colors.forEach((color): void => {
        !activeColors.includes(color) && activeColors.push(color)
      })
    }
    if (variant !== 'color' && !activeTypes.includes(type)) {
      activeTypes.push(type)
    }
  })
  if (variant === 'type') return { activeTypes }
  if (variant === 'color') return { activeColors }
  return { activeColors, activeTypes }
}

export function uniteReducer<S> (state: S, action: Partial<S>): S {
  return { ...state, ...action }
}

export const updateByColor = (color: Color) => {
  return function ({ colors }: { colors: Color[] }) {
    return colors.find(item => item === color)
  }
}

export const imagePlaceholder =
  'data:image/png;base64,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'
