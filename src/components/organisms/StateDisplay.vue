<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

const { centers, offices, class10s, error } = useJmaArea()
const { regionalLv1, regionalLv2, regionalLv3 } = storeToRefs(useRegionalNumbersStore())
const { setRegionalLv1, setRegionalLv2, setRegionalLv3, initRegional, saveRegional } =
  useRegionalNumbersStore()

initRegional()
const select1 = ref()
const select2 = ref()
const select3 = ref()
</script>

<template>
  <section>
    <p>千葉県流山市</p>
    <button type="button">地域を変更する</button>
    <p>9月22日金曜日</p>
  </section>
</template>
