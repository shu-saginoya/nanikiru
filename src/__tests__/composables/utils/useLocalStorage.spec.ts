import { describe, test, expect } from 'vitest'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'

describe('useLocalStorage function testing.', () => {
  const { set, get, remove } = useLocalStorage('testKey')
  test('Set value in localstorage', () => {
    const actual = 'fef56f46feokw'
    set(actual)
    const expected = get()
    expect(actual).toBe(expected)
  })
  test('Remove value in localstorage', () => {
    remove()
    const expected = get()
    expect(expected).toBeNull()
  })
})
