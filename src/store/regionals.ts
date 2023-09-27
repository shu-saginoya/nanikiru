import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'

const keyName = 'regionals'
const { get, set } = useLocalStorage(keyName)

export const useRegionalsStore = defineStore('regionals', () => {
  // State
  type Regional =
    | {
        key: string
        name: string
      }
    | undefined
  const regionalLv1 = ref<Regional>()
  const regionalLv2 = ref<Regional>()
  const regionalLv3 = ref<Regional>()

  // Getters
  const isSetAll = computed<boolean>(() => {
    return Boolean(regionalLv1.value && regionalLv2.value && regionalLv3.value)
  })
  const regionalList = computed(() => {
    if (isSetAll.value) {
      return [regionalLv1.value, regionalLv2.value, regionalLv3.value]
    } else {
      return undefined
    }
  })

  // Actions
  const setRegionalLv1 = (key: string, name: string) => {
    regionalLv1.value = { key, name }
    regionalLv2.value = undefined
    regionalLv3.value = undefined
  }
  const setRegionalLv2 = (key: string, name: string) => {
    regionalLv2.value = { key, name }
    regionalLv3.value = undefined
  }
  const setRegionalLv3 = (key: string, name: string) => {
    regionalLv3.value = { key, name }
    saveRegional()
  }
  const initRegional = (): void => {
    const savedData = get()
    if (savedData) {
      const jsonParse = JSON.parse(savedData)
      regionalLv1.value = jsonParse[0]
      regionalLv2.value = jsonParse[1]
      regionalLv3.value = jsonParse[2]
    }
  }
  const saveRegional = (): void => {
    if (isSetAll.value) {
      const jsonData = JSON.stringify(regionalList.value)
      set(jsonData)
    } else {
      console.error('地域を全て入力してください')
    }
  }

  return {
    regionalLv1: readonly(regionalLv1),
    regionalLv2: readonly(regionalLv2),
    regionalLv3: readonly(regionalLv3),
    isSetAll,
    setRegionalLv1,
    setRegionalLv2,
    setRegionalLv3,
    initRegional
  }
})
