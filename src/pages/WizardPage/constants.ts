import type React from 'react'
import type { FaceIssue } from '@/lib/faceCheck'

// ── Font ──────────────────────────────────────────────────────────────────────
export const F = 'Rubik, sans-serif'

// ── Face recognition ─────────────────────────────────────────────────────────
export const CIRCUMFERENCE = 2 * Math.PI * 125
export const SCAN_DURATION = 3000

// ── Hardware connectivity (mock) ─────────────────────────────────────────────
/** Delay for the "בדוק שנית" hardware recheck — same convention as ID_CHECK_DELAY. */
export const HARDWARE_CHECK_DELAY = 800

/**
 * Mock results of the post-capture face-quality check (the real SDK returns a
 * named reason per issue). `error` is deliberately mixed - one warning among
 * the errors - to show that an error wins. Dev toggle cycles ok -> error -> warning.
 */
export type FaceCheckMock = 'ok' | 'error' | 'warning'
export const FACE_CHECK_MOCK_ORDER: readonly FaceCheckMock[] = ['ok', 'error', 'warning']
export const MOCK_FACE_CHECK: Record<FaceCheckMock, readonly FaceIssue[]> = {
  ok: [],
  error: [
    { label: 'התקרב למצלמה', severity: 'error', translit: 'אִקְתַרִבּ מִן אֶלְכַּאמֵרַא' },
    {
      label: 'הורד את המשקפיים/הכובע',
      severity: 'error',
      translit: 'אִנְזִע אֶלְנַטַּארַאת / אֶלְקֻבַּעַה',
    },
    { label: 'תאורה לא אחידה', severity: 'warning' },
  ],
  warning: [
    { label: 'התרחק מהמצלמה', severity: 'warning', translit: 'אִבְּתַעִד עַן אֶלְכַּאמֵרַא' },
    { label: 'רקע לא אחיד', severity: 'warning' },
  ],
}
export const nextFaceCheckMock = (m: FaceCheckMock): FaceCheckMock =>
  FACE_CHECK_MOCK_ORDER[(FACE_CHECK_MOCK_ORDER.indexOf(m) + 1) % FACE_CHECK_MOCK_ORDER.length]

// ── Resident instructions ────────────────────────────────────────────────────
/** Face panel: the Hebrew instruction and its transliteration, read aloud to the resident (Figma 13:5971). */
export const FACE_HINT = '*לתושב - אנא עמוד מול המצלמה.'
export const FACE_HINT_TRANSLIT = '*תעתיק - קִף מֻקַאבִּל אֶלְכַּאמֵרַא.'

// ── ID card assets ────────────────────────────────────────────────────────────
export const CARD_EMBLEM_LEFT = '/images/card-emblem-left.png'
export const CARD_EMBLEM_RIGHT = '/images/card-emblem-right.png'
export const CARD_LOGO = '/images/card-logo.svg'
export const CARD_BARCODE = '/images/card-barcode.svg'
export const CARD_PHOTO = '/images/card-photo.jpg'
/** Anonymous silhouette used when the card is drawn as a TYPE template, not a person's card. */
export const CARD_PHOTO_SILHOUETTE = '/images/card-photo-silhouette.jpg'
export const DIGITAL_CIRCLE_LG = '/images/digital-circle-lg.svg'
export const DIGITAL_CIRCLE_MD = '/images/digital-circle-md.svg'
export const DIGITAL_CIRCLE_SM = '/images/digital-circle-sm.svg'

// ── Fees step assets ──────────────────────────────────────────────────────────
export const FEES_TICK = '/images/fees-tick.svg'
export const FEES_WARN = '/images/fees-warn.svg'
export const FEES_EXCL = '/images/fees-excl.svg'
export const FEES_ANIM = '/images/fees-anim.gif'
export const FEES_RADIO_ON = '/images/fees-radio-on.svg'
export const FEES_PHONE_MOCKUP = '/images/fees-phone-mockup.png'

// ── Biometrics assets ─────────────────────────────────────────────────────────
export const BIO_CAM_BG = '/images/bio-cam-bg.svg'
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
export const BIO_CAPTURED_PHOTO = '/images/bio-captured-photo.svg'

/** Fingerprint sets. `instruction` is the panel heading (what the resident is told, in Hebrew);
 *  `translit` sits under it and is what the operator reads aloud (Oren, 2026-11-24). */
export const FP_SETS = [
  {
    fingers: ['מורה', 'אמה', 'קמיצה', 'זרת'],
    instruction: 'הנח 4 אצבעות יד ימין על הסורק',
    translit: '*תעתיק - דַע אַרְבַּעַת אַצַאבִּע אֶלְיַד אֶלְיַמְנַא עַלַא אֶלְמַאסִח אֶ-דַוְּוִי',
  },
  {
    fingers: ['זרת', 'קמיצה', 'אמה', 'מורה'],
    instruction: 'הנח 4 אצבעות יד שמאל על הסורק',
    translit: '*תעתיק - דַע אַרְבַּעַת אַצַאבִּע אֶלְיַד אֶלְיִסְרַא עַלַא אֶלְמַאסִח אֶ-דַוְּוִי',
  },
  {
    fingers: ['אגודל שמאל', 'אגודל ימין'],
    instruction: 'הנח 2 אגודלים על הסורק',
    translit: '*תעתיק - דַע אִבְּהַאמַי אֶלְיַדֵין עַלַא אֶלְמַאסִח אֶ-דַוְּוִי',
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
