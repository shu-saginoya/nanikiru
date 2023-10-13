<script setup lang="ts">
import { computed } from 'vue'
import TempsDisplay from '@/components/templates/TempsDisplay.vue'
import ClothingSuggestions from '@/components/templates/ClothingSuggestions.vue'
import WeatherDisplay from '@/components/templates/WeatherDisplay.vue'
import DateDisplay from '@/components/templates/DateDisplay.vue'

const props = defineProps<{
  date: string
  maxTemp: number
  minTemp?: number
  minTempNextDay?: number
  weather: string
}>()

const minTemps = computed(() => {
  let minTemps = []
  if (props.minTemp) {
    minTemps.push(props.minTemp)
  }
  if (props.minTempNextDay) {
    minTemps.push(props.minTempNextDay)
  }
  return minTemps
})
</script>

<template>
  <section class="text-center flex flex-col gap-1">
    <DateDisplay :date="date"> </DateDisplay>
    <hr />
    <TempsDisplay :maxTemp="maxTemp" :minTemp="minTemp"></TempsDisplay>
    <ClothingSuggestions :maxTemp="maxTemp" :minTemps="minTemps"></ClothingSuggestions>
    <WeatherDisplay :sentence="weather"> </WeatherDisplay>
  </section>
</template>
