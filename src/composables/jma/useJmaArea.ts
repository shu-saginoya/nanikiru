import { ref, watch, readonly } from 'vue'
import { useFetch } from '@/composables/utils/useFetch'

export const useJmaArea = () => {
  const url = 'https://www.jma.go.jp/bosai/common/const/area.json'
  const { data, error } = useFetch(url)

  const centers = ref()
  const offices = ref()
  const class10s = ref()
  const class15s = ref()
  const class20s = ref()
  watch(data, () => {
    if (data.value) {
      centers.value = data.value.centers
      offices.value = data.value.offices
      class10s.value = data.value.class10s
      class15s.value = data.value.class15s
      class20s.value = data.value.class20s
    }
  })

  return {
    centers: readonly(centers),
    offices: readonly(offices),
    class10s: readonly(class10s),
    class15s: readonly(class15s),
    class20s: readonly(class20s),
    error: readonly(error)
  }
}
