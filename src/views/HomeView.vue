<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAreasStore } from '@/store/areas'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useTexts } from '@/composables/utils/useTexts'
import ArticleStateArea from '@/components/molecules/ArticleStateArea.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import SectionForecast from '@/components/molecules/SectionForecast.vue'

const { areaLv1, areaLv2, areaLv3 } = storeToRefs(useAreasStore())
const { forecasts, tempArea } = storeToRefs(useForecastStore())
const { areaFormat } = useTexts()

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}

const area = computed(() => {
  if (areaLv1.value && areaLv2.value && areaLv3.value) {
    return areaFormat(areaLv1.value.name, areaLv2.value.name, areaLv3.value.name)
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
  <ArticleStateArea :area="area" :areaName="areaName"> </ArticleStateArea>
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
        :minTempNextDay="forecast.minTempNextDay"
        :weather="forecast.weather"
      ></SectionForecast>
    </ArticleCard>
  </template>
</template>
