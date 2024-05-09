import type { TempClass } from '@/types/tempClass'

export const useClassifyTemp = () => {
  const temps: number[] = [4, 8, 12, 16, 20, 24, 28, 32]
  const classValues: TempClass[] = [
    'freezing',
    'cold',
    'chilly',
    'cool',
    'warm',
    'hot',
    'humid',
    'melting',
    'boiling'
  ]
  const tempClass = (temp: number): TempClass => {
    for (let i = 0; i < temps.length; i++) {
      if (temp <= temps[i]) {
        return classValues[i]
      }
    }
    return classValues[8]
  }

  return {
    tempClass
  }
}
