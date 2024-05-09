<script setup lang="ts">
import AImg from '@/components/elements/AImg.vue'

defineProps<{
  img: string
  color: string
}>()
</script>

<template>
  <figure :class="color">
    <AImg :src="img" :width="150" :height="112" objectFit="contain" objectPosition="center" />
    <figcaption>
      <slot />
    </figcaption>
  </figure>
</template>
