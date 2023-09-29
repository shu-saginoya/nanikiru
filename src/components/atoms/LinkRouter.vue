<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <router-link
    :to="to"
    class="text-white hover:text-primary focus:text-primary bg-primary hover:bg-white focus:bg-white p-1 inline-block"
  >
    <slot />
  </router-link>
</template>
