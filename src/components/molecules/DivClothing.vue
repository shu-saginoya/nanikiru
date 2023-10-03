<script setup lang="ts">
defineProps<{
  clothing?: string[]
  image?: string
  color?: string
}>()
</script>

<template>
  <div v-if="clothing && image" class="flex justify-center items-center">
    <div :class="color">
      <p class="font-bold">服装の目安：</p>
      <p v-for="(item, index) in clothing" :key="index">{{ item }}</p>
    </div>
    <figure>
      <img :src="`./images/${image}`" :alt="clothing.join('・')" class="max-w-xs max-h-32" />
    </figure>
  </div>

  <p v-else>服装の取得に失敗しました。</p>
</template>
