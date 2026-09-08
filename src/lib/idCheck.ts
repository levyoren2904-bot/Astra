/**
 * Pure logic for the step-1 ID validity check in the acquisition wizard.
 *
 * The verdict itself is a MOCK: a complete ID resolves as valid unless the dev
 * switcher forces a failure. When the real lookup exists, only `resolveIdCheck`
 * changes — the state machine around it does not.
 */

/** Digits in a resident ID. Matches the Figma placeholder `000000000`. */
export const ID_LENGTH = 9

/** Simulated server round trip, in ms. */
export const ID_CHECK_DELAY = 800

export type IdCheckStatus = 'idle' | 'checking' | 'valid' | 'invalid'

/** Digits only, and exactly ID_LENGTH of them. */
export function isIdComplete(value: string): boolean {
  return value.length === ID_LENGTH && /^\d+$/.test(value)
}

/** Drops every non-digit and caps the length — the field never holds anything else. */
export function sanitizeId(value: string): string {
  return value.replace(/\D/g, '').slice(0, ID_LENGTH)
}

/** MOCK verdict for a complete ID. An incomplete ID has no verdict at all. */
export function resolveIdCheck(value: string, forceInvalid: boolean): IdCheckStatus {
  if (!isIdComplete(value)) return 'idle'
  return forceInvalid ? 'invalid' : 'valid'
}
