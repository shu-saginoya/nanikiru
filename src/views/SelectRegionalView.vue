<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalsStore } from '@/store/regionals'
import { useVisibleSeveral } from '@/composables/utils/useVisibleSeveral'

const { centers, offices, class10s, error } = useJmaArea()
const { regionalLv1, regionalLv2 } = storeToRefs(useRegionalsStore())
const { setRegionalLv1, setRegionalLv2, setRegionalLv3 } = useRegionalsStore()
const { visible, up, down } = useVisibleSeveral()
</script>

<template>
  <main>
    <section v-show="visible === 0">
      <ul>
        <li v-for="(value, key) in centers" :key="String(key)">
          <button type="button" @click="setRegionalLv1(String(key), value.name), up()">
            {{ value.name }}
          </button>
        </li>
      </ul>
    </section>
    <section v-show="visible === 1">
      <ul v-if="regionalLv1">
        <template v-for="(value, key) in offices" :key="String(key)">
          <li v-if="value.parent === regionalLv1.key">
            <button type="button" @click="setRegionalLv2(String(key), value.name), up()">
              {{ value.name }}
            </button>
          </li>
        </template>
        <li>
          <button type="button" @click="down()">もどる</button>
        </li>
      </ul>
    </section>
    <section v-show="visible === 2">
      <ul v-if="regionalLv2">
        <template v-for="(value, key) in class10s" :key="String(key)">
          <li v-if="value.parent === regionalLv2.key">
            <button type="button" @click="setRegionalLv3(String(key), value.name)">
              {{ value.name }}
            </button>
          </li>
        </template>
        <li>
          <button type="button" @click="down()">もどる</button>
        </li>
      </ul>
    </section>
  </main>
</template>
