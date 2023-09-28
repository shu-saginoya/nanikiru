import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useFetch } from '@/composables/utils/useFetch'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import type { ForecastList, AreaTypeA } from '@/types/jmaForecast'

export const useJmaForecast = () => {
  const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
  const { setDate, setWeathers, setTemps, setTempArea } = useForecastStore()

  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const key = regionalLv2.value ? regionalLv2.value.key : '130000'
  const url = accessPoint + key + '.json'
  const { data, error } = useFetch(url)
  const areaNum = ref<number>(0)

  watchEffect((): void => {
    if (data.value) {
      const forecast: ForecastList = data.value
      const latestForecast = forecast[0]
      const date = latestForecast.timeSeries[0].timeDefines
      const weathersList = latestForecast.timeSeries[0].areas
      if (regionalLv3.value) {
        findRegion(weathersList, regionalLv3.value.key)
      }
      const weathers = weathersList[areaNum.value].weathers
      const tempsList = latestForecast.timeSeries[2].areas
      const temps = tempsList[0].temps
      const tempArea = tempsList[areaNum.value].area

      setDate(date[0], date[1])
      setWeathers(weathers[0], weathers[1])
      setTemps(temps[0], temps[1])
      setTempArea(tempArea.name, tempArea.code)
    }
  })

  const findRegion = (items: AreaTypeA[], key: string): void => {
    items.find((value, index) => {
      if (value.area.code === key) {
        areaNum.value = index
      }
    })
  }

  return {
    error
  }
}
