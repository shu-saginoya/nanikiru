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
    ['長袖シャツ', '薄手の羽織'],
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

  const image = ref<string>()
  const images: string[] = [
    '',
    'fashion_down_jacket.png',
    'fashion_duffle_coat.png',
    'fashion_sweater_v.png',
    'fashion_parka.png',
    'fashion_shirt6_red.png',
    'fashion_shirt3_skyblue.png',
    'alohashirt_white.png',
    'fashion_tshirt1_white.png'
  ]

  const setTemp = (temp: number) => {
    clothing.value = clothings[tempClass(temp)]
    color.value = colors[tempClass(temp)]
    image.value = images[tempClass(temp)]
  }

  return {
    clothing,
    color,
    image,
    setTemp
  }
}
