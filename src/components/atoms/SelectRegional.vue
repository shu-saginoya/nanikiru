<script setup lang="ts">
type Item = {
  name: string
  parent?: string
}
defineProps<{
  items: Item[]
}>()
</script>

<template>
  <select>
    <template v-for="(value, key) in items" :key="key">
      <option :value="key">
        {{ value.name }}
      </option>
    </template>
  </select>
</template>
