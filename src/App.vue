<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderCommon from '@/components/organisms/HeaderCommon.vue'
import FooterCommon from '@/components/organisms/FooterCommon.vue'
import { useRegionalsStore } from '@/store/regionals'

const { initRegional } = useRegionalsStore()
initRegional()
</script>

<template>
  <HeaderCommon>NANIKIRU</HeaderCommon>
  <RouterView />
  <FooterCommon></FooterCommon>
</template>
