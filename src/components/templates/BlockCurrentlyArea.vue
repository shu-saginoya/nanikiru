<script setup lang="ts">
import ALink from '@/components/elements/ALink.vue'
import IconShunting from '@/components/icons/IconShunting.vue'

defineProps<{
  area: string
  areaName?: string
}>()
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <div class="text-center">
      <p class="text-lg">{{ area }}</p>
      <p v-if="areaName" class="text-sm">予想気温の基準地：{{ areaName }}</p>
    </div>
    <ALink to="select-area" icon>
      <IconShunting />
    </ALink>
  </div>
</template>
