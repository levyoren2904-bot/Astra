import styled from 'styled-components'
import { FROSTED_STYLE } from '@/pages/WizardPage/constants'

const BF = 'Rubik, sans-serif'

export const BioRoot = styled.div({
  display: 'flex',
  flex: 1,
  minHeight: 0,
  width: '100%',
  gap: 24,
  alignItems: 'stretch',
  overflow: 'hidden',
})

// ── Shared panel header ────────────────────────────────────────────────────────

export const BioHeader = styled.div({
  position: 'relative',
  height: 68,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  overflow: 'hidden',
})

export const HeaderBgImg = styled.img({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const BioHeaderTitle = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  whiteSpace: 'nowrap',
  position: 'relative',
})

// ── Fingerprints panel ─────────────────────────────────────────────────────────

export const FpPanel = styled.div({
  position: 'relative',
  width: 908,
  height: '100%',
  background: '#fff',
  borderRadius: 16,
  flexShrink: 0,
  overflow: 'hidden',
})

export const FpIconWrap = styled.div({
  position: 'relative',
  width: 449,
})

export const BioIcon = styled.img({
  width: 58,
  height: 32,
})

export const ScannerWrap = styled.div({
  position: 'absolute',
  left: 0,
  top: 107,
  right: 0,
  height: 339,
  overflow: 'hidden',
})

export const ScannerImg = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const SetLabelRow = styled.div({
  position: 'absolute',
  top: 66,
  right: 16,
  display: 'flex',
  gap: 7,
  alignItems: 'center',
})

export const SetDot = styled.img({
  width: 14,
  height: 14,
  flexShrink: 0,
})

export const SetLabelText = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const SetInstruction = styled.span({
  position: 'absolute',
  top: 74,
  left: 16,
  fontFamily: BF,
  fontSize: 12,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const FingerLabelWrap = styled.div<{ $left: number }>(({ $left }) => ({
  position: 'absolute',
  left: $left,
  top: 456,
  width: 191,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const FingerLabelText = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  textAlign: 'center',
})

export const FpErrorEllipse = styled.div<{ $left: number }>(({ $left }) => ({
  position: 'absolute',
  left: $left,
  top: 113,
  width: 192,
  height: 327,
  borderRadius: '50%',
  border: '5px dashed #F44336',
  pointerEvents: 'none',
  zIndex: 1,
}))

export const BottomActionBar = styled.div({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: 908,
  height: 68,
  background: 'linear-gradient(to bottom, rgba(213,212,213,0), #d5d4d5)',
  borderRadius: '0 0 16px 16px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
})

export const ActionBtns = styled.div({
  display: 'flex',
  gap: 16,
})

export const LockBtn = styled.button<{ $done: boolean }>(({ $done }) => ({
  background: '#5c5def',
  border: 'none',
  borderRadius: 4,
  height: 32,
  padding: '0 16px',
  cursor: $done ? 'default' : 'pointer',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  whiteSpace: 'nowrap',
  opacity: $done ? 0.6 : 1,
}))

export const BackSetBtn = styled.button({
  border: '1px solid #5c5def',
  background: 'transparent',
  borderRadius: 4,
  height: 32,
  padding: '0 16px',
  cursor: 'pointer',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const ExcludeBtn = styled.button<{ $visible: boolean }>(({ $visible }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 16px',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 400,
  color: '#5c5def',
  whiteSpace: 'nowrap',
  visibility: $visible ? 'visible' : 'hidden',
}))

export const FrostedOverlay = styled.div({
  ...FROSTED_STYLE,
})

export const FrostedLabel = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
})

export const FpSymbolImg = styled.img({
  width: 60,
  height: 60,
  opacity: 0.5,
})

// ── Face camera panel ──────────────────────────────────────────────────────────

export const FacePanel = styled.div({
  position: 'relative',
  width: 908,
  height: '100%',
  borderRadius: 16,
  flexShrink: 0,
  overflow: 'hidden',
})

export const CamBgWrap = styled.div({
  position: 'absolute',
  inset: 0,
  borderRadius: 16,
  overflow: 'hidden',
})

export const CamBgImg = styled.img({
  position: 'absolute',
  width: '100%',
  height: '165.37%',
  top: '-37.32%',
  left: 0,
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const CamOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  background: 'rgba(255,255,255,0.2)',
})

export const FaceHeaderLeft = styled.div({
  position: 'relative',
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  width: 449,
})

export const AngleChip = styled.div({
  display: 'flex',
  gap: 4,
  height: 32,
  alignItems: 'center',
  padding: '4px 8px',
  borderRadius: 4,
})

export const AngleDot = styled.img({
  width: 14,
  height: 14,
})

export const AngleIcon = styled.img({
  width: 24,
  height: 24,
})

export const ResidentInstruction = styled.span({
  position: 'absolute',
  top: 76,
  right: 16,
  fontFamily: BF,
  fontSize: 12,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const FaceCircleWrap = styled.div({
  position: 'absolute',
  left: 264,
  top: 102,
  width: 375,
  height: 375,
})

export const FaceCircleImg = styled.img({
  width: 375,
  height: 375,
})

export const AngleErrorChip = styled.div({
  position: 'absolute',
  bottom: 115,
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#f5f5f6',
  borderRadius: 8,
  padding: 8,
})

export const AngleErrorText = styled.span({
  fontFamily: BF,
  fontSize: 16,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const CaptureBar = styled.div({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: 95,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25))',
  borderRadius: '0 0 16px 16px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingBottom: 10,
})

export const CaptureBtn = styled.button<{ $ok: boolean }>(({ $ok }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: '#fff',
  border: '4px solid rgba(255,255,255,0.5)',
  cursor: $ok ? 'pointer' : 'not-allowed',
  opacity: $ok ? 1 : 0.5,
  boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
  transition: 'opacity 0.15s, transform 0.15s',
}))

export const CapturedThumb = styled.div({
  width: 138,
  height: 138,
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 0 30.8px 5px rgba(0,0,0,0.25)',
})

export const CapturedThumbImg = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const RetakeBtn = styled.button({
  background: '#5c5def',
  border: 'none',
  borderRadius: 4,
  height: 32,
  padding: '0 16px',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  whiteSpace: 'nowrap',
})

// ── DEV toggles ────────────────────────────────────────────────────────────────

export const DevPanel = styled.div({
  position: 'fixed',
  bottom: 80,
  right: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  zIndex: 9999,
})

export const DevBtnBio = styled.button<{ $active: boolean }>(({ $active }) => ({
  padding: '4px 8px',
  fontSize: 11,
  background: $active ? '#f65e53' : '#eee',
  color: $active ? '#fff' : '#000',
  border: '1px solid #ccc',
  borderRadius: 4,
  cursor: 'pointer',
}))
