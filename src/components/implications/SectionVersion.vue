<script setup lang="ts">
import AHeadingLv3 from '@/components/elements/AHeadingLv3.vue'
import { version } from '../../../package.json'
</script>

<template>
  <section>
    <AHeadingLv3>バージョン情報</AHeadingLv3>
    <p>
      {{ version }}
    </p>
  </section>
</template>
