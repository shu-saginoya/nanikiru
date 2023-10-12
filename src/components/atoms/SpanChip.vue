<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color?: string
}>()

const colorStyle = computed(() => {
  switch (props.color) {
    case 'pink':
      return 'bg-pink-300'
    case 'amber':
      return 'bg-amber-300'
    case 'orange':
      return 'bg-orange-300'
    case 'purple':
      return 'bg-purple-300'
    case 'slate':
      return 'bg-slate-300'
    case 'slate-dark':
      return 'bg-slate-500'
    default:
      return 'bg-gray-300'
  }
})
</script>

<template>
  <span
    class="inline-block text-white px-1.5 align-text-bottom rounded-2xl text-sm tracking-tight"
    :class="colorStyle"
  >
    <slot />
  </span>
</template>
