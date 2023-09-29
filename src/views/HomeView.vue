<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/useDateFormat'
import { useClothing } from '@/composables/utils/useClothing'
import ArticleStateArea from '@/components/molecules/ArticleStateArea.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import WeatherForecast from '@/components/molecules/WeatherForecast.vue'

const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
const { date, weathers, temps, tempArea } = storeToRefs(useForecastStore())

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}
const { getClothing } = useClothing()
const clothing = ref<string[]>()
const clothingId = ref<number>()
watch(temps, () => {
  if (temps.value) {
    const result = getClothing(Number(temps.value[0]))
    clothing.value = result.clothing
    clothingId.value = result.id
  } else {
    return undefined
  }
})

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
      :clothing="clothing"
      :clothingId="clothingId"
      :weathers="weathers ? weathers[0] : undefined"
    ></WeatherForecast>
  </ArticleCard>
</template>
