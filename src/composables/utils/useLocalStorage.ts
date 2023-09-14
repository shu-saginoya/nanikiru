export const useLocalStorage = (key: string) => {
  const set = (value: any) => localStorage.setItem(key, value)
  const get = () => localStorage.getItem(key)
  const remove = () => localStorage.removeItem(key)
  const clear = () => localStorage.clear()

  return {
    set,
    get,
    remove,
    clear
  }
}