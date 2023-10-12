<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  src: string
  width: number
  height: number
  alt?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none'
  objectPosition?: 'center' | 'bottom'
}>()

const objectFitClass = computed(() => {
  switch (props.objectFit) {
    case 'contain':
      return 'object-contain'
    case 'cover':
      return 'object-cover'
    case 'fill':
      return 'object-fill'
    case 'scale-down':
      return 'object-scale-down'
    default:
      return 'object-none'
  }
})
const objectPositionClass = computed(() => {
  switch (props.objectPosition) {
    case 'center':
      return 'object-center'
    case 'bottom':
      return 'object-bottom'
    default:
      return 'object-top'
  }
})

const widthStyle = computed(() => props.width + 'px')
const heightStyle = computed(() => props.height + 'px')
</script>

<template>
  <img
    :src="src"
    loading="lazy"
    decoding="auto"
    :alt="alt"
    :width="width"
    :height="height"
    class="size"
    :class="[objectFitClass, objectPositionClass]"
  />
</template>

<style scoped>
.size {
  width: v-bind(widthStyle);
  height: v-bind(heightStyle);
}
</style>
