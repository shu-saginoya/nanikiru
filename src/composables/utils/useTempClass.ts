import { ref } from 'vue'
import { useClassifyTemp } from '@/composables/utils/useClassifyTemp'

const { tempClass } = useClassifyTemp()

export const useTempClass = () => {
  const clothing = ref<string[]>()
  const clothings: string[][] = [
    ['-'],
    ['ダウンコート'],
    ['冬物コート'],
    ['トレンチコート', 'フリース', 'セーター'],
    ['マウンテンパーカー', 'トレーナー'],
    ['薄手の羽織'],
    ['長袖シャツ', 'ロンT'],
    ['半袖シャツ', 'Tシャツ'],
    ['Tシャツ']
  ]

  const color = ref<string>()
  const colors: string[] = [
    'text-gray-500',
    'text-indigo-500',
    'text-blue-500',
    'text-sky-500',
    'text-teal-500',
    'text-green-500',
    'text-lime-500',
    'text-orange-500',
    'text-red-500'
  ]

  const setTemp = (temp: number) => {
    clothing.value = clothings[tempClass(temp)]
    color.value = colors[tempClass(temp)]
  }

  return {
    clothing,
    color,
    setTemp
  }
}
