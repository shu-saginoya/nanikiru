<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRegionalsStore } from '@/store/regionals'
import HeaderCommon from '@/components/organisms/HeaderCommon.vue'
import MainCommon from './components/organisms/MainCommon.vue'

const { initRegional } = useRegionalsStore()
initRegional()
</script>

<template>
  <div class="container mx-auto text-center">
    <HeaderCommon>Nanikiru?</HeaderCommon>
    <MainCommon>
      <RouterView />
    </MainCommon>
  </div>
</template>
