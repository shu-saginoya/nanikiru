import { ref, readonly } from 'vue'

export const useFetch = (url: string) => {
  const data = ref()
  const error = ref<Error | null>()

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
