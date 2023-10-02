<script setup lang="ts">
type Item = {
  key: string
  name: string
}
const props = defineProps<{
  items: Item[]
  clickAction: (key: string, name: string) => void
  prevAction?: () => void
}>()
</script>

<template>
  <section class="text-left">
    <ul class="divide-y divide-gray-200">
      <li v-for="value in items" :key="value.key">
        <button
          type="button"
          class="w-full text-left p-1 hover:bg-gray-100 focus:bg-gray-100"
          @click="clickAction(value.key, value.name)"
        >
          {{ value.name }}
        </button>
      </li>
      <li v-if="prevAction">
        <button type="button" @click="prevAction()">もどる</button>
      </li>
    </ul>
  </section>
</template>
