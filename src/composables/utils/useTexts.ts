// テキスト関連のユーティリティ

export const useTexts = () => {
  // 文字列内の全角スペースを半角スペースに変換する
  const fullSpacesToHalf = (text: string): string => {
    return text.replace(/\s+/g, ' ')
  }

  // エリアの表示名をフォーマット
  const areaFormat = (areaLv1: string, areaLv2: string, areaLv3: string) => {
    if (areaLv2 !== areaLv3) {
      return `${areaLv2} ${areaLv3}`
    } else {
      return `${areaLv1} ${areaLv2}`
    }
  }

  return {
    fullSpacesToHalf,
    areaFormat
  }
}
