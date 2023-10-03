<script setup lang="ts">
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconShunting from '@/components/icons/IconShunting.vue'

defineProps<{
  region?: string
  areaName?: string
}>()
</script>

<template>
  <article class="flex items-center justify-center gap-2 py-4 max-w-xl w-full m-auto">
    <div class="text-lg">
      <p v-if="region">{{ region }}</p>
      <p v-else>地域が選択されていません</p>
      <p v-if="areaName" class="text-sm">予想気温の基準地：{{ areaName }}</p>
    </div>
    <LinkRouter to="select-regional" class="rounded-full">
      <IconShunting />
    </LinkRouter>
  </article>
</template>
