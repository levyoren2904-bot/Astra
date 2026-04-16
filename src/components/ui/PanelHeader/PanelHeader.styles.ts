import styled from 'styled-components'

export const HeaderRoot = styled.div({
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  flexShrink: 0,
  width: '100%',
})

export const HeaderTitle = styled.p({
  flex: 1,
  minWidth: 0,
  textAlign: 'right',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#1e1f33',
  margin: 0,
})

export const IconBadge = styled.div({
  background: '#b2b3f7',
  width: 32,
  height: 32,
  padding: 4,
  borderRadius: 8,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
