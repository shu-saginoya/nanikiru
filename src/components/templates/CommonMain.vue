<script setup lang="ts">
import AContainer from '@/components/elements/AContainer.vue'
</script>

<template>
  <main class="grow shrink overflow-y-scroll p-4">
    <AContainer class="max-w-lg mx-auto">
      <slot />
    </AContainer>
  </main>
</template>
