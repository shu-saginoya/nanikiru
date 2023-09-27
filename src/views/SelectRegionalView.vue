<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalsStore } from '@/store/regionals'
import { useVisibleSeveral } from '@/composables/utils/useVisibleSeveral'

const { centers, offices, class10s, error } = useJmaArea()
const { regionalLv1, regionalLv2 } = storeToRefs(useRegionalsStore())
const { setRegionalLv1, setRegionalLv2, setRegionalLv3 } = useRegionalsStore()
const { visible, next, prev } = useVisibleSeveral()
const router = useRouter()

if (error.value) {
  alert(`地域データの取得に失敗しました。\nError : ${error.value.message}`)
  router.push('/')
}

const selectAction1 = (key: string, name: string) => {
  setRegionalLv1(key, name)
  next()
}
const selectAction2 = (key: string, name: string) => {
  setRegionalLv2(key, name)
  next()
}
const selectAction3 = (key: string, name: string) => {
  setRegionalLv3(key, name)
  router.push('/')
}
</script>

<template>
  <main>
    <section v-show="visible === 0">
      <ul>
        <li v-for="(value, key) in centers" :key="String(key)">
          <button type="button" @click="selectAction1(String(key), value.name)">
            {{ value.name }}
          </button>
        </li>
      </ul>
    </section>
    <section v-show="visible === 1">
      <ul v-if="regionalLv1">
        <template v-for="(value, key) in offices" :key="String(key)">
          <li v-if="value.parent === regionalLv1.key">
            <button type="button" @click="selectAction2(String(key), value.name)">
              {{ value.name }}
            </button>
          </li>
        </template>
        <li>
          <button type="button" @click="prev()">もどる</button>
        </li>
      </ul>
    </section>
    <section v-show="visible === 2">
      <ul v-if="regionalLv2">
        <template v-for="(value, key) in class10s" :key="String(key)">
          <li v-if="value.parent === regionalLv2.key">
            <button type="button" @click="selectAction3(String(key), value.name)">
              {{ value.name }}
            </button>
          </li>
        </template>
        <li>
          <button type="button" @click="prev()">もどる</button>
        </li>
      </ul>
    </section>
  </main>
</template>
