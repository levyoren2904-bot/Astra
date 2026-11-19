import styled, { keyframes } from 'styled-components'
import { FROSTED_STYLE } from '@/pages/WizardPage/constants'

const BF = 'Rubik, sans-serif'

/** 908px-wide biometrics panel shell (wizard + acquisition). */
export const BioPanel908 = styled.div({
  position: 'relative',
  width: 908,
  height: '100%',
  background: '#fff',
  borderRadius: 16,
  flexShrink: 0,
  overflow: 'hidden',
})

export const BioPanelHeader = styled.div({
  position: 'relative',
  height: 68,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  overflow: 'hidden',
})

export const BioHeaderBgImg = styled.img({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const BioPanelTitle = styled.p({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
  position: 'relative',
})

/** Left region for FP icon or face status icons (449px). */
export const BioHeaderIconRegion = styled.div({
  position: 'relative',
  width: 449,
})

export const BioIconMedium = styled.img({
  width: 58,
  height: 32,
})

export const BioScannerRegion = styled.div({
  position: 'absolute',
  left: 0,
  top: 107,
  right: 0,
  height: 339,
  overflow: 'hidden',
})

export const BioScannerImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const BioSetLabelRow = styled.div({
  position: 'absolute',
  top: 66,
  right: 16,
  display: 'flex',
  gap: 7,
  alignItems: 'center',
})

export const BioSetDotImg = styled.img({
  width: 14,
  height: 14,
  flexShrink: 0,
})

export const BioSetTitleText = styled.p({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
  position: 'relative',
})

export const BioFpBottomBar = styled.div({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 68,
  background: 'linear-gradient(to bottom, rgba(213,212,213,0), #d5d4d5)',
  borderRadius: '0 0 16px 16px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
})

export const BioFaceCamWrap = styled.div({
  position: 'absolute',
  inset: 0,
  borderRadius: 16,
  overflow: 'hidden',
})

export const BioFaceCamImg = styled.img({
  position: 'absolute',
  width: '100%',
  height: '165.37%',
  top: '-37.32%',
  left: 0,
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const BioFaceCamTint = styled.div({
  position: 'absolute',
  inset: 0,
  background: 'rgba(255,255,255,0.2)',
})

export const BioFaceHeaderIcons = styled.div({
  position: 'relative',
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  width: 449,
})

export const BioAngleChip = styled.div({
  display: 'flex',
  gap: 4,
  height: 32,
  alignItems: 'center',
  padding: '4px 8px',
  borderRadius: 4,
})

export const BioAngleDotImg = styled.img({
  width: 14,
  height: 14,
})

export const BioAngleIconImg = styled.img({
  width: 24,
  height: 24,
})

export const BioResidentHint = styled.p({
  position: 'absolute',
  right: 16,
  top: 76,
  fontFamily: BF,
  fontSize: 12,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

/** Second line under the resident hint: the same instruction transliterated (Figma 804:5784, 22px below). */
export const BioResidentHintTranslit = styled(BioResidentHint)({
  top: 98,
})

export const BioFaceCircleWrap = styled.div({
  position: 'absolute',
  left: 264,
  top: 102,
  width: 375,
  height: 375,
})

export const BioFaceCircleImg = styled.img({
  width: 375,
  height: 375,
})

export const BioCaptureBarArea = styled.div({
  position: 'absolute',
  left: 0,
  bottom: 0,
  right: 0,
  height: 95,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25))',
  borderRadius: '0 0 16px 16px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingBottom: 10,
})

/** Acquisition / simple capture trigger (always interactive). */
export const BioCaptureBtnSimple = styled.button({
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: '#fff',
  border: '4px solid rgba(255,255,255,0.5)',
  cursor: 'pointer',
  boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
})

/** Full-panel frosted layer without inner flex (card centered separately). */
export const BioFrostedBackdrop = styled.div({
  position: 'absolute',
  inset: 0,
  backdropFilter: 'blur(15.35px)',
  background: 'rgba(255,255,255,0.6)',
  borderRadius: 16,
  zIndex: 2,
})

/** Wizard overlay with centered column content (face idle / FP lock). */
export const BioFrostedOverlayFlex = styled.div({
  ...FROSTED_STYLE,
})

export const BioCapturedThumb = styled.div({
  width: 138,
  height: 138,
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 0 30.8px 5px rgba(0,0,0,0.25)',
})

/**
 * Captured-photo circle on the post-capture overlay, 1.5x the Figma 138px
 * (Oren, 2026-11-12: make the captured photo more prominent). The
 * face-check card uses its own 168px BioFaceErrThumb.
 */
export const BioCapturedThumbLarge = styled(BioCapturedThumb)({
  width: 207,
  height: 207,
  boxShadow: '0 0 46px 7.5px rgba(0,0,0,0.25)',
})

/** Photo on the face-check card: 168px at 1080p (was 138), Shira 2026-11-19; shrinks on short screens. */
const FACE_ERR_PHOTO = 'clamp(130px, 18.5vh, 168px)'
export const BioFaceErrThumb = styled(BioCapturedThumb)({
  width: FACE_ERR_PHOTO,
  height: FACE_ERR_PHOTO,
})

export const BioCapturedThumbImg = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const BioFpSymbolMuted = styled.img({
  width: 60,
  height: 60,
  opacity: 0.5,
})

/** Disconnected-hardware card: icon + title + sub + retry button, centered over BioFrostedBackdrop. */
export const BioHwCard = styled.div({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
})

export const BioHwIconArea = styled.div({
  width: 64,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 4,
})

export const BioHwTitle = styled.p({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const BioHwSub = styled.p({
  fontFamily: BF,
  fontSize: 14,
  fontWeight: 400,
  color: '#666666',
  margin: '0 0 8px',
  whiteSpace: 'nowrap',
})

const hwSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

export const BioHwSpinnerSvg = styled.svg`
  animation: ${hwSpin} 900ms linear infinite;
`

export const BioHwRetryBtn = styled.button<{ $checking?: boolean }>(({ $checking }) => ({
  background: '#5c5def',
  height: 32,
  padding: '0 16px',
  minWidth: 109,
  borderRadius: 4,
  border: 'none',
  cursor: $checking ? 'default' : 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  opacity: $checking ? 0.75 : 1,
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  whiteSpace: 'nowrap',
}))

/* ── Face capture errors (post-capture quality check, Figma 800:5969) ── */

/** Card listing what the face-quality check flagged after the photo was taken. */
export const BioFaceErrCard = styled.div({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
  width: 529,
  // Oren 2026-11-19: more air - 24 around and between groups (was 16/16) at 1080p,
  // easing down on shorter screens (laptops) so the card still fits its panel.
  padding: 'clamp(16px, 2.2vh, 24px)',
  gap: 'clamp(12px, 2.2vh, 24px)',
  // Last resort on very short screens: scroll inside the card rather than clip the buttons.
  maxHeight: 'calc(100% - 24px)',
  borderRadius: 8,
  overflowX: 'hidden',
  overflowY: 'auto',
  // Children keep their height when the card scrolls instead of being squeezed.
  '& > *': { flexShrink: 0 },
  // Figma: GLASS + DROP_SHADOW 0/0 30.8 spread 5 - same translation as the acquisition overlay card.
  boxShadow: '0 0 30.8px 5px rgba(0,0,0,0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

/** Title + sub as one group, held closer than the card's section gap. */
export const BioFaceErrHeader = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
})

export const BioFaceErrTitle = styled.h3({
  margin: 0,
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 'normal',
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const BioFaceErrSub = styled.p({
  margin: 0,
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 'normal',
  color: '#6e6e78',
  whiteSpace: 'nowrap',
})

/**
 * Slot for the captured photo. Was Figma's 160x161 slot around a 138px thumb;
 * Shira 2026-11-19: bigger photo, shorter rows - the slot now hugs the photo.
 */
export const BioFaceErrPhotoSlot = styled.div({
  width: FACE_ERR_PHOTO,
  height: FACE_ERR_PHOTO,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const BioFaceErrList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const BioFaceErrRow = styled.li({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 12,
  // 8px top/bottom (was 12) - Shira 2026-11-19: shorter rows, more room for the photo.
  padding: '8px 12px',
  background: '#f5f5f6',
  border: '1px solid #56565d',
  borderRadius: 8,
})

export const BioFaceErrIcon = styled.img({
  width: 24,
  height: 24,
  flexShrink: 0,
})

/** Label + optional transliteration line (Figma row "Text", vertical, gap 4). */
export const BioFaceErrTextCol = styled.div({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})

export const BioFaceErrTranslit = styled.span({
  fontFamily: BF,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 'normal',
  color: '#6e6e78',
  textAlign: 'right',
})

export const BioFaceErrText = styled.span({
  minWidth: 0,
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#242424',
  textAlign: 'right',
})

export const BioFaceErrRetakeBtn = styled.button({
  background: '#5c5def',
  height: 32,
  padding: '0 16px',
  borderRadius: 4,
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  whiteSpace: 'nowrap',
  '&:hover': { opacity: 0.85 },
})

/**
 * Warning state only (Figma 819:6130): retake stays primary, accepting the
 * borderline photo is secondary. RTL dialog rule - primary leftmost, secondary
 * to its right - so the row is pinned LTR and the DOM order is [primary, secondary].
 */
export const BioFaceErrActions = styled.div({
  display: 'flex',
  direction: 'ltr',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
})

export const BioFaceErrAcceptBtn = styled.button({
  background: 'transparent',
  height: 32,
  padding: '0 16px',
  borderRadius: 4,
  border: '1px solid #5c5def',
  cursor: 'pointer',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
  '&:hover': { background: 'rgba(92,93,239,0.08)' },
})
