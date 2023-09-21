import { describe, test, expect } from 'vitest'
import { useLocalStorage } from '@/composables/utils/useLocalStorage'

const { set, get, remove } = useLocalStorage('testKey')
const actual = 'fef56f46feokw'
set(actual)

describe('useLocalStorage function testing.', () => {
  test('Set value in localstorage', () => {
    const expected = get()
    expect(actual).toBe(expected)
  })
  test('Remove value in localstorage', () => {
    remove()
    const expected = get()
    expect(expected).toBeNull()
  })
})
