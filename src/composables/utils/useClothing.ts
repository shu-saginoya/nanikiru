export const useClothing = () => {
  const clothings: string[] = [
    'ダウンコート',
    '冬物コート',
    'トレンチコート・フリース・セーター',
    'マウンテンパーカー・トレーナー',
    '薄手の羽織',
    '長袖シャツ・ロンT',
    '半袖シャツ・Tシャツ',
    'Tシャツ'
  ]
  const temps: number[] = [5, 8, 12, 16, 20, 25, 28, 30]

  const getClothing = (temp: number): string => {
    if (temp <= temps[0]) {
      return clothings[0]
    } else if (temp <= temps[1]) {
      return clothings[1]
    } else if (temp <= temps[2]) {
      return clothings[2]
    } else if (temp <= temps[3]) {
      return clothings[3]
    } else if (temp <= temps[4]) {
      return clothings[4]
    } else if (temp <= temps[5]) {
      return clothings[5]
    } else if (temp <= temps[6]) {
      return clothings[6]
    } else {
      return clothings[7]
    }
  }

  return {
    getClothing
  }
}
