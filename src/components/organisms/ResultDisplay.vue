<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useJmaArea } from '@/composables/jma/useJmaArea'
import { useJmaForecast } from '@/composables/jma/useJmaForecast'
import { useDateFormat } from '@/composables/utils/dateFormat'
import { storeToRefs } from 'pinia'
import { useRegionalsStore } from '@/store/regionals'

const { offices } = useJmaArea()
const { error, dateTime, weathers, temps } = useJmaForecast()
const { regionalLv2, regionalLv3 } = storeToRefs(useRegionalsStore())

const dateNumbers = {
  today: 0,
  tomorrow: 1,
  dayAfterTomorrow: 2
}
const dateSelection = ref<number>(dateNumbers.today)

const date = computed(() => {
  if (dateTime.value) {
    return useDateFormat(dateTime.value[dateSelection.value]).formatJa
  } else {
    return undefined
  }
})

const areaNumber = ref(0)
watchEffect(() => {
  if (offices.value && regionalLv2.value && regionalLv3.value) {
    const key = Number(regionalLv2.value.key)
    const children = offices.value[key].children
    if (children) {
      console.log(children)
      areaNumber.value = children?.indexOf(regionalLv3.value.key, 0)
    }
  }
})
</script>

<template>
  <section>
    <p v-if="error">天気予報の取得に失敗しました。</p>
    <p v-if="date">{{ date }}</p>
    <p v-if="temps">{{ temps[areaNumber].area.name }}</p>
    <p>Tシャツ</p>
    <p v-if="weathers">{{ weathers[dateSelection] }}</p>
  </section>
</template>
