// 日時を扱うユーティリティ

import { computed } from 'vue'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'

// dayjsの地域を日本に設定
dayjs.locale(ja)

export const useDay = (date: string | 'now' | 'tomorrow') => {
  // 引数をもとに日時を取得
  const day = computed(() => {
    switch (date) {
      case 'now':
        return dayjs()
      case 'tomorrow':
        return dayjs().add(1, 'd').startOf('day')
      default:
        return dayjs(date)
    }
  })

  // dayを基準にフォーマット
  const formatBasis = day.value.format('YYYY-MM-DD HH:mm:ss')
  const formatYMD = day.value.format('YYYY-MM-DD')
  const formatJa = day.value.format('YYYY年MMMD日dddd')

  return {
    formatBasis,
    formatYMD,
    formatJa
  }
}
