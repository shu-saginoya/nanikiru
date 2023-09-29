<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  date?: string
  areaName?: string
  temps?: string
  clothing?: string
  weathers?: string
}>()

const weathersFormat = computed(() => {
  if (props.weathers) {
    return props.weathers.replace(/\s+/g, ' ')
  } else {
    return undefined
  }
})
</script>

<template>
  <section v-if="date && areaName && temps && clothing && weathers" class="flex flex-col gap-1">
    <p>{{ date }}</p>
    <hr />
    <p>{{ areaName }}</p>
    <p>
      <span class="text-6xl font-bold font-roboto tracking-tighter">{{ temps }}</span>
      <span class="text-4xl">℃</span>
    </p>
    <p>服装の目安：{{ clothing }}</p>
    <div class="px-4">
      <p class="text-sm text-left">{{ weathersFormat }}</p>
    </div>
  </section>
  <section v-else>
    <p>データを取得できませんでした</p>
  </section>
</template>
