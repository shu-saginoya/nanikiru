<script setup lang="ts">
import AHeadingLv2 from '@/components/elements/AHeadingLv2.vue'
import { version } from '../../../package.json'
</script>

<template>
  <section>
    <AHeadingLv2>バージョン情報</AHeadingLv2>
    <p>
      {{ version }}
    </p>
  </section>
</template>
