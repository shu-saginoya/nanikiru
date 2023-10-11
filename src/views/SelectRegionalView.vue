<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useRegionalsStore } from '@/store/regionals'
import { useVisibleSeveral } from '@/composables/utils/useVisibleSeveral'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import SectionRegionList from '@/components/molecules/SectionRegionList.vue'
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconBack from '@/components/icons/IconBack.vue'

const { centers, offices, class10s, error } = useJmaArea()
const { regionalLv1, regionalLv2 } = storeToRefs(useRegionalsStore())
const { setRegionalLv1, setRegionalLv2, setRegionalLv3 } = useRegionalsStore()
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
      if (offices.value[key].parent === regionalLv1.value?.key) {
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
      if (class10s.value[key].parent === regionalLv2.value?.key) {
        result.push({ key: key, name: class10s.value[key].name })
      }
    }
  }
  return result
})

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
  <ArticleCard v-if="error">
    <h2 class="text-lg font-bold">エラーが発生しました</h2>
    <p class="text-left">地域情報を取得できませんでした。</p>
    <p class="text-left">
      なにかしらの通信障害の可能性があります。しばらく時間をおいてから再度お試しください。
    </p>
    <LinkRouter to="/" class="rounded-sm">
      <div class="flex"><IconBack />もどる</div>
    </LinkRouter>
  </ArticleCard>
  <template v-else>
    <h2>いちばん近い地域を選んでください</h2>
    <ArticleCard>
      <SectionRegionList v-show="visible === 0" :items="centerItems" :click-action="selectAction1">
      </SectionRegionList>
      <SectionRegionList
        v-show="visible === 1"
        :items="officesItems"
        :click-action="selectAction2"
        :prev-action="prev"
      >
      </SectionRegionList>
      <SectionRegionList
        v-show="visible === 2"
        :items="class10sItems"
        :click-action="selectAction3"
        :prev-action="prev"
      >
      </SectionRegionList>
    </ArticleCard>
  </template>
</template>
