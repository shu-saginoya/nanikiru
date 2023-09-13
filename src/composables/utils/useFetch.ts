import { ref, readonly } from 'vue'

export const useFetch = (url: string) => {
  const data = ref<any>(null)
  const error = ref<Error | null>(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data.value = json
      console.log(data.value)
    })
    .catch((err) => (error.value = err))

  return {
    data: readonly(data),
    error: readonly(error)
  }
}