import { ref } from 'vue'
import { useClassifyTemp } from '@/composables/temps/useClassifyTemp'
import { useTempCalc } from '@/composables/temps/useTempCalc'

const { tempClass } = useClassifyTemp()

export const useTempClass = () => {
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

  const clothing = ref<string[]>()
  const clothings: string[][] = [
    ['-'],
    ['トレーナー', '長ズボン'],
    ['トレーナー', '長ズボン'],
    ['トレーナー', '長ズボン'],
    ['長袖シャツ', '長ズボン'],
    ['長袖シャツ', '長ズボン'],
    ['半袖シャツ', '長袖シャツ', '七分丈ズボン'],
    ['半袖シャツ', '半ズボン', '七分丈ズボン'],
    ['半袖シャツ', '半ズボン', '七分丈ズボン']
  ]

  const clothingImg = ref<string>()
  const clothingImgs: string[] = [
    '',
    'kodomofuku_boy.png',
    'kodomofuku_boy.png',
    'kodomofuku_boy.png',
    'cloth_longt.png',
    'cloth_longt.png',
    'kids_kodomofuku_shirt_boy.png',
    'kids_kodomofuku_shirt_boy.png',
    'kids_kodomofuku_shirt_boy.png'
  ]

  const outerwear = ref<string[]>()
  const outerwears: string[][] = [
    ['-'],
    ['ダウンジャケット', '手袋', 'ニット帽'],
    ['ダウンジャケット'],
    ['ウインドブレーカー'],
    ['ウインドブレーカー'],
    ['薄い羽織'],
    ['薄い羽織'],
    ['帽子'],
    ['帽子', '日傘']
  ]

  const outerwearImg = ref<string>()
  const outerwearImgs: string[] = [
    '',
    'fashion_down_jacket.png',
    'fashion_down_jacket.png',
    'fashion_sutajan.png',
    'fashion_sutajan.png',
    'fashion_cardigan_set.png',
    'fashion_cardigan_set.png',
    'hiyake_goods.png',
    'hiyake_goods.png'
  ]

  const setTemp = (maxTemp: number, minTemp: number[]) => {
    const { morningAndEveningTemp } = useTempCalc(maxTemp, minTemp)
    const maxTempClass = tempClass(maxTemp)
    const minTempClass = tempClass(morningAndEveningTemp.value)
    color.value = colors[maxTempClass]
    clothing.value = clothings[maxTempClass]
    clothingImg.value = clothingImgs[maxTempClass]
    outerwear.value = outerwears[minTempClass]
    outerwearImg.value = outerwearImgs[minTempClass]
  }

  return {
    color,
    clothing,
    clothingImg,
    outerwear,
    outerwearImg,
    setTemp
  }
}
