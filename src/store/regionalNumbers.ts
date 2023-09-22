import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'

const keyName = 'regionalNumbers'
const { get, set } = useLocalStorage(keyName)

export const useRegionalNumbersStore = defineStore('regionalNumbers', () => {
  // State
  type Regional = string | undefined
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
  const setRegionalLv1 = (value: string) => {
    regionalLv1.value = value
    regionalLv2.value = undefined
    regionalLv3.value = undefined
  }
  const setRegionalLv2 = (value: string) => {
    regionalLv2.value = value
    regionalLv3.value = undefined
  }
  const setRegionalLv3 = (value: string) => {
    regionalLv3.value = value
  }
  const initRegional = (): void => {
    const saved: string[] | undefined = get()?.split(',')
    if (saved) {
      regionalLv1.value = saved[0]
      regionalLv2.value = saved[1]
      regionalLv3.value = saved[2]
    }
  }
  const saveRegional = (): void => {
    if (isSetAll.value) {
      set(regionalList.value?.join(','))
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
    initRegional,
    saveRegional
  }
})
