import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useForecastStore = defineStore('forecast', () => {
  type day1st = string
  type day2nd = string | undefined
  type Contents = [day1st, day2nd]
  type TempDay1st = [number, number]
  type TempDay2nd = [number, number] | undefined
  type Temps = [TempDay1st, TempDay2nd]
  type TempArea = {
    name: string
    code: string
  }

  const date = ref<Contents | undefined>()
  const weathers = ref<Contents | undefined>()
  const temps = ref<Temps | undefined>()
  const tempArea = ref<TempArea | undefined>()

  // Setter
  const setDate = (day1st: string, day2nd: string) => {
    date.value = [day1st, day2nd]
  }
  const setWeathers = (day1st: string, day2nd: string) => {
    weathers.value = [day1st, day2nd]
  }
  const setTemps = (day1st: TempDay1st, day2nd: TempDay2nd) => {
    temps.value = [day1st, day2nd]
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
