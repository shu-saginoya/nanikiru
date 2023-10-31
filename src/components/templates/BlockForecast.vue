<script setup lang="ts">
import { computed } from 'vue'
import BlockTemps from '@/components/templates/BlockTemps.vue'
import BlockClothing from '@/components/templates/BlockClothing.vue'
import BlockWeather from '@/components/templates/BlockWeather.vue'
import BlockDate from '@/components/templates/BlockDate.vue'

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
    <BlockDate :date="date"> </BlockDate>
    <hr />
    <BlockTemps :maxTemp="maxTemp" :minTemp="minTemp"></BlockTemps>
    <BlockClothing :maxTemp="maxTemp" :minTemps="minTemps"></BlockClothing>
    <BlockWeather :sentence="weather"> </BlockWeather>
  </section>
</template>
