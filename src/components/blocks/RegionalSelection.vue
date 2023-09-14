<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalStore } from '@/store/regional'

import ExceptionHandling from '@/components/atoms/ExceptionHandling.vue'

import type { Regional } from '@/types/regional'

const { setRegionalList, saveRegional, loadRegional } = useRegionalStore()
const { centers, offices, class10s, error } = useJmaArea()

// 地域の定義（番号）
const regionalLv1 = ref<Regional>()
const regionalLv2 = ref<Regional>()
const regionalLv3 = ref<Regional>()

// マウント時にローカルストレージから地域を取得しセットする
onMounted(() => {
  const saved = loadRegional()?.split(',')
  if (saved) {
    regionalLv1.value = saved[0]
    regionalLv2.value = saved[1]
    regionalLv3.value = saved[2]
  }
})

// 地域が変更されると地域リストを更新・ストアに反映
const regionalList = ref<string[]>()
watchEffect(() => {
  if (regionalLv1.value === undefined) {
    regionalList.value = undefined
  } else if (regionalLv2.value === undefined) {
    regionalList.value = [regionalLv1.value]
  } else if (regionalLv3.value === undefined) {
    regionalList.value = [regionalLv1.value, regionalLv2.value]
  } else {
    regionalList.value = [regionalLv1.value, regionalLv2.value, regionalLv3.value]
  }
  setRegionalList(regionalList.value)
})
</script>

<template>
  <ExceptionHandling :flag="Boolean(centers)" :error="error">
    <select v-model="regionalLv1">
      <option v-for="(value, key) in centers" :key="key" :value="key">
        {{ value.name }}
      </option>
    </select>

    <select v-show="regionalLv1" v-model="regionalLv2">
      <template v-for="(value, key) in offices" :key="key">
        <option v-if="value.parent === regionalLv1" :value="key">
          {{ value.name }}
        </option>
      </template>
    </select>

    <select v-show="regionalLv2" v-model="regionalLv3">
      <template v-for="(value, key) in class10s" :key="key">
        <option v-if="value.parent === regionalLv2" :value="key">
          {{ value.name }}
        </option>
      </template>
    </select>
  </ExceptionHandling>
  <button type="button" @click="saveRegional">地域をセット</button>
</template>
