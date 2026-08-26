// ── Shared domain types ────────────────────────────────────────────────────────

export type StatusVariant = 'green' | 'orange' | 'purple' | 'red' | 'gray'

export type PermitIconType = 'license' | 'work'

/** כר״ח body fill — 'default' = the green איו״ש card, 'seam' = the orange תפר card. */
export type CardColor = 'default' | 'seam'

/** Which face of the כר״ח is shown — 'back' is the blank face with the magnetic stripe. */
export type CardSide = 'front' | 'back'

export interface Resident {
  id: string
  nameHe: string
  nameAr: string
  birthDate: string
  age: number
  maritalStatus: string
  district: string
  city: string
  street: string
  email: string
  phone: string
}

export interface Permit {
  id: string
  type: string
  iconType: PermitIconType
  status: string
  statusVariant: StatusVariant
  validFrom: string
  validTo: string
  destination: string | null
}

export interface Prohibition {
  type: string
  location: string
  status: string
  validFrom: string
  validTo: string
}

export interface CardHistory {
  type: string
  status: string
  statusVariant: StatusVariant
  validFrom: string
  validTo: string
}

export interface Eligibility {
  cardType: string
  issuedDate: string
  expiryDate: string
  serial: string
}
