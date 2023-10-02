import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useForecastStore = defineStore('forecast', () => {
  type Today = string
  type Tomorrow = string
  type Contents = [Today, Tomorrow]
  type Min = number
  type Max = number
  type TempsToday = [Min, Max]
  type TempsTomorrow = [Min, Max]
  type Temps = [TempsToday, TempsTomorrow]
  type TempArea = {
    name: string
    code: string
  }

  const date = ref<Contents | undefined>()
  const weathers = ref<Contents | undefined>()
  const temps = ref<Temps | undefined>()
  const tempArea = ref<TempArea | undefined>()

  // Setter
  const setDate = (today: string, tomorrow: string) => {
    date.value = [today, tomorrow]
  }
  const setWeathers = (today: string, tomorrow: string) => {
    weathers.value = [today, tomorrow]
  }
  const setTemps = (today: TempsToday, tomorrow: TempsTomorrow) => {
    temps.value = [today, tomorrow]
  }
  const setTempArea = (name: string, code: string) => {
    tempArea.value = { name, code }
  }

  return {
    date: readonly(date),
    weathers: readonly(weathers),
    temps: readonly(temps),
    tempArea: readonly(tempArea),
    setDate,
    setWeathers,
    setTemps,
    setTempArea
  }
})
