<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAreasStore } from '@/store/areas'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useVisibleSeveral } from '@/composables/utils/useVisibleSeveral'
import IconBack from '@/components/icons/IconBack.vue'
import ACard from '@/components/elements/ACard.vue'
import ALink from '@/components/elements/ALink.vue'
import AHeadingLv2 from '@/components/elements/AHeadingLv2.vue'
import SectionAreaList from '@/components/templates/SectionAreaList.vue'

const { centers, offices, class10s, error } = useJmaArea()
const { areaLv1, areaLv2 } = storeToRefs(useAreasStore())
const { setAreaLv1, setAreaLv2, setAreaLv3 } = useAreasStore()
const { visible, next, prev } = useVisibleSeveral()
const router = useRouter()

const centerItems = computed(() => {
  const result = []
  if (centers.value) {
    for (const key in centers.value) {
      result.push({ key: key, name: centers.value[key].name })
    }
  }
  return result
})
const officesItems = computed(() => {
  const result = []
  if (offices.value) {
    for (const key in offices.value) {
      if (offices.value[key].parent === areaLv1.value?.key) {
        result.push({ key: key, name: offices.value[key].name })
      }
    }
  }
  return result
})
const class10sItems = computed(() => {
  const result = []
  if (class10s.value) {
    for (const key in class10s.value) {
      if (class10s.value[key].parent === areaLv2.value?.key) {
        result.push({ key: key, name: class10s.value[key].name })
      }
    }
  }
  return result
})

const selectAction1 = (key: string, name: string) => {
  setAreaLv1(key, name)
  next()
}
const selectAction2 = (key: string, name: string) => {
  setAreaLv2(key, name)
  next()
}
const selectAction3 = (key: string, name: string) => {
  setAreaLv3(key, name)
  router.push('/')
}
</script>

<template>
  <ACard v-if="error">
    <AHeadingLv2>エラーが発生しました</AHeadingLv2>
    <p>地域情報を取得できませんでした。</p>
    <p>なにかしらの通信障害の可能性があります。しばらく時間をおいてから再度お試しください。</p>
    <ALink to="/">
      <div class="flex"><IconBack />もどる</div>
    </ALink>
  </ACard>
  <template v-else>
    <AHeadingLv2>いちばん近い地域を選んでください</AHeadingLv2>
    <ACard>
      <SectionAreaList v-show="visible === 0" :items="centerItems" :click-action="selectAction1">
      </SectionAreaList>
      <SectionAreaList
        v-show="visible === 1"
        :items="officesItems"
        :click-action="selectAction2"
        :prev-action="prev"
      >
      </SectionAreaList>
      <SectionAreaList
        v-show="visible === 2"
        :items="class10sItems"
        :click-action="selectAction3"
        :prev-action="prev"
      >
      </SectionAreaList>
    </ACard>
  </template>
</template>
