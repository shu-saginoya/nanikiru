<script setup lang="ts">
import { RouterView } from 'vue-router'
import CommonWrapper from '@/components/layouts/CommonWrapper.vue'
import CommonHeader from '@/components/layouts/CommonHeader.vue'
import CommonMain from '@/components/layouts/CommonMain.vue'
</script>

<template>
  <CommonWrapper>
    <CommonHeader />
    <CommonMain>
      <RouterView />
    </CommonMain>
  </CommonWrapper>
</template>
