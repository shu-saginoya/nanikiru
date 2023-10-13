import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useAreasStore } from '@/store/areas'
import { useForecastStore } from '@/store/forecast'
import { useFetch } from '@/composables/utils/useFetch'
import { useDay } from '@/composables/utils/useDay'
import type { ForecastList, AreaTypeA } from '@/types/jmaForecast'

export const useJmaForecast = () => {
  // グローバルステートを取得
  const { areaLv2, areaLv3 } = storeToRefs(useAreasStore())
  const { setForecasts, setTempArea } = useForecastStore()

  // 気象庁天気予報のアクセスポイントにアクセス
  const accessPoint = 'https://www.jma.go.jp/bosai/forecast/data/forecast/'
  const key = areaLv2.value ? areaLv2.value.key : '130000'
  const url = accessPoint + key + '.json'
  const { data, error } = useFetch(url)

  // 取得したデータをもとに情報の整理
  const areaNum = ref<number>(0)

  watchEffect((): void => {
    // 後で整理する。また、例外も拾いきるようにする
    if (data.value) {
      const forecast: ForecastList = data.value
      const latestForecast = forecast[0]
      const weathersDate = latestForecast.timeSeries[0].timeDefines
      const weathersList = latestForecast.timeSeries[0].areas
      if (areaLv3.value) {
        findArea(weathersList, areaLv3.value.key)
      }
      const weathers = weathersList[areaNum.value].weathers
      const tempsDate = latestForecast.timeSeries[2].timeDefines
      const tempsList = latestForecast.timeSeries[2].areas
      const temps = tempsList[0].temps
      const tempArea = tempsList[areaNum.value].area

      const weathersDateNum = (tempDateNum: number): number => {
        if (compareDates(weathersDate[0], tempsDate[tempDateNum])) {
          return 0
        } else if (compareDates(weathersDate[1], tempsDate[tempDateNum])) {
          return 1
        } else if (compareDates(weathersDate[2], tempsDate[tempDateNum])) {
          return 2
        } else {
          return 3
        }
      }

      setTempArea(tempArea.name, tempArea.code)

      if (tempsDate.length >= 4) {
        setForecasts([
          {
            date: tempsDate[0],
            weather: weathers[weathersDateNum(0)],
            minTemp: temps[0] !== temps[1] ? Number(temps[0]) : undefined,
            maxTemp: Number(temps[1]),
            minTempNextDay: Number(temps[2])
          },
          {
            date: tempsDate[2],
            weather: weathers[weathersDateNum(2)],
            minTemp: Number(temps[2]),
            maxTemp: Number(temps[3]),
            minTempNextDay: Number(temps[4])
          }
        ])
      } else {
        setForecasts([
          {
            date: tempsDate[0],
            weather: weathers[0],
            minTemp: temps[0] !== temps[1] ? Number(temps[0]) : undefined,
            maxTemp: Number(temps[1]),
            minTempNextDay: Number(temps[2])
          }
        ])
      }
    }
  })

  const findArea = (items: AreaTypeA[], key: string): void => {
    items.find((value, index) => {
      if (value.area.code === key) {
        areaNum.value = index
      }
    })
  }
  const compareDates = (dateA: string, dateB: string) => {
    return useDay(dateA).formatYMD === useDay(dateB).formatYMD
  }

  return {
    error
  }
}
