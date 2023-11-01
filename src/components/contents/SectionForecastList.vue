<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useForecastStore } from '@/store/forecast'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import ACard from '@/components/elements/ACard.vue'
import BlockForecast from '@/components/templates/BlockForecast.vue'
import AcquisitionError from '@/assets/docs/acquisitionError.md'

const { forecasts } = storeToRefs(useForecastStore())

const { error } = useJmaForecast()
if (error.value) {
  console.error(error.value.message)
}
</script>

<template>
  <section class="flex flex-col gap-4">
    <ACard v-if="error">
      <AcquisitionError />
    </ACard>
    <template v-else>
      <ACard v-for="forecast in forecasts" :key="forecast.date">
        <BlockForecast
          :date="forecast.date"
          :minTemp="forecast.minTemp"
          :maxTemp="forecast.maxTemp"
          :minTempNextDay="forecast.minTempNextDay"
          :weather="forecast.weather"
        ></BlockForecast>
      </ACard>
    </template>
  </section>
</template>
