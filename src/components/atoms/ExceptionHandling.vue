<script setup lang="ts">
defineProps<{
  flag: boolean
  error: Error | null
}>()
</script>

<template>
  <div v-if="error">読み込みエラー: {{ error.message }}</div>
  <div v-else-if="flag">
    <slot />
  </div>
  <div v-else>Loading...</div>
</template>
