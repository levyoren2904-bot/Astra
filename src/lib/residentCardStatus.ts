// Status change for a resident's last issued card, ניהול מערכת > סוגי כרטיסים > תושבים.
// No Figma node behind this yet - the brief is a written requirement (06.10.2026).
// Kept out of the component so it can be tested without rendering, same as feeSearch.

import { normalizeFeeQuery } from './feeSearch'

export const CARD_STATUS_ACTIVE = 'פעיל'
/** The only two statuses an operator may move a card to. */
export const CARD_STATUS_TARGETS = ['מבוטל', 'לא תקין'] as const

export type CardStatusTarget = (typeof CARD_STATUS_TARGETS)[number]
export type CardStatus = typeof CARD_STATUS_ACTIVE | CardStatusTarget

export interface StatusChange {
  reason: string
  changedBy: string
  changedAt: string
}

export interface ResidentCardRow {
  id: number
  residentName: string
  idNumber: string
  cardType: string
  issueDate: string
  status: CardStatus
  /** Present only once the status has been changed away from פעיל. */
  change?: StatusChange
}

/**
 * The change is irreversible, so only an active card can be changed at all.
 * A card that is already מבוטל or לא תקין has nowhere to go.
 */
export const canChangeStatus = (row: Pick<ResidentCardRow, 'status'>): boolean =>
  row.status === CARD_STATUS_ACTIVE

/** The reason is mandatory and typed by hand - whitespace does not count as a reason. */
export const canConfirmStatusChange = (
  target: CardStatusTarget | null,
  reason: string,
): target is CardStatusTarget => target !== null && reason.trim().length > 0

/**
 * Returns the row with the new status and its record. Refuses an inactive card or a
 * missing reason rather than silently doing nothing, so a UI bug cannot overwrite a
 * reason that was already recorded.
 */
export const applyStatusChange = (
  row: ResidentCardRow,
  target: CardStatusTarget,
  reason: string,
  changedBy: string,
  changedAt: string,
): ResidentCardRow => {
  if (!canChangeStatus(row)) throw new Error(`Card ${row.id} is not active`)
  if (!canConfirmStatusChange(target, reason)) throw new Error('A reason is required')
  return { ...row, status: target, change: { reason: reason.trim(), changedBy, changedAt } }
}

/** Search reads the two values that identify the resident: the name and the ת.ז. */
export const matchesResidentQuery = (
  row: Pick<ResidentCardRow, 'residentName' | 'idNumber'>,
  query: string,
): boolean => {
  const needle = normalizeFeeQuery(query).toLowerCase()
  if (!needle) return true
  return [row.residentName, row.idNumber].some((field) =>
    normalizeFeeQuery(field).toLowerCase().includes(needle),
  )
}

export const filterResidentCards = <T extends Pick<ResidentCardRow, 'residentName' | 'idNumber'>>(
  rows: T[],
  query: string,
): T[] => rows.filter((row) => matchesResidentQuery(row, query))
