import { describe, it, expect } from 'vitest'
import { ID_LENGTH, isIdComplete, sanitizeId, resolveIdCheck } from './idCheck'

describe('isIdComplete', () => {
  it('accepts exactly ID_LENGTH digits', () => {
    expect(isIdComplete('1'.repeat(ID_LENGTH))).toBe(true)
  })

  it('rejects a short ID', () => {
    expect(isIdComplete('1'.repeat(ID_LENGTH - 1))).toBe(false)
  })

  it('rejects a long ID', () => {
    expect(isIdComplete('1'.repeat(ID_LENGTH + 1))).toBe(false)
  })

  it('rejects the empty string', () => {
    expect(isIdComplete('')).toBe(false)
  })

  it('rejects the right length made of non-digits', () => {
    expect(isIdComplete('abcdefghi'.slice(0, ID_LENGTH))).toBe(false)
  })
})

describe('sanitizeId', () => {
  it('drops non-digits', () => {
    expect(sanitizeId('12a3-4 5')).toBe('12345')
  })

  it('caps at ID_LENGTH', () => {
    expect(sanitizeId('1234567890123')).toBe('123456789'.slice(0, ID_LENGTH))
  })

  it('passes a clean ID through untouched', () => {
    const clean = '1'.repeat(ID_LENGTH)
    expect(sanitizeId(clean)).toBe(clean)
  })

  // The production bug: a DOM maxLength would have cut this to '12-34-567'
  // BEFORE any filtering, silently yielding a 7-digit ID. Stripping first
  // keeps all nine digits.
  it('keeps all ID_LENGTH digits out of a bulk insertion carrying separators', () => {
    expect(sanitizeId('12-34-56789')).toBe('123456789')
    expect(isIdComplete(sanitizeId('12-34-56789'))).toBe(true)
  })

  it('keeps the FIRST ID_LENGTH digits when a bulk insertion carries more', () => {
    expect(sanitizeId('1a2b3c4d5e6f7g8h9i0j1')).toBe('123456789')
  })
})

describe('resolveIdCheck', () => {
  it('has no verdict while the ID is incomplete', () => {
    expect(resolveIdCheck('123', false)).toBe('idle')
    expect(resolveIdCheck('123', true)).toBe('idle')
  })

  it('resolves a complete ID as valid by default', () => {
    expect(resolveIdCheck('1'.repeat(ID_LENGTH), false)).toBe('valid')
  })

  it('resolves as invalid when the dev switcher forces it', () => {
    expect(resolveIdCheck('1'.repeat(ID_LENGTH), true)).toBe('invalid')
  })
})
