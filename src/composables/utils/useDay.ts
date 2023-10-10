import { computed } from 'vue'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)

export const useDay = (date: string | 'now' | 'tomorrow') => {
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

  const formatBasis = day.value.format('YYYY-MM-DD HH:mm:ss')
  const formatYMD = day.value.format('YYYY-MM-DD')
  const formatJa = day.value.format('YYYY年MMMD日dddd')

  return {
    formatBasis,
    formatYMD,
    formatJa
  }
}
