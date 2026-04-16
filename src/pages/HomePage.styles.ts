import styled from 'styled-components'

export const PageRoot = styled.div({
  height: '100dvh',
})

// ── Dropdown menu ──────────────────────────────────────────────────────────────

export const DropdownMenu = styled.div({
  top: 68,
  background: '#fbfbfb',
  borderRadius: 16,
  boxShadow: '2px 2px 16px 0px rgba(0,0,0,0.25)',
  padding: 24,
  gap: 17,
  width: 279,
})

export const MenuItemBtn = styled.button({
  background: '#f6f6fe',
  borderRadius: 8,
  padding: 8,
  width: 107,
  height: 86,
  gap: 8,
  border: 'none',
  cursor: 'pointer',
})

export const MenuItemTextArea = styled.div({
  flex: 1,
  width: '100%',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: '#1e1f33',
})

export const MenuItemLine = styled.p({
  margin: 0,
  lineHeight: 'normal',
})

// ── Menu icons ─────────────────────────────────────────────────────────────────

export const MenuIconWrap = styled.div({
  width: 24,
  height: 24,
})

export const AcquisitionInnerWrap = styled.div({
  position: 'absolute',
  inset: '8.33% 14.53% 8.33% 14.64%',
})

export const BulkInnerWrap = styled.div({
  position: 'absolute',
  inset: '8.33%',
})

export const BulkInner2 = styled.div({
  position: 'absolute',
  inset: '-3.75%',
})

export const QueriesInnerWrap = styled.div({
  position: 'absolute',
  top: '50%',
  left: '9.79%',
  right: '9.78%',
  transform: 'translateY(-50%)',
  aspectRatio: '1',
})

export const MenuIconImg = styled.img({
  maxWidth: 'none',
})

// ── Logo wordmark ──────────────────────────────────────────────────────────────

export const LogoWordmarkWrap = styled.div({
  lineHeight: 0,
  textAlign: 'center',
})

export const LogoWordmark = styled.p({
  fontFamily: 'Audiowide, sans-serif',
  fontSize: '80px',
  fontStyle: 'normal',
  letterSpacing: '33.6px',
  textTransform: 'uppercase',
  lineHeight: 'normal',
  margin: 0,
  background: 'linear-gradient(236.086deg, rgb(78,80,172) 1.5768%, rgb(126,128,242) 94.516%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

// ── ID input row ───────────────────────────────────────────────────────────────

export const TextField = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: 320,
  height: 40,
  padding: '0 8px',
  background: 'white',
  border: '1px solid #666',
  borderRadius: 4,
  flexShrink: 0,
})

export const IconsGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexShrink: 0,
  marginTop: 4,
})

export const TextFieldSeparator = styled.div({
  alignSelf: 'stretch',
  width: 1,
  background: '#666',
  flexShrink: 0,
  marginLeft: 8,
})

export const TextFieldInput = styled.input({
  flex: '1 0 0',
  minWidth: 0,
  outline: 'none',
  textAlign: 'right',
  background: 'transparent',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  color: '#242424',
  border: 'none',
  padding: 0,
})

export const HandBtn = styled.button({
  width: 40,
  height: 40,
})

export const HandBtnImg = styled.img({
  width: 20,
  height: 20,
})

export const StartBtnArrow = styled.img({
  width: 20,
  height: 17,
  transform: 'rotate(180deg) scaleY(-1)',
})

export const StartBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  whiteSpace: 'nowrap',
  color: 'white',
  fontWeight: 700,
  fontSize: 18,
  lineHeight: 'normal',
})
