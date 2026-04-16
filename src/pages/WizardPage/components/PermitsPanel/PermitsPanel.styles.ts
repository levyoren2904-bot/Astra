import styled from 'styled-components'

export const PanelRoot = styled.div({
  border: '1px solid #d7d7da',
})

export const PermitCard = styled.div({
  background: '#f6f6fe',
  minHeight: 140,
})

export const PermitId = styled.p({
  fontSize: 16,
  fontWeight: 400,
  color: '#5d607a',
  textDecoration: 'underline',
  flex: 1,
  minWidth: 0,
  margin: 0,
})

export const PermitType = styled.p({
  fontSize: 20,
  fontWeight: 600,
  color: '#1e1f33',
  whiteSpace: 'nowrap',
  margin: 0,
})

export const PermitDestination = styled.p({
  flex: 1,
  fontSize: 16,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
})

export const PermitValidity = styled.p({
  fontSize: 16,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const PermitIconImg = styled.img({
  width: 24,
  height: 24,
  objectFit: 'contain',
})

export const PermitLabel = styled.span({
  fontWeight: 700,
})
