import type React from 'react'

// ── Font ──────────────────────────────────────────────────────────────────────
export const F = 'Rubik, sans-serif'

// ── Face recognition ─────────────────────────────────────────────────────────
export const CIRCUMFERENCE = 2 * Math.PI * 125
export const SCAN_DURATION = 3000

// ── ID card assets ────────────────────────────────────────────────────────────
export const CARD_EMBLEM_LEFT = '/images/card-emblem-left.png'
export const CARD_EMBLEM_RIGHT = '/images/card-emblem-right.png'
export const CARD_LOGO = '/images/card-logo.svg'
export const CARD_BARCODE = '/images/card-barcode.svg'
export const CARD_PHOTO = '/images/card-photo.jpg'
export const DIGITAL_CIRCLE_LG = '/images/digital-circle-lg.svg'
export const DIGITAL_CIRCLE_MD = '/images/digital-circle-md.svg'
export const DIGITAL_CIRCLE_SM = '/images/digital-circle-sm.svg'

// ── Fees step assets ──────────────────────────────────────────────────────────
export const FEES_TICK = '/images/fees-tick.svg'
export const FEES_WARN = '/images/fees-warn.svg'
export const FEES_EXCL = '/images/fees-excl.svg'
export const FEES_ANIM = '/images/fees-anim.gif'
export const FEES_RADIO_ON = '/images/fees-radio-on.svg'

// ── Biometrics assets ─────────────────────────────────────────────────────────
export const BIO_CAM_BG = '/images/bio-cam-bg.png'
export const BIO_FACE_GREEN = '/images/bio-face-green.png'
export const BIO_FACE_RED = '/images/bio-face-red.png'
export const BIO_DOT_GREEN = '/images/bio-dot-green.svg'
export const BIO_DOT_RED = '/images/bio-dot-red.svg'
export const BIO_CAM_ICON = '/images/bio-cam-icon.svg'
export const BIO_LIGHT_ICON = '/images/bio-light-icon.svg'
export const BIO_ANGLE_ICON = '/images/bio-angle-icon.svg'
export const BIO_HEADER_BG = '/images/bio-header-bg.png'
export const BIO_FP_SCAN_BG = '/images/fingerprint_scanner.png'
export const BIO_FP_ICON = '/images/bio-fp-icon.svg'
export const BIO_FP_SYMBOL = '/images/bio-fp-symbol.svg'
export const BIO_CAPTURED_PHOTO = '/images/bio-captured-photo.png'

export const FP_SETS = [
  {
    label: '4 אצבעות - יד ימין',
    fingers: ['מורה', 'אמה', 'קמיצה', 'זרת'],
    instruction: '*לתושב - הנח 4 אצבעות יד ימין על הסורק',
  },
  {
    label: '4 אצבעות - יד שמאל',
    fingers: ['זרת', 'קמיצה', 'אמה', 'מורה'],
    instruction: '*לתושב - הנח 4 אצבעות יד שמאל על הסורק',
  },
  {
    label: '2 אגודלים',
    fingers: ['אגודל שמאל', 'אגודל ימין'],
    instruction: '*לתושב - הנח 2 אגודלים על הסורק',
  },
]

export const FINGER_LEFTS_4 = [54, 249, 465, 694]
export const FINGER_LEFTS_2 = [249, 465]

export const FROSTED_STYLE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  borderRadius: 16,
  backdropFilter: 'blur(15.35px)',
  background: 'rgba(255,255,255,0.6)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  zIndex: 2,
}
