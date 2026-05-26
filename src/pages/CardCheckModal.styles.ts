import styled from 'styled-components'

const BF = 'Rubik, sans-serif'

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  background: 'rgba(236, 236, 236, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Panel = styled.div({
  position: 'relative',
  width: 908,
  height: 716,
  background: '#ffffff',
  borderRadius: 16,
  boxShadow: '2px 2px 16px 2px rgba(0,0,0,0.25)',
  overflow: 'hidden',
})

export const PanelHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  height: 68,
  background: 'linear-gradient(180deg, rgba(213,212,213,1) 0%, rgba(213,212,213,0) 100%)',
  borderRadius: '16px 16px 0 0',
})

export const CloseBtn = styled.button({
  width: 24,
  height: 24,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const PanelTitle = styled.span({
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

export const DevBar = styled.div({
  position: 'absolute',
  bottom: 12,
  left: 12,
  display: 'flex',
  gap: 8,
})

export const DevBtn = styled.button<{ $active: boolean; $activeBg: string }>(
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
