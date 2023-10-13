<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAreasStore } from '@/store/areas'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useTexts } from '@/composables/utils/useTexts'
import CurrentlyArea from '@/components/templates/CurrentlyArea.vue'
import ACard from '@/components/elements/ACard.vue'
import AHeadingLv2 from '@/components/elements/AHeadingLv2.vue'
import SectionForecast from '@/components/templates/SectionForecast.vue'

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
    return '地域が選択されていません'
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
  <CurrentlyArea :area="area" :areaName="areaName"> </CurrentlyArea>
  <ACard v-if="error">
    <AHeadingLv2>エラーが発生しました</AHeadingLv2>
    <p>
      なんらかの通信障害か、あるいはそもそもこの地域の予報を気象庁が発信していない可能性があります。
    </p>
    <p>
      時間をおいてから再度アクセスをお試しいただくか、あるいは他の地域でなるべく近いものを選択してみてください。
    </p>
  </ACard>
  <template v-else>
    <ACard v-for="forecast in forecasts" :key="forecast.date">
      <SectionForecast
        :date="forecast.date"
        :minTemp="forecast.minTemp"
        :maxTemp="forecast.maxTemp"
        :minTempNextDay="forecast.minTempNextDay"
        :weather="forecast.weather"
      ></SectionForecast>
    </ACard>
  </template>
</template>
