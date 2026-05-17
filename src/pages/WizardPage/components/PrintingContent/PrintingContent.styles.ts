import styled, { keyframes, css } from 'styled-components'

const BF = 'Rubik, sans-serif'

export const PrintRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  gap: 24,
})

export const PrintContentRow = styled.div({
  display: 'flex',
  flex: 1,
  minHeight: 0,
  gap: 10,
})

// ── Scanner panel (left) — same as IssuanceContent ────────────────────────────

export const ScannerPanel = styled.div({
  position: 'relative',
  width: 908,
  flexShrink: 0,
  background: '#fff',
  borderRadius: 16,
  overflow: 'hidden',
})

export const ScannerHeader = styled.div({
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

export const ScannerInstruction = styled.span({
  position: 'relative',
  fontFamily: BF,
  fontSize: 12,
  color: '#242424',
})

export const ScannerPanelTitle = styled.span({
  position: 'relative',
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const ScannerIdleCenter = styled.div({
  position: 'absolute',
  left: 306,
  top: 269,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 50,
})

export const BarcodeIcon = styled.img({
  width: 100,
  height: 100,
})

export const ScannerIdleText = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  whiteSpace: 'nowrap',
})

// ── Printing panel (right) ────────────────────────────────────────────────────

export const PrintingPanel = styled.div({
  flex: 1,
  border: '1px solid #BDBDC2',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  overflow: 'hidden',
})

export const PrintingTitle = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
})

export const PrintingSubtitle = styled.span({
  fontFamily: BF,
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
})

export const ProgressBarsWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 20,
  width: '100%',
  maxWidth: 340,
})

export const ProgressRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  width: '100%',
  justifyContent: 'flex-end',
})

export const ProgressLabel = styled.span({
  fontFamily: BF,
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

export const ProgressTrack = styled.div({
  flex: 1,
  height: 6,
  background: '#e0e0e0',
  borderRadius: 3,
  overflow: 'hidden',
})

const fillBar = keyframes`
  from { width: 0%; }
  to   { width: 100%; }
`

export const ProgressFill = styled.div<{ $duration: number; $delay: number; $running: boolean }>`
  height: 100%;
  background: #5c5def;
  border-radius: 3px;
  ${({ $running, $duration, $delay }) =>
    $running
      ? css`animation: ${fillBar} ${$duration}ms ${$delay}ms linear forwards;`
      : 'width: 0%; animation: none;'}
`
