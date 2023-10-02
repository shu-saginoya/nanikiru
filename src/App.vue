<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRegionalsStore } from '@/store/regionals'
import HeaderCommon from '@/components/organisms/HeaderCommon.vue'
import MainCommon from '@/components/organisms/MainCommon.vue'
import FooterCommon from '@/components/organisms/FooterCommon.vue'

const { initRegional } = useRegionalsStore()
initRegional()
</script>

<template>
  <div class="container mx-auto text-center h-screen flex flex-col content-between">
    <HeaderCommon>Nanikiru?</HeaderCommon>
    <MainCommon class="overflow-y-scroll">
      <RouterView />
    </MainCommon>
    <div class="grow"></div>
    <FooterCommon></FooterCommon>
  </div>
</template>
