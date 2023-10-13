<script setup lang="ts">
defineProps<{
  maxTemp: number
  minTemp?: number
}>()
</script>

<template>
  <div class="flex justify-center items-center font-bold">
    <div v-if="!minTemp" class="text-gray-300 tracking-tighter">
      <span>-</span>
    </div>
    <div v-else class="text-blue-300 tracking-tighter">
      <span class="text-6xl font-roboto">{{ minTemp }}</span>
      <span class="text-4xl">℃</span>
      <p class="text-sm">朝の最低気温</p>
    </div>
    <div class="px-2 text-gray-300">
      <span class="text-4xl">/</span>
    </div>
    <div class="text-red-300 tracking-tighter">
      <span class="text-6xl font-roboto">{{ maxTemp }}</span>
      <span class="text-4xl">℃</span>
      <p class="text-sm">日中の最高気温</p>
    </div>
  </div>
</template>
