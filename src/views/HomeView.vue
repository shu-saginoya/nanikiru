<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/useDateFormat'
import ArticleStateArea from '@/components/molecules/ArticleStateArea.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import WeatherForecast from '@/components/molecules/WeatherForecast.vue'

const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
const { date, weathers, temps, tempArea } = storeToRefs(useForecastStore())

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}

const region = computed<string | undefined>(() => {
  if (regionalLv2.value && regionalLv3.value) {
    return `${regionalLv2.value.name} ${regionalLv3.value.name}`
  } else {
    return undefined
  }
})
</script>

<template>
  <ArticleStateArea :region="region"> </ArticleStateArea>
  <ArticleCard>
    <WeatherForecast
      :date="date ? useDateFormat(date[0]).formatJa : undefined"
      :areaName="tempArea ? tempArea.name : undefined"
      :temps="temps ? temps[0] : undefined"
      :weathers="weathers ? weathers[0] : undefined"
    ></WeatherForecast>
  </ArticleCard>
</template>
