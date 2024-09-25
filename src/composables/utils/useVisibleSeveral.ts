// 配列のうち1つだけをアクティブにする状態管理

import { ref, readonly } from 'vue'

// 引数1 配列の最大値
// 引数2 操作したときに最大値から最小値といったループをするかどうか
export const useVisibleSeveral = (maxValue?: number, loop?: boolean) => {
  // アクティブな配列の番号
  const visible = ref<number>(0)

  // アクティブな番号を1つ進める
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

  // アクティブな番号を1つもどす
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
