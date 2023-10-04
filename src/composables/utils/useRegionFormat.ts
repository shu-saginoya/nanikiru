export const useRegionFormat = () => {
  const regionFormat = (regionLv1: string, regionLv2: string, regionLv3: string) => {
    if (regionLv2 !== regionLv3) {
      return `${regionLv2} ${regionLv3}`
    } else {
      return `${regionLv1} ${regionLv2}`
    }
  }

  return {
    regionFormat
  }
}
