<script setup lang="ts">
defineProps<{
  sentence: string
}>()
</script>

<template>
  <div>
    <p class="text-sm">{{ sentence }}</p>
  </div>
</template>
