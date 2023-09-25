import { ref, watch, readonly } from 'vue'
import { useFetch } from '@/composables/utils/useFetch'
import { useRegionalsStore } from '@/store/regionals'

import type { ForecastList } from '@/types/jmaForecast'

export const useJmaForecast = () => {
  const { regionalLv2, regionalLv3 } = useRegionalsStore()

  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const url = accessPoint + regionalLv2?.key + '.json'
  const { data, error } = useFetch(url)

  const dateTime = ref<string[]>()
  const weathers = ref<string[]>()
  const temps = ref()
  watch(data, () => {
    if (data.value) {
      const forecast: ForecastList = data.value
      const latestForecast = forecast[0]

      dateTime.value = latestForecast.timeSeries[0].timeDefines

      for (const item of latestForecast.timeSeries[0].areas) {
        if (item.area.code === regionalLv3?.key) {
          weathers.value = item.weathers
          break
        }
      }

      temps.value = latestForecast.timeSeries[2].areas
    }
  })

  return {
    error,
    dateTime: readonly(dateTime),
    weathers: readonly(weathers),
    temps: readonly(temps)
  }
}
