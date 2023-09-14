import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'
import type { RegionalList } from '@/types/regional'

const keyName = 'regionalNumbers'
const { get, set } = useLocalStorage(keyName)

export const useRegionalStore = defineStore('regional', () => {
  const regionalList = ref<RegionalList>()

  const getRegionalList = (): RegionalList => {
    return regionalList.value
  }

  const setRegionalList = (value: RegionalList) => {
    regionalList.value = value
  }

  const saveRegional = () => {
    set(regionalList.value?.join(','))
  }

  const loadRegional = () => {
    return get()
  }

  return {
    getRegionalList,
    setRegionalList,
    loadRegional,
    saveRegional
  }
})
