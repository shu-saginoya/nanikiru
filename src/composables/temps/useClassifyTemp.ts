import type { TempClass } from '@/types/tempClass'

export const useClassifyTemp = () => {
  const temps: number[] = [5, 8, 12, 16, 20, 25, 28]
  const tempClass = (temp: number): TempClass => {
    if (temp > temps[6]) {
      return 8
    } else if (temp > temps[5]) {
      return 7
    } else if (temp > temps[4]) {
      return 6
    } else if (temp > temps[3]) {
      return 5
    } else if (temp > temps[2]) {
      return 4
    } else if (temp > temps[1]) {
      return 3
    } else if (temp > temps[0]) {
      return 2
    } else if (temp <= temps[0]) {
      return 1
    } else {
      return 0
    }
  }

  return {
    tempClass
  }
}
