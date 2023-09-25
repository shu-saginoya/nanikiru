<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'

const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())
</script>

<template>
  <section>
    <p v-if="regionalLv2 && regionalLv3">{{ regionalLv2.name }} {{ regionalLv3.name }}</p>
    <p v-else>地域が選択されていません</p>
    <router-link to="select-regional">地域を変更する</router-link>
  </section>
</template>
