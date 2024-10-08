// API(json形式)をfetchで取得するユーティリティ

import { ref, readonly } from 'vue'

export const useFetch = (url: string) => {
  // 取得したJSON形式のデータを格納する変数
  const data = ref()

  // エラーが戻ってきた場合に格納する変数
  const error = ref<Error | null>()

  // URLから取得を試みる
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        console.error('response.ok', res.ok)
        console.error('response.status', res.status)
        console.error('response.statusText', res.statusText)
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then((json) => {
      data.value = json
    })
    .catch((err) => {
      console.error('エラーが発生しました', err)
      error.value = err
    })

  return {
    data: readonly(data),
    error: readonly(error)
  }
}
