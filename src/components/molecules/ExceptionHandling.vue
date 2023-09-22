s
<script setup lang="ts">
defineProps<{
  flag: boolean
  error: Error | null | undefined
}>()
</script>

<template>
  <div v-if="error">
    <slot name="error">
      <p>読み込みエラー: {{ error.message }}</p>
    </slot>
  </div>
  <div v-else-if="flag">
    <slot />
  </div>
  <div v-else>
    <slot name="else">
      <p>Loading...</p>
    </slot>
  </div>
</template>
