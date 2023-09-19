<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

const { regionalList } = storeToRefs(useRegionalNumbersStore())

const data = ref()
const error = ref<Error | null>()

watch(regionalList, () => {
  if (regionalList.value) {
    const forecast = useJmaForecast(regionalList.value[1])
    data.value = forecast.data
    error.value = forecast.error.value
  } else {
    data.value = undefined
    error.value = {
      name: '',
      message: '地域が指定されていません'
    }
  }
})
</script>

<template>
  <ExceptionHandling :flag="Boolean(data)" :error="error">
    <pre>{{ data }}</pre>
    <template #else><p>情報がありません</p></template>
  </ExceptionHandling>
</template>
