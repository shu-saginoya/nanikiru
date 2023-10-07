<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useTexts } from '@/composables/utils/useTexts'
import { useDay } from '@/composables/utils/useDay'
import ArticleStateArea from '@/components/molecules/ArticleStateArea.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import SectionForecast from '@/components/molecules/SectionForecast.vue'

const { regionalLv1, regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
const { forecasts, tempArea } = storeToRefs(useForecastStore())
const { regionFormat } = useTexts()

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}

const region = computed(() => {
  if (regionalLv1.value && regionalLv2.value && regionalLv3.value) {
    return regionFormat(regionalLv1.value.name, regionalLv2.value.name, regionalLv3.value.name)
  } else {
    return undefined
  }
})
</script>

<template>
  <ArticleStateArea :region="region" :areaName="tempArea ? tempArea.name : undefined">
  </ArticleStateArea>
  <ArticleCard v-for="forecast in forecasts" :key="forecast.date">
    <SectionForecast
      :date="useDay(forecast.date).formatJa"
      :minTemp="forecast.minTemp"
      :maxTemp="forecast.maxTemp"
      :averageTemp="forecast.averageTemp"
      :weather="forecast.weather"
    ></SectionForecast>
  </ArticleCard>
</template>
