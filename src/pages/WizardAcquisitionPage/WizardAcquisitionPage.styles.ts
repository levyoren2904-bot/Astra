import styled from 'styled-components'
import {
  BioAngleChip,
  BioAngleDotImg,
  BioAngleIconImg,
  BioCapturedThumb,
  BioCapturedThumbImg,
  BioCaptureBarArea,
  BioCaptureBtnSimple,
  BioFaceCamImg,
  BioFaceCamTint,
  BioFaceCamWrap,
  BioFaceCircleImg,
  BioFaceCircleWrap,
  BioFaceHeaderIcons,
  BioFpBottomBar,
  BioFpSymbolMuted,
  BioFrostedBackdrop,
  BioHeaderBgImg,
  BioHeaderIconRegion,
  BioIconMedium,
  BioPanel908,
  BioPanelHeader,
  BioPanelTitle,
  BioResidentHint,
  BioScannerImage,
  BioScannerRegion,
  BioSetDotImg,
  BioSetLabelRow,
  BioSetTitleText,
} from '@/components/biometrics/BiometricsPrimitives.styles'

const F = 'Rubik, sans-serif'

// ── Page shell ────────────────────────────────────────────────────────────────

export const PageRoot = styled.div({
  height: '100dvh',
})

export const Backdrop = styled.div({
  background: 'rgba(236,236,236,0.6)',
})

export const ModalBox = styled.div({
  left: '50%',
  transform: 'translateX(-50%)',
  top: 24,
  width: 1872,
  maxWidth: 'calc(100vw - 48px)',
  height: 'calc(100dvh - 48px)',
  background: '#fbfbfb',
  borderRadius: 16,
  boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
  padding: 16,
  gap: 24,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
})

export const ModalHeaderRow = styled.div({
  padding: '0 16px 16px 16px',
  borderBottom: '1px solid #d7d7da',
  display: 'flex',
  gap: 40,
  alignItems: 'center',
  flexShrink: 0,
})

export const PageTitle = styled.p({
  fontFamily: F,
  fontSize: 24,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const HeaderResidentInfo = styled.div({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 1,
  minWidth: 0,
})

export const HeaderResidentName = styled.p({
  fontFamily: F,
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const HeaderResidentId = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#666',
  margin: 0,
  whiteSpace: 'nowrap',
})

// ── Stepper ───────────────────────────────────────────────────────────────────

export const StepCircleOuter = styled.div({
  width: 48,
  height: 48,
  position: 'relative',
  flexShrink: 0,
})

export const StepRingBg = styled.div({
  position: 'absolute',
  inset: 0,
  borderRadius: '50%',
  background: 'rgba(92,93,239,0.18)',
})

export const StepInnerCircle = styled.div({
  position: 'absolute',
  inset: 6,
  borderRadius: '50%',
  background: '#5c5def',
})

export const StepInnerCircleInactive = styled.div({
  position: 'absolute',
  inset: 6,
  borderRadius: '50%',
  border: '1px solid #878792',
})

export const StepNumActive = styled.span({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#fff',
})

export const StepNumInactive = styled.span({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#666',
})

export const StepLabelWrap = styled.div({
  width: 124,
})

export const StepText = styled.p<{ $active: boolean }>(({ $active }) => ({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.4,
  textAlign: 'right',
  margin: 0,
  color: $active ? '#242424' : '#666',
}))

export const ConnectorOuter = styled.div({
  width: 50,
  height: 2,
  overflow: 'hidden',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ConnectorLine = styled.div({
  width: 266,
  height: 1.5,
  background: '#878792',
})

export const StepCheckSvg = styled.svg({
  position: 'relative',
  zIndex: 1,
})

// ── Step 1 — ID Entry ─────────────────────────────────────────────────────────

export const IdSection = styled.div({
  width: 496,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const IdSectionTitle = styled.p({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
  textAlign: 'right',
})

export const IdInput = styled.input({
  width: '100%',
  height: 40,
  border: '1px solid #666',
  borderRadius: 4,
  padding: '4px 8px',
  fontFamily: F,
  fontSize: 16,
  color: '#242424',
  outline: 'none',
  textAlign: 'right',
  background: '#fff',
  '&:focus': { borderColor: '#5c5def' },
  '&::placeholder': { color: '#b3b3b3' },
})

// ── Step 2 — Personal Details Panel ──────────────────────────────────────────

export const PersonalPanel = styled.div({
  border: '1px solid #d7d7da',
  borderRadius: 16,
  padding: '16px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'flex-end',
  flexShrink: 0,
  width: '100%',
})

export const PersonalInner = styled.div({
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
  padding: '0 16px',
  width: 600,
  flexShrink: 0,
})

export const DemographicsSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'flex-end',
  flexShrink: 0,
})

export const ResidentName = styled.p({
  fontFamily: F,
  fontSize: 20,
  fontWeight: 700,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const ResidentNameAr = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#5d607a',
  lineHeight: '18px',
  margin: 0,
})

export const DemoGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, fit-content(100%))',
  gap: 16,
  width: 440,
})

export const DemoCell = styled.div({
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  justifyContent: 'flex-end',
})

export const DemoLabel = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const DemoValue = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 500,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const PhotoSection = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  minWidth: 0,
})

export const PhotoCircle = styled.div({
  width: 112,
  height: 112,
  borderRadius: '50%',
  background: '#d7d7da',
  flexShrink: 0,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const BadgeRow = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, fit-content(100%))',
  gap: 16,
  padding: 16,
  flexShrink: 0,
})

export const BadgeItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  height: 54,
  width: 71,
  alignItems: 'center',
})

export const BadgeLabel = styled.p({
  fontFamily: F,
  fontSize: 12,
  fontWeight: 400,
  color: '#666',
  margin: 0,
  textAlign: 'center',
  lineHeight: 'normal',
})

// ── Step 2 — Bottom Info Panels ───────────────────────────────────────────────

export const BottomRow = styled.div({
  flex: 1,
  minHeight: 0,
  display: 'flex',
  gap: 24,
  alignItems: 'stretch',
  width: '100%',
  overflow: 'hidden',
})

export const InfoPanel = styled.div({
  flex: 1,
  border: '1px solid #d7d7da',
  borderRadius: 16,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  overflow: 'hidden',
  minWidth: 0,
})

export const InfoPanelHeader = styled.div({
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  width: '100%',
  flexShrink: 0,
})

export const InfoPanelTitle = styled.p({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: '#1e1f33',
  margin: 0,
  flex: 1,
  textAlign: 'right',
  minWidth: 0,
})

export const InfoPanelBadge = styled.div({
  width: 32,
  height: 32,
  borderRadius: 8,
  background: '#b2b3f7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const InfoPanelCards = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  overflowY: 'auto',
  flex: 1,
  minHeight: 0,
})

export const CardEntry = styled.div({
  background: '#f6f6fe',
  borderRadius: 12,
  height: 78,
  padding: 16,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexShrink: 0,
  width: '100%',
  gap: 8,
})

export const CardChip = styled.div<{ $bg: string }>(({ $bg }) => ({
  background: $bg,
  borderRadius: 4,
  padding: '1.5px 3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 64,
  flexShrink: 0,
  alignSelf: 'flex-start',
}))

export const CardChipText = styled.span<{ $color: string }>(({ $color }) => ({
  fontFamily: F,
  fontSize: 12,
  fontWeight: 500,
  color: $color,
  whiteSpace: 'nowrap',
  lineHeight: 1.4,
}))

export const CardDetails = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 8,
  alignItems: 'flex-end',
  justifyContent: 'center',
  minWidth: 0,
})

export const CardTitle = styled.p({
  fontFamily: F,
  fontSize: 20,
  fontWeight: 600,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
  lineHeight: 1.1,
})

export const CardValidityRow = styled.div({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
})

export const CardDate = styled.p({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const CardValidityLabel = styled.p({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 500,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
})

// ── Step 3 — Biometrics (shared primitives + acquisition overlays) ────────────

export const BioPanelsRow = styled.div({
  flex: 1,
  minHeight: 0,
  display: 'flex',
  gap: 24,
  alignItems: 'stretch',
  position: 'relative',
  width: '100%',
})

export const BioPanel = BioPanel908
export const BioPanelHeaderRow = BioPanelHeader
export { BioHeaderBgImg, BioPanelTitle }
export const FpHeaderIconWrap = BioHeaderIconRegion
export const BioIconImg = BioIconMedium
export const FpScannerWrapper = BioScannerRegion
export const FpScannerImage = BioScannerImage
export const FpSetLabel = BioSetLabelRow
export const FpSetDotImg = BioSetDotImg
export const FpSetText = BioSetTitleText

export const FpBottomBar = styled(BioFpBottomBar)({
  gap: 16,
})

export const FpFrostedOverlay = BioFrostedBackdrop

export const FpOverlayCard = styled.div({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
  background: 'rgba(0,0,0,0)',
  borderRadius: 8,
  boxShadow: '0 0 30.8px 5px rgba(0,0,0,0.25)',
  padding: 16,
  gap: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
})

export const FpOverlayTitle = styled.p({
  fontFamily: F,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const FpOverlaySub = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const FpIconArea = styled.div({
  width: 160,
  height: 161,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const FpOverlaySymbolImg = BioFpSymbolMuted

export const CamBgWrapper = BioFaceCamWrap
export const CamBgImage = BioFaceCamImg
export const CamOverlayDiv = BioFaceCamTint
export const FaceHeaderIconsLeft = BioFaceHeaderIcons
export const FaceAngleChip = BioAngleChip
export const FaceAngleDotImg = BioAngleDotImg
export const FaceAngleIconImg = BioAngleIconImg
export const FaceHint = BioResidentHint
export const FaceCircleWrap = BioFaceCircleWrap
export const FaceCircleImage = BioFaceCircleImg
export const FaceCapturedThumb = BioCapturedThumb
export const FaceCapturedThumbImg = BioCapturedThumbImg
export const BioCaptureBar = BioCaptureBarArea
export const CaptureBtnCircle = BioCaptureBtnSimple

// ── Action bar ────────────────────────────────────────────────────────────────

export const NextBtn = styled.button<{ $disabled?: boolean }>(({ $disabled }) => ({
  background: $disabled ? '#d7d7da' : '#5c5def',
  height: 32,
  padding: '0 16px',
  minWidth: 109,
  borderRadius: 4,
  border: 'none',
  cursor: $disabled ? 'not-allowed' : 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}))

export const OutlinedBtn = styled.button({
  border: '1px solid #5c5def',
  height: 32,
  padding: '0 16px',
  borderRadius: 4,
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const OutlinedBackBtn = styled(OutlinedBtn)({
  width: 70,
})

export const GhostBtn = styled.button({
  height: 32,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const DisabledBtn = styled.button({
  height: 32,
  width: 82,
  background: '#f5f5f6',
  border: '1px solid #8c8c8c',
  borderRadius: 4,
  cursor: 'not-allowed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const BtnLabel = styled.span<{ $color?: string }>(({ $color = 'white' }) => ({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: $color,
  whiteSpace: 'nowrap',
  padding: '0 4px',
}))

// Dev bar
export const DevBar = styled.div({
  position: 'fixed',
  bottom: 8,
  right: 8,
  zIndex: 9999,
  display: 'flex',
  gap: 4,
})

export const DevBtn = styled.button({
  background: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  padding: '4px 8px',
  fontSize: 11,
  cursor: 'pointer',
})
