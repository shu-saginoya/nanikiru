import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'

import type { RegionalList } from '@/types/regional'

const keyName = 'regionalNumbers'
const { get, set } = useLocalStorage(keyName)

export const useRegionalNumbersStore = defineStore('regionalNumbers', () => {
  const regionalList = ref<RegionalList>()

  const getRegionalList = (): RegionalList => regionalList.value

  const setRegionalList = (value: RegionalList) => {
    if (value?.length === 3) {
      regionalList.value = value
    } else {
      regionalList.value = undefined
    }
  }

  const saveRegional = () => {
    set(regionalList.value?.join(','))
  }

  const loadRegional = () => {
    return get()
  }

  return {
    regionalList,
    getRegionalList,
    setRegionalList,
    loadRegional,
    saveRegional
  }
})
