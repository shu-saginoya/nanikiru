<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color?: string
}>()

const colorStyle = computed(() => {
  switch (props.color) {
    case 'rose':
      return 'bg-orange-300'
    case 'pink':
      return 'bg-amber-300'
    default:
      return 'bg-gray-300'
  }
})
</script>

<template>
  <span
    class="inline-block text-white px-1 align-text-bottom rounded-2xl text-sm tracking-tight"
    :class="colorStyle"
  >
    <slot />
  </span>
</template>
