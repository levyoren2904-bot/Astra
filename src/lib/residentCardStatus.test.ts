import { describe, expect, it } from 'vitest'
import {
  applyStatusChange,
  canChangeStatus,
  canConfirmStatusChange,
  filterResidentCards,
  type ResidentCardRow,
} from './residentCardStatus'

const active: ResidentCardRow = {
  id: 1,
  residentName: 'חמודי מוחמד בן סעמק',
  idNumber: '123456789',
  cardType: 'כר״ח איו״ש',
  issueDate: '14/01/2023',
  status: 'פעיל',
}

const cancelled: ResidentCardRow = {
  ...active,
  id: 2,
  idNumber: '987654321',
  residentName: 'יוסף ח׳ליל',
  status: 'מבוטל',
  change: { reason: 'דווח כאבוד', changedBy: 'מנהל מערכת', changedAt: '10/01/2023 09:12' },
}

describe('canChangeStatus', () => {
  it('allows only an active card', () => {
    expect(canChangeStatus(active)).toBe(true)
    expect(canChangeStatus(cancelled)).toBe(false)
    expect(canChangeStatus({ status: 'לא תקין' })).toBe(false)
  })
})

describe('canConfirmStatusChange', () => {
  it('needs both a target and a reason', () => {
    expect(canConfirmStatusChange(null, 'סיבה')).toBe(false)
    expect(canConfirmStatusChange('מבוטל', '')).toBe(false)
    expect(canConfirmStatusChange('מבוטל', 'סיבה')).toBe(true)
    expect(canConfirmStatusChange('לא תקין', 'סיבה')).toBe(true)
  })

  it('does not accept whitespace as a reason', () => {
    expect(canConfirmStatusChange('מבוטל', '   \n ')).toBe(false)
  })
})

describe('applyStatusChange', () => {
  it('sets the status and records reason, actor and time', () => {
    const next = applyStatusChange(active, 'לא תקין', '  שבב פגום  ', 'מנהל מערכת', '06/10/2026 10:00')
    expect(next.status).toBe('לא תקין')
    expect(next.change).toEqual({
      reason: 'שבב פגום',
      changedBy: 'מנהל מערכת',
      changedAt: '06/10/2026 10:00',
    })
  })

  it('does not mutate the original row', () => {
    applyStatusChange(active, 'מבוטל', 'סיבה', 'x', 'y')
    expect(active.status).toBe('פעיל')
    expect(active.change).toBeUndefined()
  })

  it('refuses a card that was already changed - the change is irreversible', () => {
    expect(() => applyStatusChange(cancelled, 'לא תקין', 'סיבה', 'x', 'y')).toThrow()
  })

  it('refuses an empty reason', () => {
    expect(() => applyStatusChange(active, 'מבוטל', ' ', 'x', 'y')).toThrow()
  })
})

describe('filterResidentCards', () => {
  const rows = [active, cancelled]

  it('returns every row for an empty query', () => {
    expect(filterResidentCards(rows, '')).toHaveLength(2)
    expect(filterResidentCards(rows, '   ')).toHaveLength(2)
  })

  it('matches by ת.ז, including a partial one', () => {
    expect(filterResidentCards(rows, '123456789')).toEqual([active])
    expect(filterResidentCards(rows, '9876')).toEqual([cancelled])
  })

  it('matches by name with extra spaces', () => {
    expect(filterResidentCards(rows, 'חמודי   מוחמד')).toEqual([active])
  })

  it('returns nothing when nothing matches', () => {
    expect(filterResidentCards(rows, '555')).toEqual([])
  })
})
