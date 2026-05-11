import styled from 'styled-components'
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
