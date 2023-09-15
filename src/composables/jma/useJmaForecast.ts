import { ref, watch, readonly } from 'vue'
import { useFetch } from '@/composables/utils/useFetch'

export const useJmaForecast = (key: string) => {
  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const url = accessPoint + key + '.json'
  const { data, error } = useFetch(url)

  const area = ref()
  const weathers = ref()
  watch(data, () => {
    if (data.value) {
      area.value = data.value.area
      weathers.value = data.value.weathers
    }
  })

  return {
    data,
    area: readonly(area),
    weathers: readonly(weathers),
    error: readonly(error)
  }
}
