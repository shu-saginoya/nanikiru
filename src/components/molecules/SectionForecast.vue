<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useTempClass } from '@/composables/temps/useTempClass'
import { useTexts } from '@/composables/utils/useTexts'
import { useDay } from '@/composables/utils/useDay'
import DivTemps from '@/components/molecules/DivTemps.vue'
import DivClothing from '@/components/molecules/DivClothing.vue'
import SpanChip from '@/components/atoms/SpanChip.vue'

const props = defineProps<{
  date: string
  maxTemp: number
  minTemp?: number
  minTempNextDay?: number
  weather?: string
}>()

const { color, clothing, clothingImg, outerwear, outerwearImg, setTemp } = useTempClass()
const { fullSpacesToHalf } = useTexts()

const dateFormat = computed(() => useDay(props.date).formatJa)
const today = computed(() => useDay('now').formatJa)
const tomorrow = computed(() => useDay('tomorrow').formatJa)

watchEffect(() => {
  if (props.maxTemp) {
    let minTemps = []
    if (props.minTemp) {
      minTemps.push(props.minTemp)
    }
    if (props.minTempNextDay) {
      minTemps.push(props.minTempNextDay)
    }

    setTemp(props.maxTemp, minTemps)
  }
})
</script>

<template>
  <section v-if="date && maxTemp && weather" class="flex flex-col gap-1">
    <p>
      <SpanChip v-if="today === dateFormat" color="amber">きょう</SpanChip>
      <SpanChip v-if="tomorrow === dateFormat" color="pink">あした</SpanChip>
      {{ dateFormat }}
    </p>
    <hr />
    <DivTemps :minTemp="minTemp" :maxTemp="maxTemp"></DivTemps>
    <DivClothing
      :color="color"
      :clothing="clothing"
      :clothingImg="clothingImg"
      :outerwear="outerwear"
      :outerwearImg="outerwearImg"
    ></DivClothing>
    <div class="px-4">
      <p class="text-sm">{{ fullSpacesToHalf(weather) }}</p>
    </div>
  </section>
  <section v-else>
    <p>データを取得できませんでした</p>
  </section>
</template>
