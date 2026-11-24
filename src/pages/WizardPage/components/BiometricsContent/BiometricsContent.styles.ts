import styled from 'styled-components'
import {
  BioAngleChip,
  BioAngleDotImg,
  BioAngleIconImg,
  BioCapturedThumbLarge,
  BioCapturedThumbImg,
  BioCaptureBarArea,
  BioFaceCamImg,
  BioFaceCamTint,
  BioFaceHeaderFade,
  BioTitleSeparator,
  BioFaceCamWrap,
  BioFaceCircleImg,
  BioFaceCircleWrap,
  BioFaceHeaderIcons,
  BioFpBottomBar,
  BioFpSymbolMuted,
  BioFrostedOverlayFlex,
  BioHeaderBgImg,
  BioHeaderIconRegion,
  BioIconMedium,
  BioPanel908,
  BioPanelHeader,
  BioPanelTitle,
  BioResidentHint,
  BioResidentHintTranslit,
  BioFpTitleSeparator,
  BioFpResidentHint,
  BioFpResidentHintTranslit,
  BioScannerImage,
  BioScannerRegion,
} from '@/components/biometrics/BiometricsPrimitives.styles'

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

export const BioHeader = BioPanelHeader
export const HeaderBgImg = BioHeaderBgImg
export const BioHeaderTitle = BioPanelTitle

export const FpPanel = BioPanel908
export const FpIconWrap = BioHeaderIconRegion
export const BioIcon = BioIconMedium
/** The instruction pair lives in the title row now (same as the face panel), so the
 *  scanner is back at the shared primitive's position. Kept as a named offset in case
 *  the area above the scanner changes again. */
export const FP_SHIFT = 0
export const ScannerWrap = styled(BioScannerRegion)({ top: 107 + FP_SHIFT })

/** Panel-relative top of the scanner and bottom of the finger names (24px text, 36px box). */
export const FP_STAGE_TOP = 107 + FP_SHIFT
export const FP_STAGE_BOTTOM = 456 + FP_SHIFT + 36
/** Space kept clear under the stage: the 68px action bar + 8px air. */
export const FP_STAGE_BOTTOM_RESERVE = 68 + 8

/** Layer holding scanner, finger names and error ellipse at their panel coordinates, so
 *  one transform scales them together from the scanner's top edge on short panels. */
export const FpStage = styled.div({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  transformOrigin: `50% ${107 + FP_SHIFT}px`,
})
export const ScannerImg = BioScannerImage

export const FpTitleSeparator = BioFpTitleSeparator
export const FpResidentInstruction = BioFpResidentHint
export const FpResidentInstructionTranslit = BioFpResidentHintTranslit

export const FingerLabelWrap = styled.div<{ $left: number }>(({ $left }) => ({
  position: 'absolute',
  left: $left,
  top: 456 + FP_SHIFT,
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
  top: 113 + FP_SHIFT,
  width: 192,
  height: 327,
  borderRadius: '50%',
  border: '5px dashed #F44336',
  pointerEvents: 'none',
  zIndex: 1,
}))

export const BottomActionBar = styled(BioFpBottomBar)({
  width: 908,
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

export const FrostedOverlay = BioFrostedOverlayFlex

export const FrostedLabel = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
})

export const FpSymbolImg = BioFpSymbolMuted

export const FacePanel = BioPanel908
export const CamBgWrap = BioFaceCamWrap
export const CamBgImg = BioFaceCamImg
export const CamOverlay = BioFaceCamTint
export const FaceHeaderFade = BioFaceHeaderFade
export const FaceTitleSeparator = BioTitleSeparator
export const FaceHeaderLeft = BioFaceHeaderIcons
export const AngleChip = BioAngleChip
export const AngleDot = BioAngleDotImg
export const AngleIcon = BioAngleIconImg
export const ResidentInstruction = BioResidentHint
export const ResidentInstructionTranslit = BioResidentHintTranslit

export const FaceCircleWrap = BioFaceCircleWrap
export const FaceCircleImg = BioFaceCircleImg

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

export const CaptureBar = BioCaptureBarArea

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

export const CapturedThumb = BioCapturedThumbLarge
export const CapturedThumbImg = BioCapturedThumbImg

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
