export const useClothing = () => {
  const clothings: string[][] = [
    ['ダウンコート'],
    ['冬物コート'],
    ['トレンチコート', 'フリース', 'セーター'],
    ['マウンテンパーカー', 'トレーナー'],
    ['薄手の羽織'],
    ['長袖シャツ', 'ロンT'],
    ['半袖シャツ', 'Tシャツ'],
    ['Tシャツ']
  ]
  const temps: number[] = [5, 8, 12, 16, 20, 25, 28, 30]

  const clothingsData = (num: number) => {
    return {
      clothing: clothings[num],
      id: num
    }
  }

  const getClothing = (temp: number) => {
    if (temp <= temps[0]) {
      return clothingsData(0)
    } else if (temp <= temps[1]) {
      return clothingsData(1)
    } else if (temp <= temps[2]) {
      return clothingsData(2)
    } else if (temp <= temps[3]) {
      return clothingsData(3)
    } else if (temp <= temps[4]) {
      return clothingsData(4)
    } else if (temp <= temps[5]) {
      return clothingsData(5)
    } else if (temp <= temps[6]) {
      return clothingsData(6)
    } else {
      return clothingsData(7)
    }
  }

  return {
    getClothing
  }
}
