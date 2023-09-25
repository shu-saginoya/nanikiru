<script setup lang="ts">
import { ref, computed } from 'vue'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/dateFormat'

const { error, dateTime, weathers, temps } = useJmaForecast()

const dateNumbers = {
  today: 0,
  tomorrow: 1,
  dayAfterTomorrow: 2
}
const dateSelection = ref<number>(dateNumbers.today)

const date = computed(() => {
  if (dateTime.value) {
    return useDateFormat(dateTime.value[dateSelection.value]).formatJa
  } else {
    return undefined
  }
})
</script>

<template>
  <section>
    <p v-if="error">天気予報の取得に失敗しました。</p>
    <p v-if="date">{{ date }}</p>
    <pre>{{ temps }}</pre>
    <p>Tシャツ</p>
    <p v-if="weathers">{{ weathers[dateSelection] }}</p>
  </section>
</template>
