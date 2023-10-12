import { computed } from 'vue'

export const useTempCalc = (maxTemp: number, minTempList: number[]) => {
  const minTemp = computed(() => {
    const sum = minTempList.reduce((x, y) => x + y)
    return sum / minTempList.length
  })
  const averageTemp = computed(() => {
    return (maxTemp + minTemp.value) / 2
  })
  const differenceTemp = computed(() => {
    return maxTemp - minTemp.value
  })
  const morningAndEveningTemp = computed(() => {
    return differenceTemp.value / 4 + minTemp.value
  })

  return {
    averageTemp,
    differenceTemp,
    morningAndEveningTemp
  }
}
