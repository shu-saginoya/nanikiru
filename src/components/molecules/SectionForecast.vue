<script setup lang="ts">
import { watchEffect } from 'vue'
import { useTempClass } from '@/composables/utils/useTempClass'
import { useTextFormat } from '@/composables/utils/useTextFormat'
import DivTemps from '@/components/molecules/DivTemps.vue'
import DivClothing from './DivClothing.vue'

const props = defineProps<{
  date?: string
  areaName?: string
  minTemp?: number
  maxTemp?: number
  weather?: string
}>()

const { clothing, color, image, setTemp } = useTempClass()
const { fullSpacesToHalf } = useTextFormat()

watchEffect(() => {
  setTemp(Number(props.maxTemp))
})
</script>

<template>
  <section v-if="date && areaName && minTemp && maxTemp && weather" class="flex flex-col gap-1">
    <p>{{ date }}</p>
    <hr />
    <p>{{ areaName }}</p>
    <DivTemps :minTemp="minTemp" :maxTemp="maxTemp"></DivTemps>
    <DivClothing :clothing="clothing" :image="image" :color="color"></DivClothing>
    <div class="px-4">
      <p class="text-sm">{{ fullSpacesToHalf(weather) }}</p>
    </div>
  </section>
  <section v-else>
    <p>データを取得できませんでした</p>
  </section>
</template>
