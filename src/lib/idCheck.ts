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

/**
 * Drops every non-digit and caps the length — the field never holds anything else.
 *
 * This is also the ONLY length cap: the input deliberately carries no
 * `maxLength`. Measured on production 2026-09-08 — a browser's `maxLength`
 * truncates the RAW inserted string, so a bulk insertion (a paste, or a
 * scanner injecting a whole line) of `12-34-5678` was cut to `12-34-567`
 * before any filtering and silently became a 7-digit ID. Stripping first and
 * slicing after keeps the first ID_LENGTH *digits*, whatever else came with them.
 */
export function sanitizeId(value: string): string {
  return value.replace(/\D/g, '').slice(0, ID_LENGTH)
}

export function resolveIdCheck(value: string, forceInvalid: boolean): IdCheckStatus {
  if (!isIdComplete(value)) return 'idle'
  return forceInvalid ? 'invalid' : 'valid'
}
