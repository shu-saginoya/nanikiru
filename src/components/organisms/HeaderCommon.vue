<script setup lang="ts">
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconInfomation from '@/components/icons/IconInfomation.vue'
</script>

<template>
  <header class="text-center p-1 bg-primary static">
    <h1 class="text-white font-gabarito text-xl tracking-wide"><slot /></h1>
    <nav class="absolute inset-y-0 right-1">
      <LinkRouter to="about" class="rounded-full"><IconInfomation /></LinkRouter>
    </nav>
  </header>
</template>
