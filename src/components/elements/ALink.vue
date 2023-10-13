<script setup lang="ts">
const props = defineProps<{
  to: string
  icon?: boolean
}>()

const rounded = props.icon ? 'rounded-full' : 'rounded-sm'
</script>

<template>
  <router-link
    :to="to"
    class="inline-block p-1 text-white hover:text-primary focus:text-primary bg-primary hover:bg-white focus:bg-white"
    :class="rounded"
  >
    <slot />
  </router-link>
</template>
