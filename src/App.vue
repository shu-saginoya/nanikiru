<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRegionalsStore } from '@/store/regionals'
import LayoutWrapper from '@/components/organisms/LayoutWrapper.vue'
import HeaderCommon from '@/components/organisms/HeaderCommon.vue'
import MainCommon from '@/components/organisms/MainCommon.vue'

const { initRegional } = useRegionalsStore()
initRegional()
</script>

<template>
  <LayoutWrapper>
    <HeaderCommon>Nanikiru?</HeaderCommon>
    <MainCommon>
      <RouterView />
    </MainCommon>
  </LayoutWrapper>
</template>
