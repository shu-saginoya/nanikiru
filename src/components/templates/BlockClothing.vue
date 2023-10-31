<script setup lang="ts">
import { watchEffect } from 'vue'
import { useTempClass } from '@/composables/temps/useTempClass'
import AImg from '@/components/elements/AImg.vue'
import AChip from '@/components/elements/AChip.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

const props = defineProps<{
  maxTemp: number
  minTemps: number[]
}>()

const { color, clothing, clothingImg, outerwear, outerwearImg, setTemp } = useTempClass()
watchEffect(() => {
  setTemp(props.maxTemp, props.minTemps)
})
</script>

<template>
  <div class="flex justify-center">
    <figure :class="color">
      <AImg
        :src="`./images/${clothingImg}`"
        :width="150"
        :height="112"
        objectFit="contain"
        objectPosition="center"
      />
      <figcaption>
        <AChip class="bg-neutral-500">服装の目安</AChip>
        <p v-for="(item, index) in clothing" :key="index">{{ item }}</p>
      </figcaption>
    </figure>
    <div class="self-center">
      <IconPlus :class="color" />
    </div>
    <figure :class="color">
      <AImg
        :src="`./images/${outerwearImg}`"
        :width="150"
        :height="112"
        objectFit="contain"
        objectPosition="center"
      />
      <figcaption>
        <AChip class="bg-neutral-300">朝・夕</AChip>
        <p v-for="(item, index) in outerwear" :key="index">{{ item }}</p>
      </figcaption>
    </figure>
  </div>
</template>
