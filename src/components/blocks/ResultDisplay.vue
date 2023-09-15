<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

const { regionalList } = storeToRefs(useRegionalNumbersStore())

const data = ref()
const error = ref()
const update = (): void => {
  if (regionalList.value) {
    const jmaForecast = useJmaForecast(regionalList.value[1])
    data.value = jmaForecast.data
    error.value = jmaForecast.error.value
  }
}

update()

watch(regionalList, () => {
  update()
})
</script>

<template>
  <ExceptionHandling :flag="Boolean(data.value)" :error="error">
    <pre>{{ data }}</pre>
    <template #else><p>情報がありません</p></template>
  </ExceptionHandling>
</template>
