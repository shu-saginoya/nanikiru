export const useDateFormat = (value: string) => {
  const dateObject = new Date(value)

  const year = dateObject.getFullYear()
  const month = dateObject.getMonth()
  const date = dateObject.getDate()
  const day = dateObject.getDay()
  const hours = dateObject.getHours()

  const convertDaysJa = (number: number) => {
    const japaneseDays = ['日', '月', '火', '水', '木', '金', '土']
    return japaneseDays[number]
  }

  const formatJa = `${year}年${month}月${date}日${convertDaysJa(day)}曜日`

  return {
    formatJa,
    hours
  }
}
