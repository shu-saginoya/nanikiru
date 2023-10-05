export const useTexts = () => {
  const fullSpacesToHalf = (text: string): string => {
    return text.replace(/\s+/g, ' ')
  }

  const regionFormat = (regionLv1: string, regionLv2: string, regionLv3: string) => {
    if (regionLv2 !== regionLv3) {
      return `${regionLv2} ${regionLv3}`
    } else {
      return `${regionLv1} ${regionLv2}`
    }
  }

  return {
    fullSpacesToHalf,
    regionFormat
  }
}
