<script setup lang="ts">
import ImgDefult from '@/components/atoms/ImgDefult.vue'
import SpanChip from '@/components/atoms/SpanChip.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

defineProps<{
  color?: string
  clothing?: string[]
  clothingImg?: string
  outerwear?: string[]
  outerwearImg?: string
}>()
</script>

<template>
  <div v-if="clothing && clothingImg && outerwear && outerwearImg" class="flex justify-center">
    <figure :class="color">
      <ImgDefult
        :src="`./images/${clothingImg}`"
        :width="150"
        :height="112"
        objectFit="contain"
        objectPosition="center"
      />
      <figcaption>
        <SpanChip color="slate-dark">服装の目安</SpanChip>
        <p v-for="(item, index) in clothing" :key="index">{{ item }}</p>
      </figcaption>
    </figure>
    <div class="self-center">
      <IconPlus :class="color" />
    </div>
    <figure :class="color">
      <ImgDefult
        :src="`./images/${outerwearImg}`"
        :width="150"
        :height="112"
        objectFit="contain"
        objectPosition="center"
      />
      <figcaption>
        <SpanChip color="slate">朝・夕</SpanChip>
        <p v-for="(item, index) in outerwear" :key="index">{{ item }}</p>
      </figcaption>
    </figure>
  </div>

  <p v-else>服装の取得に失敗しました。</p>
</template>
