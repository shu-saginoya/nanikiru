<script setup lang="ts">
import { watchEffect } from 'vue'
import { useTempClass } from '@/composables/temps/useTempClass'
import BlockClothingItem from '@/components/templates/BlockClothingItem.vue'
import AChip from '@/components/elements/AChip.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

const props = defineProps<{
  maxTemp: number
  minTemps: number[]
}>()

const { color, tops, bottoms, clothingImg, outerwear, outerwearImg, setTemp } = useTempClass()
watchEffect(() => {
  setTemp(props.maxTemp, props.minTemps)
})
</script>

<template>
  <div class="flex justify-center">
    <BlockClothingItem :img="`./images/${clothingImg}`" :color="color">
      <AChip class="bg-neutral-500">服装の目安</AChip>
      <p>{{ tops }}</p>
      <p>{{ bottoms }}</p>
    </BlockClothingItem>
    <div class="self-center">
      <IconPlus :class="color" />
    </div>
    <BlockClothingItem :img="`./images/${outerwearImg}`" :color="color">
      <AChip class="bg-neutral-300">朝・夕</AChip>
      <p>{{ outerwear }}</p>
    </BlockClothingItem>
  </div>
</template>
