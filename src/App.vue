<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAreasStore } from '@/store/areas'
import LayoutWrapper from '@/components/organisms/LayoutWrapper.vue'
import HeaderCommon from '@/components/organisms/HeaderCommon.vue'
import MainCommon from '@/components/organisms/MainCommon.vue'

const { initArea } = useAreasStore()
initArea()
</script>

<template>
  <LayoutWrapper>
    <HeaderCommon>Nanikiru?</HeaderCommon>
    <MainCommon>
      <RouterView />
    </MainCommon>
  </LayoutWrapper>
</template>
