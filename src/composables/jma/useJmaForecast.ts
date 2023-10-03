import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useFetch } from '@/composables/utils/useFetch'
import { useDateFormat } from '../utils/useDateFormat'
import type { ForecastList, AreaTypeA } from '@/types/jmaForecast'

export const useJmaForecast = () => {
  // グローバルステートを取得
  const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
  const { setDate, setWeathers, setTemps, setTempArea } = useForecastStore()

  // 気象庁天気予報のアクセスポイントにアクセス
  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const key = regionalLv2.value ? regionalLv2.value.key : '130000'
  const url = accessPoint + key + '.json'
  const { data, error } = useFetch(url)

  // 取得したデータをもとに情報の整理
  const areaNum = ref<number>(0)

  watchEffect((): void => {
    if (data.value) {
      const forecast: ForecastList = data.value
      const latestForecast = forecast[0]
      const weathersDate = latestForecast.timeSeries[0].timeDefines
      const weathersList = latestForecast.timeSeries[0].areas
      if (regionalLv3.value) {
        findRegion(weathersList, regionalLv3.value.key)
      }
      const weathers = weathersList[areaNum.value].weathers
      const tempsDate = latestForecast.timeSeries[2].timeDefines
      const tempsList = latestForecast.timeSeries[2].areas
      const temps = tempsList[0].temps
      const tempArea = tempsList[areaNum.value].area

      setDate(tempsDate[0], tempsDate[2])
      setTempArea(tempArea.name, tempArea.code)

      if (temps.length === 4) {
        setTemps([Number(temps[0]), Number(temps[1])], [Number(temps[2]), Number(temps[3])])
      } else if (temps.length === 2) {
        setTemps([Number(temps[0]), Number(temps[1])], undefined)
      }

      if (compareDates(tempsDate[0], weathersDate[0])) {
        setWeathers(weathers[0], weathers[1])
      } else if (compareDates(tempsDate[0], weathersDate[1])) {
        setWeathers(weathers[1], weathers[2])
      }
    }
  })

  const findRegion = (items: AreaTypeA[], key: string): void => {
    items.find((value, index) => {
      if (value.area.code === key) {
        areaNum.value = index
      }
    })
  }
  const compareDates = (dateA: string, dateB: string) => {
    return useDateFormat(dateA).format === useDateFormat(dateB).format
  }

  return {
    error
  }
}
