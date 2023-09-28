<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/useDateFormat'
import { useClothing } from '@/composables/utils/useClothing'

const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
const { date, weathers, temps, tempArea } = storeToRefs(useForecastStore())

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}
const { getClothing } = useClothing()
const clothing = computed(() => {
  if (temps.value) {
    return getClothing(Number(temps.value[0]))
  } else {
    return undefined
  }
})
</script>

<template>
  <main>
    <section>
      <p v-if="regionalLv2 && regionalLv3">{{ regionalLv2.name }} {{ regionalLv3.name }}</p>
      <p v-else>地域が選択されていません</p>
      <router-link to="select-regional">地域を変更する</router-link>
    </section>
    <section>
      <p v-if="date">{{ useDateFormat(date[0]).formatJa }}</p>
      <p>{{ tempArea?.name }}</p>
      <p v-if="temps">{{ temps[0] }}</p>
      <p v-if="clothing">{{ clothing }}</p>
      <p v-if="weathers">{{ weathers[0] }}</p>
    </section>
  </main>
</template>
