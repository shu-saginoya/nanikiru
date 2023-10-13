import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'

const keyName = 'areas'
const { get, set } = useLocalStorage(keyName)

export const useAreasStore = defineStore('areas', () => {
  // State
  type Area = {
    key: string
    name: string
  }
  const areaLv1 = ref<Area | undefined>()
  const areaLv2 = ref<Area | undefined>()
  const areaLv3 = ref<Area | undefined>()

  // Getters
  const isSetAll = computed<boolean>(() => {
    return Boolean(areaLv1.value && areaLv2.value && areaLv3.value)
  })
  const areaList = computed(() => {
    if (isSetAll.value) {
      return [areaLv1.value, areaLv2.value, areaLv3.value]
    } else {
      return undefined
    }
  })

  // Actions
  const setAreaLv1 = (key: string, name: string) => {
    areaLv1.value = { key, name }
    areaLv2.value = undefined
    areaLv3.value = undefined
  }
  const setAreaLv2 = (key: string, name: string) => {
    areaLv2.value = { key, name }
    areaLv3.value = undefined
  }
  const setAreaLv3 = (key: string, name: string) => {
    areaLv3.value = { key, name }
    saveArea()
  }
  const initArea = (): void => {
    const savedData = get()
    if (savedData) {
      const jsonParse = JSON.parse(savedData)
      areaLv1.value = jsonParse[0]
      areaLv2.value = jsonParse[1]
      areaLv3.value = jsonParse[2]
    }
  }
  const saveArea = (): void => {
    if (isSetAll.value) {
      const jsonData = JSON.stringify(areaList.value)
      set(jsonData)
    } else {
      console.error('地域を全て入力してください')
    }
  }

  return {
    areaLv1: readonly(areaLv1),
    areaLv2: readonly(areaLv2),
    areaLv3: readonly(areaLv3),
    isSetAll,
    setAreaLv1,
    setAreaLv2,
    setAreaLv3,
    initArea
  }
})
