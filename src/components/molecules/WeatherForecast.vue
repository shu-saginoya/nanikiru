<script setup lang="ts">
import { watchEffect } from 'vue'
import { useTempClass } from '@/composables/utils/useTempClass'
import { useTextFormat } from '@/composables/utils/useTextFormat'

const props = defineProps<{
  date?: string
  areaName?: string
  temps?: string
  weathers?: string
}>()

const { clothing, color, setTemp } = useTempClass()
const { fullSpacesToHalf } = useTextFormat()

watchEffect(() => {
  setTemp(Number(props.temps))
})
</script>

<template>
  <section v-if="date && areaName && temps && weathers" class="flex flex-col gap-1">
    <p>{{ date }}</p>
    <hr />
    <p>{{ areaName }}</p>
    <p class="font-bold tracking-tighter" :class="color">
      <span class="text-6xl font-roboto">{{ temps }}</span>
      <span class="text-4xl">℃</span>
    </p>
    <p v-if="clothing">服装の目安：{{ clothing.join('・') }}</p>
    <div class="px-4">
      <p class="text-sm">{{ fullSpacesToHalf(weathers) }}</p>
    </div>
  </section>
  <section v-else>
    <p>データを取得できませんでした</p>
  </section>
</template>
