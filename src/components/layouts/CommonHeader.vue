<script setup lang="ts">
import ALink from '@/components/elements/ALink.vue'
import IconInfomation from '@/components/icons/IconInfomation.vue'
</script>

<template>
  <header class="text-center p-1 bg-primary static">
    <h1 class="text-white font-gabarito text-xl tracking-wide">Nanikiru?</h1>
    <nav class="absolute inset-y-0 right-1">
      <ALink to="about" icon><IconInfomation /></ALink>
    </nav>
  </header>
</template>
