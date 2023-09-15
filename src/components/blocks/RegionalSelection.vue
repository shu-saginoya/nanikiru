<script setup lang="ts">
import { ref, watch } from 'vue'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalNumbersStore } from '@/store/regionalNumbers'

import ExceptionHandling from '@/components/blocks/ExceptionHandling.vue'

import type { Regional, RegionalList } from '@/types/regional'

const { setRegionalList, saveRegional, loadRegional } = useRegionalNumbersStore()
const { centers, offices, class10s, error } = useJmaArea()

// 地域の定義（番号）
const regionalLv1 = ref<Regional>()
const regionalLv2 = ref<Regional>()
const regionalLv3 = ref<Regional>()
const regionalList = ref<RegionalList>()

// ローカルストレージから地域を取得しセットする
const saved = loadRegional()?.split(',')
if (saved) {
  regionalLv1.value = saved[0]
  regionalLv2.value = saved[1]
  regionalLv3.value = saved[2]
  regionalList.value = [regionalLv1.value, regionalLv2.value, regionalLv3.value]
  setRegionalList(regionalList.value)
}

// 地方や都道府県が更新されたらそれ以下の地域をリセットする
watch(regionalLv1, () => {
  regionalLv2.value = undefined
  regionalLv3.value = undefined
})
watch(regionalLv2, () => {
  regionalLv3.value = undefined
})

// 選択されている地域をストア・ローカルストレージに反映
const decision = () => {
  if (regionalLv1.value && regionalLv2.value && regionalLv3.value) {
    regionalList.value = [regionalLv1.value, regionalLv2.value, regionalLv3.value]
    setRegionalList(regionalList.value)
    saveRegional()
  } else {
    alert('地域を全て入力してください')
  }
}
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
  <button type="button" @click="decision">地域をセット</button>
</template>
