import { ref, readonly } from 'vue'

export const useVisibleSeveral = (maxValue?: number, loop?: boolean) => {
  const visible = ref<number>(0)
  const next = (): void => {
    if (maxValue && visible.value >= maxValue - 1) {
      if (loop) {
        visible.value = 0
      } else {
        console.error("I can't go any further.")
      }
    } else {
      visible.value++
    }
  }

  const prev = (): void => {
    if (visible.value > 0) {
      visible.value--
    } else {
      if (maxValue && loop) {
        visible.value = maxValue - 1
      } else {
        console.error("I can't go back any further.")
      }
    }
  }

  return {
    visible: readonly(visible),
    next,
    prev
  }
}
