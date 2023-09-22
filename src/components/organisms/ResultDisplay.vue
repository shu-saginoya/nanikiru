<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalNumbersStore())

const error = ref<Error | null>()
const dateTime = ref()
const weathers = ref()
const temps = ref()
const update = (): void => {
  if (regionalLv2.value && regionalLv3.value) {
    const forecast = useJmaForecast(regionalLv2.value, regionalLv3.value)
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

watch(regionalLv3, () => {
  update()
})
</script>

<template>
  <section>
    <p>気温32℃</p>
    <p>Tシャツ</p>
    <p>晴れのちくもり</p>
  </section>
</template>
