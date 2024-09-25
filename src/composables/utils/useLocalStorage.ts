// ローカルストレージを操作するユーティリティ

// 引数にローカルストレージのキー名を設定する
export const useLocalStorage = (key: string) => {
  // 保存
  const set = (value: string | object) => {
    if (typeof value === 'string') {
      localStorage.setItem(key, value)
    } else {
      const jsonData = JSON.stringify(value)
      localStorage.setItem(key, jsonData)
    }
  }

  // 取得
  const get = () => localStorage.getItem(key)

  // 削除
  const remove = () => localStorage.removeItem(key)

  return {
    set,
    get,
    remove
  }
}
