import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'

describe('Build Test', () => {
  it('should build the project without errors', () => {
    let output
    try {
      output = execSync('vite build', { stdio: 'pipe' }).toString()
    } catch (error) {
      output = (error as { stdout: { toString(): string } }).stdout.toString()
    }

    // ビルドに失敗した場合は `error` などが含まれる可能性があるので、それをチェック
    expect(output).not.toContain('error')
  })
})
