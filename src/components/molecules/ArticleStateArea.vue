<script setup lang="ts">
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconShunting from '@/components/icons/IconShunting.vue'

defineProps<{
  region?: string
}>()
</script>

<template>
  <article class="flex gap-2 justify-center py-4">
    <div class="text-lg">
      <p v-if="region">{{ region }}</p>
      <p v-else>地域が選択されていません</p>
    </div>
    <LinkRouter to="select-regional" class="rounded-full">
      <IconShunting />
    </LinkRouter>
  </article>
</template>
