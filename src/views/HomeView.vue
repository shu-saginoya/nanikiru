<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useTexts } from '@/composables/utils/useTexts'
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
const areaName = computed(() => {
  if (tempArea.value && !error.value) {
    return tempArea.value.name
  } else {
    return undefined
  }
})
</script>

<template>
  <ArticleStateArea :region="region" :areaName="areaName"> </ArticleStateArea>
  <ArticleCard v-if="error">
    <h2 class="font-bold text-lg">エラーが発生しました</h2>
    <p class="text-left">
      なんらかの通信障害か、あるいはそもそもこの地域の予報を気象庁が発信していない可能性があります。
    </p>
    <p class="text-left">
      時間をおいてから再度アクセスをお試しいただくか、あるいは他の地域でなるべく近いものを選択してみてください。
    </p>
  </ArticleCard>
  <template v-else>
    <ArticleCard v-for="forecast in forecasts" :key="forecast.date">
      <SectionForecast
        :date="forecast.date"
        :minTemp="forecast.minTemp"
        :maxTemp="forecast.maxTemp"
        :averageTemp="forecast.averageTemp"
        :weather="forecast.weather"
      ></SectionForecast>
    </ArticleCard>
  </template>
</template>
