import { ref, readonly } from 'vue'

export const useVisibleSeveral = () => {
  const visible = ref<number>(0)
  const up = () => visible.value++
  const down = () => visible.value--

  return {
    visible: readonly(visible),
    up,
    down
  }
}
