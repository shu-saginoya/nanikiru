<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

const { regionalList } = storeToRefs(useRegionalNumbersStore())

const error = ref<Error | null>()
const dateTime = ref()
const weathers = ref()
const temps = ref()
const update = (): void => {
  if (regionalList.value) {
    const forecast = useJmaForecast(regionalList.value[1], regionalList.value[2])
    error.value = forecast.error.value
    dateTime.value = forecast.dateTime
    weathers.value = forecast.weathers
    temps.value = forecast.temps
  } else {
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
  <ExceptionHandling :flag="Boolean(!error)" :error="error">
    <pre>{{ dateTime }}</pre>
    <pre>{{ weathers }}</pre>
    <pre>{{ temps }}</pre>
    <template #else><p>情報がありません</p></template>
  </ExceptionHandling>
</template>
