<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

const { regionalList } = storeToRefs(useRegionalNumbersStore())

const data = ref()
const error = ref<Error | null>()
const dateTime = ref()
const weathers = ref()
const temps = ref()
const update = (): void => {
  if (regionalList.value) {
    const forecast = useJmaForecast(regionalList.value[1])
    data.value = forecast.data
    error.value = forecast.error.value
    dateTime.value = forecast.dateTime
    weathers.value = forecast.weathers
    temps.value = forecast.temps
  } else {
    data.value = undefined
    error.value = {
      name: '',
      message: '地域が指定されていません'
    }
  }
}
update()

watch(regionalList, () => {
  update()
})
</script>

<template>
  <ExceptionHandling :flag="Boolean(data)" :error="error">
    <pre>{{ dateTime }}</pre>
    <pre>{{ weathers }}</pre>
    <pre>{{ temps }}</pre>
    <template #else><p>情報がありません</p></template>
  </ExceptionHandling>
</template>
