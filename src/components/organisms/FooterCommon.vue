<script setup lang="ts">
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconInfomation from '@/components/icons/IconInfomation.vue'
</script>

<template>
  <footer class="p-1 bg-primary">
    <nav class="text-white">
      <ul class="flex justify-center gap-4">
        <li>
          <LinkRouter to="/" class="rounded-full"><IconHome /></LinkRouter>
        </li>
        <li>
          <LinkRouter to="about" class="rounded-full"><IconInfomation /></LinkRouter>
        </li>
      </ul>
    </nav>
  </footer>
</template>
