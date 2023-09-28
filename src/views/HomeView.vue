<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/useDateFormat'

const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
const { date, weathers, temps, tempArea } = storeToRefs(useForecastStore())

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}
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
      <p>Tシャツ</p>
      <p v-if="weathers">{{ weathers[0] }}</p>
    </section>
  </main>
</template>
