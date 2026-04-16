import styled from 'styled-components'

export const PanelRoot = styled.div({
  border: '1px solid #d7d7da',
})

export const ProhibitionRow = styled.div({
  background: '#f6f6fe',
  height: 78,
  padding: 16,
})

export const ProhibitionType = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 20,
  fontWeight: 600,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
  lineHeight: 1.1,
})

export const ProhibitionDetail = styled.p({
  fontSize: 16,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const ProhibitionDetailHighlight = styled.span({
  color: '#1e1f33',
})

export const ProhibitionDivider = styled.div({
  borderLeft: '1px solid #fbfbfb',
  flexShrink: 0,
})

export const ProhibitionDate = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
  whiteSpace: 'nowrap',
  paddingLeft: 8,
})

export const ProhibitionValidityLabel = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 500,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const CalendarIconImg = styled.img({
  width: 24,
  height: 24,
  objectFit: 'contain',
  flexShrink: 0,
})
