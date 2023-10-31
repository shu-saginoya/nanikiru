<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useForecastStore } from '@/store/forecast'
import { useAreasStore } from '@/store/areas'
import { useTexts } from '@/composables/utils/useTexts'
import BlockCurrentlyArea from '@/components/templates/BlockCurrentlyArea.vue'

const { areaLv1, areaLv2, areaLv3 } = storeToRefs(useAreasStore())
const { tempArea } = storeToRefs(useForecastStore())
const { areaFormat } = useTexts()

const area = computed(() => {
  if (areaLv1.value && areaLv2.value && areaLv3.value) {
    return areaFormat(areaLv1.value.name, areaLv2.value.name, areaLv3.value.name)
  } else {
    return '地域が選択されていません'
  }
})
const areaName = computed(() => {
  if (tempArea.value) {
    return tempArea.value.name
  } else {
    return undefined
  }
})
</script>

<template>
  <BlockCurrentlyArea :area="area" :areaName="areaName"> </BlockCurrentlyArea>
</template>
