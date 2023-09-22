<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

const { offices, error } = useJmaArea()
const { regionalLv2 } = storeToRefs(useRegionalNumbersStore())
</script>

<template>
  <section>
    <p>千葉県流山市</p>
    <router-link to="select-regional">地域を変更する</router-link>
    <p>9月22日金曜日</p>
  </section>
</template>
