import { ref, watch, readonly } from 'vue'
import { useFetch } from '@/composables/utils/useFetch'

export const useJmaForecast = (key: string) => {
  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const url = accessPoint + key + '.json'
  const { data, error } = useFetch(url)

  const dateTime = ref<string[]>()
  const weathers = ref<string[]>()
  const temps = ref<string[]>()
  watch(data, () => {
    if (data.value) {
      dateTime.value = data.value[0].timeSeries[0].timeDefines
      weathers.value = data.value[0].timeSeries[0].areas[0].weathers
      temps.value = data.value[0].timeSeries[2].areas[0].temps
    }
  })

  return {
    data,
    error,
    dateTime: readonly(dateTime),
    weathers: readonly(weathers),
    temps: readonly(temps)
  }
}
