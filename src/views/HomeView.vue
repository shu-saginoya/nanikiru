<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/useDateFormat'
import ArticleStateArea from '@/components/molecules/ArticleStateArea.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import SectionForecast from '@/components/molecules/SectionForecast.vue'

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
const today = 0
const tomorrow = 1
</script>

<template>
  <ArticleStateArea :region="region"> </ArticleStateArea>
  <ArticleCard>
    <SectionForecast
      :date="date ? useDateFormat(date[today]).formatJa : undefined"
      :areaName="tempArea ? tempArea.name : undefined"
      :minTemp="temps ? temps[today][0] : undefined"
      :maxTemp="temps ? temps[today][1] : undefined"
      :weather="weathers ? weathers[today] : undefined"
    ></SectionForecast>
  </ArticleCard>
  <ArticleCard>
    <SectionForecast
      :date="date ? useDateFormat(date[tomorrow]).formatJa : undefined"
      :areaName="tempArea ? tempArea.name : undefined"
      :minTemp="temps ? temps[tomorrow][0] : undefined"
      :maxTemp="temps ? temps[tomorrow][1] : undefined"
      :weather="weathers ? weathers[tomorrow] : undefined"
    ></SectionForecast>
  </ArticleCard>
</template>
