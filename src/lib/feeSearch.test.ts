import { describe, it, expect } from 'vitest'
import { normalizeFeeQuery, matchesFeeQuery, filterFees } from './feeSearch'

const ROW = {
  residentName: 'חמודי מוחמד בן סעמק',
  idNumber: '123456789',
  feeNumber: '987654321',
}

const ROWS = [
  { id: 1, ...ROW },
  { id: 2, residentName: 'שם תושב', idNumber: '987654321', feeNumber: '123456789' },
]

describe('normalizeFeeQuery', () => {
  it('trims the edges', () => {
    expect(normalizeFeeQuery('  חמודי  ')).toBe('חמודי')
  })

  it('collapses an internal run of whitespace', () => {
    expect(normalizeFeeQuery('חמודי   מוחמד')).toBe('חמודי מוחמד')
  })

  it('returns the empty string for whitespace only', () => {
    expect(normalizeFeeQuery('   ')).toBe('')
  })
})

describe('matchesFeeQuery', () => {
  it('matches every row on an empty query', () => {
    expect(matchesFeeQuery(ROW, '')).toBe(true)
  })

  it('matches every row on a whitespace-only query', () => {
    expect(matchesFeeQuery(ROW, '   ')).toBe(true)
  })

  it('matches a partial resident name', () => {
    expect(matchesFeeQuery(ROW, 'מוחמד')).toBe(true)
  })

  it('matches a resident name typed with extra internal spaces', () => {
    expect(matchesFeeQuery(ROW, 'חמודי   מוחמד')).toBe(true)
  })

  it('matches an ID prefix', () => {
    expect(matchesFeeQuery(ROW, '1234')).toBe(true)
  })

  it('matches a fee number', () => {
    expect(matchesFeeQuery(ROW, '987654321')).toBe(true)
  })

  it('ignores latin case', () => {
    expect(matchesFeeQuery({ ...ROW, residentName: 'AYVERTUL150' }, 'ayvertul')).toBe(true)
  })

  it('rejects a query that appears in no searched field', () => {
    expect(matchesFeeQuery(ROW, 'נציגות')).toBe(false)
  })

  it('does not search the note - it is the operator free text, not an identifier', () => {
    const row = { ...ROW, note: 'שולם במזומן' }
    expect(matchesFeeQuery(row, 'מזומן')).toBe(false)
  })
})

describe('filterFees', () => {
  it('returns every row on an empty query', () => {
    expect(filterFees(ROWS, '')).toHaveLength(2)
  })

  it('narrows to the matching row', () => {
    expect(filterFees(ROWS, 'חמודי').map((r) => r.id)).toEqual([1])
  })

  it('can match both rows when the value is shared across different columns', () => {
    expect(filterFees(ROWS, '123456789').map((r) => r.id)).toEqual([1, 2])
  })

  it('returns an empty list when nothing matches', () => {
    expect(filterFees(ROWS, 'לא קיים')).toEqual([])
  })
})
