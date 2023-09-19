import { useFetch } from '@/composables/utils/useFetch'

export const useJmaForecast = (key: string) => {
  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const url = accessPoint + key + '.json'
  const { data, error } = useFetch(url)

  return {
    data,
    error
  }
}
