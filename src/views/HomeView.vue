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
const day1st = 0
const day2nd = 1
</script>

<template>
  <ArticleStateArea :region="region" :areaName="tempArea ? tempArea.name : undefined">
  </ArticleStateArea>
  <ArticleCard>
    <SectionForecast
      :date="date ? useDateFormat(date[day1st]).formatJa : undefined"
      :minTemp="temps ? temps[day1st][0] : undefined"
      :maxTemp="temps ? temps[day1st][1] : undefined"
      :weather="weathers ? weathers[day1st] : undefined"
    ></SectionForecast>
  </ArticleCard>
  <ArticleCard v-if="temps && temps[day2nd]">
    <SectionForecast
      :date="date ? useDateFormat(date[day2nd]).formatJa : undefined"
      :minTemp="temps ? temps[day2nd][0] : undefined"
      :maxTemp="temps ? temps[day2nd][1] : undefined"
      :weather="weathers ? weathers[day2nd] : undefined"
    ></SectionForecast>
  </ArticleCard>
</template>
