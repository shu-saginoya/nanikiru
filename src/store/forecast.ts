import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useForecastStore = defineStore('forecast', () => {
  // Types
  type TempArea = {
    name: string
    code: string
  }
  type Forecast = {
    date: string
    weather: string
    minTemp: number | undefined
    maxTemp: number
  }
  type Forecasts = Forecast[]

  // State
  const tempArea = ref<TempArea | undefined>()
  const forecasts = ref<Forecasts | undefined>()

  // Setter
  const setForecasts = (list: Forecasts): void => {
    forecasts.value = list
  }
  const setTempArea = (name: string, code: string) => {
    tempArea.value = { name, code }
  }

  return {
    forecasts: readonly(forecasts),
    tempArea: readonly(tempArea),
    setForecasts,
    setTempArea
  }
})
