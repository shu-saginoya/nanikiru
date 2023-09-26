export const useLocalStorage = (key: string) => {
  const set = (value: string | object) => {
    if (typeof value === 'string') {
      localStorage.setItem(key, value)
    } else {
      const jsonData = JSON.stringify(value)
      localStorage.setItem(key, jsonData)
    }
  }
  const get = () => localStorage.getItem(key)
  const remove = () => localStorage.removeItem(key)

  return {
    set,
    get,
    remove
  }
}
