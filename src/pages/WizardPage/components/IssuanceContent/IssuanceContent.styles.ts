import styled from 'styled-components'

const BF = 'Rubik, sans-serif'

export const IssueRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  gap: 24,
})

export const IssueContentRow = styled.div({
  display: 'flex',
  flex: 1,
  minHeight: 0,
  gap: 10,
})

// ── Scanner panel (left) ───────────────────────────────────────────────────────

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

export const IdleState = styled.div<{ $visible: boolean }>(({ $visible }) => ({
  position: 'absolute',
  left: 306,
  top: 269,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 50,
  visibility: $visible ? 'visible' : 'hidden',
}))

export const BarcodeIcon = styled.img({
  width: 100,
  height: 100,
})

export const IdleText = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const ScanResultState = styled.div({
  position: 'absolute',
  left: 358,
  top: 228,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
})

export const ScanResultTitle = styled.span({
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#242424',
})

export const ScanResultNote = styled.span({
  fontFamily: BF,
  fontSize: 14,
  fontWeight: 400,
  color: '#242424',
})

export const IssuanceDevBar = styled.div({
  position: 'absolute',
  bottom: 12,
  left: 12,
  display: 'flex',
  gap: 8,
})

export const IssuanceDevBtn = styled.button<{ $active: boolean; $activeBg: string }>(
  ({ $active, $activeBg }) => ({
    fontSize: 11,
    padding: '2px 6px',
    background: $active ? $activeBg : '#eee',
    color: $active ? '#fff' : '#333',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
  }),
)

// ── Issued card panel (right) ──────────────────────────────────────────────────

export const IssuedCardPanel = styled.div({
  flex: 1,
  position: 'relative',
  border: '1px solid #BDBDC2',
  borderRadius: 8,
  padding: '16px 16px 84px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  overflow: 'hidden',
})

export const IssuedCardTitle = styled.span({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
})

export const IssuedCardSubtitle = styled.span({
  fontFamily: BF,
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
})

// ── Reprint footer (always visible in issued card panel) ──────────────────────

export const ReprintFooter = styled.div({
  position: 'absolute',
  bottom: -1,
  left: -1,
  right: -1,
  height: 68,
  background: 'linear-gradient(to bottom, rgba(213,212,213,0), #d5d4d5)',
  borderRadius: '0 0 8px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 16px',
})

export const ReprintBtn = styled.button({
  height: 32,
  padding: '0 16px',
  background: '#5c5def',
  color: '#fff',
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  borderRadius: 4,
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.3)',
  whiteSpace: 'nowrap',
})
