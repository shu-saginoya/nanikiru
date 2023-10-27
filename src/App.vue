<script setup lang="ts">
import { RouterView } from 'vue-router'
import CommonWrapper from '@/components/templates/CommonWrapper.vue'
import CommonHeader from '@/components/templates/CommonHeader.vue'
import CommonMain from '@/components/templates/CommonMain.vue'
</script>

<template>
  <CommonWrapper>
    <CommonHeader />
    <CommonMain>
      <RouterView />
    </CommonMain>
  </CommonWrapper>
</template>
