<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderCommon from '@/components/templates/HeaderCommon.vue'
import MainCommon from '@/components/templates/MainCommon.vue'
</script>

<template>
  <div class="bg-gray-100 h-screen w-screen">
    <div class="h-full flex flex-col">
      <HeaderCommon>Nanikiru?</HeaderCommon>
      <MainCommon>
        <RouterView />
      </MainCommon>
    </div>
  </div>
</template>
