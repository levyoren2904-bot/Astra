// Search for the אגרות table in ניהול מערכת (Figma 100:15628).
// Kept out of the component so it can be tested without rendering, same as idCheck.

/** The fields the search reads. The הערה column is deliberately NOT here - see matchesFeeQuery. */
export interface FeeSearchable {
  residentName: string
  idNumber: string
  feeNumber: string
}

/** Trims the query and collapses runs of whitespace, so "חמודי   מוחמד" matches "חמודי מוחמד". */
export const normalizeFeeQuery = (raw: string): string => raw.trim().replace(/\s+/g, ' ')

/**
 * A row matches when the query appears in the resident name, the ID, or the fee number -
 * the three values the row *is*. The note is the operator's own free text, not an
 * identifier, so it is not searchable.
 * An empty (or whitespace-only) query matches every row.
 */
export const matchesFeeQuery = (row: FeeSearchable, query: string): boolean => {
  const needle = normalizeFeeQuery(query).toLowerCase()
  if (!needle) return true
  return [row.residentName, row.idNumber, row.feeNumber].some((field) =>
    normalizeFeeQuery(field).toLowerCase().includes(needle),
  )
}

export const filterFees = <T extends FeeSearchable>(rows: T[], query: string): T[] =>
  rows.filter((row) => matchesFeeQuery(row, query))
