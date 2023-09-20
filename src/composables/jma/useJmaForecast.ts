import { ref, watch, readonly } from 'vue'
import { useFetch } from '@/composables/utils/useFetch'

import type { Forecast, TimeSeries } from '@/types/jmaForecast'

export const useJmaForecast = (preKey: string, areaKey: string) => {
  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const url = accessPoint + preKey + '.json'
  const { data, error } = useFetch(url)

  const dateTime = ref<string[]>()
  const weathers = ref<string[]>()
  const temps = ref<TimeSeries>()
  watch(data, () => {
    if (data.value) {
      const forecast: Forecast = data.value[0]
      dateTime.value = forecast.timeSeries[0].timeDefines

      for (const item of forecast.timeSeries[0].areas) {
        if (item.area.code === areaKey) {
          weathers.value = item.weathers
          break
        }
      }

      temps.value = forecast.timeSeries[2]
    }
  })

  return {
    error,
    dateTime: readonly(dateTime),
    weathers: readonly(weathers),
    temps: readonly(temps)
  }
}
