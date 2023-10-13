export const useTexts = () => {
  const fullSpacesToHalf = (text: string): string => {
    return text.replace(/\s+/g, ' ')
  }

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
