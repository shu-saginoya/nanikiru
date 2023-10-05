import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)

export const useDay = (date?: string) => {
  const day = dayjs(date)

  const formatBasis = day.format('YYYY-MM-DD HH:mm:ss')
  const formatYMD = day.format('YYYY-MM-DD')
  const formatJa = day.format('YYYY年MMMD日dddd')

  return {
    formatBasis,
    formatYMD,
    formatJa
  }
}
