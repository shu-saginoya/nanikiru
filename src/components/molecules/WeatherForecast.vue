<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  date?: string
  areaName?: string
  temps?: string
  clothing?: string[]
  clothingId?: number
  weathers?: string
}>()

const weathersFormat = computed(() => {
  if (props.weathers) {
    return props.weathers.replace(/\s+/g, ' ')
  } else {
    return undefined
  }
})

const tempColor = computed(() => {
  switch (props.clothingId) {
    case 0:
      return 'text-indigo-500'
    case 1:
      return 'text-blue-500'
    case 2:
      return 'text-sky-500'
    case 3:
      return 'text-teal-500'
    case 4:
      return 'text-green-500'
    case 5:
      return 'text-lime-500'
    case 6:
      return 'text-orange-500'
    default:
      return 'text-red-500'
  }
})
</script>

<template>
  <section v-if="date && areaName && temps && clothing && weathers" class="flex flex-col gap-1">
    <p>{{ date }}</p>
    <hr />
    <p>{{ areaName }}</p>
    <p :class="tempColor">
      <span class="text-6xl font-bold font-roboto tracking-tighter">{{ temps }}</span>
      <span class="text-4xl">℃</span>
    </p>
    <p>服装の目安：{{ clothing.join('・') }}</p>
    <div class="px-4">
      <p class="text-sm text-left">{{ weathersFormat }}</p>
    </div>
  </section>
  <section v-else>
    <p>データを取得できませんでした</p>
  </section>
</template>
