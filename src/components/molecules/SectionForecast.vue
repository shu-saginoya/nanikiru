<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useTempClass } from '@/composables/utils/useTempClass'
import { useTexts } from '@/composables/utils/useTexts'
import { useDay } from '@/composables/utils/useDay'
import DivTemps from '@/components/molecules/DivTemps.vue'
import DivClothing from '@/components/molecules/DivClothing.vue'
import SpanChip from '@/components/atoms/SpanChip.vue'

const props = defineProps<{
  date: string
  minTemp?: number
  maxTemp?: number
  averageTemp?: number
  weather?: string
}>()

const { clothing, color, image, setTemp } = useTempClass()
const { fullSpacesToHalf } = useTexts()

const dateFormat = computed(() => useDay(props.date).formatJa)
const today = computed(() => useDay('now').formatJa)
const tomorrow = computed(() => useDay('tomorrow').formatJa)

watchEffect(() => {
  if (props.averageTemp) {
    setTemp(props.averageTemp)
  }
})
</script>

<template>
  <section v-if="date && maxTemp && weather" class="flex flex-col gap-1">
    <p>
      <SpanChip v-if="today === dateFormat" color="rose">きょう</SpanChip>
      <SpanChip v-if="tomorrow === dateFormat" color="pink">あした</SpanChip>
      {{ dateFormat }}
    </p>
    <hr />
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
